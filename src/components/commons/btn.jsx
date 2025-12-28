import React from "react";

export default function Button({solid=true, children }) {
    if (solid){
        return (
            <span className="inline-block px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-500 hover:from-emerald-500 hover:to-green-600 rounded-xl font-bold text-lg shadow-lg shadow-emerald-900/30 transition-all duration-300 hover:shadow-emerald-900/50">
                {children}
            </span>
        )
    } else {
        return (
            <span className="inline-block px-8 py-3 border border-emerald-500/50 hover:bg-emerald-900/30 rounded-xl font-bold text-lg backdrop-blur-sm transition-all duration-300">
                {children}
            </span>
        )
    }
}