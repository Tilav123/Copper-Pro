import React from "react";
function Quality({ quality_information }) {
    return (
        <>
            <div className="quality_item">
                <div className="quality_img">
                    <img src={quality_information.img} className="quality_image" />
                </div>
                <p className="quality_name">{quality_information.name}</p>
                <p className="quality_text">{quality_information.text}</p>
                <div className="read_more_box">
                    <p className="quality_text read_more">Читать больше</p>
                    <img src="./vector.png" alt="" className="quality_vector" />
                </div>
            </div>
        </>
    )
}
export default Quality;