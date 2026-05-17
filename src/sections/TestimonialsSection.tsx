import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Mehta",
    role: "Villa Owner",
    image: "/pool-hero.jpeg",
    review:
      "Arya Group transformed our villa with an incredible luxury swimming pool. The design and finishing quality exceeded expectations.",
  },
  {
    name: "Priya Shah",
    role: "Resort Director",
    image: "/pool-hero.jpeg",
    review:
      "Professional execution, premium materials, and elegant design. Their engineering expertise is truly impressive.",
  },
  {
    name: "Amit Patel",
    role: "Architect",
    image: "/pool-hero.jpeg",
    review:
      "One of the best swimming pool construction companies we've worked with. Clean execution and modern aesthetics.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-[#f8fafc] py-28">

      <div className="container-custom">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-sky-500">
            Client Testimonials
          </p>

          <h2 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl">

            Trusted By Luxury
            <span className="bg-gradient-to-r from-sky-500 to-cyan-400 bg-clip-text text-transparent">
              {" "}
              Clients Across India
            </span>

          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            Hear what our clients say about our premium swimming
            pool construction and architectural expertise.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="group rounded-[32px] border border-gray-100 bg-white p-8 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >

              {/* Stars */}
              <div className="flex gap-1 text-orange-400">

                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={20}
                    fill="currentColor"
                  />
                ))}

              </div>

              {/* Review */}
              <p className="mt-8 leading-relaxed text-gray-600">
                “{item.review}”
              </p>

              {/* Profile */}
              <div className="mt-10 flex items-center gap-4">

                <div className="relative h-16 w-16 overflow-hidden rounded-full">

                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />

                </div>

                <div>

                  <h4 className="text-lg font-bold text-gray-900">
                    {item.name}
                  </h4>

                  <p className="text-sm text-gray-500">
                    {item.role}
                  </p>

                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}