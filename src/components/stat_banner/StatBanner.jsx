import React from "react";
import styles from "./StatBanner.module.css";

const StatBanner = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.stats}>
                    <div className={styles.stat__block}>
                        <img src="1_Монтажная область 1 1.svg" alt="" />{" "}
                        <span className={styles.big__number}>3</span>
                        <div className={styles.stat__block__text}>
                            года работы
                        </div>
                    </div>
                    <div className={styles.stat__block}>
                        <img src="1_Монтажная область 1 копия 1.svg" alt="" />
                        <span className={styles.big__number}>300</span>
                        <div className={styles.stat__block__text}>
                            человек обучили
                        </div>
                    </div>
                    <div className={styles.stat__block}>
                        <img src="1_Монтажная область 1 1 (1).svg" alt="" />
                        <span className={styles.big__number}>5</span>
                        <div className={styles.stat__block__text}>
                            реализованных программ
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default StatBanner;
