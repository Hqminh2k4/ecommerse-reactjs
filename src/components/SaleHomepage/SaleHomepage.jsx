import styles from './styles.module.scss';
import ImgItem1 from '../../assets/images/Item1.png';
import ImgItem2 from '../../assets/images/Item2.png';
import Button from '@components/Button/Button';

import useTranslateXImage from '@/hooks/useTranslateXImage';
function SaleHomepage() {
    const { container, title, des, boxBtn, boxImage } = styles;
    const { translateXPosition } = useTranslateXImage();

    return (
        <div className={container}>
            <div
                className={boxImage}
                style={{
                    transform: `translateX(${translateXPosition}px)`,
                    transition: 'transform 0.7s ease'
                }}
            >
                <img width={400} height={350} src={ImgItem1} alt='' />
            </div>
            <div>
                <h2 className={title}>Sale Of The Year</h2>
                <p className={des}>
                    Libero sed fauibus facilisis termentum, Est nibh sed massa
                    sodales
                </p>
                <div className={boxBtn}>
                    <Button content={'Read more'} isPrimary={false} />
                </div>
            </div>
            <div
                className={boxImage}
                style={{
                    transform: `translateX(-${translateXPosition}px)`,
                    transition: 'transform 0.7s ease'
                }}
            >
                <img width={400} height={350} src={ImgItem2} alt='' />
            </div>
        </div>
    );
}

export default SaleHomepage;
