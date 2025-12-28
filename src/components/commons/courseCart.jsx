import { motion } from "motion/react"
import {Link} from "react-router";
import {useEffect} from "react";
export default function CourseCart({id,title, instructor, rating, students, price, img}){

    useEffect(() => {

    }, []);

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

    return (
        <motion.div
            variants={itemVariants}
            whileHover="hover"
            className="group"
        >
            <div className="h-full rounded-2xl overflow-hidden
             backdrop-blur-sm bg-white/5 border border-white/10
              hover:border-emerald-500/30 p-6
               flex flex-col transition-all duration-300">
                <div className="mb-4">
                    <div className="w-full h-40 bg-gradient-to-br from-emerald-900/30 to-green-900/20 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                            <img src={`./images/${img}`} alt=""/>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-green-300 transition-colors">
                        {title}
                    </h3>
                    <p className="text-gray-400 mb-4">مدرس: {instructor}</p>
                </div>

                <div className="mt-auto">
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center gap-1">
                            <span className="text-yellow-400">★</span>
                            <span>{rating}</span>
                            <span className="text-gray-500 text-sm">({students} دانشجو)</span>
                        </div>
                        <div className="text-xl font-bold text-emerald-400">{price}</div>
                    </div>
                    <Link to={`/courses/${id.toString().slice(0,1)}/${id}`} className="inline-block text-center w-full py-3 rounded-xl bg-gradient-to-r from-emerald-900/40 to-green-900/40 hover:from-emerald-800/60 hover:to-green-800/60 border border-emerald-800/30 font-medium transition-all duration-300">
                        مشاهده جزئیات
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}