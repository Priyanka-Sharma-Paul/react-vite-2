import Comments from "../../data/comments";
import Styles from "./CommentsCard.module.css"

const CommentsCards = () => {
    return (
        <div className={Styles.CommentsContainer}>
            {
                Comments.map((comment, index) => {
                    return (
                        <div key={index} className={Styles.commentCard}>
                            <div className={Styles.comment}>{comment.comment}</div>
                            <div className={Styles.commentProfileContainer}>
                                 <img className={Styles.commentProfileImg} src={comment.imageUrl} alt={`${comment.name}'s profile`} />
                                <div className={Styles.commentProfileText}>
                                    <span className={Styles.commentProfileName}>{comment.name}</span>
                                    <span className={Styles.commentProfilePosition}>{comment.position}</span>
                                </div>

                            </div>





                        </div>
                    )
                })
            }
        </div>
    );

};
export default CommentsCards;