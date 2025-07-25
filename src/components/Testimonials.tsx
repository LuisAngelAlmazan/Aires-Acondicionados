import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "María Fernanda Ruiz",
    location: "Xalapa, Veracruz",
    rating: 5,
    image: "https://ui-avatars.com/api/?name=Maria+Fernanda&background=0D8ABC&color=fff",
    comment:
      "Estoy encantada con el servicio. Puntuales, limpios y explicaron todo sobre el funcionamiento del aire. Muy recomendables.",
  },
  {
    name: "José Antonio Pérez",
    location: "Coatepec, Veracruz",
    rating: 4,
    image: "https://ui-avatars.com/api/?name=Jose+Antonio&background=4CAF50&color=fff",
    comment:
      "El minisplit quedó instalado y funcionando perfecto. El trato fue muy amable y me dieron garantía. Volvería a contratarlos.",
  },
  {
    name: "Laura Chávez",
    location: "Banderilla, Veracruz",
    rating: 5,
    image: "https://ui-avatars.com/api/?name=Laura+Chavez&background=E91E63&color=fff",
    comment:
      "Excelente atención al cliente, muy pacientes resolviendo mis dudas y la instalación se hizo en el mismo día.",
  },
  {
    name: "Sergio Ramírez",
    location: "Xalapa, Veracruz",
    rating: 5,
    image: "https://ui-avatars.com/api/?name=Sergio+Ramirez&background=3F51B5&color=fff",
    comment:
      "Me asesoraron sobre la mejor capacidad para mi espacio. Muy profesionales. El clima se siente súper bien.",
  },
  {
    name: "Daniela Méndez",
    location: "Emiliano Zapata, Veracruz",
    rating: 4,
    image: "https://ui-avatars.com/api/?name=Daniela+Mendez&background=FF9800&color=fff",
    comment:
      "Me gustó que fueron rápidos, cuidadosos y dejaron todo funcionando perfectamente. Gracias por el excelente servicio.",
  },
  {
    name: "Rubén Torres",
    location: "Xalapa, Veracruz",
    rating: 5,
    image: "https://ui-avatars.com/api/?name=Ruben+Torres&background=9C27B0&color=fff",
    comment:
      "Todo el proceso fue claro y sin sorpresas. Muy buena relación calidad-precio. Ya se lo recomendé a mi familia.",
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1 mb-2">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={18}
          className={`${
            i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-12" id="testimonios" >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
          Opiniones de nuestros clientes
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md text-left"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.location}</p>
                </div>
              </div>
              <StarRating rating={t.rating} />
              <p className="text-gray-700">"{t.comment}"</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
