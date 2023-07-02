import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import "swiper/css/navigation";
import 'swiper/css/pagination';
import banner1 from '../../../assets/images/01.jpg';
import banner2 from '../../../assets/images/02.jpg';
import banner3 from '../../../assets/images/03.png';
import banner4 from '../../../assets/images/04.jpg';
import banner5 from '../../../assets/images/05.png';
import banner6 from '../../../assets/images/06.png';
import './Banner.css';

const Banner = () => {

    const bannerImages = [
        {
            id: 1,
            img: banner1
        },
        {
            id: 2,
            img: banner2
        },
        {
            id: 3,
            img: banner3
        },
        {
            id: 4,
            img: banner4
        },
        {
            id: 5,
            img: banner5
        },
        {
            id: 6,
            img: banner6
        },
    ];

    return (
        <div className='container'>
            <Swiper
                style={{
                    "--swiper-pagination-color": "#f91944",
                    "--swiper-pagination-bullet-inactive-color": "#999999",
                    "--swiper-pagination-bullet-inactive-opacity": "1",
                    "--swiper-pagination-bullet-size": "12px",
                    "--swiper-pagination-bullet-horizontal-gap": "3px",

                    "--swiper-navigation-color": "#fff",
                    "--swiper-navigation-size": "18px",
                }}
                className="mySwiper"
                modules={[A11y, Pagination, Navigation, Autoplay]}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                pagination={{ clickable: true }}
            >
                {
                    bannerImages.map(bannerImage => <SwiperSlide>
                        <img src={bannerImage.img} alt="Banner" className='w-100 rounded' />
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Banner;