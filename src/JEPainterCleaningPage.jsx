import { useState } from "react";
import logo from "@/assets/je-logo.png";
import GalleryCarousel from "@/components/GalleryCarousel";
import Services from "@/components/Services";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";


/** Edit these later */
const BRAND = {
  name: "J&E Painting and Cleaning LLC",
  tagline: "Paint • Remodel • Clean",
  phoneDisplay: "(314) 497-3079",
  phoneTel: "+13144973079",
  email: "business@jepaintercleaning.com",
  serviceAreas: ["St. Louis County", "St. Charles", "O’Fallon", "Wentzville"],
};


export default function JEPainterCleaningPage() {
  const [contactOpen, setContactOpen] = useState(false);

  return (

    <div className="min-h-screen bg-white text-gray-900
    relative
    bg-center
    bg-no-repeat
    bg-cover
    sm:bg-fixed
    bg-[url('/images/mobile-background@2x.jpg')]
    sm:bg-[url('/images/background.png')]
    min-h-75 sm:min-h-125 lg:min-h-162.5
  "
    >
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-blue-50 shadow-md px-4 py-3">
        <div className="mx-auto max-w-6xl flex items-center justify-between flex-wrap sm:flex-nowrap gap-3 sm:gap-6">
          {/* Logo */}
          <img
            src={logo}
            alt="J&E Painter & Cleaning LLC logo"
            className="h-24 sm:h-20 w-auto object-contain"
          />
          <div className="flex flex-col items-end sm:flex-row sm:items-center sm:ml-auto gap-2 sm:gap-4">
            <Button
              className="bg-blue-700 hover:bg-blue-800 text-white text-sm font-medium px-5 py-2 rounded-full shadow-md hover:shadow-lg transition-transform duration-200 transform hover:scale-105 active:scale-100"
              onClick={() => setContactOpen(true)}
            >
              Contact Us
            </Button>

            <a
              href={`tel:${BRAND.phoneTel}`}
              className="flex items-center text-sm text-blue-700 font-medium transition-all duration-200 hover:text-white hover:bg-blue-700 px-4 py-2 rounded-full hover:scale-105 active:scale-100 shadow-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.51l.27 1.1a2 2 0 01-.45 1.84L7.21 9.79a16.06 16.06 0 007 7l2.34-2.34a2 2 0 011.84-.45l1.1.27A2 2 0 0121 16.72V19a2 2 0 01-2 2h-1C9.06 21 3 14.94 3 7V5z"
                />
              </svg>
              {BRAND.phoneDisplay}
            </a>
          </div>
        </div>
      </header>

      <div className="pt-24 sm:pt-28" />

      {/* HERO */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm shadow-xl border border-white/40 p-10 sm:p-14">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-900 leading-tight">
                Professional Painting & Cleaning Services
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-blue-800">
                Clean lines, careful prep, and a spotless finish for homes and light commercial spaces.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 text-lg rounded-xl shadow-lg transition duration-200"
                  onClick={() => setContactOpen(true)}
                >
                  Request a Free Estimate
                </Button>
              </div>

              <div className="mt-8 text-sm text-gray-600">
                Free estimates • Reliable scheduling • Respectful cleanup
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm shadow-xl border border-white/40 p-8 sm:p-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-blue-900 leading-tight mb-6 text-center">
              Locally owned and quality-driven
            </h2>

            <div className="max-w-4xl mx-auto">
              <p className="text-lg mb-4 text-justify text-gray-800">
                {BRAND.name} provides dependable painting, light remodeling, and detailed cleaning services for homeowners and
                small businesses in the St. Louis area. Whether you’re preparing a property for move-in, updating a room, or
                keeping your space looking its best, we focus on clean workmanship and clear communication.
              </p>

              <p className="text-lg mb-4 text-justify text-gray-800">
                We treat every project with care—from protecting floors and furniture, to thorough surface prep, to leaving
                the space neat at the end of each day. Our goal is simple: deliver results you can be proud of and service
                you’d recommend.
              </p>

              <p className="text-lg mt-6 italic text-justify text-gray-700">
                Our mission is excellence from beginning to end, provide accurate estimates, reliable scheduling, and a spotless finish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <Services />

      {/* Gallery */}
      <div className="py-20 px-4 max-w-6xl mx-auto bg-white/80 backdrop-blur-sm shadow-xl border border-white/40 p-6 sm:p-10">
      <GalleryCarousel title="Check our work Gallery" autoPlay autoPlayInterval={5000} />
      </div>
      <div className="pt-16 sm:pt-20" />
      {/* Footer */}
      <footer className="bg-white py-6 text-center text-sm text-gray-500">
        {new Date().getFullYear()} J&E Painter & Cleaning LLC. All rights reserved.
      </footer>

      {/* Modals */}
      <Modal open={contactOpen} title="Contact Us" onClose={() => setContactOpen(false)}>
        <ContactForm onSuccess={() => setContactOpen(false)} />
      </Modal>

    </div>
  );
}
