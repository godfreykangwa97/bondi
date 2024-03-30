"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {IdData} from "@/shared/IdData";
import Image from "next/image";



const MapItems = IdData.map((item,index)=>{
    return(
        <div className="slide-item" key={index}>
            <Image
                quality={100}
                src={`${item.image}`}
                alt={`${item.title} - ${item.id}`}
                width={100} height={425}
            />
        </div>
    )
})

const CarouselComponentId = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <Slider {...settings}>
            {MapItems}
        </Slider>
    )
}

export default CarouselComponentId;