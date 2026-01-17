import CountdownTimer from '@components/CountdownTimer/CountdownTimer';
import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import CountdownBanner from '@components/CountdownBanner/CountdownBanner';
function HeadlingListProduct() {
    const { container, containerItem } = styles;
    const targetDate = '2027-12-31T00:00:00';
    return (
        <MainLayout>
            {/*<CountdownTimer targetDate={targetDate} />*/}
            <div className={container}>
                <CountdownBanner />
                <div className={containerItem}>
                    <div>1</div>
                    <div>2</div>
                </div>
            </div>
        </MainLayout>
    );
}

export default HeadlingListProduct;
