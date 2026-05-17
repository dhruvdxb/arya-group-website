import Image from "next/image";
import {
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";

const features = [
  "European Pool Technology",
  "Premium Construction Materials",
  "Luxury Modern Designs",
  "Expert Engineering Team",
  "Energy Efficient Systems",
  "24/7 Technical Support",
];

export default function WhyChooseSection() {
  return (
    <section className="bg-[#f8fafc] py-28">

      <div className="container-custom grid items-center gap-20 lg:grid-cols-2">

        {/* Left Image */}
        <div className="relative">

          {/* Background Glow */}
          <div className="absolute -top-10 -left-10 h-72 w-72 rounded-full bg-sky-100 blur-3xl opacity-40" />

          {/* Main Image */}
          <div className="relative overflow-hidden rounded-[40px] shadow-[0_25px_80px_rgba(0,0,0,0.12)]">

            <Image
              src="/pool-hero.jpeg"
              alt="Luxury Pool"
              width={700}
              height={700}
              className="h-[650px] w-full object-cover"
            />

          </div>

          {/* Floating Card */}
          <div className="absolute -bottom-10 right-8 rounded-3xl bg-white p-6 shadow-2xl">

            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-sky-500">
                <ShieldCheck size={30} />
              </div>

              <div>
                <h4 className="text-2xl font-bold text-gray-900">
                  12+ Years
                </h4>

                <p className="text-sm text-gray-500">
                  Industry Experience
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Right Content */}
        <div>

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-sky-500">
            Why Choose Arya Group
          </p>

          <h2 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl">

            Building Premium Pools
            <span className="bg-gradient-to-r from-sky-500 to-cyan-400 bg-clip-text text-transparent">
              {" "}
              With Excellence
            </span>

          </h2>

          <p className="mt-8 text-lg leading-relaxed text-gray-600">
            We combine luxury design, advanced engineering,
            and premium materials to create exceptional swimming
            pool experiences for villas, resorts, hotels,
            and architectural spaces.
          </p>

          {/* Features */}
          <div className="mt-10 grid gap-5 sm:grid-cols-2">

            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-500">
                  <CheckCircle2 size={24} />
                </div>

                <p className="font-medium text-gray-700">
                  {feature}
                </p>

              </div>
            ))}

          </div>

          {/* Bottom Cards */}
          <div className="mt-12 flex flex-wrap gap-6">

            <div className="flex items-center gap-4 rounded-2xl bg-white px-6 py-5 shadow-sm">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-500">
                <Sparkles size={28} />
              </div>

              <div>
                <h4 className="font-bold text-gray-900">
                  Luxury Finishes
                </h4>

                <p className="text-sm text-gray-500">
                  Elegant modern aesthetics
                </p>
              </div>

            </div>

            <div className="flex items-center gap-4 rounded-2xl bg-white px-6 py-5 shadow-sm">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-sky-500">
                <Wrench size={28} />
              </div>

              <div>
                <h4 className="font-bold text-gray-900">
                  Expert Support
                </h4>

                <p className="text-sm text-gray-500">
                  Reliable maintenance services
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}