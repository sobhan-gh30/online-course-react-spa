import React, {useEffect, useState} from "react";
import courses from "../data/courses.js";
import CourseCart from "../components/commons/courseCart.jsx";
import {motion} from "motion/react";

export default function Courses() {

    const [allCourses, setAllCourses] = useState([]);

    useEffect(() => {
        // 1. جمع کردن همه دوره‌ها
        const all = courses.flatMap(category => category.courses);

        setAllCourses(all);
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
                allCourses.map((item)=>{
                    return <span key={item.id}><CourseCart {...item} /></span>;
                })
            }
        </motion.div>
    )

}