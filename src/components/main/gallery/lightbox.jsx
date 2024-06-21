import GalleryThumbnail from './gallery-thumbnail';

import IconNext from '../../svg/icon-next';
import IconPrevious from '../../svg/icon-previous';

const Lightbox = (props) => {
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
        <div className="lightbox">
            <div className="lightbox_top">
                <button className="lightbox_button lightbox_button-navigation lightbox_button-right" onClick={() => {arrowsHandler(false)}}><IconPrevious/></button>
                <img src={imgSrc} alt="" className="lightbox_image"/>
                <button className="lightbox_button lightbox_button-navigation lightbox_button-left" onClick={() => {arrowsHandler(true)}}><IconNext/></button>
                <button className="lightbox_button lightbox_button-close" onClick={() => {props.closeLightbox(false)}}></button>
            </div>
            <ul className="thumbnails thumbnails-lightbox">{content}</ul>
        </div>
    );
};

export default Lightbox;