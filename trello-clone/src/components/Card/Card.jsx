import { useDrag } from "react-dnd";
import styles from "./Card.module.css";

const Card = ({ title, id, listId }) => {
    const [{ opacity }, ref] = useDrag(() => ({
        type: "CARD",
        item: { id, listId }, 
        collect: (monitor) => ({
            opacity: monitor.isDragging() ? 0.5 : 1,
        }),
    }), [id, listId]);

    return (
        <div ref={ref} style={{ opacity }} className={styles.card}>
            <p>{title}</p>
        </div>
    );
};

export default Card;
