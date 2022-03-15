import React from "react";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./App.css";
import pic1 from "../../assets/placement.png";
import pic2 from "../../assets/students.png";
import pic3 from "../../assets/enrollment.png";
import pic4 from "../../assets/intake.png";

SwiperCore.use([EffectCoverflow, Pagination]);

export default function Dashboard() {
	return (
		<div>
			<h1>Dashboard Landing page</h1>
			<Swiper
				effect={"coverflow"}
				grabCursor={true}
				centeredSlides={true}
				slidesPerView={"auto"}
				loop={"true"}
				coverflowEffect={{
					rotate: 50,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows: false,
				}}
				pagination={true}
				className="mySwiper">
				<SwiperSlide>
					<img src={pic1} alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={pic2} alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={pic3} alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={pic4} alt="" />
				</SwiperSlide>
			</Swiper>
		</div>
	);
}
