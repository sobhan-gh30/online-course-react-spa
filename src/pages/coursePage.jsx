import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import courses from "../data/courses.js"; // دیتاهای دوره‌ها
import Button from "../components/commons/btn.jsx";

export default function CoursePage() {
    const courseId = useParams().id; // گرفتن آی‌دی دوره از URL
    const [course, setCourse] = useState(null);

    useEffect(() => {
        const allCourses = courses.flatMap(cat => cat.courses);
        const selectedCourse = allCourses.find(c => c.id.toString() === courseId);
        setCourse(selectedCourse);
    }, [courseId]);

    if (!course) return <div className="text-white text-center mt-32">دوره پیدا نشد...</div>;

    return (
        <div className="min-h-screen text-white px-4 py-16">
            {/* هدر دوره */}
            <div className="max-w-5xl mx-auto mb-12">
                <h1 className="text-5xl font-bold mb-4">{course.title}</h1>
                <p className="text-gray-400 mb-2">مدرس: {course.instructor}</p>
                <p className="text-gray-400">تعداد دانشجو: {course.students}</p>
            </div>

            {/* بخش تصویر و توضیحات */}
            <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-8">
                {/* تصویر دوره */}
                <img src={`/images/${course.img}`}
                     alt={course.title}
                     className="rounded-2xl w-full lg:w-1/2 object-cover" />

                {/* توضیحات و CTA */}
                <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-4">توضیحات دوره</h2>
                    <p className="text-gray-300 mb-6">{course.description || "توضیحات کاملی برای این دوره موجود نیست."}</p>

                    <h3 className="text-2xl font-semibold mb-3">سرفصل‌ها:</h3>
                    <ul className="list-disc list-inside mb-6 text-gray-300">
                        {course.curriculum?.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        )) || <li>سرفصل‌ها موجود نیست</li>}
                    </ul>

                    <Button>شروع دوره</Button>
                </div>
            </div>

            {/* لینک بازگشت */}
            <div className="max-w-5xl mx-auto mt-12 text-center">
                <Link to="/courses" className="text-green-400 hover:underline">
                    ← بازگشت به همه دوره‌ها
                </Link>
            </div>
        </div>
    );
}
