import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import CSS Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Carousel = () => {
  return (
    <div className="w-full h-[400px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="h-full rounded-xl overflow-hidden"
      >
        <SwiperSlide>
          <div className="bg-blue-200 h-full flex items-center justify-center">
            <h2 className="text-2xl font-bold text-blue-800">Promo Hari Ini</h2>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className="bg-blue-300 h-full flex items-center justify-center">
            <h2 className="text-2xl font-bold text-blue-900">Diskon Nasi Goreng</h2>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-blue-400 h-full flex items-center justify-center">
            <h2 className="text-2xl font-bold text-blue-900">Resto mana yang kamu suka?</h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;