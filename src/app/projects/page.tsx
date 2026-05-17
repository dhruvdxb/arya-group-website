import Image from "next/image";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CTASection from "../../sections/CTASection";

const projects = [
  {
    title: "Luxury Villa Pool",
    category: "Villa Project",
    location: "Ahmedabad",
    image: "/pool-hero.jpeg",
  },
  {
    title: "Infinity Resort Pool",
    category: "Resort Project",
    location: "Goa",
    image: "/pool-hero.jpeg",
  },
  {
    title: "Modern Rooftop Pool",
    category: "Architectural Project",
    location: "Mumbai",
    image: "/pool-hero.jpeg",
  },
  {
    title: "Premium Farmhouse Pool",
    category: "Farmhouse Project",
    location: "Surat",
    image: "/pool-hero.jpeg",
  },
  {
    title: "Luxury Hotel Pool",
    category: "Hotel Project",
    location: "Udaipur",
    image: "/pool-hero.jpeg",
  },
  {
    title: "Modern Infinity Edge Pool",
    category: "Luxury Design",
    location: "Bangalore",
    image: "/pool-hero.jpeg",
  },
];

export default function ProjectsPage() {
  return (
    <main>

      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0f172a] pt-40 pb-28 text-white">

        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/20 to-cyan-400/10" />

        <div className="container-custom relative z-10 text-center">

          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
            Our Projects
          </p>

          <h1 className="text-5xl font-bold leading-tight md:text-7xl">

            Crafted Luxury
            <br />

            Pool Experiences

          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-gray-300">
            Explore our portfolio of premium swimming pool
            projects designed for luxury villas, resorts,
            hotels, and architectural spaces across India.
          </p>

        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-white py-28">

        <div className="container-custom">

          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">

            {projects.map((project, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-[36px] bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >

                {/* Image */}
                <div className="relative overflow-hidden">

                  <Image
                    src={project.image}
                    alt={project.title}
                    width={700}
                    height={700}
                    className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  {/* Badge */}
                  <div className="absolute top-6 left-6 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-sky-500 backdrop-blur-xl">

                    {project.category}

                  </div>

                </div>

                {/* Content */}
                <div className="p-8">

                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-500">
                    {project.location}
                  </p>

                  <h3 className="mt-3 text-3xl font-bold text-gray-900">
                    {project.title}
                  </h3>

                  <p className="mt-5 leading-relaxed text-gray-600">
                    Premium swimming pool architecture designed
                    with modern engineering and luxury aesthetics.
                  </p>

                  <button className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-sky-500 transition hover:gap-3">
                    View Project →
                  </button>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Experience Banner */}
      <section className="bg-[#f8fafc] py-28">

        <div className="container-custom">

          <div className="rounded-[48px] bg-gradient-to-r from-sky-500 to-cyan-400 px-10 py-20 text-center text-white shadow-2xl">

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-white/80">
              Luxury Expertise
            </p>

            <h2 className="mx-auto max-w-4xl text-4xl font-bold leading-tight md:text-6xl">

              Creating Premium
              <br />

              Architectural Experiences

            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/80">
              Arya Group combines modern engineering,
              luxury aesthetics, and premium craftsmanship
              to deliver exceptional swimming pool experiences.
            </p>

          </div>
        </div>
      </section>

      <CTASection />

      <Footer />

    </main>
  );
}