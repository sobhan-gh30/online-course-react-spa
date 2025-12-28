import React, { useState } from 'react';
import {Link} from "react-router";

const Header = () => {
    const [searchTerm, setSearchTerm] = useState('');

    // لینک‌های هدر
    const navLinks = [
        { id: 1, name: 'خانه', href: '/' },
        { id: 2, name: 'دوره ها', href: '/courses' },
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            alert(`جستجوی: ${searchTerm}`);
            // در اینجا می‌توانید منطق جستجوی خود را پیاده‌سازی کنید
        }
    };

    return (
        <header className="fixed top-2 z-50 w-full">
            <div className="container rounded-xl mx-auto backdrop-blur-md bg-zinc-900/60  border-b border-white/20 shadow-lg px-4 py-3">
                <div className="flex items-center justify-between">
                    <div className={"flex gap-8"}>
                        {/* بخش لوگو */}
                        <div className="flex items-center rtl:space-x-reverse">
                            <a href={"https://github.com/sobhan-gh30"} target={'_blank'} className="text-3xl font-bold
                             bg-gradient-to-r from-green-600 to-emerald-500 hover:from-emerald-500 hover:to-green-600
                             transition bg-clip-text text-transparent">
                                Sobhan-gh30
                            </a>
                        </div>

                        {/* بخش ناوبری */}
                        <nav className="flex items-center gap-5">
                            {navLinks.map((link) => (
                                <Link
                                    to={link.href}
                                    className="text-gray-300 hover:text-green-200 font-medium transition-colors duration-200 relative
                                    after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-green-500 after:left-0 after:-bottom-1 after:transition-all after:duration-300
                                     hover:after:w-full"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;