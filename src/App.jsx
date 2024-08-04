import { useEffect } from 'react';
import './App.css';
import './media.css'
import Layout from './layout/Layout';
import ProductItem from './components/ProductItem';
import SimpleSection from './components/SimpleSection';
import Comment from './components/Comment';
import Quality from './components/Quality';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  function PerfumTie(e) {
    e.target.classList.toggle('anactive')
  }
  let ourProducts = [
    {
      img: "https://s3-alpha-sig.figma.com/img/1ce8/8184/8a04b9e80e1eedb3900bde034d6869cb?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pEzoU8zwrqbV7HZSv8h0mzvPnElxlZoCXXkrlFb~5JjUSyWtnunfyFwRfwNRmnyNkJIVicEWrP6HWwhgIuqt7XIhbD1sn9HZwPMO~hZnNUwK4McUmrLt72eb~8eNE4ljCR-4BRftF3Rt32oYeZk4G3-CITPw~Y7vUTmEcqy5-ZF8gigJEdWXxrGVs~n~xhm8McaC2H0p6lrxUJS~PVs5dgfq2nMRbtqCNtPleKor2WKjqF5vcCxwwI4aDTvaLozyv-NUW0H1rbeoYLDAqyqWLjp7vTo3Io6F48M6yNMHJU766QZbpe0bJqG6HvZVr9V~jpLAQjuwPg-OS70ge5Svng__",
      name: "Для эфирных масел",
      classof: ""
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/e908/4d2d/23113344fab30ad303d15be1a1c35bb0?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y10cbLIzNumXNEXy2EsrDuGOnlRunZWDxtzOWPI3yhrhEOlIhcgLb1y1TN0zV3JLXv6Dy6U4MiuKGGNBDf4LP7zQL91c5-DMKC6qxOy8NTjiNOPzSTwXYzv2uYKGLrtOEqnOVIEG4HDml9k5DHmkCNXIBiu2hT89-Bmyu~uAUGPJyB-vOugSxUqu65UXQjiCVjKIlpybmMWzfSgZlFocSnVL60LeztclHYT2UhqRqWGz45hAuSdpeZp2Ax3N2je959UQ0wWx9YveOrrjuH5T3shkx7AEQBTcO2iTpRuxAE~c0qo~EjwtufUICYoZPPO0uT7c6eRmTtCgwHDi-zQMHw__",
      name: "Для гидролатов",
      classof: ""
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/a565/b956/0aa3c20a8d99499ea4fc5fd30d64c30a?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A9SkhSvQMTZE4FCdFz4ahXTXvccd5Zyu9je8Et3DhmDy8mFm-v9ziNw-5glXrrxT~-OLImqYIZ9FXQfU2Tdm2~wT2yk5S6drNgxggGjjkK2g4ZQed6Dmf5ouFa8xUYVU61mfrrBmDxgaQQkWZqzmHW3ei9dC30zg~eLkk2VxmJiK5vLKCLPK4lchg86NiIiDwLtM22xYsA2UrHOAfTaMGxI8u3~PZzS7ZcVvM~D-sciaMtOWQz1wE16gSJMBtzDCDXG4ri3n0pY8FJvr~YS0aAg0~Iw5QNXkmTcLw7nH3SqnVGYNksiBFKkWemqvvjNiWEL7983S40VTln87dvaF7Q__",
      name: "Медная посуда",
      classof: ""
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/2e54/d331/de3ce07bf091c3411eda04f965944f74?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YP5PKwsMhCTHw1kuGYWPEvdL8MHkBM-FpeqNaKj0Hjw-znU97YxapGgcxJVGTe9l6837In1ezuzo-THtFCfI3S7Q0NnN1w~80gG5scJNJ67aoqaGTUny1Kz73f1S34dlLd-EFhh0RqWMGz-kcOOYtUPIgTVoTOwI~he869kMpwIhrnBIkJ7WpoBliShXhXbfWICpY6EjGYwDE0o9weRIUMQgjNuZ63lb9~WROy5JQh~HTSDnH5myvACwd3kOxk2Wsr0nK7uwEy7euJsgBjcIPs18ydYr-5-4gTXpavUBh1W3jjVrpTKqv5iR7cIJJ7HTrnvYsNTdeFaJyA3Yz8xcWA__",
      name: "Аксессуары из меди",
      classof: "turn_image"
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/5459/982a/6e0c5b0086301c02d56f1ad0a8c77490?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=paxDCX1C~0WY~bmqk6AWci4fUYK5liBB6jeglVsYmKQ9YBbz8nLBOH05RTyyMrEKdSG4pGjXBPEMAHGi-2o1eGHJ5O9D5LIPuKYXaII9BJScP6aasgBfHqEGcsEWExopDQLGNiux9odXK-AIMhF~SyDpPamL30MMZXMEHKjXrC46yQuw6oX3TAed2JXYu4Amrsyhq91S4K~7mNvwJldPniI2D7szsA77g8FkI1M4CcsP~J2GMLnLk8ZY9TWBCfb4-wznJPaa35KWp4fqlYd7hKMmYm~uC3uDbvdcycsA6PR8Lzggie16ScKGO4-u4Yv2M6W1JEmSAXyCJdDLy2wKAA__",
      name: "Индивидуальный заказ",
      classof: ""
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/a565/b956/0aa3c20a8d99499ea4fc5fd30d64c30a?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A9SkhSvQMTZE4FCdFz4ahXTXvccd5Zyu9je8Et3DhmDy8mFm-v9ziNw-5glXrrxT~-OLImqYIZ9FXQfU2Tdm2~wT2yk5S6drNgxggGjjkK2g4ZQed6Dmf5ouFa8xUYVU61mfrrBmDxgaQQkWZqzmHW3ei9dC30zg~eLkk2VxmJiK5vLKCLPK4lchg86NiIiDwLtM22xYsA2UrHOAfTaMGxI8u3~PZzS7ZcVvM~D-sciaMtOWQz1wE16gSJMBtzDCDXG4ri3n0pY8FJvr~YS0aAg0~Iw5QNXkmTcLw7nH3SqnVGYNksiBFKkWemqvvjNiWEL7983S40VTln87dvaF7Q__",
      name: "Скидки и предложения",
      classof: "discount_problem"
    }
  ]
  let comment_infor = [
    {
      name: "Иван Иванов",
      img: "./young_man.png",
      text: "Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса. ",
      date: "20.10.21",
    },
    {
      name: "Иван Иванов",
      img: "./young_man.png",
      text: "Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса. ",
      date: "20.10.21",
    },
    {
      name: "Иван Иванов",
      img: "./young_man.png",
      text: "Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса. ",
      date: "20.10.21",
    }
  ]
  let qualities = [
    {
      img: "./quality1.png",
      name: "Аутентичность",
      text: "Медное перегонное оборудование используется для получения эфирных масел с незапамятных времен.",
    },
    {
      img: "./quality2.png",
      name: "Изысканность",
      text: "Наши изделия из меди являются очень практичными. В то же время они наполнят особой магией ваш дом или рабочее....",
    },
    {
      img: "./quality3.png",
      name: "Честная оплата",
      text: "Мы стремимся предоставить лучший товар по лучшей цене с сервисом высокого уровня. Но все начинается c....",
    },
    {
      img: "./quality4.png",
      name: "Большой ассортимент",
      text: "У нас есть все от миниатюрных настольных паровых дистилляторов эфирных масел до крупногабаритного оборудования...",
    },
    {
      img: "./quality5.png",
      name: "Доставка по всему миру",
      text: "Вы можете получить нашу продукцию в кратчайшие сроки в любую точку земного шара.",
    },
    {
      img: "./quality6.png",
      name: "Гарантия качества",
      text: "Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. ",
    },
    {
      img: "./quality7.png",
      name: "Удобство в использовании",
      text: "Наши изделия из меди имеют уникальный дизайн, который разрабатывался нами с целью получения максимальной...",
    },
    {
      img: "./quality8.png",
      name: "Забота об окружающей среде",
      text: "От 2 до 5% от стоимости каждого приобретенного товара в нашем магазине мы направляем на защиту...",
    }
  ]
  return (
    <>
      <Layout>
        {/* 1 */}
        <div className="main_block">
          <div className="circle c1"></div>
          <div className="circle c2"></div>
          <div className="circle c3"></div>
          <div className="circle c4"></div>
          <div className="container mn_block">
            <div className="right_one">
              <div className="right_one_box">
                <h1 className='heading'>Хит продаж</h1>
                <hr />
                <div className="right_one_text_box">
                  <p className="big_white_text">Дистиллятор для <br />эфирных масел </p>
                  <div className="price_box">
                    <p className="price_text">Цена</p>
                    <p className="price_text price">4 906 грн</p>
                  </div>
                  <button className="buy">Купить</button>
                </div>
              </div>
            </div>
            <div className="left">
              <div className="left_one">
                <div className="thefloor">
                  <div className="parfum">
                    <div className="parf pf1" onClick={PerfumTie}>
                      <div className="line_p"></div>
                      <img src="./tie.jfif" className="parf_img" />
                    </div>
                    <div className="parf pf2" onClick={PerfumTie}>
                      <div className="line_p lpf2"></div>
                      <img src="./tie2.jfif" className="parf_img prf2_image" />
                    </div>
                    <div className="parf pf3" onClick={PerfumTie}>
                      <div className="line_p"></div>
                      <img src="./tie3.jfif" className="parf_img" />
                    </div>
                    <img src="./parfum.png" className='image_parfum' />
                  </div>
                </div>
                <p className="right_down_title">COPPER <br /> PRO</p>
              </div>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="section">
          <div className="container">
            <center><h1 className='title_of_section'>Наша продукция</h1></center>
            <div className="our_products">
              {ourProducts.map(item => <ProductItem products={item}></ProductItem>)}
            </div>
          </div>
        </div>
        {/* 3 */}
        <SimpleSection title={["лучшие продажи", "gray_section"]}></SimpleSection>
        {/* 4 */}
        <SimpleSection title={["новинки", '']}></SimpleSection>
        {/* 5 */}
        <div className="advertisement">
          <p className="right_down_title">COPPER <br /> PRO</p>
          <div className="container advertise">
            <div className="left_advertisement">
              <h1 className="heading_of_advertisement">1 + 1 = 3</h1>
              <p className="underheading_of_advertisement">Закажите два товара и <br /> получите третий бесплатно</p>
              <button className="buy">Перейти в каталог</button>
            </div>
            <div className="right_advertisement">
              <div className="green_advertisement">
                <img src="./second_parfum.png" alt="" className="second_advertisement" />
              </div>
            </div>
          </div>
        </div>
        {/* 6 */}
        <SimpleSection title={["мы рекомендуем", '']}></SimpleSection>
        {/* 7 */}
        <SimpleSection title={["скидки", "gray_section"]}></SimpleSection>
        {/* 8 */}
        <div className="simple_section">
          <div className="container">
          <center><h1 className='title_of_section'>что думают о нас</h1></center>
          <div className="comments">
          {comment_infor.map(item => <Comment comment_information={item}></Comment>)}
          </div>
          </div>
        </div>
        {/* 9 */}
        <div className="simple_section gray_section">
          <div className="container">
          <center><h1 className='title_of_section'>Почему выбирают нас</h1></center>
            <div className="quality_box">
            {qualities.map(item => <Quality quality_information={item}></Quality>)}
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default App
