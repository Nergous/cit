import React from "react";
import { useRef, useState, useEffect } from "react";

import Title from "../title/Title";
import CourseCard from "./course_card/CourseCard";

import styles from "./Courses.module.css";
import "../../App.css";

const Courses = () => {
    const courses = [
        {
            title: "Основы информационной безопасности",
            duration: "7 дней",
            for_who:
                "руководителям и специалистам, отвечающим за информационную безопасность государственных учреждений и коммерческих структур",
        },
        {
            title: "Обучение компьютерной грамотности специалистов учреждений здравоохранения",
            duration: "8 дней",
            for_who:
                "врачам, медицинским статистикам, медицинским сестрам, медицинским регистраторам.",
        },
        {
            title: "Эффективное использование инструментов Microsoft Office",
            duration: "3 дня",
            for_who: "специалистам.",
        },
        {
            title: "Третий возраст. Формирование информационного общества",
            duration: "14 дней",
            for_who: "Для людей старшего возраста, пенсионеров",
        },
        {
            title: "Третий возраст. Формирование информационного общества",
            duration: "14 дней",
            for_who: "Для людей старшего возраста, пенсионеров",
        },
        {
            title: "Третий возраст. Формирование информационного общества",
            duration: "14 дней",
            for_who: "Для людей старшего возраста, пенсионеров",
        },
        {
            title: "Третий возраст. Формирование информационного общества",
            duration: "14 дней",
            for_who: "Для людей старшего возраста, пенсионеров",
        },
        {
            title: "Третий возраст. Формирование информационного общества",
            duration: "14 дней",
            for_who: "Для людей старшего возраста, пенсионеров",
        },
        {
            title: "Третий возраст. Формирование информационного общества",
            duration: "14 дней",
            for_who: "Для людей старшего возраста, пенсионеров",
        },
        {
            title: "Третий возраст. Формирование информационного общества",
            duration: "14 дней",
            for_who: "Для людей старшего возраста, пенсионеров",
        },
    ];

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    let padding = 0;
    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);

        // Очистка обработчика события при размонтировании компонента
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const courseRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    const scrollLeft = () => {
        let scrollLength = 0;
        if (windowWidth < 500) {
            scrollLength = 300;
        } else {
            scrollLength = 500;
        }
        courseRef.current.scrollLeft -= scrollLength;
    };

    const scrollRight = () => {
        let scrollLength = 0;
        if (windowWidth < 500) {
            scrollLength = 300;
        } else {
            scrollLength = 500;
        }
        courseRef.current.scrollLeft += scrollLength;
    };

    const handleScroll = () => {
        const { scrollLeft, scrollWidth, clientWidth } = courseRef.current;
        setScrollPosition(scrollLeft);
        if (windowWidth > 1370) {
            padding = 190;
        } else if (windowWidth > 1000) {
            padding = 150;
        } else if (windowWidth > 700) {
            padding = 100;
        } else if (windowWidth > 500) {
            padding = 50;
        }
        setShowLeftArrow(scrollLeft > padding);
        setShowRightArrow(scrollLeft < clientWidth - padding);
    };

    useEffect(() => {
        const { scrollLeft, scrollWidth, clientWidth } = courseRef.current;

        if (windowWidth > 1370) {
            padding = 190;
        } else if (windowWidth > 1000) {
            padding = 150;
        } else if (windowWidth > 700) {
            padding = 100;
        } else if (windowWidth > 500) {
            padding = 40;
        }
        setShowRightArrow(scrollLeft < scrollWidth - clientWidth - padding);
    });

    return (
        <div id="course">
            <Title title="Актуальные курсы"></Title>
            <div
                className="container"
                style={{ paddingLeft: "5px", paddingRight: "5px" }}
            >
                <div
                    className={styles.course}
                    ref={courseRef}
                    onScroll={handleScroll}
                >
                    <button
                        className={styles.left}
                        onClick={scrollLeft}
                        style={{
                            display: showLeftArrow ? "block" : "none",
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                        >
                            <path
                                d="M18.08 29L10.58 21.5L10.58 19.4L18.08 11.9L20.21 14L15.29 18.95L32 18.95L32 21.95L15.29 21.95L20.24 26.9L18.08 29Z"
                                fill="currentColor"
                            />
                        </svg>
                    </button>
                    {courses.map((course, index) => (
                        <CourseCard
                            key={index}
                            title={course.title}
                            duration={course.duration}
                            for_who={course.for_who}
                        />
                    ))}

                    <button
                        className={styles.right}
                        onClick={scrollRight}
                        style={{
                            display: showRightArrow ? "block" : "none",
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                        >
                            <path
                                d="M21.92 11L29.42 18.5V20.6L21.92 28.1L19.79 26L24.71 21.05H8V18.05H24.71L19.76 13.1L21.92 11Z"
                                fill="currentColor"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Courses;
