import GalleryThumbnail from './gallery-thumbnail';

import IconPrevious from '../../svg/icon-previous';
import IconNext from '../../svg/icon-next';

const Gallery = (props) => {
    const imgSrc = `./images/${props.activePicture}`;

    const content = props.thumbnails.map((item, index) => {
        let isActive = false;

        if (index === props.activeIndex) {
            isActive = true;
        }

        return <GalleryThumbnail 
                    source={item.path} 
                    isActive={isActive}
                    index={index}
                    thumbnailsClickHandler={props.thumbnailsClickHandler}
                    key={item.id}/>;
    });

    const arrowsHandler = (forward) => {
        if (forward) {
            if (props.activeIndex + 1 ===  props.thumbnails.length) {
                props.thumbnailsClickHandler(0);
            } else {
                props.thumbnailsClickHandler(props.activeIndex + 1);
            };
        } else {
            if (props.activeIndex === 0) {
                props.thumbnailsClickHandler(props.thumbnails.length - 1);
            } else {
                props.thumbnailsClickHandler(props.activeIndex - 1);
            };
        };
    };

    return (
        <div className="gallery">
            <button className="gallery_button gallery_button-left" onClick={() => {arrowsHandler(false)}} aria-label="Previous image"><IconPrevious/></button>
            <img src={imgSrc} alt="" className="gallery_img" onClick={() => props.openLightbox(true)}/>
            <button className="gallery_button gallery_button-right" onClick={() => {arrowsHandler(true)}} aria-label="Next image"><IconNext/></button>
            <ul className="thumbnails">
                {content}
            </ul>
        </div>
    );
};

export default Gallery;