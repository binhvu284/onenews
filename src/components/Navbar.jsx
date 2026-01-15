import { useState } from 'react';
import { Search, Moon, Sun, Bookmark, User } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme === 'dark' ? '' : 'light');
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 glass border-b border-border"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <motion.div
                        className="flex items-center space-x-3"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                            <span className="text-white font-bold text-xl">O</span>
                        </div>
                        <span className="text-xl font-bold text-text">OneNews</span>
                    </motion.div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        {['Home', 'Explore', 'News', 'Social', 'Forum'].map((item) => (
                            <motion.a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-text-secondary hover:text-primary font-medium transition-colors"
                                whileHover={{ y: -2 }}
                                whileTap={{ y: 0 }}
                            >
                                {item}
                            </motion.a>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center space-x-4">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 rounded-lg hover:bg-surface transition-colors"
                        >
                            <Search className="w-5 h-5 text-text-secondary" />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={toggleTheme}
                            className="p-2 rounded-lg hover:bg-surface transition-colors"
                        >
                            {theme === 'dark' ? (
                                <Sun className="w-5 h-5 text-text-secondary" />
                            ) : (
                                <Moon className="w-5 h-5 text-text-secondary" />
                            )}
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 rounded-lg hover:bg-surface transition-colors"
                        >
                            <Bookmark className="w-5 h-5 text-text-secondary" />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-4 py-2 bg-primary text-white rounded-full font-medium flex items-center space-x-2 hover:shadow-lg hover:shadow-primary/50"
                        >
                            <User className="w-4 h-4" />
                            <span>Sign In</span>
                        </motion.button>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
