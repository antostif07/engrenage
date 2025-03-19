"use client"

import { motion } from "framer-motion"

interface PageTitleProps {
    title: string
    subtitle?: string // Optional subtitle
    backgroundImage?: string // Optional background image URL
}

const PageTitle: React.FC<PageTitleProps> = ({ title, subtitle, backgroundImage }) => {
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                delay: 0.2,
            },
        },
    }

    return (
        <section
            className="relative py-24 bg-gray-100 dark:bg-gray-800 overflow-hidden w-full" // Added overflow-hidden
            style={{
                backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Overlay for better text readability (optional) */}
            {backgroundImage && (
                <div className="absolute inset-0 bg-black opacity-30"></div> // Adjust opacity as needed
            )}

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* relative and z-10 to ensure content is above the background and overlay */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-center"
                >
                    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{title}</h1>
                    {subtitle && (
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            {subtitle}
                        </p>
                    )}
                </motion.div>
            </div>
        </section>
    )
}

export default PageTitle