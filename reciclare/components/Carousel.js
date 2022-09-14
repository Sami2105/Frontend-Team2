import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image';
import logo from '/images/Logo.png';
import carusel1 from '/images/carusel1.jpg';
import carusel2 from '/images/carusel2.png';
import carusel3 from '/images/carusel3.jpg';

export default function CarouselComponent() {
    return (
        <div className="carousel-wrapper" >
            <Carousel >
                <div>
                    <Image alt="Logo" src={carusel1} width={800}
                        height={400} />
                </div>
                <div>
                    <Image alt="Logo" src={carusel2} width={800}
                        height={400} />
                </div>
                <div>
                    <Image alt="Logo" src={carusel3} />
                </div>
            </Carousel>
        </div>
    );
}