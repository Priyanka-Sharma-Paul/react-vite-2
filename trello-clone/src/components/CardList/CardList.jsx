import { useDrop } from "react-dnd";
import Card from "../Card/Card";
import styles from "./CardList.module.css";
import { useContext, useState } from "react";
import { TrelloContext } from "../../App";

const CardList = ({ id, title, onCardClick }) => {
    const { state, dispatch } = useContext(TrelloContext);
    const [newCardTitle, setNewCardTitle] = useState("");

    const [{ isOver }, dropRef] = useDrop({
        accept: "CARD",
        drop: (item) => {
            if (item.listId !== id) {
                dispatch({
                    type: "MOVE_ITEM",
                    payload: { cardId: item.id, fromList: item.listId, toList: id },
                });
            }
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    });

    const cards = state[id]; // Get the cards for this particular list

    const addCardHandler = (e) => {
        e.preventDefault();
        if (newCardTitle.trim()) {
            const newCard = {
                id: Date.now(),
                title: newCardTitle,
            };
            dispatch({
                type: "ADD_ITEM",
                payload: { listId: id, newItem: newCard },
            });
            setNewCardTitle("");
        }
        
    };

    return (
        <div ref={dropRef} className={styles.cardList} style={{ backgroundColor: isOver ? '#d0f0c0' : '#ebecf0' }}>
            <h3>{title}</h3>
            <div className={styles.cardListItems}>
                {cards.map((card, index) => (
                    <Card
                        key={card.id}
                        title={card.title}
                        id={card.id}
                        listId={id}
                        onClick={() => onCardClick(id, index)}
                    />
                ))}
            </div>

            <form onSubmit={addCardHandler} className={styles.addCardForm}>
                <input
                    type="text"
                    value={newCardTitle}
                    onChange={(e) => setNewCardTitle(e.target.value)}
                    placeholder="Add a new task"
                    className={styles.addCardInput}
                />
                <button type="submit" className={styles.addCardButton}>Add</button>
            </form>
        </div>
    );
};

export default CardList;
