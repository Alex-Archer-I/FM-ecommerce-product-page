const GalleryButton = (props) => {
    const imgSrc = `./images/${props.source}`;

    let buttonClasses = `gallery_button`;

    if (props.isActive) {
        buttonClasses = `${buttonClasses} gallery_button-active`;
    };

    return (
        <li>
            <button className={buttonClasses} onClick={() => {props.thumbnailsClickHandler(props.index)}}>
                <img src={imgSrc} alt="Product thumbnail" className="gallery_button_image"/>
            </button>
        </li>
    );
};

export default GalleryButton;