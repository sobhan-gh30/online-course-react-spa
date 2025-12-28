import React, {useEffect, useState} from "react";
import courses from "../data/courses.js";
import CourseCart from "../components/commons/courseCart.jsx";
import {motion} from "motion/react";
import {useParams} from "react-router";

export default function Categories() {

    const [selectedCourses, setSelectedCourses] = useState([]);

    const selectedCategoryId = useParams().category;



    useEffect(() => {
        const coursesList = courses.filter(category => category.id === +selectedCategoryId );

        setSelectedCourses(coursesList[0].courses)
    }, []);



    // انیمیشن‌های فریمر موشن
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="container mx-auto px-5 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
            {
                selectedCourses.map((item)=>{
                    return <span key={item.id}><CourseCart {...item} /></span>;
                })
            }
        </motion.div>
    )

}