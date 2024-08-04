import React from "react";
function Comment({comment_information}) {
    return (
        <>
            <div className="comment_item">
                <img src={comment_information.img} alt="" className="comment_img" />
                <p className="users_name">{comment_information.name}</p>
                <p className="comment">
                        {comment_information.text}
                </p>
                <p className="date_of_thecomment">{comment_information.date}</p>
            </div>
        </>
    )
}
export default Comment;