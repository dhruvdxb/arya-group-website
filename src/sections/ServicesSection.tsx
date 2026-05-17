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
      "Premium custom-designed pools crafted for luxury villas and private residences.",
  },
  {
    icon: Hotel,
    title: "Resort & Hotel Pools",
    description:
      "Elegant resort-style swimming pools designed for hospitality and leisure spaces.",
  },
  {
    icon: Building2,
    title: "Infinity Pool Design",
    description:
      "Modern infinity edge pools with architectural elegance and breathtaking visuals.",
  },
  {
    icon: Sparkles,
    title: "Pool Renovation",
    description:
      "Transform old swimming pools into modern luxury experiences with premium finishes.",
  },
  {
    icon: Droplets,
    title: "Water Filtration Systems",
    description:
      "Advanced filtration and purification systems for crystal clear swimming pools.",
  },
  {
    icon: ShieldCheck,
    title: "Maintenance & Support",
    description:
      "Reliable maintenance solutions and expert technical support for long-term performance.",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-white py-28">
      <div className="container-custom">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-sky-500">
            Our Expertise
          </p>

          <h2 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Premium Swimming Pool
            <span className="bg-gradient-to-r from-sky-500 to-cyan-400 bg-clip-text text-transparent">
              {" "}
              Services
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            We provide complete luxury swimming pool solutions
            with modern engineering, premium materials, and
            elegant architectural execution.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[32px] border border-gray-100 bg-white p-8 shadow-sm transition duration-500 hover:-translate-y-2 hover:border-sky-100 hover:shadow-2xl"
              >

                {/* Glow */}
                <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-sky-100 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

                {/* Icon */}
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-400 text-white shadow-lg shadow-sky-500/20">

                  <Icon size={30} />

                </div>

                {/* Content */}
                <div className="relative z-10">

                  <h3 className="mt-8 text-2xl font-bold text-gray-900">
                    {service.title}
                  </h3>

                  <p className="mt-5 leading-relaxed text-gray-600">
                    {service.description}
                  </p>

                  {/* Button */}
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
  );
}