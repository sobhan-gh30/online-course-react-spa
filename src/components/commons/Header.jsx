import React, { useState } from 'react';

const Header = () => {
    const [searchTerm, setSearchTerm] = useState('');

    // لینک‌های هدر
    const navLinks = [
        { id: 1, name: 'خانه', href: '#' },
        { id: 2, name: 'دوره ها', href: '#' },
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
                        <nav className="hidden md:flex items-center gap-5">
                            {navLinks.map((link) => (
                                <a
                                    key={link.id}
                                    href={link.href}
                                    className="text-gray-300 hover:text-green-200 font-medium transition-colors duration-200 relative
                                    after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-green-500 after:left-0 after:-bottom-1 after:transition-all after:duration-300
                                     hover:after:w-full"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* بخش جستجو */}
                    <div className="flex items-center">
                        <form onSubmit={handleSearch} className="relative">
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="جستجو..."
                                className="w-full md:w-64 py-1 px-4 rounded
                                 border border-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-900 focus:border-transparent bg-white/60 backdrop-blur-sm text-gray-800 placeholder-gray-600 "
                            />
                            <button
                                type="submit"
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-emerald-600 dark:hover:text-green-400"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                        </form>

                        {/* منوی موبایل */}
                        <button className="md:hidden ml-4 p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;