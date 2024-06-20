import {useState} from 'react';

import Gallery from './gallery/gallery';
import Info from './info/info';

import product from '../../assets/data/product-data';

const Main = () => {
    const [activeImg, setActiveImg] = useState(0);

    const thumbinails = product[0].images.thumbnails;
    const pictures = product[0].images.pictures;

    const togglePicture = (index) => {
        setActiveImg(index);
    };

    return (
        <main>
            <Gallery 
                thumbnails={thumbinails}
                activePicture={pictures[activeImg].path}
                activeIndex={activeImg}
                thumbnailsClickHandler={togglePicture}/>
            <Info productInfo={product[0]}/>
        </main>
    );
};

export default Main;