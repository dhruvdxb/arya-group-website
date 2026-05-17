import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

export default function ContactPage() {
  return (
    <main>

      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0f172a] pt-40 pb-28 text-white">

        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/20 to-cyan-400/10" />

        <div className="container-custom relative z-10 text-center">

          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
            Contact Arya Group
          </p>

          <h1 className="text-5xl font-bold leading-tight md:text-7xl">

            Let’s Build Your
            <br />

            Dream Pool

          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-gray-300">
            Get in touch with Arya Group for premium swimming pool
            construction, architectural consultation, and luxury
            pool solutions tailored to your vision.
          </p>

        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-28">

        <div className="container-custom grid gap-16 lg:grid-cols-2">

          {/* Left Info */}
          <div>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-sky-500">
              Contact Information
            </p>

            <h2 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl">

              Start Your
              <span className="bg-gradient-to-r from-sky-500 to-cyan-400 bg-clip-text text-transparent">
                {" "}
                Luxury Project
              </span>

            </h2>

            <p className="mt-8 text-lg leading-relaxed text-gray-600">
              Our team is ready to help you create a premium
              swimming pool experience with modern engineering
              and luxury architectural design.
            </p>

            {/* Info Cards */}
            <div className="mt-12 grid gap-6">

              <div className="flex items-center gap-5 rounded-[28px] border border-gray-100 bg-[#f8fafc] p-6">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-100 text-sky-500">
                  <Phone size={30} />
                </div>

                <div>

                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
                    Phone
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-gray-900">
                    +91 98765 43210
                  </h3>

                </div>

              </div>

              <div className="flex items-center gap-5 rounded-[28px] border border-gray-100 bg-[#f8fafc] p-6">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-100 text-sky-500">
                  <Mail size={30} />
                </div>

                <div>

                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
                    Email
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-gray-900">
                    info@aryagroup.com
                  </h3>

                </div>

              </div>

              <div className="flex items-center gap-5 rounded-[28px] border border-gray-100 bg-[#f8fafc] p-6">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-100 text-sky-500">
                  <MapPin size={30} />
                </div>

                <div>

                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
                    Location
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-gray-900">
                    Ahmedabad, Gujarat
                  </h3>

                </div>

              </div>

              <div className="flex items-center gap-5 rounded-[28px] border border-gray-100 bg-[#f8fafc] p-6">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-100 text-sky-500">
                  <Clock size={30} />
                </div>

                <div>

                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
                    Working Hours
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-gray-900">
                    Mon - Sat / 9 AM - 7 PM
                  </h3>

                </div>

              </div>

            </div>
          </div>

          {/* Right Form */}
          <div className="rounded-[40px] border border-gray-100 bg-white p-10 shadow-xl">

            <h3 className="text-3xl font-bold text-gray-900">
              Send Inquiry
            </h3>

            <p className="mt-4 text-gray-600">
              Fill out the form below and our team will contact you shortly.
            </p>

            <form className="mt-10 space-y-6">

              <div>
                <label className="mb-3 block text-sm font-semibold text-gray-700">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none transition focus:border-sky-500"
                />
              </div>

              <div>
                <label className="mb-3 block text-sm font-semibold text-gray-700">
                  Phone Number
                </label>

                <input
                  type="text"
                  placeholder="Enter phone number"
                  className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none transition focus:border-sky-500"
                />
              </div>

              <div>
                <label className="mb-3 block text-sm font-semibold text-gray-700">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter email address"
                  className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none transition focus:border-sky-500"
                />
              </div>

              <div>
                <label className="mb-3 block text-sm font-semibold text-gray-700">
                  Message
                </label>

                <textarea
                  rows={5}
                  placeholder="Tell us about your project"
                  className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none transition focus:border-sky-500"
                />
              </div>

              <button className="w-full rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                Send Inquiry
              </button>

            </form>
          </div>
        </div>
      </section>

      <Footer />

    </main>
  );
}