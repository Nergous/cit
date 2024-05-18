import React from "react";
import styles from "./CourseCard.module.css";

const CourseCard = (props) => {
    return (
        <div className={styles.card}>
            <div className={styles.title}>{props.title}</div>
            <div className={styles.duration}>{props.duration}</div>
            <div className={styles.for_who}>
                Может быть полезно: <b>{props.for_who}</b>
            </div>

            <div className={styles.buttons}>
                <button className={styles.about}>Подробности</button>
                <button className={styles.signup}>Записаться</button>
            </div>
        </div>
    );
};

export default CourseCard;
