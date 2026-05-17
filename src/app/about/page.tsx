import Image from "next/image";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CTASection from "../../sections/CTASection";

import {
  ShieldCheck,
  Sparkles,
  Wrench,
  Building2,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Premium Engineering",
    description:
      "Advanced swimming pool engineering with modern construction standards.",
  },
  {
    icon: Sparkles,
    title: "Luxury Design",
    description:
      "Elegant architectural aesthetics crafted for premium spaces.",
  },
  {
    icon: Wrench,
    title: "Expert Support",
    description:
      "Reliable maintenance and technical support services.",
  },
  {
    icon: Building2,
    title: "Custom Solutions",
    description:
      "Tailor-made swimming pool concepts for luxury projects.",
  },
];

export default function AboutPage() {
  return (
    <main>

      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0f172a] pt-40 pb-28 text-white">

        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/20 to-cyan-400/10" />

        <div className="container-custom relative z-10 text-center">

          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
            About Arya Group
          </p>

          <h1 className="text-5xl font-bold leading-tight md:text-7xl">

            Crafting Luxury
            <br />

            Swimming Pool
            <br />

            Experiences

          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-gray-300">
            Arya Group specializes in premium swimming pool
            construction for luxury villas, resorts, hotels,
            and architectural spaces with world-class
            engineering and modern design.
          </p>

        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-28">

        <div className="container-custom grid items-center gap-20 lg:grid-cols-2">

          {/* Image */}
          <div className="relative overflow-hidden rounded-[40px] shadow-2xl">

            <Image
              src="/pool-hero.jpeg"
              alt="About Arya Group"
              width={700}
              height={700}
              className="h-[650px] w-full object-cover"
            />

          </div>

          {/* Content */}
          <div>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-sky-500">
              Our Story
            </p>

            <h2 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl">

              Building Premium
              <span className="bg-gradient-to-r from-sky-500 to-cyan-400 bg-clip-text text-transparent">
                {" "}
                Pool Architecture
              </span>

            </h2>

            <p className="mt-8 text-lg leading-relaxed text-gray-600">
              Arya Group was founded with a vision to create
              luxury swimming pool experiences using premium
              materials, modern engineering, and elegant
              architectural design.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              From private villas to luxury resorts,
              our team delivers exceptional craftsmanship
              and long-lasting quality tailored to every
              client’s vision.
            </p>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 gap-8">

              <div>

                <h3 className="text-5xl font-bold text-sky-500">
                  150+
                </h3>

                <p className="mt-3 text-gray-500">
                  Projects Completed
                </p>

              </div>

              <div>

                <h3 className="text-5xl font-bold text-sky-500">
                  12+
                </h3>

                <p className="mt-3 text-gray-500">
                  Years Experience
                </p>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-[#f8fafc] py-28">

        <div className="container-custom">

          <div className="mx-auto max-w-3xl text-center">

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-sky-500">
              Why Choose Us
            </p>

            <h2 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl">

              Premium Expertise
              <span className="bg-gradient-to-r from-sky-500 to-cyan-400 bg-clip-text text-transparent">
                {" "}
                & Luxury Quality
              </span>

            </h2>

          </div>

          {/* Grid */}
          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="rounded-[32px] bg-white p-8 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
                >

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-400 text-white">

                    <Icon size={30} />

                  </div>

                  <h3 className="mt-8 text-2xl font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-5 leading-relaxed text-gray-600">
                    {item.description}
                  </p>

                </div>
              );
            })}

          </div>
        </div>
      </section>

      <CTASection />

      <Footer />

    </main>
  );
}