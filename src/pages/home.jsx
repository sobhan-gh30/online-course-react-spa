import React from 'react';
import { motion } from "motion/react"

export default function Home(){
    // دیتای تستی برای دوره‌های پرفروش
    const topCourses = [
        { id: 1, title: 'طراحی رابط کاربری پیشرفته', instructor: 'علی محمدی', price: '۱,۲۰۰,۰۰۰ تومان', students: 1245, rating: 4.9 },
        { id: 2, title: 'توسعه وب با React', instructor: 'سارا احمدی', price: '۹۸۰,۰۰۰ تومان', students: 2156, rating: 4.8 },
        { id: 3, title: 'هوش مصنوعی و یادگیری ماشین', instructor: 'رضا کریمی', price: '۱,۵۰۰,۰۰۰ تومان', students: 987, rating: 4.9 },
        { id: 4, title: 'مدیریت پروژه‌های نرم‌افزاری', instructor: 'مریم جعفری', price: '۸۵۰,۰۰۰ تومان', students: 1678, rating: 4.7 },
    ];

    // دیتای تستی برای دسته‌بندی‌ها
    const categories = [
        { id: 1, name: 'برنامه‌نویسی', count: 42, icon: '💻' },
        { id: 2, name: 'طراحی UI/UX', count: 28, icon: '🎨' },
        { id: 3, name: 'علم داده', count: 19, icon: '📊' },
        { id: 4, name: 'مدیریت کسب‌وکار', count: 35, icon: '📈' },
        { id: 5, name: 'زبان‌های خارجی', count: 31, icon: '🌐' },
        { id: 6, name: 'مهارت‌های فردی', count: 27, icon: '🚀' },
    ];

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

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        }
    };

    const cardHoverVariants = {
        hover: {
            y: -10,
            scale: 1.02,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 20
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
                            <button className="px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-500 hover:from-emerald-500 hover:to-green-600 rounded-xl font-bold text-lg shadow-lg shadow-emerald-900/30 transition-all duration-300 hover:shadow-emerald-900/50">
                                شروع یادگیری
                            </button>
                            <button className="px-8 py-3 border border-emerald-500/50 hover:bg-emerald-900/30 rounded-xl font-bold text-lg backdrop-blur-sm transition-all duration-300">
                                مشاهده دوره‌ها
                            </button>
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
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        {[
                            { number: '۱۵,۰۰۰+', label: 'دانشجو' },
                            { number: '۳۲۰+', label: 'دوره آموزشی' },
                            { number: '۵۰+', label: 'مدرس حرفه‌ای' },
                            { number: '۹۸%', label: 'رضایت‌مندی' }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className="text-center p-6 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10"
                            >
                                <div className="text-3xl font-bold bg-gradient-to-r from-green-300 to-emerald-400 bg-clip-text text-transparent">
                                    {stat.number}
                                </div>
                                <div className="text-gray-400 mt-2">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

        </div>
    );
};