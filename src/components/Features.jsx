import { motion } from 'framer-motion';
import { Newspaper, Globe, MessageCircle, Zap, Bookmark, Bell } from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: Newspaper,
            title: 'Real-Time News',
            description: 'Get breaking news updates from around the world as they happen, with AI-powered summaries.',
            color: 'from-emerald-500 to-teal-500',
        },
        {
            icon: Globe,
            title: 'Social Feed',
            description: 'Discover trending stories shared by the community with real-time social engagement.',
            color: 'from-blue-500 to-cyan-500',
        },
        {
            icon: MessageCircle,
            title: 'Community Forum',
            description: 'Join discussions, share opinions, and connect with readers who share your interests.',
            color: 'from-purple-500 to-pink-500',
        },
        {
            icon: Zap,
            title: 'Instant Alerts',
            description: 'Never miss important news with customizable push notifications and alerts.',
            color: 'from-yellow-500 to-orange-500',
        },
        {
            icon: Bookmark,
            title: 'Save & Organize',
            description: 'Bookmark articles and organize them into collections for easy access later.',
            color: 'from-rose-500 to-red-500',
        },
        {
            icon: Bell,
            title: 'Smart Notifications',
            description: 'AI-curated notifications based on your reading habits and preferences.',
            color: 'from-indigo-500 to-violet-500',
        },
    ];

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                        FEATURES
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                        Everything You Need
                    </h2>
                    <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                        Powerful features designed to keep you informed, engaged, and connected with the
                        stories that matter most.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8, transition: { duration: 0.2 } }}
                            className="group relative"
                        >
                            <div className="glass rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 h-full">
                                {/* Icon */}
                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <feature.icon className="w-full h-full text-white" />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold mb-3 text-text group-hover:text-primary transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-text-secondary leading-relaxed">
                                    {feature.description}
                                </p>

                                {/* Hover Effect */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
