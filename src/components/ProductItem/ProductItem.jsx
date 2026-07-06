import ImgItem1 from '../../assets/images/Item1.png';
import ImgItem2 from '../../assets/images/Item2.png';
import reLoadIcon from '@icons/svgs/reloadIcon.svg';
import heartIcon from '@icons/svgs/heartIcon.svg';
import cartIcon from '@icons/svgs/cartIcon.svg';
import styles from './styles.module.scss';
function ProductItem({ src, prevSrc, name, price }) {
    const {
        boxImg,
        showImgWhenHover,
        showFncWhenHover,
        boxIcon,
        title,
        priceCl
    } = styles;
    return (
        <div>
            <div className={boxImg}>
                <img src={src} alt='' />
                <img className={showImgWhenHover} src={prevSrc} alt='' />
                <div className={showFncWhenHover}>
                    <div className={boxIcon}>
                        <img src={cartIcon} alt='' />
                    </div>
                    <div className={boxIcon}>
                        <img src={heartIcon} alt='' />
                    </div>
                    <div className={boxIcon}>
                        <img src={reLoadIcon} alt='' />
                    </div>
                    <div className={boxIcon}>
                        <img src={cartIcon} alt='' />
                    </div>
                </div>
            </div>
            <div className={title}>{name}</div>
            <div className={priceCl}>${price}</div>
        </div>
    );
}

export default ProductItem;
