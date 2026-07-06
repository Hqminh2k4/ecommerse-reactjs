import Button from '@components/Button/Button';
import styles from './styles.module.scss';
import MainLayout from '@components/Layout/Layout';

function Banner() {
    const { container, content, title, des } = styles;
    return (
        //<MainLayout>
        <div className={container}>
            <div className={content}>
                <h1 className={title}>XStore WMH Demo</h1>
                <div className={des}>
                    Make your celebrations even more special with our exclusive
                    collection of festive products!
                </div>
                <Button content={'Go to shop'} />
            </div>
        </div>
        //</MainLayout>
    );
}

export default Banner;
