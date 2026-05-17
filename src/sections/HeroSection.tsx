import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] pt-32 pb-24">

      {/* Background Blobs */}
      <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-sky-100 blur-3xl opacity-40" />

      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-orange-100 blur-3xl opacity-40" />

      <div className="container-custom relative z-10 grid items-center gap-20 lg:grid-cols-2">

        {/* Left Content */}
        <div className="max-w-2xl">

          {/* Tag */}
          <div className="mb-6 inline-flex items-center rounded-full border border-sky-100 bg-white px-5 py-2 shadow-sm">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-500">
              Premium Swimming Pool Construction
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-bold leading-[1.1] text-gray-900 md:text-7xl">

            Luxury Swimming
            <br />

            Pool Design For
            <br />

            <span className="bg-gradient-to-r from-sky-500 to-cyan-400 bg-clip-text text-transparent">
              Modern Spaces
            </span>

          </h1>

          {/* Paragraph */}
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-gray-600">
            Arya Group specializes in premium swimming pool construction
            for villas, resorts, farmhouses, hotels, and luxury
            architectural projects with world-class engineering and
            elegant modern design.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-5">

            <button className="rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              View Projects
            </button>

            <button className="rounded-full border border-gray-200 bg-white px-8 py-4 text-sm font-semibold text-gray-700 shadow-sm transition duration-300 hover:bg-gray-50">
              Contact Us
            </button>

          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-3 gap-8 border-t border-gray-200 pt-10">

            <div>
              <h3 className="text-3xl font-bold text-gray-900">
                150+
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Projects Completed
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-900">
                12+
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Years Experience
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-900">
                500+
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Happy Clients
              </p>
            </div>

          </div>
        </div>

        {/* Right Side */}
        <div className="relative">

          {/* Floating Card */}
          <div className="absolute -top-8 -left-8 z-20 rounded-3xl border border-white/50 bg-white/80 p-6 shadow-2xl backdrop-blur-xl">

            <p className="text-sm font-medium text-gray-500">
              Trusted By
            </p>

            <h3 className="mt-1 text-2xl font-bold text-gray-900">
              Luxury Resorts
            </h3>

          </div>

          {/* Main Image */}
          <div className="relative overflow-hidden rounded-[40px] shadow-[0_25px_80px_rgba(0,0,0,0.12)]">

            <Image
              src="/pool-hero.jpeg"
              alt="Luxury Swimming Pool"
              width={700}
              height={700}
              priority
              className="h-[700px] w-full object-cover transition duration-700 hover:scale-105"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

          </div>

          {/* Bottom Floating Box */}
          <div className="absolute -bottom-8 right-8 z-20 rounded-3xl bg-white p-6 shadow-2xl">

            <h4 className="text-3xl font-bold text-sky-500">
              24/7
            </h4>

            <p className="mt-1 text-sm text-gray-500">
              Premium Support
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}