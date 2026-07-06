import BoxIcon from './BoxIcon/BoxIcon';
import { dataBoxIcon, dataMenu } from './constants';
import styles from './styles.module.scss';
import Menu from './Menu/Menu';
import Logo1 from '@icons/images/logo1.png';
import reLoadIcon from '@icons/svgs/reloadIcon.svg';
import heartIcon from '@icons/svgs/heartIcon.svg';
import cartIcon from '@icons/svgs/cartIcon.svg';
import useScrollHandling from '@/hooks/useScrollHandling';
import { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import { SideBarContext } from '@/contexts/SideBarProvider';
function MyHeader() {
    const {
        containerBoxIcon,
        containerMenu,
        containerHeader,
        containerBox,
        container,
        fixedHeader,
        topHeader
    } = styles;
    const { scrollPosition } = useScrollHandling();
    const [fixedPosition, setFixedPosition] = useState(false);
    //console.log(scrollPosition);
    //const { isOpen, setIsOpen } = useContext(SideBarContext);
    //console.log(isOpen);
    const { setIsOpen, setType } = useContext(SideBarContext);

    const handleOpenSideBar = (type) => {
        setIsOpen(true);
        setType(type);
    };
    useEffect(() => {
        /*
        if (scrollPosition > 80) {
            setFixedPosition(true);
        } else {
            setFixedPosition(false);
        }
        */
        /*
        setFixedPosition(scrollPosition > 80 ? true : false);
        */
        setFixedPosition(scrollPosition > 80);
    }, [scrollPosition]);
    return (
        <div
            className={classNames(container, topHeader, {
                [fixedHeader]: fixedPosition
            })}
        >
            <div className={containerHeader}>
                <div className={containerBox}>
                    <div className={containerBoxIcon}>
                        {dataBoxIcon.map((item) => {
                            return (
                                <BoxIcon type={item.type} href={item.href} />
                            );
                        })}
                    </div>
                    <div className={containerMenu}>
                        {dataMenu.slice(0, 3).map((item) => {
                            return (
                                <Menu content={item.content} href={item.href} />
                            );
                        })}
                    </div>
                    <div></div>
                </div>
                <div>
                    <img
                        src={Logo1}
                        alt='Logo1'
                        style={{ width: '100px', height: '90px' }}
                    />
                </div>
                <div className={containerBox}>
                    <div className={containerMenu}>
                        {dataMenu.slice(3, dataMenu.length).map((item) => {
                            return (
                                <Menu
                                    content={item.content}
                                    href={item.href}
                                    setIsOpen={setIsOpen}
                                />
                            );
                        })}
                    </div>
                    <div className={containerBoxIcon}>
                        <img
                            width={23}
                            height={23}
                            src={reLoadIcon}
                            alt='Reload'
                            onClick={() => handleOpenSideBar('compare')}
                        />
                        <img
                            width={26}
                            height={26}
                            src={heartIcon}
                            alt='Heart'
                            onClick={() => handleOpenSideBar('wishlist')}
                        />
                        <img
                            width={27}
                            height={27}
                            src={cartIcon}
                            alt='Cart'
                            onClick={() => handleOpenSideBar('cart')}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyHeader;
