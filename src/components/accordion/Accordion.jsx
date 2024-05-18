import React from "react";
import styles from "./Accordion.module.css";

import { useState } from "react";

const Accordion = () => {

    const [openId, setOpenId] = useState(null);

    const handleClick = (id) => {
        if (id === openId) setOpenId(null);
        else setOpenId(id);
    }

    return (
        <div>
            <ul className={styles.accordion}>
                <li className={styles.accordion__item} key={1}>
                    <div className={styles.accordion__head}>
                        <div>Основные сведения</div>
                        <button className={styles.accordion__button} onClick={() => handleClick(1)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                style={{ transform: openId === 1 ? "rotate(180deg)" : "rotate(0deg)" }}
                            >
                                <path
                                    d="M16.939 7.93903L12 12.879L7.06096 7.93903L4.93896 10.061L12 17.121L19.061 10.061L16.939 7.93903Z"
                                    fill="#0050A0"
                                />
                            </svg>
                        </button>
                    </div>

                    <div
                        className={`${styles.accordion__collapse}  ${1 === openId ? styles.open : "" }`}
                    >
                        <div className={styles.accordion__body}>
                            <ol>
                                <li>
                                    О дате создания образовательной организации,
                                    об учредителе, учредителях образовательной
                                    организации.
                                </li>
                                <li>
                                    О месте нахождения образовательной
                                    организации и ее филиалов (при наличии).
                                </li>
                                <li> О режиме, графике работы. </li>
                                <li>
                                    О контактных телефонах и об адресах
                                    электронной почты.
                                </li>
                            </ol>
                        </div>
                    </div>
                </li>
                <li className={styles.accordion__item} key={2}>
                    <div className={styles.accordion__head}>
                        <div>
                            Структура и органы управления образовательной
                            организацией
                        </div>
                        <button className={styles.accordion__button} onClick={() => handleClick(2)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                style={{ transform: openId === 2 ? "rotate(180deg)" : "rotate(0deg)" }}
                            >
                                <path
                                    d="M16.939 7.93903L12 12.879L7.06096 7.93903L4.93896 10.061L12 17.121L19.061 10.061L16.939 7.93903Z"
                                    fill="#0050A0"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className={`${styles.accordion__collapse}  ${2 === openId ? styles.open : "" }`}>
                        <div className={styles.accordion__body}>
                            <div className={styles.struct__list}>
                                <figure className={styles.struct__item}>
                                    <img src="фото.png" alt="" />
                                    <figcaption className={styles.struct__text}>
                                        <div
                                            className={
                                                styles.struct__item__name
                                            }
                                        >
                                            Кокорин Николай Викторович
                                        </div>
                                        <div
                                            className={
                                                styles.struct__item__role
                                            }
                                        >
                                            И.о. директора
                                        </div>
                                    </figcaption>
                                </figure>

                                <figure className={styles.struct__item}>
                                    <img src="фото (1).png" alt="" />
                                    <figcaption className={styles.struct__text}>
                                        <div
                                            className={
                                                styles.struct__item__name
                                            }
                                        >
                                            Кравцов Сергей Игоревич
                                        </div>
                                        <div
                                            className={
                                                styles.struct__item__role
                                            }
                                        >
                                            Начальник отдела корпоративного
                                            обслуживания и продвижения услуг
                                        </div>
                                    </figcaption>
                                </figure>

                                <figure className={styles.struct__item}>
                                    <img src="фото (2).png" alt="" />
                                    <figcaption className={styles.struct__text}>
                                        <div
                                            className={
                                                styles.struct__item__name
                                            }
                                        >
                                            Влизко Виктория Михайловна
                                        </div>
                                        <div
                                            className={
                                                styles.struct__item__role
                                            }
                                        >
                                            Главный специалист отдела
                                            корпоративного обслуживания и
                                            продвижения услуг
                                        </div>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                </li>
                <li className={styles.accordion__item} key={3}>
                    <div className={styles.accordion__head}>
                        <div>Документы</div>
                        <button className={styles.accordion__button} onClick={() => handleClick(3)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                style={{ transform: openId === 3 ? "rotate(180deg)" : "rotate(0deg)" }}
                            >
                                <path
                                    d="M16.939 7.93903L12 12.879L7.06096 7.93903L4.93896 10.061L12 17.121L19.061 10.061L16.939 7.93903Z"
                                    fill="#0050A0"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className={`${styles.accordion__collapse}  ${3 === openId ? styles.open : "" }`}>
                        <div className={styles.accordion__body}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Velit euismod in pellentesque
                            massa placerat duis ultricies. Sagittis orci a
                            scelerisque purus semper eget duis. Eu non diam
                            phasellus vestibulum lorem sed risus ultricies. Ut
                            tortor pretium viverra suspendisse potenti nullam ac
                            tortor. Consectetur lorem donec massa sapien
                            faucibus. Congue mauris rhoncus aenean vel elit. Dui
                            faucibus in ornare quam viverra orci sagittis eu.
                            Massa massa ultricies mi quis. Sagittis purus sit
                            amet volutpat. Auctor augue mauris augue neque
                            gravida in fermentum et. Eu volutpat odio facilisis
                            mauris sit amet massa vitae. At quis risus sed
                            vulputate odio ut enim blandit.
                        </div>
                    </div>
                </li>
                <li className={styles.accordion__item} key={4}>
                    <div className={styles.accordion__head}>
                        <div>Образование</div>
                        <button className={styles.accordion__button} onClick={() => handleClick(4)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                style={{ transform: openId === 4 ? "rotate(180deg)" : "rotate(0deg)" }}
                            >
                                <path
                                    d="M16.939 7.93903L12 12.879L7.06096 7.93903L4.93896 10.061L12 17.121L19.061 10.061L16.939 7.93903Z"
                                    fill="#0050A0"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className={`${styles.accordion__collapse}  ${4 === openId ? styles.open : "" }`}>
                        <div className={styles.accordion__body}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Maecenas sed enim ut sem
                            viverra aliquet eget sit amet. Est lorem ipsum dolor
                            sit. Mauris rhoncus aenean vel elit scelerisque
                            mauris. Mauris in aliquam sem fringilla ut morbi.
                            Donec adipiscing tristique risus nec feugiat in
                            fermentum posuere urna. Potenti nullam ac tortor
                            vitae purus. Pellentesque adipiscing commodo elit at
                            imperdiet. Eleifend donec pretium vulputate sapien
                            nec sagittis. Augue eget arcu dictum varius.
                            Accumsan in nisl nisi scelerisque eu ultrices.
                            Natoque penatibus et magnis dis parturient montes
                            nascetur ridiculus. Nunc congue nisi vitae suscipit.
                            Condimentum id venenatis a condimentum vitae. Ipsum
                            a arcu cursus vitae. Lectus magna fringilla urna
                            porttitor rhoncus dolor purus non. Venenatis a
                            condimentum vitae sapien pellentesque habitant
                            morbi. Quam lacus suspendisse faucibus interdum
                            posuere lorem ipsum. Pretium lectus quam id leo.
                            Neque vitae tempus quam pellentesque nec nam. Sed
                            velit dignissim sodales ut eu sem integer vitae.
                            Mattis enim ut tellus elementum sagittis vitae et.
                            Fringilla phasellus faucibus scelerisque eleifend
                            donec pretium. Iaculis eu non diam phasellus.
                            Ullamcorper a lacus vestibulum sed arcu non odio
                            euismod. Id diam maecenas ultricies mi eget mauris
                            pharetra et ultrices. Feugiat vivamus at augue eget
                            arcu dictum varius duis at. Vel elit scelerisque
                            mauris pellentesque pulvinar pellentesque habitant
                            morbi. Mauris pellentesque pulvinar pellentesque
                            habitant morbi tristique.
                        </div>
                    </div>
                </li>
                <li className={styles.accordion__item} key={5}>
                    <div className={styles.accordion__head}>
                        <div> Образовательные стандарты</div>
                        <button className={styles.accordion__button} onClick={() => handleClick(5)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                style={{ transform: openId === 5 ? "rotate(180deg)" : "rotate(0deg)" }}
                            >
                                <path
                                    d="M16.939 7.93903L12 12.879L7.06096 7.93903L4.93896 10.061L12 17.121L19.061 10.061L16.939 7.93903Z"
                                    fill="#0050A0"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className={`${styles.accordion__collapse}  ${5 === openId ? styles.open : "" }`}>
                        <div className={styles.accordion__body}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Venenatis urna cursus eget nunc
                            scelerisque. Mauris augue neque gravida in. Urna nec
                            tincidunt praesent semper. Habitant morbi tristique
                            senectus et. Molestie a iaculis at erat
                            pellentesque. Tincidunt praesent semper feugiat nibh
                            sed. At volutpat diam ut venenatis tellus. Fusce ut
                            placerat orci nulla. Ornare arcu odio ut sem nulla
                            pharetra diam. Pharetra massa massa ultricies mi
                            quis. Non sodales neque sodales ut.
                        </div>
                    </div>
                </li>
                <li className={styles.accordion__item} key={6}>
                    <div className={styles.accordion__head}>
                        <div>
                            Материально-техническое обеспечение и оснащенность
                            образовательного процесса
                        </div>
                        <button className={styles.accordion__button} onClick={() => handleClick(6)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                style={{ transform: openId === 6 ? "rotate(180deg)" : "rotate(0deg)" }}
                            >
                                <path
                                    d="M16.939 7.93903L12 12.879L7.06096 7.93903L4.93896 10.061L12 17.121L19.061 10.061L16.939 7.93903Z"
                                    fill="#0050A0"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className={`${styles.accordion__collapse}  ${6 === openId ? styles.open : "" }`}>
                        <div className={styles.accordion__body}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Venenatis urna cursus eget nunc
                            scelerisque. Mauris augue neque gravida in. Urna nec
                            tincidunt praesent semper. Habitant morbi tristique
                            senectus et. Molestie a iaculis at erat
                            pellentesque. Tincidunt praesent semper feugiat nibh
                            sed. At volutpat diam ut venenatis tellus. Fusce ut
                            placerat orci nulla. Ornare arcu odio ut sem nulla
                            pharetra diam. Pharetra massa massa ultricies mi
                            quis. Non sodales neque sodales ut.
                        </div>
                    </div>
                </li>
                <li className={styles.accordion__item} key={7}>
                    <div className={styles.accordion__head}>
                        <div>Стипендии и иные виды материальной поддержки</div>
                        <button className={styles.accordion__button} onClick={() => handleClick(7)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                style={{ transform: openId === 7 ? "rotate(180deg)" : "rotate(0deg)" }}
                            >
                                <path
                                    d="M16.939 7.93903L12 12.879L7.06096 7.93903L4.93896 10.061L12 17.121L19.061 10.061L16.939 7.93903Z"
                                    fill="#0050A0"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className={`${styles.accordion__collapse}  ${7 === openId ? styles.open : "" }`}>
                        <div className={styles.accordion__body}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Venenatis urna cursus eget nunc
                            scelerisque. Mauris augue neque gravida in. Urna nec
                            tincidunt praesent semper. Habitant morbi tristique
                            senectus et. Molestie a iaculis at erat
                            pellentesque. Tincidunt praesent semper feugiat nibh
                            sed. At volutpat diam ut venenatis tellus. Fusce ut
                            placerat orci nulla. Ornare arcu odio ut sem nulla
                            pharetra diam. Pharetra massa massa ultricies mi
                            quis. Non sodales neque sodales ut.
                        </div>
                    </div>
                </li>
                <li className={styles.accordion__item} key={8}>
                    <div className={styles.accordion__head}>
                        <div>Платные образовательные услуги</div>
                        <button className={styles.accordion__button} onClick={() => handleClick(8)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                style={{ transform: openId === 8 ? "rotate(180deg)" : "rotate(0deg)" }}
                            >
                                <path
                                    d="M16.939 7.93903L12 12.879L7.06096 7.93903L4.93896 10.061L12 17.121L19.061 10.061L16.939 7.93903Z"
                                    fill="#0050A0"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className={`${styles.accordion__collapse}  ${8 === openId ? styles.open : "" }`}>
                        <div className={styles.accordion__body}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Venenatis urna cursus eget nunc
                            scelerisque. Mauris augue neque gravida in. Urna nec
                            tincidunt praesent semper. Habitant morbi tristique
                            senectus et. Molestie a iaculis at erat
                            pellentesque. Tincidunt praesent semper feugiat nibh
                            sed. At volutpat diam ut venenatis tellus. Fusce ut
                            placerat orci nulla. Ornare arcu odio ut sem nulla
                            pharetra diam. Pharetra massa massa ultricies mi
                            quis. Non sodales neque sodales ut.
                        </div>
                    </div>
                </li>
                <li className={styles.accordion__item} key={9}>
                    <div className={styles.accordion__head}>
                        <div>Финансово-хозяйственная деятельность</div>
                        <button className={styles.accordion__button} onClick={() => handleClick(9)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                style={{ transform: openId === 9 ? "rotate(180deg)" : "rotate(0deg)" }}
                            >
                                <path
                                    d="M16.939 7.93903L12 12.879L7.06096 7.93903L4.93896 10.061L12 17.121L19.061 10.061L16.939 7.93903Z"
                                    fill="#0050A0"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className={`${styles.accordion__collapse}  ${9 === openId ? styles.open : "" }`}>
                        <div className={styles.accordion__body}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Venenatis urna cursus eget nunc
                            scelerisque. Mauris augue neque gravida in. Urna nec
                            tincidunt praesent semper. Habitant morbi tristique
                            senectus et. Molestie a iaculis at erat
                            pellentesque. Tincidunt praesent semper feugiat nibh
                            sed. At volutpat diam ut venenatis tellus. Fusce ut
                            placerat orci nulla. Ornare arcu odio ut sem nulla
                            pharetra diam. Pharetra massa massa ultricies mi
                            quis. Non sodales neque sodales ut.
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Accordion;
