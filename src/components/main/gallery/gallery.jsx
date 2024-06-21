import GalleryThumbnail from './gallery-thumbnail';

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

    return (
        <div className="gallery">
            <img src={imgSrc} alt="" className="gallery_img" onClick={() => props.openLightbox(true)}/>
            <ul className="thumbnails">
                {content}
            </ul>
        </div>
    );
};

export default Gallery;