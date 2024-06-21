const GalleryButton = (props) => {
    const imgSrc = `./images/${props.source}`;

    let buttonClasses = `thumbnails_item`;

    if (props.isActive) {
        buttonClasses = `${buttonClasses} thumbnails_item-active`;
    };

    return (
        <li>
            <button className={buttonClasses} onClick={() => {props.thumbnailsClickHandler(props.index)}}>
                <img src={imgSrc} alt="Product thumbnail" className="thumbnails_item_image"/>
            </button>
        </li>
    );
};

export default GalleryButton;