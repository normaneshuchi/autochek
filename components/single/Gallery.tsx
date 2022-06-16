import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { CarMediaList } from '../../types/media.type';
import ReactPlayer from 'react-player'

type Props = {
    media: CarMediaList[]
}

function Gallery({ media }: Props) {
    return (
        <Carousel>
            {media.map((item, index) => (
                <div key={index}>
                    {item.type === 'video/mp4' ? <ReactPlayer url={item.url} /> : <img src={item.url} alt={item.name} />}
                </div>
            ))}
            {/* <div>
                <img src="images/si1.jpg" data-imagezoom="true" className="img-fluid" alt="" />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src="images/si1.jpg" data-imagezoom="true" className="img-fluid" alt=""/>
                    <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src="images/si1.jpg" data-imagezoom="true" className="img-fluid" alt=""/>

                    <p className="legend">Legend 3</p>
            </div> */}
        </Carousel>
    )
}

export default Gallery