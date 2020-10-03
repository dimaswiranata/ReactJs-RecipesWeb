import React, { useState } from 'react'
import Rating from '@material-ui/lab/Rating';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation, Pagination} from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Navigation, Pagination]);

function Swipers({data}) {

  const [value, setValue] = useState(4.5);

  const slides = [];

  for (let i=0; i<data.length; i+=1){
    slides.push(
      <SwiperSlide key={`recipes-${i}`}>
        <div className="card card-featured bordered swiper-slide">

          <div>
            <img
              src={data[i].thumbnail}
              className="swiper-thumbnail"
              alt="thumbnail"
            />
          </div>

          <div className="swiper-title">
            <text>
              {data[i].title}
            </text>
          </div>

          <div className="swiper-ingredients">
            <a>
              What you needs ?
            </a>
            <text>
              {data[i].ingredients}
            </text>
          </div>

          <div className="swiper-rating">
            <Rating name="read-only" precision={0.5} value={value} readOnly />
            <div>(4)</div>
          </div>

          <div className="swiper-author">
            <text>
              by <p>Jhon Doe</p>
            </text>
          </div>

          <div className="swiper-link">
            <a href={data[i].href}>VIEW COMPLETE GUIDE</a>
            <div>
              <ArrowRightIcon style={{ color: "#FF6600" , textDecoration: 'underline' }}/>
            </div>
          </div>

        </div>
      </SwiperSlide>
    )
  }

  return (
    <div>
      <Swiper
        effect = 'coverflow'
        grabCursor = {true}
        centeredSlides = {true}
        slidesPerView = {3}
        navigation
        coverflowEffect = {{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination
        className="swiper-container"
      >
        {slides}
      </Swiper>
    </div>
  )
}

export default Swipers
