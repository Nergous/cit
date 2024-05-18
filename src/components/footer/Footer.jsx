import React from "react";
import "../../App.css";

import styles from "./Footer.module.css";

import { useState, useEffect } from "react";

const Footer = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);

        // Очистка обработчика события при размонтировании компонента
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <footer className={styles.footer}>
            <div className="container" style={{ background: "#303030", width: "100%"}}>
                <div className={styles.footer__items}>
                    <div className={styles.left__footer}>
                        <div>
                            <div>(8212) 301-200, доб. 1234</div>
                            {windowWidth < 1100 ? (
                                ""
                            ) : (
                                <span
                                    style={{
                                        marginLeft: "10px",
                                        marginRight: "10px",
                                        fontWeight: "200",
                                        color: "#9B9B9B",
                                        fontSize: "24px",
                                    }}
                                >
                                    |
                                </span>
                            )}
                            <div>mail@cit.rkomi.ru</div>
                        </div>
                        <div>
                            Республика Коми, Сыктывкар, ул. Интернациональная,
                            д. 108а
                        </div>
                    </div>
                    <div className={styles.right__footer}>
                        {windowWidth > 400 ? (
                            <div className={styles.top__text}>
                                Министерство образования и науки Российской
                                Федерации
                            </div>
                        ) : (
                            ""
                        )}

                        <div className={styles.bottom__text}>
                            Лицензия Серия 11ЛО1 №0001971, рег. №1631-П от
                            17.01.2018 г., выдана Министерством образования,
                            науки и молодежной политики Республики Коми
                        </div>
                    </div>
                </div>
                <hr className={styles.line}></hr>
                <div className={styles.bottom}>© 2020 ГАУ РК «ЦИТ»</div>
            </div>
        </footer>
    );
};

export default Footer;
