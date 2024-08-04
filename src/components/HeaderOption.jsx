import React from "react";
function HeaderOption(props) {
    const { images, index } = props;
    
    return (
        <>
            <div className={"header_option " + images.name + " h" + index}>
                <img src={images.img} alt={images.name} className="header_option_img" />
            </div>
        </>
    )
}
export default HeaderOption;