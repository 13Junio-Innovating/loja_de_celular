import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';

const SwiperSlider: React.FC = () => {
  return (
    <Swiper
      effect="coverflow"
      grabCursor={true}
      slidesPerView="auto"
      loop={true}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      modules={[Autoplay, Pagination, EffectCoverflow]}
      className="my-10"
    >
      <SwiperSlide
        style={{
          backgroundImage: `url('/images/iphone12pro.jpg')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          width: '300px',
          height: '300px',
          backgroundColor: '#fff',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '20px',
        }}
      >
        {/* <h2 className="text-xl font-semibold">iPhone 12 Pro</h2>
        <p>20% de desconto na manutenção</p> */}
      </SwiperSlide>

      <SwiperSlide
        style={{
          backgroundImage: `url('/images/product1.jpg')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          width: '300px',
          height: '300px',
          backgroundColor: '#fff',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '20px',
        }}
      >
        {/* <h2 className="text-xl font-semibold">Samsung Galaxy</h2>
        <p>15% de desconto na manutenção</p> */}
      </SwiperSlide>
      <SwiperSlide
        style={{
          backgroundImage: `url('/images/product3.jpg')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          width: '300px',
          height: '300px',
          backgroundColor: '#fff',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '20px',
        }}
      >
        {/* <h2 className="text-xl font-semibold">iPhone 12 Pro</h2>
        <p>20% de desconto na manutenção</p> */}
      </SwiperSlide>

      <SwiperSlide
        style={{
          backgroundImage: `url('/images/product7.jpg')`, 
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          width: '300px',
          height: '300px',
          backgroundColor: '#fff',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '20px',
        }}
      >
        {/* <h2 className="text-xl font-semibold">Samsung Galaxy</h2>
        <p>15% de desconto na manutenção</p> */}
      </SwiperSlide>
      <SwiperSlide
        style={{
          backgroundImage: `url('/images/product9.jpg')`, 
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          width: '300px',
          height: '300px',
          backgroundColor: '#fff',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '20px',
        }}
      >
        {/* <h2 className="text-xl font-semibold">iPhone 12 Pro</h2>
        <p>20% de desconto na manutenção</p> */}
      </SwiperSlide>

      <SwiperSlide
        style={{
          backgroundImage: `url('/images/product5.jpg')`, 
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          width: '300px',
          height: '300px',
          backgroundColor: '#fff',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '20px',
        }}
      >
        {/* <h2 className="text-xl font-semibold">Samsung Galaxy</h2>
        <p>15% de desconto na manutenção</p> */}
      </SwiperSlide>
      <SwiperSlide
        style={{
          backgroundImage: `url('/images/product6.jpg')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          width: '300px',
          height: '300px',
          backgroundColor: '#fff',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '20px',
        }}
      >
        {/* <h2 className="text-xl font-semibold">iPhone 12 Pro</h2>
        <p>20% de desconto na manutenção</p> */}
      </SwiperSlide>

      <SwiperSlide
        style={{
          backgroundImage: `url('/images/product11.jpg')`, 
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          width: '300px',
          height: '300px',
          backgroundColor: '#fff',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '20px',
        }}
      >
        {/* <h2 className="text-xl font-semibold">Samsung Galaxy</h2>
        <p>15% de desconto na manutenção</p> */}
      </SwiperSlide>

      {/* Adicione outros slides conforme necessário */}
    </Swiper>
  );
};

export default SwiperSlider;
