import React from "react";
import styles from "./Banner.module.css";

const Banner = () => {
    return (
        <div className="banner">
            <div className={styles.image__container}>
                <div className={styles.banner__text}>
                    <p>Учебный центр в сфере IT</p>
                    <p>Актуальные программы и преподаватели-практики</p>
                </div>
                <img src="Rectangle 8.png" alt="rect" />
                <img src="Vector.png" alt="vector" />
            </div>
        </div>
    );
};

export default Banner;
