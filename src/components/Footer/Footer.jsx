import { dataMenu } from '@components/Footer/constant';
import styles from './styles.module.scss';
import Logo1 from '@icons/images/logo1.png';
import PaymentMethods from '../../assets/images/PaymentMethods.png';
function MyFooter() {
    const { container, boxNav } = styles;
    return (
        <div className={container}>
            <div>
                <img src={Logo1} alt='' width={100} height={55} />
            </div>
            <div className={boxNav}>
                {dataMenu.map((item) => (
                    <div>{item.content}</div>
                ))}
            </div>
            <div>
                <p style={{ textAlign: 'center' }}>Guaranteed safe checkout</p>
                <img width={250} src={PaymentMethods} alt='' />
            </div>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                Copyright 2026 HLTCD theme. Created by HLTCD
            </div>
        </div>
    );
}
export default MyFooter;
