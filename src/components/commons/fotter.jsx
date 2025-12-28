export default function Footer(){
    // لینک‌های فوتر
    const footerLinks = [
        { id: 1, name: 'خانه', href: '/' },
        { id: 2, name: 'دوره ها', href: '/courses' },
    ];

    // لینک‌های شبکه‌های اجتماعی
    const socialLinks = [
        { id: 1, name: 'اینستاگرام', href: 'https://www.instagram.com/devlife.with.sobhan?igsh=MTExMWVodWdzaW44aQ==', icon: 'M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z' },
        { id: 2, name: 'گیت‌هاب', href: 'https://github.com/sobhan-gh30', icon: 'M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.09.682-.217.682-.482 0-.237-.009-.866-.014-1.7-2.782.602-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.27 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.295 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .267.18.577.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z' },
    ];

    return (
        <footer className="w-11/12 rounded-xl mx-auto mt-8 backdrop-blur-md bg-zinc-900/60 border-t border-white/20 shadow-lg">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* بخش لوگو و توضیحات */}
                    <div className="space-y-4">
                        <a href={"https://github.com/sobhan-gh30"} target={'_blank'} rel="noopener noreferrer" className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent inline-block">
                            Sobhan-gh30
                        </a>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, sit!
                        </p>

                        {/* بخش شبکه‌های اجتماعی */}
                        <div className="pt-4">
                            <h3 className="text-gray-300 font-medium mb-3">شبکه‌های اجتماعی</h3>
                            <div className="flex gap-5">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.id}
                                        href={social.href}
                                        className="text-gray-400 hover:text-green-400 transition-colors duration-300 p-2 rounded-full bg-white/10 hover:bg-white/20"
                                        title={social.name}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path d={social.icon} />
                                        </svg>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* لینک‌های سریع */}
                    <div>
                        <h3 className="text-xl font-semibold text-gray-200 mb-4 pb-2 border-b border-white/10">لینک‌های سریع</h3>
                        <div className="grid grid-cols-2 gap-3">
                            {footerLinks.map((link) => (
                                <a
                                    key={link.id}
                                    href={link.href}
                                    className="text-gray-400 hover:text-green-300 transition-colors duration-200 py-1 relative
                                    after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-green-500 after:right-0 after:-bottom-1 after:transition-all after:duration-300
                                     hover:after:w-full"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* اطلاعات تماس */}
                    <div>
                        <h3 className="text-xl font-semibold text-gray-200 mb-4 pb-2 border-b border-white/10">تماس با ما</h3>
                        <div className="space-y-3 text-gray-400">
                            <div className="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 mt-0.5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span className="text-sm">۰9360674391</span>
                            </div>
                            <div className="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 mt-0.5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span className="text-sm">mohammadghasemi3033@gmail.com</span>
                            </div>
                            <div className="flex items-start ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 mt-0.5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="text-sm">بوشهر</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* بخش کپی رایت */}
                <div className="border-t border-white/10 mt-8 pt-6 text-center">
                    <p className="text-gray-300 text-xs mt-1">
                        طراحی و توسعه با ❤️ توسط
                        <a href={"https://github.com/sobhan-gh30"} className="text-green-500 mx-2">Sobhan-gh30</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};
