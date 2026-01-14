import styles from '../styles.module.scss';
//import TruckIcon from '@icons/svgs/truckIcon.svg';
//import CreditCard from '@icons/svgs/creditcardIcon.svg';
//import BoxIcon from '@icons/svgs/boxIcon.svg';
//import ChatIcon from '@icons/svgs/chatIcon.svg';
function InfoCard({ content, description, src }) {
    const { containerCard, containerContent, title, des } = styles;
    return (
        <div className={containerCard}>
            <img width={40} height={41} src={src} alt='TruckIcon' />
            <div className={containerContent}>
                <div className={title}>{content}</div>
                <div className={des}>{description}</div>
            </div>
        </div>
    );
}

export default InfoCard;
