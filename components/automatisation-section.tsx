'use client'
import {motion} from "framer-motion";
import Image from "next/image";

export default function AutomatisationSection() {
    return (
        <section className="w-full py-20 bg-white dark:bg-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <h2 className="text-4xl font-bold mb-6">Systèmes d'Automatisation</h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                            Améliorez l'efficacité et la productivité avec nos solutions d'automatisation adaptées à divers secteurs industriels.
                        </p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.8 }} className="relative">
                        <Image src="/domotique-2.jpg" alt="Automatisation" width={600} height={600} className="w-full h-auto rounded-lg shadow-xl" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}