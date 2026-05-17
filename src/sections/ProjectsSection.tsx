import Image from "next/image";

const projects = [
  {
    title: "Luxury Villa Pool",
    location: "Ahmedabad",
    image: "/pool-hero.jpeg",
  },
  {
    title: "Infinity Resort Pool",
    location: "Goa",
    image: "/pool-hero.jpeg",
  },
  {
    title: "Modern Rooftop Pool",
    location: "Mumbai",
    image: "/pool-hero.jpeg",
  },
];

export default function ProjectsSection() {
  return (
    <section className="bg-white py-28">

      <div className="container-custom">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-sky-500">
            Featured Projects
          </p>

          <h2 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl">

            Crafted Luxury
            <span className="bg-gradient-to-r from-sky-500 to-cyan-400 bg-clip-text text-transparent">
              {" "}
              Pool Experiences
            </span>

          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            Explore some of our premium swimming pool projects
            designed for luxury villas, resorts, and modern
            architectural spaces.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-20 grid gap-8 lg:grid-cols-3">

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
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              </div>

              {/* Content */}
              <div className="p-8">

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-500">
                  {project.location}
                </p>

                <h3 className="mt-3 text-2xl font-bold text-gray-900">
                  {project.title}
                </h3>

                <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-500 transition hover:gap-3">
                  View Project →
                </button>

              </div>
            </div>
          ))}

        </div>

        {/* Bottom Button */}
        <div className="mt-16 text-center">

          <button className="rounded-full bg-gradient-to-r from-orange-500 to-orange-400 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            View All Projects
          </button>

        </div>
      </div>
    </section>
  );
}