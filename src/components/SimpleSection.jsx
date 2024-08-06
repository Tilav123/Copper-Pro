import React, { useState } from "react";
import PurchaseItem from './PurchaseItem';
function SimpleSection(title) {
  let purchases = [
    {
      name: "Медный чайник с фарфоровой ручкой",
      img: "https://s3-alpha-sig.figma.com/img/1ce8/8184/8a04b9e80e1eedb3900bde034d6869cb?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pEzoU8zwrqbV7HZSv8h0mzvPnElxlZoCXXkrlFb~5JjUSyWtnunfyFwRfwNRmnyNkJIVicEWrP6HWwhgIuqt7XIhbD1sn9HZwPMO~hZnNUwK4McUmrLt72eb~8eNE4ljCR-4BRftF3Rt32oYeZk4G3-CITPw~Y7vUTmEcqy5-ZF8gigJEdWXxrGVs~n~xhm8McaC2H0p6lrxUJS~PVs5dgfq2nMRbtqCNtPleKor2WKjqF5vcCxwwI4aDTvaLozyv-NUW0H1rbeoYLDAqyqWLjp7vTo3Io6F48M6yNMHJU766QZbpe0bJqG6HvZVr9V~jpLAQjuwPg-OS70ge5Svng__",
      price: "1 953 грн",
      classof: ""
    },
    {
      name: "Медный чайник с фарфоровой ручкой",
      img: "https://s3-alpha-sig.figma.com/img/e908/4d2d/23113344fab30ad303d15be1a1c35bb0?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y10cbLIzNumXNEXy2EsrDuGOnlRunZWDxtzOWPI3yhrhEOlIhcgLb1y1TN0zV3JLXv6Dy6U4MiuKGGNBDf4LP7zQL91c5-DMKC6qxOy8NTjiNOPzSTwXYzv2uYKGLrtOEqnOVIEG4HDml9k5DHmkCNXIBiu2hT89-Bmyu~uAUGPJyB-vOugSxUqu65UXQjiCVjKIlpybmMWzfSgZlFocSnVL60LeztclHYT2UhqRqWGz45hAuSdpeZp2Ax3N2je959UQ0wWx9YveOrrjuH5T3shkx7AEQBTcO2iTpRuxAE~c0qo~EjwtufUICYoZPPO0uT7c6eRmTtCgwHDi-zQMHw__",
      price: "1 953 грн",
      classof: ""
    },
    {
      name: "Медный чайник с фарфоровой ручкой",
      img: "https://s3-alpha-sig.figma.com/img/a565/b956/0aa3c20a8d99499ea4fc5fd30d64c30a?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A9SkhSvQMTZE4FCdFz4ahXTXvccd5Zyu9je8Et3DhmDy8mFm-v9ziNw-5glXrrxT~-OLImqYIZ9FXQfU2Tdm2~wT2yk5S6drNgxggGjjkK2g4ZQed6Dmf5ouFa8xUYVU61mfrrBmDxgaQQkWZqzmHW3ei9dC30zg~eLkk2VxmJiK5vLKCLPK4lchg86NiIiDwLtM22xYsA2UrHOAfTaMGxI8u3~PZzS7ZcVvM~D-sciaMtOWQz1wE16gSJMBtzDCDXG4ri3n0pY8FJvr~YS0aAg0~Iw5QNXkmTcLw7nH3SqnVGYNksiBFKkWemqvvjNiWEL7983S40VTln87dvaF7Q__",
      price: "1 953 грн",
      classof: ""
    }
  ]
  if (title.title[0] == "новинки") {
    purchases[0].classof = " discount_item"
  }else if (title.title[0] == "скидки"){
    purchases[0].classof = " discount_item"
    purchases[1].classof = " discount_item"
    purchases[2].classof = " discount_item"
  }

  return (
    <>
      <div className={"simple_section " + title.title[1]}>
        <div className="container">
          <center><h1 className='title_of_section'>{title.title[0]}</h1></center>
          <div className="purchase_box">
            {purchases.map(item => <PurchaseItem purchases={item}></PurchaseItem>)}
          </div>
          <center><button className="buy to_catalog">Перейти в каталог</button></center>
        </div>
      </div>
    </>
  )
}
export default SimpleSection;