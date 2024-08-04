import React from "react";
function ProductItem({ products }) {
    return (
        <>
            <div className={"product_item " + products.classof}>
                <div className="circle c1"></div>
                <div className="circle c4"></div>
                <div className="circle c3"></div>
                <p className="percent percent80">-80%</p>
                <p className="percent percent50">-50%</p>
                <p className="percent percent30">-30%</p>
                <img src={products.img} className="product_img" />
                <p className="product_title">{products.name}</p>
            </div>
        </>
    )
}
export default ProductItem;