import React from "react";

export default function HomeAnalytics({number,label}) {
    return (
        <div
            className="text-center hover:scale-105 transition p-4 rounded-md backdrop-blur-sm bg-slate-900/40 border border-white/20"
        >
            <div className="text-3xl font-bold bg-gradient-to-r from-green-300 to-emerald-500 bg-clip-text text-transparent">
                {number}
            </div>
            <div className="text-gray-300 mt-2">{label}</div>
        </div>
    )
}