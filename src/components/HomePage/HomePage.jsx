import MyHeader from '@components/Header/Header';
import Banner from '@components/Banner/Banner';
import styles from './styles.module.scss';
import Info from '@components/info/info';
import AdvanceHeadling from '@components/AdvanceHeadling/AdvanceHeadling';
import HeadlingListProduct from '@components/HeadlingListProduct/HeadlingListProduct';
import { useEffect } from 'react';
import { getProducts } from '@/apis/productsService';
import PopularProduct from '@components/PopularProduct/PopularProduct';
import { useState } from 'react';
import SaleHomepage from '@components/SaleHomepage/SaleHomePage';
import MyFooter from '@components/Footer/Footer';
function HomePage() {
    //const { container } = styles;
    const [listProducts, setListProducts] = useState([]);
    useEffect(() => {
        getProducts().then((res) => {
            setListProducts(res.contents);
        });
    }, []);

    console.log(listProducts, 'ListProduct');
    return (
        <>
            <div>
                <MyHeader />
                <Banner />
                <Info />
                <AdvanceHeadling />
                <HeadlingListProduct data={listProducts.slice(0, 2)} />
                <PopularProduct
                    data={listProducts.slice(2, listProducts.length - 1)}
                />
                <SaleHomepage />
                <MyFooter />
            </div>
        </>
    );
}

export default HomePage;
