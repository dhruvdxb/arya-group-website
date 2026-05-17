import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] pt-24 pb-10 text-white">

      <div className="container-custom">

        <div className="grid gap-14 lg:grid-cols-4">

          {/* Brand */}
          <div>

            <h3 className="text-3xl font-bold">
              Arya Group
            </h3>

            <p className="mt-6 leading-relaxed text-gray-400">
              Premium swimming pool construction company
              specializing in luxury villas, resorts,
              hotels, and architectural spaces.
            </p>

          </div>

          {/* Links */}
          <div>

            <h4 className="text-lg font-semibold">
              Quick Links
            </h4>

            <div className="mt-6 flex flex-col gap-4 text-gray-400">

              <Link href="/">Home</Link>

              <Link href="/">About</Link>

              <Link href="/">Services</Link>

              <Link href="/">Projects</Link>

            </div>
          </div>

          {/* Services */}
          <div>

            <h4 className="text-lg font-semibold">
              Services
            </h4>

            <div className="mt-6 flex flex-col gap-4 text-gray-400">

              <p>Luxury Villa Pools</p>

              <p>Infinity Pools</p>

              <p>Resort Pools</p>

              <p>Pool Renovation</p>

            </div>
          </div>

          {/* Contact */}
          <div>

            <h4 className="text-lg font-semibold">
              Contact
            </h4>

            <div className="mt-6 flex flex-col gap-4 text-gray-400">

              <p>Ahmedabad, Gujarat</p>

              <p>+91 98765 43210</p>

              <p>info@aryagroup.com</p>

            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 border-t border-white/10 pt-8 text-center text-sm text-gray-500">

          © 2026 Arya Group. All rights reserved.

        </div>
      </div>
    </footer>
  );
}