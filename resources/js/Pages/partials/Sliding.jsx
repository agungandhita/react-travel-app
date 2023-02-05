import React from 'react';
import { Carousel } from 'antd';
const contentStyle = {
    height: '100vh',
    width: '100%',
    color: '#fffff',
    lineHeight: '700px',
    textAlign: 'center',
    background: '#FF0000',
  

};
const AboutSlide = () => (
<div className='container'>
  <Carousel autoplay>
        <div>
        <img src='/img/back2.png' style={contentStyle} className="object-cover" />
        </div>
        <div>
        <img src='/img/2.png' style={contentStyle} className="object-cover" />
        </div>
        <div>
        <img src='/img/back3.png' style={contentStyle} className="object-cover" />
        </div>
   
  </Carousel>
    </div>
);
export default AboutSlide;