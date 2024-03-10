import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';
import ErrorMessage from '../../Shared/ErrorMessage/ErrorMessage';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import "swiper/css/navigation";
import Review from './Review';
import './Testimonials.css';

const Testimonials = () => {

    const { data: reviews = [], isLoading, error } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/reviews');
            const data = await res.json();
            return data;
        }
    });

    if (isLoading) {
        return <Loading></Loading>
    }

    if (error) {
        return <ErrorMessage message={error.message}></ErrorMessage>
    }

    return (
        <section className='container mb-5'>
            <div className='choose-us-title'>
                <h2>What Our Clients Say</h2>
            </div>
            <div className='testimonials-part'>
                <Swiper
                    style={{
                        "--swiper-navigation-color": "#fff",
                        "--swiper-navigation-size": "16px",
                    }}
                    className="mySwiper"
                    // breakpoints={{
                    //     576: {
                    //         width: 576,
                    //         slidesPerView: 1,
                    //     },
                    //     768: {
                    //         width: 768,
                    //         slidesPerView: 1,
                    //     },
                    //     1140: {
                    //         width: 1140,
                    //         slidesPerView: 1,

                    //     },
                    // }}
                    modules={[A11y, Navigation, Autoplay]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    pagination={{ clickable: true }}
                >
                    <div>
                        {
                            reviews.map(review => <SwiperSlide key={review._id}>
                                <Review review={review}></Review>
                            </SwiperSlide>)
                        }
                    </div>
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;