import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import products from '../data/product.json';

const ProductGallery = () => {
  return (
    <section className="py-20 px-4 bg-white " id="productos">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-10">Galería de Productos</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop={true}
          spaceBetween={40}
          slidesPerView={1}
          className="swiper-container"
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="max-w-xl mx-auto bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-[320px] object-cover rounded-md mb-6"
                />
                <h3 className="text-2xl font-semibold">{product.title}</h3>
                <p className="text-gray-600 mt-2">{product.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProductGallery;
