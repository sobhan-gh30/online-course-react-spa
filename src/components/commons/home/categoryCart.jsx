import { motion } from "motion/react"

export default function CategoryCart({icon, name, count}){

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
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group w-40"
        >
            <div className="aspect-square rounded-full backdrop-blur-sm bg-white/5 border border-white/10 hover:border-emerald-500/30 p-6 flex flex-col items-center justify-center text-center transition-all duration-300 cursor-pointer">
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {icon}
                </div>
                <h3 className="font-bold text-sm mb-2 group-hover:text-green-300 transition-colors">
                    {name}
                </h3>
                <div className="text-gray-400 text-sm">
                    {count} دوره
                </div>
            </div>
        </motion.div>
    )
}