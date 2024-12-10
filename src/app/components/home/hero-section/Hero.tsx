"use client";
import "swiper/css";
import "swiper/css/navigation";

import { FC, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation } from "swiper/modules";
import { cardItems } from "./constants";
import styles from "./Hero.module.scss";
import HeroItemCard from "./ui/hero-item-card";

const Hero: FC = () => {
  const swiperRef = useRef<any>(null);

  return (
    <section className={styles.heroSection}>
      <h1 className={styles.title}>Виготовлення меблів </h1>
      <h2 className={styles.subtitle}>За індивідуальними потребами</h2>
      <span className={styles.text}>
        Використовуємо лише якісні матеріали, забезпечуємо
        <br />
        персональний підхід і створюємо унікальні дизайни
      </span>
      <div className={styles.swiperContainer}>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className={styles.prevBtn}
        >
          <img
            src="/icons/hero/arrow.svg"
            alt="arrow"
            className={styles.arrowPrev}
          />
        </button>
        <Swiper
          loop={true}
          modules={[Navigation, A11y]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              centeredSlides: true,
            },

            480: {
              slidesPerView: 2,
            },

            768: {
              slidesPerView: 2,
            },

            1024: {
              slidesPerView: 3,
            },

            1440: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          className={styles.swiper}
        >
          {cardItems.map((item) => (
            <SwiperSlide key={item.text} className={styles.slide}>
              <HeroItemCard text={item.text} Icon={item.Icon} />
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className={styles.nextBtn}
        >
          <img
            src="/icons/hero/arrow.svg"
            alt="arrow"
            className={styles.arrowNext}
          />
        </button>
      </div>
    </section>
  );
};

export default Hero;
