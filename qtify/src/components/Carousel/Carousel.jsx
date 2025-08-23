import React, { useMemo } from "react";
import styles from "./Carousel.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import LeftNavButton from "./LeftNavButton";
import RightNavButton from "./RightNavButton";

/**
 * Reusable Carousel:
 * - items: array of data
 * - renderItem: (item) => JSX (e.g., <Card .../>). Allows swapping to any content later.
 * - navId: unique id base to bind custom nav buttons
 * - breakpoints: optional Swiper breakpoints override
 */
const Carousel = ({ items = [], renderItem, navId, breakpoints }) => {
  const prevId = `${navId}-prev`;
  const nextId = `${navId}-next`;

  const effectiveBreakpoints = useMemo(
    () =>
      breakpoints || {
        0:   { slidesPerView: 2, spaceBetween: 12 },
        480: { slidesPerView: 3, spaceBetween: 14 },
        768: { slidesPerView: 4, spaceBetween: 16 },
        1024:{ slidesPerView: 6, spaceBetween: 16 },
        1280:{ slidesPerView: 7, spaceBetween: 18 }
      },
    [breakpoints]
  );

 return (
  <div className={styles.wrapper}>
    <Swiper
      modules={[Navigation]}
      navigation={{
        prevEl: `#${prevId}`,
        nextEl: `#${nextId}`,
      }}
      breakpoints={effectiveBreakpoints}
    >
      {items.map((item, idx) => (
        <SwiperSlide key={item.id || idx} className={styles.slide}>
          {renderItem ? renderItem(item) : null}
        </SwiperSlide>
      ))}

      {/* Navigation buttons INSIDE Swiper */}
      <LeftNavButton id={prevId} />
      <RightNavButton id={nextId} />
    </Swiper>
  </div>
);
};

export default Carousel;
