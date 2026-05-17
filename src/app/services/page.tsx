import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CTASection from "../../sections/CTASection";

import {
  Waves,
  Hotel,
  Building2,
  Sparkles,
  Droplets,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    icon: Waves,
    title: "Luxury Villa Pools",
    description:
      "Custom-designed luxury swimming pools crafted for premium villas and private residences.",
  },
  {
    icon: Hotel,
    title: "Resort & Hotel Pools",
    description:
      "Elegant resort-style pool solutions designed for hospitality and luxury experiences.",
  },
  {
    icon: Building2,
    title: "Infinity Pool Design",
    description:
      "Modern infinity edge pools with premium architectural aesthetics and engineering.",
  },
  {
    icon: Sparkles,
    title: "Pool Renovation",
    description:
      "Transform outdated pools into luxurious modern spaces with premium finishes.",
  },
  {
    icon: Droplets,
    title: "Filtration Systems",
    description:
      "Advanced filtration and purification systems for crystal clear water quality.",
  },
  {
    icon: ShieldCheck,
    title: "Maintenance Support",
    description:
      "Reliable maintenance solutions and expert technical support services.",
  },
];

export default function ServicesPage() {
  return (
    <main>

      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0f172a] pt-40 pb-28 text-white">

        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/20 to-cyan-400/10" />

        <div className="container-custom relative z-10 text-center">

          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
            Our Services
          </p>

          <h1 className="text-5xl font-bold leading-tight md:text-7xl">

            Premium Swimming
            <br />

            Pool Solutions

          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-gray-300">
            Arya Group delivers luxury swimming pool construction,
            renovation, filtration systems, and architectural
            pool solutions for premium residential and commercial spaces.
          </p>

        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white py-28">

        <div className="container-custom">

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-[36px] border border-gray-100 bg-white p-10 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
                >

                  {/* Glow */}
                  <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-sky-100 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

                  {/* Icon */}
                  <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-sky-500 to-cyan-400 text-white shadow-lg shadow-sky-500/20">

                    <Icon size={36} />

                  </div>

                  {/* Content */}
                  <div className="relative z-10">

                    <h3 className="mt-10 text-3xl font-bold text-gray-900">
                      {service.title}
                    </h3>

                    <p className="mt-6 leading-relaxed text-gray-600">
                      {service.description}
                    </p>

                    <button className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-sky-500 transition hover:gap-3">
                      Learn More →
                    </button>

                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* Extra Section */}
      <section className="bg-[#f8fafc] py-28">

        <div className="container-custom grid items-center gap-20 lg:grid-cols-2">

          {/* Left */}
          <div>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-sky-500">
              Luxury Engineering
            </p>

            <h2 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl">

              Modern Pool
              <span className="bg-gradient-to-r from-sky-500 to-cyan-400 bg-clip-text text-transparent">
                {" "}
                Construction Standards
              </span>

            </h2>

            <p className="mt-8 text-lg leading-relaxed text-gray-600">
              We use premium materials, advanced engineering,
              and modern architectural concepts to deliver
              world-class swimming pool solutions.
            </p>

            <div className="mt-10 grid gap-5">

              {[
                "Premium European Technology",
                "Luxury Architectural Designs",
                "Energy Efficient Systems",
                "Professional Project Execution",
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-white px-6 py-5 shadow-sm"
                >

                  <p className="font-medium text-gray-700">
                    ✓ {item}
                  </p>

                </div>
              ))}

            </div>
          </div>

          {/* Right */}
          <div className="relative overflow-hidden rounded-[40px] shadow-2xl">

            <img
              src="/pool-hero.jpeg"
              alt="Luxury Pool"
              className="h-[700px] w-full object-cover"
            />

          </div>
        </div>
      </section>

      <CTASection />

      <Footer />

    </main>
  );
}