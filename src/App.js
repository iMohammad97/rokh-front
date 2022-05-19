import React from "react";
import Styles from './App.css';
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Autoplay} from 'swiper';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import {Navigation, Pagination, Mousewheel, Keyboard} from "swiper";


function App() {
    const [catModal, setCatModal] = React.useState(false);
    const [activeMenu, setActiveMenu] = React.useState(null);
    const [activeMenuCat, setActiveMenuCat] = React.useState(1);
    const [lastActiveMenuCat, setLastActiveMenuCat] = React.useState(1);
    const images = [
        "assets/images/slide_5.jpg",
        "assets/images/slide_6.jpg",
        "assets/images/slide_7.jpg"
    ];

    const fadeProperties = {
        duration: 3000,
        canSwipe: false,
    };

    React.useEffect(() => {
        document.title = "Rokhshop | رخشاپ";
    }, []);
    SwiperCore.use([Autoplay])

    function onMouseEnterMenus(menu) {
        setActiveMenu(menu);
    }

    function onMouseLeaveMenus() {
        setActiveMenu(null);
    }

    function onMouseEnterCategories() {
        setActiveMenu(1);
        setCatModal(true);
    }

    function onMouseLeaveCategories() {
        setCatModal(false);
        setActiveMenu(null);
    }

    function onMouseEnterCategory(cat) {
        setActiveMenuCat(cat);
        setLastActiveMenuCat(cat);
    }

    function onMouseLeaveCategory() {
        setActiveMenuCat(null);
        setLastActiveMenuCat(null);

    }

    function onMouseEnterCategoryPane() {
        setActiveMenuCat(lastActiveMenuCat);
        // setLastActiveMenuCat(cat);
    }

    function onMouseLeaveCategoryPane() {
        setActiveMenuCat(null);
        setLastActiveMenuCat(null);
    }

    return (
        <div className={"main"}>
            <div style={styles.header}>
                <div style={styles.firstRow}>
                    <div style={styles.RightColumn}>
                        <div>
                            <img src={require("./static/images/logo.png")}
                                 alt='logo'
                                 style={styles.logo}/>
                        </div>
                        <div style={styles.searchBarContainer}>
                            <img src={require("./static/images/ic_search.png")}
                                 alt='cart'
                                 style={styles.searchIc}/>
                            <p style={styles.searchBarPlaceholder}>
                                نام محصول یا دسته مورد نظر را تایپ کنید
                            </p>
                            {/*<input*/}
                            {/*    style={styles.searchBar}*/}
                            {/*    // onChange={event => setUsername(event.target.value)}*/}
                            {/*    placeholder="Input username"*/}
                            {/*/>*/}

                        </div>
                    </div>

                    <div>
                        <a
                            style={styles.cartContainer}>
                            <img src={require("./static/images/ic_bag.png")}
                                 alt='cart'
                                 style={styles.cartIc}/>
                        </a>
                        <a>
                            <img src={require("./static/images/ic_user.png")}
                                 alt='cart'
                                 style={styles.userIc}/>
                        </a>
                    </div>
                </div>
                <div style={styles.secondRow}>
                    <ul style={{
                        height: 30,
                    }}>
                        <li className={`activeMenu ${activeMenu === 1 ? "activeMenuActive" : ""}`}
                            onMouseEnter={() => onMouseEnterCategories()}
                            onMouseLeave={() => onMouseLeaveCategories(false)}>
                            <a
                                className={`menuButtonActive category-label-menu ${activeMenu === 1 ? "menuButtonActiveActive" : ""}`}>
                                دسته‌بندی محصولات
                            </a>
                            {catModal && <div className="overlayMenu"
                                              onMouseEnter={() => onMouseEnterCategories()}
                                              onMouseLeave={() => onMouseLeaveCategories()}>
                                <div className="leftCol"
                                     onMouseEnter={() => onMouseEnterCategoryPane(activeMenuCat)}
                                     onMouseLeave={() => onMouseLeaveCategoryPane()}>
                                    <div className={"category-label-container"}>
                                        <a className={"category-label"}>
                                            آرایشی
                                        </a>
                                    </div>
                                    <div className={"category-label-container"}>
                                        <a className={"category-label"}>
                                            آرایشی
                                        </a>
                                    </div>
                                    <div className={"category-label-container"}>
                                        <a className={"category-label"}>
                                            آرایشی
                                        </a>
                                    </div>
                                    <div className={"category-label-container"}>
                                        <a className={"category-label"}>
                                            آرایشی
                                        </a>
                                    </div>
                                    <div className={"category-label-container"}>
                                        <a className={"category-label"}>
                                            آرایشی
                                        </a>
                                    </div>
                                    <div className={"category-label-container"}>
                                        <a className={"category-label"}>
                                            آرایشی
                                        </a>
                                    </div>
                                    <div className={"category-label-container"}>
                                        <a className={"category-label"}>
                                            آرایشی
                                        </a>
                                    </div>
                                    <div className={"category-label-container"}>
                                        <a className={"category-label"}>
                                            آرایشی
                                        </a>
                                    </div>
                                    <div className={"category-label-container"}>
                                        <a className={"category-label"}>
                                            آرایشی
                                        </a>
                                    </div>
                                    <div className={"category-label-container"}>
                                        <a className={"category-label"}>
                                            آرایشی
                                        </a>
                                    </div>
                                    <div className={"category-label-container"}>
                                        <a className={"category-label"}>
                                            آرایشی
                                        </a>
                                    </div>
                                    <div className={"category-label-container"}>
                                        <a className={"category-label"}>
                                            آرایشی
                                        </a>
                                    </div>
                                    <div className={"category-label-container"}>
                                        <a className={"category-label"}>
                                            آرایشی
                                        </a>
                                    </div>
                                    <div className={"category-label-container"}>
                                        <a className={"category-label"}>
                                            آرایشی
                                        </a>
                                    </div>


                                </div>
                                <div className="rightCol">
                                    <ul className="rightColUl">
                                        <li className={`rightColLi ${activeMenuCat === 1 ? "rightColLiActive" : ""}`}
                                            onMouseEnter={() => onMouseEnterCategory(1)}
                                            onMouseLeave={() => onMouseLeaveCategory()}>
                                            <a
                                                className="catListItem">
                                                لوازم آرایشی
                                            </a>
                                            <img className={"cat-icon"} src={require("./static/images/ic_makeup.png")}
                                                 alt='makeup'/>
                                        </li>
                                        <li className={`rightColLi ${activeMenuCat === 2 ? "rightColLiActive" : ""}`}
                                            onMouseEnter={() => onMouseEnterCategory(2)}
                                            onMouseLeave={() => onMouseLeaveCategory()}>
                                            <a
                                                className="catListItem">
                                                مراقبت مو
                                            </a>
                                            <img className={"cat-icon"} src={require("./static/images/ic_hair.png")}
                                                 alt='makeup'/>
                                        </li>
                                        <li className={`rightColLi ${activeMenuCat === 3 ? "rightColLiActive" : ""}`}
                                            onMouseEnter={() => onMouseEnterCategory(3)}
                                            onMouseLeave={() => onMouseLeaveCategory()}>
                                            <a
                                                className="catListItem">
                                                مراقبت پوست
                                            </a>
                                            <img className={"cat-icon"} src={require("./static/images/ic_skin.png")}
                                                 alt='makeup'/>
                                        </li>
                                        <li className={`rightColLi ${activeMenuCat === 4 ? "rightColLiActive" : ""}`}
                                            onMouseEnter={() => onMouseEnterCategory(4)}
                                            onMouseLeave={() => onMouseLeaveCategory()}>
                                            <a
                                                className="catListItem">
                                                لوازم بهداشتی
                                            </a>
                                            <img className={"cat-icon"} src={require("./static/images/ic_care.png")}
                                                 alt='makeup'/>
                                        </li>

                                    </ul>

                                </div>
                            </div>}
                        </li>
                        <span className="menu-separator">

                        </span>
                        <li className={`activeMenu ${activeMenu === 2 ? "activeMenuActive" : ""}`}
                            onMouseEnter={() => onMouseEnterMenus(2)}
                            onMouseLeave={() => onMouseLeaveMenus()}>
                            <a
                                className={`menuButtonActive ${activeMenu === 2 ? "menuButtonActiveActive" : ""}`}>
                                آرایش و مراقبت مو
                            </a>
                        </li>
                        <li className={`activeMenu ${activeMenu === 3 ? "activeMenuActive" : ""}`}
                            onMouseEnter={() => onMouseEnterMenus(3)}
                            onMouseLeave={() => onMouseLeaveMenus()}>
                            <a
                                className={`menuButtonActive ${activeMenu === 3 ? "menuButtonActiveActive" : ""}`}>
                                مراقبت از پوست
                            </a>
                        </li>
                        <li className={`activeMenu ${activeMenu === 4 ? "activeMenuActive" : ""}`}
                            onMouseEnter={() => onMouseEnterMenus(4)}
                            onMouseLeave={() => onMouseLeaveMenus()}>
                            <a
                                className={`menuButtonActive ${activeMenu === 4 ? "menuButtonActiveActive" : ""}`}>
                                لوازم بهداشتی
                            </a>
                        </li>
                        <li className={`activeMenu ${activeMenu === 5 ? "activeMenuActive" : ""}`}
                            onMouseEnter={() => onMouseEnterMenus(5)}
                            onMouseLeave={() => onMouseLeaveMenus()}>
                            <a
                                className={`menuButtonActive ${activeMenu === 5 ? "menuButtonActiveActive" : ""}`}>
                                بهداشت شخصی
                            </a>
                        </li>
                    </ul>

                </div>
            </div>
            <div className={"slider-row-container"}>
                <div className={"slider-row"}>
                    {/*<div className={"slider-side-column"}>*/}
                    {/*    <div className={"slider-side-column-container"}>*/}

                    {/*    </div>*/}
                    {/*    <div className={"slider-side-column-container"}>*/}

                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className={"slider-container"}>
                        <Swiper
                            dir="rtl"
                            cssMode={true}
                            navigation={false}
                            // pagination={true}
                            // mousewheel={true}
                            autoplay={true}
                            keyboard={false}
                            // loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                            className="mySwiper swiper-css-custom"
                        >
                            <SwiperSlide>
                                <img className={"banner-img"} src={require("./static/images/banners/banner1.png")}
                                     alt='banner'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className={"banner-img"} src={require("./static/images/banners/banner2.png")}
                                     alt='banner'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className={"banner-img"} src={require("./static/images/banners/banner3.png")}
                                     alt='banner'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className={"banner-img"} src={require("./static/images/banners/banner4.png")}
                                     alt='banner'/>
                            </SwiperSlide>
                        </Swiper>
                    </div>

                </div>
            </div>
            <div className={"off-row-container"}>
                <div className={"off-row"}>
                    <div className={"off-intro-card-container"}>
                        <img src={require('./static/images/ic_off_white.png')}
                             alt={'product'}
                             className={'off-intro-card-image'}/>
                            <img src={require('./static/images/ic_off_vector.png')}
                                 alt={'product'}
                                 className={'off-intro-card-image-vector'}/>
                    </div>
                    <a className={"off-card-container"}>
                        <img src={require('./static/images/products/product1.jpg')}
                             alt={'product'}
                             className={'product-card-image'}/>
                        <div className={'add-to-basket-row'}>

                            {/* Starts */}
                            <div className={'stars-container'}>
                                <img src={require('./static/images/ic_star.png')}
                                     alt={'add to basket'}
                                     className={'stars-image'}/>
                                <p className={'stars-label'}>
                                    ۴.۰
                                </p>

                            </div>

                            <a className={'add-to-basket-container'}>
                                <img src={require('./static/images/ic_plus.png')}
                                     alt={'add to basket'}
                                     className={'add-to-basket-image'}/>
                            </a>
                        </div>
                        <div className={'title-row'}>
                            <p className={'title-row-title'}>
                                محلول تقویت کننده مژه سریتا مدل Eyelash حجم 7 میلی لیتر محلول تقویت کننده مژه سریتا مدل
                                Eyelash حجم 7 میلی لیترمحلول تقویت کننده مژه سریتا مدل Eyelash حجم 7 میلی لیتر محلول
                                تقویت کننده مژه سریتا مدل
                                Eyelash حجم 7 میلی لیترمحلول تقویت کننده مژه سریتا مدل Eyelash حجم 7 میلی لیتر محلول
                                تقویت کننده مژه سریتا مدل
                                Eyelash حجم 7 میلی لیتر
                            </p>
                        </div>
                        <div className={'price-row'}>
                            <div className={'price-row-price'}>
                                <img src={require('./static/images/ic_toman.png')}
                                     alt={'toman'}
                                     className={'price-row-price-label'}/>
                                <p className={'price-row-price-title'}>
                                    ۳،۵۰۰،۰۰۰
                                </p>
                            </div>
                            <div className={'price-row-off'}>
                                <div className={'price-row-off-container'}>
                                    <p className={'price-row-off-title'}>
                                        ۱۲%
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={'price-row'}>
                            <div className={'price-row-price'}>
                                <img src={require('./static/images/ic_toman.png')}
                                     alt={'toman'}
                                     className={'price-row-price-label opacity-zero'}/>
                                <p className={'price-row-oldprice-title'}>
                                    ۴،۰۰۰،۰۰۰
                                </p>
                            </div>
                            <div className={'price-row-off opacity-zero'}>
                                <div className={'price-row-off-container'}>
                                    <p className={'price-row-off-title'}>
                                        ۱۲%
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a className={"off-card-container"}>
                        <img src={require('./static/images/products/product2.jpg')}
                             alt={'product'}
                             className={'product-card-image'}/>
                        <div className={'add-to-basket-row'}>

                            {/* Starts */}
                            <div className={'stars-container'}>
                                <img src={require('./static/images/ic_star.png')}
                                     alt={'add to basket'}
                                     className={'stars-image'}/>
                                <p className={'stars-label'}>
                                    ۴.۰
                                </p>

                            </div>

                            <a className={'add-to-basket-container'}>
                                <img src={require('./static/images/ic_plus.png')}
                                     alt={'add to basket'}
                                     className={'add-to-basket-image'}/>
                            </a>
                        </div>
                        <div className={'title-row'}>
                            <p className={'title-row-title'}>
                                محلول تقویت کننده مژه سریتا مدل Eyelash حجم 7 میلی لیتر محلول تقویت کننده مژه سریتا مدل
                                Eyelash حجم 7 میلی لیترمحلول تقویت کننده مژه سریتا مدل Eyelash حجم 7 میلی لیتر محلول
                                تقویت کننده مژه سریتا مدل
                                Eyelash حجم 7 میلی لیترمحلول تقویت کننده مژه سریتا مدل Eyelash حجم 7 میلی لیتر محلول
                                تقویت کننده مژه سریتا مدل
                                Eyelash حجم 7 میلی لیتر
                            </p>
                        </div>
                        <div className={'price-row'}>
                            <div className={'price-row-price'}>
                                <img src={require('./static/images/ic_toman.png')}
                                     alt={'toman'}
                                     className={'price-row-price-label'}/>
                                <p className={'price-row-price-title'}>
                                    ۳،۵۰۰،۰۰۰
                                </p>
                            </div>
                            <div className={'price-row-off'}>
                                <div className={'price-row-off-container'}>
                                    <p className={'price-row-off-title'}>
                                        ۱۲%
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={'price-row'}>
                            <div className={'price-row-price'}>
                                <img src={require('./static/images/ic_toman.png')}
                                     alt={'toman'}
                                     className={'price-row-price-label opacity-zero'}/>
                                <p className={'price-row-oldprice-title'}>
                                    ۴،۰۰۰،۰۰۰
                                </p>
                            </div>
                            <div className={'price-row-off opacity-zero'}>
                                <div className={'price-row-off-container'}>
                                    <p className={'price-row-off-title'}>
                                        ۱۲%
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a className={"off-card-container"}>
                        <img src={require('./static/images/products/product3.jpg')}
                             alt={'product'}
                             className={'product-card-image'}/>
                        <div className={'add-to-basket-row'}>

                            {/* Starts */}
                            <div className={'stars-container'}>
                                <img src={require('./static/images/ic_star.png')}
                                     alt={'add to basket'}
                                     className={'stars-image'}/>
                                <p className={'stars-label'}>
                                    ۴.۰
                                </p>

                            </div>

                            <a className={'add-to-basket-container'}>
                                <img src={require('./static/images/ic_plus.png')}
                                     alt={'add to basket'}
                                     className={'add-to-basket-image'}/>
                            </a>
                        </div>
                        <div className={'title-row'}>
                            <p className={'title-row-title'}>
                                محلول تقویت کننده مژه سریتا مدل Eyelash حجم 7 میلی لیتر محلول تقویت کننده مژه سریتا مدل
                                Eyelash حجم 7 میلی لیترمحلول تقویت کننده مژه سریتا مدل Eyelash حجم 7 میلی لیتر محلول
                                تقویت کننده مژه سریتا مدل
                                Eyelash حجم 7 میلی لیترمحلول تقویت کننده مژه سریتا مدل Eyelash حجم 7 میلی لیتر محلول
                                تقویت کننده مژه سریتا مدل
                                Eyelash حجم 7 میلی لیتر
                            </p>
                        </div>
                        <div className={'price-row'}>
                            <div className={'price-row-price'}>
                                <img src={require('./static/images/ic_toman.png')}
                                     alt={'toman'}
                                     className={'price-row-price-label'}/>
                                <p className={'price-row-price-title'}>
                                    ۳،۵۰۰،۰۰۰
                                </p>
                            </div>
                            <div className={'price-row-off'}>
                                <div className={'price-row-off-container'}>
                                    <p className={'price-row-off-title'}>
                                        ۱۲%
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={'price-row'}>
                            <div className={'price-row-price'}>
                                <img src={require('./static/images/ic_toman.png')}
                                     alt={'toman'}
                                     className={'price-row-price-label opacity-zero'}/>
                                <p className={'price-row-oldprice-title'}>
                                    ۴،۰۰۰،۰۰۰
                                </p>
                            </div>
                            <div className={'price-row-off opacity-zero'}>
                                <div className={'price-row-off-container'}>
                                    <p className={'price-row-off-title'}>
                                        ۱۲%
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a className={"off-card-container"}>
                        <img src={require('./static/images/products/product4.png')}
                             alt={'product'}
                             className={'product-card-image'}/>
                        <div className={'add-to-basket-row'}>

                            {/* Starts */}
                            <div className={'stars-container'}>
                                <img src={require('./static/images/ic_star.png')}
                                     alt={'add to basket'}
                                     className={'stars-image'}/>
                                <p className={'stars-label'}>
                                    ۴.۰
                                </p>

                            </div>

                            <a className={'add-to-basket-container'}>
                                <img src={require('./static/images/ic_plus.png')}
                                     alt={'add to basket'}
                                     className={'add-to-basket-image'}/>
                            </a>
                        </div>
                        <div className={'title-row'}>
                            <p className={'title-row-title'}>
                                محلول تقویت کننده مژه سریتا مدل Eyelash حجم 7 میلی لیتر محلول تقویت کننده مژه سریتا مدل
                                Eyelash حجم 7 میلی لیترمحلول تقویت کننده مژه سریتا مدل Eyelash حجم 7 میلی لیتر محلول
                                تقویت کننده مژه سریتا مدل
                                Eyelash حجم 7 میلی لیترمحلول تقویت کننده مژه سریتا مدل Eyelash حجم 7 میلی لیتر محلول
                                تقویت کننده مژه سریتا مدل
                                Eyelash حجم 7 میلی لیتر
                            </p>
                        </div>
                        <div className={'price-row'}>
                            <div className={'price-row-price'}>
                                <img src={require('./static/images/ic_toman.png')}
                                     alt={'toman'}
                                     className={'price-row-price-label'}/>
                                <p className={'price-row-price-title'}>
                                    ۳،۵۰۰،۰۰۰
                                </p>
                            </div>
                            <div className={'price-row-off'}>
                                <div className={'price-row-off-container'}>
                                    <p className={'price-row-off-title'}>
                                        ۱۲%
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={'price-row'}>
                            <div className={'price-row-price'}>
                                <img src={require('./static/images/ic_toman.png')}
                                     alt={'toman'}
                                     className={'price-row-price-label opacity-zero'}/>
                                <p className={'price-row-oldprice-title'}>
                                    ۴،۰۰۰،۰۰۰
                                </p>
                            </div>
                            <div className={'price-row-off opacity-zero'}>
                                <div className={'price-row-off-container'}>
                                    <p className={'price-row-off-title'}>
                                        ۱۲%
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a className={"off-card-container"}>
                        <img src={require('./static/images/products/product5.jpg')}
                             alt={'product'}
                             className={'product-card-image'}/>
                        <div className={'add-to-basket-row'}>

                            {/* Starts */}
                            <div className={'stars-container'}>
                                <img src={require('./static/images/ic_star.png')}
                                     alt={'add to basket'}
                                     className={'stars-image'}/>
                                <p className={'stars-label'}>
                                    ۴.۰
                                </p>

                            </div>

                            <a className={'add-to-basket-container'}>
                                <img src={require('./static/images/ic_plus.png')}
                                     alt={'add to basket'}
                                     className={'add-to-basket-image'}/>
                            </a>
                        </div>
                        <div className={'title-row'}>
                            <p className={'title-row-title'}>
                                محلول تقویت کننده مژه سریتا مدل Eyelash حجم 7 میلی لیتر محلول تقویت کننده مژه سریتا مدل
                                Eyelash حجم 7 میلی لیترمحلول تقویت کننده مژه سریتا مدل Eyelash حجم 7 میلی لیتر محلول
                                تقویت کننده مژه سریتا مدل
                                Eyelash حجم 7 میلی لیترمحلول تقویت کننده مژه سریتا مدل Eyelash حجم 7 میلی لیتر محلول
                                تقویت کننده مژه سریتا مدل
                                Eyelash حجم 7 میلی لیتر
                            </p>
                        </div>
                        <div className={'price-row'}>
                            <div className={'price-row-price'}>
                                <img src={require('./static/images/ic_toman.png')}
                                     alt={'toman'}
                                     className={'price-row-price-label'}/>
                                <p className={'price-row-price-title'}>
                                    ۳،۵۰۰،۰۰۰
                                </p>
                            </div>
                            <div className={'price-row-off'}>
                                <div className={'price-row-off-container'}>
                                    <p className={'price-row-off-title'}>
                                        ۱۲%
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={'price-row'}>
                            <div className={'price-row-price'}>
                                <img src={require('./static/images/ic_toman.png')}
                                     alt={'toman'}
                                     className={'price-row-price-label opacity-zero'}/>
                                <p className={'price-row-oldprice-title'}>
                                    ۴،۰۰۰،۰۰۰
                                </p>
                            </div>
                            <div className={'price-row-off opacity-zero'}>
                                <div className={'price-row-off-container'}>
                                    <p className={'price-row-off-title'}>
                                        ۱۲%
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a className={"off-card-container"}>
                        <img src={require('./static/images/products/product6.jpg')}
                             alt={'product'}
                             className={'product-card-image'}/>
                        <div className={'add-to-basket-row'}>

                            {/* Starts */}
                            <div className={'stars-container'}>
                                <img src={require('./static/images/ic_star.png')}
                                     alt={'add to basket'}
                                     className={'stars-image'}/>
                                <p className={'stars-label'}>
                                    ۴.۰
                                </p>

                            </div>

                            <a className={'add-to-basket-container'}>
                                <img src={require('./static/images/ic_plus.png')}
                                     alt={'add to basket'}
                                     className={'add-to-basket-image'}/>
                            </a>
                        </div>
                        <div className={'title-row'}>
                            <p className={'title-row-title'}>
                                محلول تقویت کننده مژه سریتا مدل Eyelash حجم 7 میلی لیتر محلول تقویت کننده مژه سریتا مدل
                                Eyelash حجم 7 میلی لیترمحلول تقویت کننده مژه سریتا مدل Eyelash حجم 7 میلی لیتر محلول
                                تقویت کننده مژه سریتا مدل
                                Eyelash حجم 7 میلی لیترمحلول تقویت کننده مژه سریتا مدل Eyelash حجم 7 میلی لیتر محلول
                                تقویت کننده مژه سریتا مدل
                                Eyelash حجم 7 میلی لیتر
                            </p>
                        </div>
                        <div className={'price-row'}>
                            <div className={'price-row-price'}>
                                <img src={require('./static/images/ic_toman.png')}
                                     alt={'toman'}
                                     className={'price-row-price-label'}/>
                                <p className={'price-row-price-title'}>
                                    ۳،۵۰۰،۰۰۰
                                </p>
                            </div>
                            <div className={'price-row-off'}>
                                <div className={'price-row-off-container'}>
                                    <p className={'price-row-off-title'}>
                                        ۱۲%
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={'price-row'}>
                            <div className={'price-row-price'}>
                                <img src={require('./static/images/ic_toman.png')}
                                     alt={'toman'}
                                     className={'price-row-price-label opacity-zero'}/>
                                <p className={'price-row-oldprice-title'}>
                                    ۴،۰۰۰،۰۰۰
                                </p>
                            </div>
                            <div className={'price-row-off opacity-zero'}>
                                <div className={'price-row-off-container'}>
                                    <p className={'price-row-off-title'}>
                                        ۱۲%
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a className={"off-card-container"}>
                        <img src={require('./static/images/products/product1.jpg')}
                             alt={'product'}
                             className={'product-card-image'}/>
                        <div className={'add-to-basket-row'}>

                            {/* Starts */}
                            <div className={'stars-container'}>
                                <img src={require('./static/images/ic_star.png')}
                                     alt={'add to basket'}
                                     className={'stars-image'}/>
                                <p className={'stars-label'}>
                                    ۴.۰
                                </p>

                            </div>

                            <a className={'add-to-basket-container'}>
                                <img src={require('./static/images/ic_plus.png')}
                                     alt={'add to basket'}
                                     className={'add-to-basket-image'}/>
                            </a>
                        </div>
                        <div className={'title-row'}>
                            <p className={'title-row-title'}>
                                محلول تقویت کننده مژه سریتا مدل Eyelash حجم 7 میلی لیتر محلول تقویت کننده مژه سریتا مدل
                                Eyelash حجم 7 میلی لیترمحلول تقویت کننده مژه سریتا مدل Eyelash حجم 7 میلی لیتر محلول
                                تقویت کننده مژه سریتا مدل
                                Eyelash حجم 7 میلی لیترمحلول تقویت کننده مژه سریتا مدل Eyelash حجم 7 میلی لیتر محلول
                                تقویت کننده مژه سریتا مدل
                                Eyelash حجم 7 میلی لیتر
                            </p>
                        </div>
                        <div className={'price-row'}>
                            <div className={'price-row-price'}>
                                <img src={require('./static/images/ic_toman.png')}
                                     alt={'toman'}
                                     className={'price-row-price-label'}/>
                                <p className={'price-row-price-title'}>
                                    ۳،۵۰۰،۰۰۰
                                </p>
                            </div>
                            <div className={'price-row-off'}>
                                <div className={'price-row-off-container'}>
                                    <p className={'price-row-off-title'}>
                                        ۱۲%
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={'price-row'}>
                            <div className={'price-row-price'}>
                                <img src={require('./static/images/ic_toman.png')}
                                     alt={'toman'}
                                     className={'price-row-price-label opacity-zero'}/>
                                <p className={'price-row-oldprice-title'}>
                                    ۴،۰۰۰،۰۰۰
                                </p>
                            </div>
                            <div className={'price-row-off opacity-zero'}>
                                <div className={'price-row-off-container'}>
                                    <p className={'price-row-off-title'}>
                                        ۱۲%
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a className={"off-card-container"}>
                        <img src={require('./static/images/products/product2.jpg')}
                             alt={'product'}
                             className={'product-card-image'}/>
                        <div className={'add-to-basket-row'}>

                            {/* Starts */}
                            <div className={'stars-container'}>
                                <img src={require('./static/images/ic_star.png')}
                                     alt={'add to basket'}
                                     className={'stars-image'}/>
                                <p className={'stars-label'}>
                                    ۴.۰
                                </p>

                            </div>

                            <a className={'add-to-basket-container'}>
                                <img src={require('./static/images/ic_plus.png')}
                                     alt={'add to basket'}
                                     className={'add-to-basket-image'}/>
                            </a>
                        </div>
                        <div className={'title-row'}>
                            <p className={'title-row-title'}>
                                محلول تقویت کننده مژه سریتا مدل Eyelash حجم 7 میلی لیتر محلول تقویت کننده مژه سریتا مدل
                                Eyelash حجم 7 میلی لیترمحلول تقویت کننده مژه سریتا مدل Eyelash حجم 7 میلی لیتر محلول
                                تقویت کننده مژه سریتا مدل
                                Eyelash حجم 7 میلی لیترمحلول تقویت کننده مژه سریتا مدل Eyelash حجم 7 میلی لیتر محلول
                                تقویت کننده مژه سریتا مدل
                                Eyelash حجم 7 میلی لیتر
                            </p>
                        </div>
                        <div className={'price-row'}>
                            <div className={'price-row-price'}>
                                <img src={require('./static/images/ic_toman.png')}
                                     alt={'toman'}
                                     className={'price-row-price-label'}/>
                                <p className={'price-row-price-title'}>
                                    ۳،۵۰۰،۰۰۰
                                </p>
                            </div>
                            <div className={'price-row-off'}>
                                <div className={'price-row-off-container'}>
                                    <p className={'price-row-off-title'}>
                                        ۱۲%
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={'price-row'}>
                            <div className={'price-row-price'}>
                                <img src={require('./static/images/ic_toman.png')}
                                     alt={'toman'}
                                     className={'price-row-price-label opacity-zero'}/>
                                <p className={'price-row-oldprice-title'}>
                                    ۴،۰۰۰،۰۰۰
                                </p>
                            </div>
                            <div className={'price-row-off opacity-zero'}>
                                <div className={'price-row-off-container'}>
                                    <p className={'price-row-off-title'}>
                                        ۱۲%
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div className={"categories-row-container"}>
                <div className={"categories-row"}>
                    <a className={"category-card-container"}>
                        <img src={require('./static/images/cats/cat_card1.png')}
                             className={"category-card"}
                             alt={"category"}/>
                    </a>
                    <a className={"category-card-container"}>
                        <img src={require('./static/images/cats/cat_card3.png')}
                             className={"category-card"}
                             alt={"category"}/>
                    </a>
                    <a className={"category-card-container"}>
                        <img src={require('./static/images/cats/cat_card2.png')}
                             className={"category-card"}
                             alt={"category"}/>
                    </a>
                    <a className={"category-card-container"}>
                        <img src={require('./static/images/cats/cat_card4.png')}
                             className={"category-card"}
                             alt={"category"}/>
                    </a>
                </div>
            </div>

        </div>
    );
}

const styles = {
    menuButtonContainerActive: {
        height: '100%',
        backgroundColor: 'blue',
        cursor: 'pointer',
        display: 'inline',
        padding: 0,
        // borderWidth: 2,
        borderBottom: '2px solid purple',
        // borderColor: '#000',
        // borderBottomWidth: 2,
        // borderBottomColor: 'purple'
    },
    menuButtonContainer: {
        height: '100%',
        cursor: 'pointer',
        display: 'inline',
        // borderWidth: 2,
        // borderBottom: '2px solid red',
        // borderColor: '#000',
        // borderBottomWidth: 2,
        // borderBottomColor: 'purple'
    },
    menuButton: {
        color: "#6e6e6e",
        // borderRadius: 5,
        height: 30,
        padding: 3,
        fontFamily: "Yekan",
        margin: 5
    },
    menuButtonActive: {
        color: "purple",
        backgroundColor: 'red',
        height: 30,
        padding: 3,
        fontFamily: "Yekan",
        margin: 5
    },
    cartContainer: {
        cursor: 'pointer',
        background: 'white',
        outline: 0,

    },
    cartIc: {
        height: 30,
        width: 30,
        margin: 10,
        // $nest: {
        //     '&:hover': {
        //         borderColor: "#000",
        //         borderWidth: 2
        //     }
        // }
        // "&:hover": {
        //     borderColor: "#000",
        //     borderWidth: 2
        // },
    },
    userIc: {
        height: 30,
        width: 30,
        margin: 10,
        marginLeft: 20,
    },
    searchIc: {
        height: 20,
        width: 20,
        margin: 5
        // margin: 10
    },
    RightColumn: {
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'flex-start',
        alignItems: "center",
    },
    searchBarPlaceholder: {
        height: 15,
        width: 375,
        paddingRight: 5,
        fontFamily: "Yekan",
        color: "#aeaeae",
        textAlign: 'right'
    },
    searchBarContainer: {
        height: 30,
        borderRadius: 5,
        width: 400,
        marginRight: 20,
        padding: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: "center",
        backgroundColor: '#e8e7e7'
    },
    searchBar: {
        height: 30,
        borderRadius: 5,
        width: 400,
        backgroundColor: 'transparent'
    },
    headerButton: {
        // backgroundColor: '#e7bae8',
        color: "#6e6e6e",
        borderRadius: 5,
        height: 20,
        padding: 3,
        fontFamily: "Yekan",
        margin: 5
    },
    logo: {
        height: 40,
        width: 40,
        margin: 10
    },
    firstRow: {
        marginTop: 20,
        height: 60,
        width: '90%',
        // marginInlineEnd: 200,
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: "flex-start",
    },
    secondRow: {
        height: 35,
        width: '90%',
        marginTop: 30,
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: "center",
        // backgroundColor: '#ebd0ec',
    },
    header: {
        // backgroundColor: '#ebd0ec',
        padding: 0,
        margin: 0,
        height: 135,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: "center",
        boxShadow: "0px 2px 2px #e1e1e1"
    }
}

export default App;
