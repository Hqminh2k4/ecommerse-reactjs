import { useContext } from 'react';
import styles from './styles.module.scss';
import { SideBarContext } from '@/contexts/SideBarProvider';
import classNames from 'classnames';
import { TfiClose } from 'react-icons/tfi';
import Login from '@components/ContentSideBar/Login/Login';
import Compare from '@components/ContentSideBar/Compare/Compare';

function SideBar() {
    const { container, overlay, sideBar, slideSideBar, boxIcon } = styles;
    const { isOpen, setIsOpen, type } = useContext(SideBarContext);
    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    const handleRenderContent = () => {
        switch (type) {
            case 'login':
                return <Login />;
            case 'compare':
                return <Compare />;
            case 'wishlist':
                return 'wishlist content';
            case 'cart':
                return 'cart content';
            default:
                return <Login />;
        }
    };
    return (
        <div className={container}>
            <div
                className={classNames({
                    [overlay]: isOpen
                })}
                onClick={handleToggle}
            ></div>
            <div
                className={classNames(sideBar, {
                    [slideSideBar]: isOpen
                })}
            >
                {isOpen && (
                    <div className={boxIcon} onClick={handleToggle}>
                        <TfiClose />
                    </div>
                )}

                {handleRenderContent()}
            </div>
        </div>
    );
}

/*
function SideBar() {
    const { container, overlay, overlayActive, sideBar, slideSideBar } = styles;
    const { isOpen, setIsOpen } = useContext(SideBarContext);

    return (
        <div className={container}>
            <div
                className={classNames(overlay, {
                    [overlayActive]: isOpen
                })}
                onClick={() => setIsOpen(false)}
            />

            <div
                className={classNames(sideBar, {
                    [slideSideBar]: isOpen
                })}
            >
                sidebar
            </div>
        </div>
    );
}
*/
export default SideBar;
