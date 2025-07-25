import { motion } from 'framer-motion';

const services = [
  {
    title: 'Instalación de Minisplits',
    description: 'Equipos residenciales e industriales con eficiencia energética. Instalación profesional y garantía.',
    image: '/minisplit1.png',
  },
  {
    title: 'Electricidad General',
    description: 'Desde cableado residencial hasta instalaciones industriales completas. Normas de seguridad garantizadas.',
    image: '/electricidad.jpg',
  },
  {
    title: 'Paneles Solares',
    description: 'Soluciones solares para casas y negocios. Ahorro en tu recibo de luz con energía limpia.',
    image: '/panelsolar.jpeg',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ServicesSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-100" id="servicios" >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-12">Nuestros Servicios</h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
