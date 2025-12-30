import React from "react";
import {Link} from "react-router";
import Button from "../components/commons/btn.jsx";

export default function NotFound() {
    return (
        <div className="min-h-screen text-white flex items-center justify-center px-4">
            <div className="text-center max-w-lg">

                {/* عدد 404 */}
                <h1 className="text-8xl font-extrabold mb-6 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                    404
                </h1>

                {/* متن اصلی */}
                <h2 className="text-3xl font-bold mb-4">
                    صفحه مورد نظر پیدا نشد
                </h2>

                {/* توضیح */}
                <p className="text-gray-400 mb-10 leading-relaxed">
                    متأسفیم! صفحه‌ای که دنبالش هستید وجود ندارد یا ممکن است آدرس آن اشتباه وارد شده باشد.
                </p>

                {/* دکمه‌ها */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/">
                        <Button>بازگشت به صفحه اصلی</Button>
                    </Link>

                    <Link to="/courses">
                        <Button solid={false}>مشاهده دوره‌ها</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
