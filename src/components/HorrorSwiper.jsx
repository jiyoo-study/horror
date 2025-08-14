import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Grid } from "swiper/modules";

import "swiper/css";
import "swiper/css/grid";
import "./HorrorSwiper.css";

export default function HorrorSwiper({ stories = [], onAddToWishlist }) {
  const slides = [...stories];
  while (slides.length % 6 !== 0) {
    slides.push({ title: "", short: "", placeholder: true });
  }

  return (
    <div className="horror-swiper-wrap">
      <Swiper
        modules={[Navigation, Pagination, Grid]}
        pagination={{ clickable: true }}
        spaceBetween={16}
        slidesPerView={3}
        grid={{ rows: 2, fill: "row" }}
      >
        {slides.map((story, idx) => (
          <SwiperSlide key={idx}>
            <div
              className={`horror-card ${
                story.placeholder ? "placeholder" : ""
              }`}
            >
              {!story.placeholder && (
                <>
                  <h3 className="horror-title">{story.title}</h3>
                  <p className="horror-text">{story.short}</p>
                  <button
                    className="horror-button"
                    onClick={() => onAddToWishlist(story)}
                  >
                    담기
                  </button>
                </>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
