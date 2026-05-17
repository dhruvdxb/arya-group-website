import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-[#f8fafc] pt-28 pb-24">
      <div className="container-custom grid items-center gap-16 lg:grid-cols-2">
        {/* Left Content */}
        <div className="max-w-2xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-sky-500">
            Premium Swimming Pool Construction
          </p>

          <h1 className="text-5xl font-bold leading-tight text-gray-900 md:text-6xl">
            Luxury Swimming Pool Design For Modern Spaces
          </h1>

          <p className="mt-8 text-lg leading-relaxed text-gray-600">
            Arya Group specializes in premium swimming pool construction
            for villas, resorts, farmhouses, hotels, and luxury
            architectural projects.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <button className="rounded-full bg-sky-500 px-8 py-4 text-sm font-semibold text-white transition hover:bg-sky-400">
              View Projects
            </button>

            <button className="rounded-full border border-gray-300 bg-white px-8 py-4 text-sm font-semibold text-gray-700 transition hover:bg-gray-100">
              Contact Us
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="overflow-hidden rounded-[40px] shadow-2xl">
            <Image
              src="/pool-hero.jpeg"
              alt="Luxury Swimming Pool"
              width={700}
              height={700}
              priority
              className="h-[650px] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}