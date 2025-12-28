import React, {useEffect, useState} from 'react';
import { motion } from "motion/react"
import courses from "../data/courses.js"
import Button from "../components/commons/btn.jsx";
import HomeAnalytics from "../components/commons/home/homeAnalytics.jsx";
import CourseCart from "../components/commons/home/courseCart.jsx";
import CategoryCart from "../components/commons/home/categoryCart.jsx";
import {Link} from "react-router";




export default function Home(){

    const [allCourses, setAllCourses] = useState([]);
    const [topCourses, setTopCourses] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // 1. جمع کردن همه دوره‌ها
        const all = courses.flatMap(category => category.courses);

        // 2. مرتب‌سازی و گرفتن ۴ تای برتر
        const top = [...all]
            .sort((a, b) => b.students - a.students)
            .slice(0, 4);

        const categoryList = courses.map(category => ({
            id: category.id,
            name: category.title,       // عنوان دسته‌بندی
            icon: category.icon,        // آیکون دسته‌بندی
            count: category.courses.length  // تعداد دوره‌ها
        }));

        setAllCourses(all);
        setTopCourses(top);
        setCategories(categoryList);

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
        <div className="min-h-screen">

            {/* بخش خوش‌آمدگویی */}
            <section className="relative overflow-hidden pt-20 pb-32 px-4">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-900/10 via-transparent to-green-900/5"></div>

                <div className="container mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, type: "spring" }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                آموزش حرفه‌ای
              </span>
                            <br />
                            <span className="text-white">برای آینده‌ی درخشان</span>
                        </h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
                        >
                            با بهترین دوره‌های آنلاین، مهارت‌های خود را ارتقا دهید و به جامعه‌ی متخصصان بپیوندید. یادگیری را با استانداردهای جهانی شروع کنید.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.7, type: "spring" }}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <Link to="/courses">
                              <Button >شروع یادگیری</Button>
                            </Link>
                            <Link to="/courses">
                                <Button solid={false}>مشاهده دوره ها</Button>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>

                {/* آمارها */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="container mx-auto mt-20"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                        {[
                            {item:1 , number: '۱۵,۰۰۰+', label: 'دانشجو' },
                            {item:2 , number: '۳۲۰+', label: 'دوره آموزشی' },
                            {item:3 , number: '۵۰+', label: 'مدرس حرفه‌ای' },
                            {item:4 , number: '۹۸%', label: 'رضایت‌مندی' }
                        ].map(item =><HomeAnalytics {...item} key={item.id} />)}
                    </div>
                </motion.div>
            </section>

            {/* بخش دسته‌بندی‌ها */}
            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold mb-4">
                          <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                            دسته‌بندی‌های آموزشی
                          </span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            دوره‌ها را براساس زمینه‌های تخصصی مختلف جستجو کنید
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex flex-wrap justify-center gap-6"
                    >
                        {categories.map((category) => (
                            <Link to={`/courses/${category.id}`}>
                                <CategoryCart key={category.id} {...category} />
                            </Link>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* بخش پرفروش‌ترین دوره‌ها */}
            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                                پرفروش‌ترین دوره‌ها
                            </span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            محبوب‌ترین دوره‌های آموزشی که توسط هزاران دانشجو انتخاب شده‌اند
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    >
                        {
                             topCourses.map((item)=>{
                                return <span key={item.id}><CourseCart {...item} /></span>;
                        })
                        }
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="text-center mt-12"
                    >

                        <Link to="/courses">
                            <Button solid={false}>همه دوره ها</Button>
                        </Link>

                    </motion.div>
                </div>
            </section>

            {/* بخش CTA پایانی */}
            <section className="py-20 px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="container mx-auto max-w-4xl"
                >
                    <div className="rounded-3xl overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/30 to-green-900/20"></div>
                        <div className="relative z-10 p-12 text-center">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl font-bold mb-6"
                            >
                <span className="bg-gradient-to-r from-green-300 to-emerald-400 bg-clip-text text-transparent">
                  همین امروز یادگیری را شروع کنید
                </span>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
                            >
                                به جمع هزاران دانشجوی ما بپیوندید و مسیر شغلی خود را متحول کنید
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                            >

                                <Link to="/courses">
                                    <Button>شروع یادگیری</Button>
                                </Link>

                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};