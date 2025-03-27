import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Hinh1 from "./1.png";
import Hinh2 from "./2.png";
import Hinh3 from "./3.png";
import Hinh4 from "./4.png";
import Hinh5 from "./5.png";
import classes from "./Slider.module.css";

const Slider = () => {
  return (
    <div className={classes.sliderContainer}>
      <Carousel 
        showThumbs={false} 
        infiniteLoop 
        autoPlay 
        interval={2000}  // Tốc độ chuyển đổi giữa các slide (tính bằng ms)
        transitionTime={500}  // Thời gian chuyển đổi giữa các slide (tính bằng ms)
        showArrows={true}
        showStatus={false}
      >
        <div>
          <img src={Hinh1} alt="Slide 1" className={classes.sliderImage} />
        </div>
        <div>
          <img src={Hinh2} alt="Slide 2" className={classes.sliderImage} />
        </div>
        <div>
          <img src={Hinh3} alt="Slide 3" className={classes.sliderImage} />
        </div>
        <div>
          <img src={Hinh4} alt="Slide 4" className={classes.sliderImage} />
        </div>
        <div>
          <img src={Hinh5} alt="Slide 5" className={classes.sliderImage} />
        </div>
      </Carousel>
    </div>
  );
}

export default Slider;
