"use client"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { createContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Services() {

    const data = [
        { id: '1', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjVTClEv7YdUx6aS44wlk7l_Ip3TD0mXR_ZA&s' }
        
    ];

    return (
        <section className="w-full md:h-[900px] bg-[#ece1cdff] flex justify-between pt-[150px]">
            <div className="flex justify-center items-start">
                <h1 className="md:text-[35px]">
                    DESCUBRA NOSSOS SERVIÇOS
                </h1>
            </div>
            <Swiper
                slidesPerView={3}
                pagination={{ clickable: true }}
                navigation
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <img 
                            src={item.image}
                            alt="Slider"
                            className='slide-item' 
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
