import React from "react";
function PurchaseItem({ purchases }) {
    function clickOnLike(e) {
        e.target.classList.toggle("active_like")
    }
    return (
        <>
            <div className={"purchase_child" + purchases.classof}>
                <div className="like_box" onClick={clickOnLike}>
                    <img src="./heart.png" className="like" />
                    <img src="./heart2.png" className="like_act" />
                </div>
                <img src={purchases.img} className="purchase_img" />
                <div className="purchase_content">
                    <p className="purchase_title">{purchases.name}</p>
                    <span className="purchase_prices">
                        <p className="purchase_old_price">{purchases.price}</p>
                        <p className="purchase_price">{purchases.price}</p>
                    </span>
                </div>
            </div>
        </>
    )
}
export default PurchaseItem;