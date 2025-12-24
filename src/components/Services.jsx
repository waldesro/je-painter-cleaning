import { Card, CardContent } from "@/components/ui/Card";

import { useMemo } from "react";
import {
    Paintbrush,
    Home,
    Brush,
    Hammer,
    Sparkles,
    ClipboardCheck,
    Building2,
    CheckCircle2,
} from "lucide-react";

export default function Services() {
    const services = useMemo(
        () => [
            {
                title: "Interior Painting",
                icon: Paintbrush,
                items: [
                    "Walls, ceilings, trim, and doors",
                    "Clean cut lines and smooth finish",
                    "Careful prep and protection",
                ],
            },
            {
                title: "Exterior Painting",
                icon: Home,
                items: [
                    "Surface prep and priming",
                    "Durable exterior coatings",
                    "Curb appeal refresh",
                ],
            },
            {
                title: "Drywall & Prep",
                icon: Brush,
                items: [
                    "Patching and sanding",
                    "Caulking and surface prep",
                    "Ready-for-paint finishes",
                ],
            },
            {
                title: "Light Remodeling",
                icon: Hammer,
                items: [
                    "Trim and baseboard updates",
                    "Minor carpentry work",
                    "Punch-list projects",
                ],
            },
            {
                title: "Deep Cleaning",
                icon: Sparkles,
                items: [
                    "Kitchens and bathrooms",
                    "Floors and surface detailing",
                    "Thorough deep cleans",
                ],
            },
            {
                title: "Move In / Move Out",
                icon: ClipboardCheck,
                items: [
                    "Rental turnovers",
                    "Listing preparation",
                    "Detailed final clean",
                ],
            },
            {
                title: "Light Commercial",
                icon: Building2,
                items: [
                    "Offices and small spaces",
                    "Professional appearance",
                    "Flexible scheduling",
                ],
            },
            {
                title: "Free Estimates",
                icon: CheckCircle2,
                items: [
                    "Clear scope of work",
                    "Upfront pricing",
                    "No obligation",
                ],
            },
        ],
        []
    );

    return (
        <section id="services" className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="bg-white/80 backdrop-blur-sm shadow-xl border border-white/40 p-8 sm:p-12 rounded-2xl">
                    <h2 className="text-4xl sm:text-5xl font-bold text-blue-900 leading-tight mb-10 text-center">
                        Our Services
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service) => {
                            const Icon = service.icon;

                            return (
                                <Card key={service.title} className="text-center p-6">
                                    <CardContent>
                                        <Icon className="mx-auto text-blue-700" size={40} />
                                        <h3 className="text-xl font-semibold mt-4 mb-3">
                                            {service.title}
                                        </h3>

                                        <ul className="space-y-1 text-sm text-gray-700">
                                            {service.items.map((item) => (
                                                <li
                                                    key={item}
                                                    className="flex items-start gap-2 text-left"
                                                >
                                                    <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-blue-700" />
                                                    <span>{item}</span>
                                                </li>

                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
