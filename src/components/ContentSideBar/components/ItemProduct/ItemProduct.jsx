import styles from './styles.module.scss';
import productImage from '@assets/images/item1.png';
import { IoCloseOutline } from 'react-icons/io5';
function ItemProduct() {
    const { container, boxContent, title, price, boxClose } = styles;
    return (
        <div className={container}>
            <img src={productImage} alt='Product' />
            <div className={boxClose}>
                <IoCloseOutline style={{ fontSize: '25px', color: 'ccc' }} />
            </div>
            <div className={boxContent}>
                <div className={title}>title of product</div>
                <div className={price}>$111.99</div>
            </div>
        </div>
    );
}

export default ItemProduct;
