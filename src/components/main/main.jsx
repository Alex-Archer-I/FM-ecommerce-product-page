import {useState} from 'react';

import Gallery from './gallery/gallery';
import Info from './info/info';
import Lightbox from './gallery/lightbox';

import product from '../../assets/data/product-data';

const Main = () => {
    const [activeImg, setActiveImg] = useState(0);
    const [activeLightboxImg, setActiveLightboximg] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);

    const thumbnails = product[0].images.thumbnails;
    const pictures = product[0].images.pictures;

    const togglePicture = (index) => {
        setActiveImg(index);
        setActiveLightboximg(index);
    };

    const toggleLightboxPicture = (index) => {
        setActiveLightboximg(index);
    };

    const toggleLightbox = (open) => {
        if (open) {
            setLightboxOpen(true);
        } else {
            setLightboxOpen(false);
        };
    };

    return (
        <main>
            <Gallery 
                thumbnails={thumbnails}
                activePicture={pictures[activeImg].path}
                activeIndex={activeImg}
                thumbnailsClickHandler={togglePicture}
                openLightbox={toggleLightbox}/>
            <Info productInfo={product[0]}/>
            {lightboxOpen ? <Lightbox
                thumbnails={thumbnails}
                activePicture={pictures[activeLightboxImg].path}
                activeIndex={activeLightboxImg}
                thumbnailsClickHandler={toggleLightboxPicture}
                closeLightbox={toggleLightbox}/> : null}
        </main>
    );
};

export default Main;