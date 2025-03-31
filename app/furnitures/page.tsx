import PageTitle from "@/components/page-title";
import CTA from "@/components/cta";
import DomotiqueSection from "@/components/domotique-section";
import AutomatisationSection from "@/components/automatisation-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Fournitures | Engrenage Corporation",
    description:
        "Découvrez notre gamme de fournitures, incluant des solutions de domotique et de systèmes d'automatisation pour vos projets.",
};

export default function FournituresPage() {
    return (
        <main className="flex min-h-screen flex-col items-center py-16 -mb-20">
            <PageTitle title={'Fournitures'} backgroundImage={'/bg-2.jpg'} />
            <DomotiqueSection />
            <AutomatisationSection />
            <CTA />
        </main>
    );
}
