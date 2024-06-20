import productData from '../../../assets/data/product-data';
import InfoCart from './info-cart';

const Info = ({productInfo}) => {
    let saleValue = '';
    let saleOldPrice = '';

    let saleValueClasses = `info_sale_value`;
    let saleOldPriceClasses = `info_old_price`;

    if (productInfo.sale) {
        saleValue = productInfo.sale.value;
        saleOldPrice = productInfo.sale.oldPrice;
    } else {
        saleValueClasses = `${saleValueClasses} hidden`;
        saleOldPriceClasses = `${saleOldPriceClasses} hidden`;
    };

    return (
        <div className="info">
            <p className="info_category">{productInfo.category}</p>
            <h1 className="info_title">{productInfo.title}</h1>
            <p className="info_description">{productInfo.description}</p>
            <p><span className="info_price">{productInfo.price}</span> <span className={saleValueClasses}>{productInfo.sale.value}</span></p>
            <p className={saleOldPriceClasses}>{productInfo.sale.oldPrice}</p>
            <InfoCart productId={productInfo.id}/>
        </div>
    );
};

export default Info;