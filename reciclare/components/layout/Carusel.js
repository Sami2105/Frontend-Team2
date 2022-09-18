import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image';
import logo from '/images/Logo.png';


export default function CarouselComponent() {
    return (
        <div className="carousel-wrapper" >
            <Carousel >
                <div>
                    <Image alt="Logo" src={logo} width={800}
                        height={400} />
                </div>
                <div>
                    <Image alt="Logo" src={logo} width={800}
                        height={400} />
                </div>
                <div>
                    <Image alt="Logo" src={logo} />
                </div>
            </Carousel>
        </div>
    );
}