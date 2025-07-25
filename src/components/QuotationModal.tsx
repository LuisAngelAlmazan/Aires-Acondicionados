import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface QuotationModalProps {
  onClose: () => void;
}

const QuotationModal = ({ onClose }: QuotationModalProps) => {
  const [jobType, setJobType] = useState("aires"); // Por defecto "aires"
  const [serviceType, setServiceType] = useState("");
  const [capacity, setCapacity] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");

  // Estado para errores
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Cambiar selects dependientes si cambia el tipo de trabajo
  useEffect(() => {
    if (jobType !== "aires") {
      setServiceType("");
      setCapacity("");
    }
  }, [jobType]);

  // Validar campos
  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!name.trim()) {
      newErrors.name = "El nombre es obligatorio";
    } else if (name.trim().length < 3) {
      newErrors.name = "El nombre debe tener al menos 3 caracteres";
    }

    if (!location.trim()) {
      newErrors.location = "La ubicación es obligatoria";
    } else if (location.trim().length < 3) {
      newErrors.location = "La ubicación debe tener al menos 3 caracteres";
    }

    if (!phone.trim()) {
      newErrors.phone = "El teléfono es obligatorio";
    } else if (!/^\d{10,}$/.test(phone.trim())) {
      newErrors.phone = "El teléfono debe tener al menos 10 dígitos numéricos";
    }

    if (!jobType) {
      newErrors.jobType = "Selecciona un tipo de trabajo";
    }

    if (jobType === "aires") {
      if (!serviceType) {
        newErrors.serviceType = "Selecciona un tipo de servicio";
      }
      if (!capacity) {
        newErrors.capacity = "Selecciona la capacidad";
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    let message = `Hola, quiero solicitar una cotización:\n`;
    message += `Nombre: ${name}\n`;
    message += `Teléfono: ${phone}\n`;
    message += `Ubicación: ${location}\n`;
    message += `Tipo de trabajo: ${jobType}\n`;

    if (jobType === "aires") {
      message += `Servicio: ${serviceType}\n`;
      message += `Capacidad: ${capacity} BTU\n`;
    }

    const encodedMessage = encodeURIComponent(message);
    // Cambia el número por el tuyo (sin signos ni espacios)
    const phoneNumber = "5212281234567";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
    onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-lg max-w-lg w-full p-6 relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 font-bold text-xl"
            aria-label="Cerrar modal"
          >
            &times;
          </button>

          <h2 className="text-2xl font-bold mb-6 text-center">
            Solicita tu cotización
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Tipo de trabajo */}
            <div>
              <label htmlFor="jobType" className="block font-semibold mb-1">
                Tipo de trabajo
              </label>
              <select
                id="jobType"
                value={jobType}
                onChange={(e) => setJobType(e.target.value)}
                className={`w-full border rounded px-3 py-2 ${
                  errors.jobType ? "border-red-500" : "border-gray-300"
                }`}
              >
                <option value="">Selecciona una opción</option>
                <option value="electricidad">Electricidad</option>
                <option value="aires">Aires acondicionados</option>
                <option value="paneles">Paneles solares</option>
              </select>
              {errors.jobType && (
                <p className="text-red-600 text-sm mt-1">{errors.jobType}</p>
              )}
            </div>

            {/* Opciones para Aires */}
            {jobType === "aires" && (
              <>
                <div>
                  <label
                    htmlFor="serviceType"
                    className="block font-semibold mb-1"
                  >
                    Tipo de servicio
                  </label>
                  <select
                    id="serviceType"
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className={`w-full border rounded px-3 py-2 ${
                      errors.serviceType ? "border-red-500" : "border-gray-300"
                    }`}
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="mantenimiento">Mantenimiento</option>
                    <option value="instalacion">Instalación</option>
                  </select>
                  {errors.serviceType && (
                    <p className="text-red-600 text-sm mt-1">{errors.serviceType}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="capacity" className="block font-semibold mb-1">
                    Capacidad / Marca
                  </label>
                  <select
                    id="capacity"
                    value={capacity}
                    onChange={(e) => setCapacity(e.target.value)}
                    className={`w-full border rounded px-3 py-2 ${
                      errors.capacity ? "border-red-500" : "border-gray-300"
                    }`}
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="12000">12,000 BTU (16 a 25 m²)</option>
                    <option value="18000">18,000 BTU (26 a 35 m²)</option>
                    <option value="24000">24,000 BTU (36 a 50 m²)</option>
                    <option value="30000">30,000 BTU (51 a 70 m²)</option>
                  </select>
                  {errors.capacity && (
                    <p className="text-red-600 text-sm mt-1">{errors.capacity}</p>
                  )}
                </div>
              </>
            )}

            {/* Nombre */}
            <div>
              <label htmlFor="name" className="block font-semibold mb-1">
                Nombre completo
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`w-full border rounded px-3 py-2 ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Tu nombre"
              />
              {errors.name && (
                <p className="text-red-600 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Teléfono */}
            <div>
              <label htmlFor="phone" className="block font-semibold mb-1">
                Teléfono
              </label>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={`w-full border rounded px-3 py-2 ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Ej. 2281234567"
              />
              {errors.phone && (
                <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Ubicación */}
            <div>
              <label htmlFor="location" className="block font-semibold mb-1">
                Ubicación
              </label>
              <input
                id="location"
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className={`w-full border rounded px-3 py-2 ${
                  errors.location ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Tu ciudad o municipio"
              />
              {errors.location && (
                <p className="text-red-600 text-sm mt-1">{errors.location}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded transition"
            >
              Enviar solicitud
            </button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default QuotationModal;
