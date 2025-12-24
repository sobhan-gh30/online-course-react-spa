import React from 'react';
import { motion } from "motion/react"
import Button from "../components/commons/btn.jsx";

export default function Home(){
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
                          <Button >شروع یادگیری</Button>
                          <Button solid={false}>مشاهده دوره ها</Button>
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