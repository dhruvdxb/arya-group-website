export default function CTASection() {
    return (
      <section className="relative overflow-hidden py-28">
  
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-cyan-400" />
  
        {/* Glow */}
        <div className="absolute top-0 left-0 h-[400px] w-[400px] rounded-full bg-white/20 blur-3xl" />
  
        <div className="container-custom relative z-10 text-center">
  
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-white/80">
            Let’s Build Something Exceptional
          </p>
  
          <h2 className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">
  
            Ready To Create Your
            <br />
            Dream Swimming Pool?
  
          </h2>
  
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/80">
            Arya Group delivers luxury swimming pool solutions
            with premium engineering, modern design, and world-class
            craftsmanship for villas, resorts, hotels, and architectural spaces.
          </p>
  
          {/* Buttons */}
          <div className="mt-12 flex flex-wrap justify-center gap-5">
  
            <button className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-sky-600 shadow-xl transition duration-300 hover:-translate-y-1">
              Get Free Consultation
            </button>
  
            <button className="rounded-full border border-white/40 px-8 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-white/10">
              View Projects
            </button>
  
          </div>
        </div>
      </section>
    );
  }