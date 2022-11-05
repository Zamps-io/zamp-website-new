// import { Swiper, SwiperSlide } from "swiper/react"

// // Import Swiper styles
// import "swiper/css"

// import "swiper/css/navigation";
// // import required modules
// import { Navigation, Pagination } from "swiper"

// import React from "react"

// const SwiperSlider = () => {
//     return (
//         <div>
//             <Swiper
//                navigation={true}
//                 modules={[Navigation]}
               
                
//             >
                // <div>
                //     <SwiperSlide>
                //         <img src="/one.png" alt="Home" className="swip" />
                //     </SwiperSlide>
                // </div>
                // <SwiperSlide>
                //     <img src="/three.png" alt="Home" className="swip" />
                // </SwiperSlide>
                // <SwiperSlide>
                //     <img src="/nine.png" alt="Home" className="swip" />
                // </SwiperSlide>
                // <SwiperSlide>
                //     <img src="/two.png" alt="Home" className="swip" />
                // </SwiperSlide>
                // <SwiperSlide>
                //     <img src="/eight.png" alt="Home" className="swip" />
                // </SwiperSlide>
                // <SwiperSlide>
                //     <img src="/five.png" alt="Home" className="swip" />
                // </SwiperSlide>
                // <SwiperSlide>
                //     <img src="/seven.png" alt="Home" className="swip" />
                // </SwiperSlide>
                // <SwiperSlide>
                //     <img src="/six.png" alt="Home" className="swip" />
                // </SwiperSlide>
                // <SwiperSlide>
                //     <img src="/ten.png" alt="Home" className="swip" />
                // </SwiperSlide>
                // <SwiperSlide>
                //     <img src="/four.png" alt="Home" className="swip" />
                // </SwiperSlide>
//             </Swiper>
//         </div>
//     )
// }

// export default SwiperSlider
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

//import "./styles.css";

// import required modules
import { Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <div>
                    <SwiperSlide>
                        <img src="/one.png" alt="Home" className="swip" />
                    </SwiperSlide>
                </div>
                <SwiperSlide>
                    <img src="/three.png" alt="Home" className="swip" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/nine.png" alt="Home" className="swip" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/two.png" alt="Home" className="swip" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/eight.png" alt="Home" className="swip" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/five.png" alt="Home" className="swip" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/seven.png" alt="Home" className="swip" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/six.png" alt="Home" className="swip" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/ten.png" alt="Home" className="swip" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/four.png" alt="Home" className="swip" />
                </SwiperSlide>
      </Swiper>
    </>
  );
}
