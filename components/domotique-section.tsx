'use client'
import {motion} from "framer-motion";
import Image from "next/image";

export default function DomotiqueSection() {
    return (
        <section className="w-full py-20 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <h2 className="text-4xl font-bold mb-6">Solutions de Domotique</h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                            Imaginez une maison qui s'adapte à vous : c'est la promesse de nos solutions de domotique. Nos systèmes intelligents apprennent vos habitudes pour optimiser la gestion de l'énergie, améliorer votre bien-être et garantir votre sécurité. Explorez notre gamme d'équipements connectés, conçus pour rendre votre habitat plus réactif, plus sûr et plus agréable à vivre au quotidien.
                        </p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.8 }} className="relative">
                        <Image src="/domotique-1.jpg" alt="Domotique" width={400} height={400} className="w-full h-auto rounded-lg shadow-xl" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
