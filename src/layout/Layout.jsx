import React, { useState } from "react";
import HeaderOption from "../components/HeaderOption";
function Layout({ children }) {
    let header_options = [
        {
            name: "burger",
            img: "./burger.png",
        },
        {
            name: "heart",
            img: "./heart.png",
        },
        {
            name: "user",
            img: "./user.png",
        },
        {
            name: "shop",
            img: "./shop.png",
        },
    ]
    let [scrolled, setScrolled] = useState('unscrolled')
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            setScrolled('scrolled')
        } else {
            setScrolled('unscrolled')
        }
    })
    function topZero(){
        window.scrollTo({top: 0, behavior: "smooth"})
    }
    return (
        <>
            <header className={scrolled}>
                <div className="header_background"></div>
                <div className="container head">
                    <img src="./logo.png" alt="" className="logo" />
                    <div className="links">
                        <a href="#" className="link">Каталог</a>
                        <a href="#" className="link">Новости</a>
                        <a href="#" className="link">Доставка</a>
                        <a href="#" className="link">О нас</a>
                        <a href="#" className="link">Контакты</a>
                    </div>
                    <div className="header_options">
                        {header_options.map((item, index) => (
                            <HeaderOption images={item} index={index} />
                        ))}
                    </div>
                </div>
            </header>
            {children}
            <footer>
                <div className="circle c1"></div>
                <div className="circle c4"></div>
                <div className="circle c3"></div>
                <div className="container foot">
                    <div className="left_footer">
                        <img src="./logo.png" alt="" className="footer_logo" />
                        <p className="protected_rights">© 2021 “Copper Pro” <br />
                        Все права защищенны</p>
                        <p className="protected_rights politice_of_privacy">Политика конфиденциальности</p>
                    </div>
                    <div className="right_footer">
                        <div className="footer_links">
                            <div className="link_box">
                                <p className="footer_type">Навигация</p>
                                <a href="#" className="footer_link">Каталог</a>
                                <a href="#" className="footer_link">Новости</a>
                                <a href="#" className="footer_link">Доставка</a>
                                <a href="#" className="footer_link">О нас</a>
                                <a href="#" className="footer_link">Контакты</a>
                            </div>
                            <div className="link_box">
                                <p className="footer_type">Каталог</p>
                                <a href="#" className="footer_link">Для эфирных масел</a>
                                <a href="#" className="footer_link">Для гидролатов</a>
                                <a href="#" className="footer_link">Медная посуда</a>
                                <a href="#" className="footer_link">Аксессуары из меди</a>
                                <a href="#" className="footer_link">Индивидуальный заказ</a>
                                <a href="#" className="footer_link">Скидки и предложения</a>
                            </div>
                            <div className="link_box">
                                <p className="footer_type">Контакты</p>
                                <a href="#" className="footer_link">Бажана 8-Б, Киев, <br /> 
                                02132 Украина</a>
                                <a href="tel:+38 (096) 990 67 56" className="footer_link">+38 (096) 990 67 56</a>
                                <a href="#" className="footer_link">a.alambik@gmail.com</a>
                                <div className="app_logos">
                                   <a href="#"><img src="./twitter.png" alt="" className="app_logo" /></a>
                                   <a href="#"><img src="./facebook.png" alt="" className="app_logo" /></a>
                                   <a href="#"><img src="./instagram.png" alt="" className="app_logo" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="to_up" onClick={topZero}>Вверх</button>
            </footer>
        </>
    )
}
export default Layout;