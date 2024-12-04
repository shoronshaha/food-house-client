import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
const Category = () => {
  return (
    <section>
      <SectionTitle
        subHeading={"From 11.00am to 10.00pm"}
        heading={"Order Online"}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-20"
      >
        <SwiperSlide>
          {" "}
          <img src={slide1} />
          <h3 className="lg:text-4xl md:text-2xl uppercase -mt-16 text-white">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={slide2} />
          <h3 className="lg:text-4xl md:text-2xl uppercase -mt-16 text-white">
            Pizza
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={slide3} />
          <h3 className="lg:text-4xl md:text-2xl uppercase -mt-16 text-white">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={slide4} />
          <h3 className="lg:text-4xl md:text-2xl uppercase -mt-16 text-white">
            DESSERTS
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={slide5} />
          <h3 className="lg:text-4xl md:text-2xl uppercase -mt-16 text-white">
            Salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
