const stats = [
  {
    number: "150+",
    label: "Projects Completed",
  },
  {
    number: "12+",
    label: "Years Experience",
  },
  {
    number: "500+",
    label: "Happy Clients",
  },
  {
    number: "24/7",
    label: "Premium Support",
  },
];

export default function StatsSection() {
  return (
    <section className="relative -mt-10 z-20">
      <div className="container-custom">

        <div className="grid gap-6 rounded-[40px] bg-white p-10 shadow-[0_20px_80px_rgba(0,0,0,0.08)] md:grid-cols-2 xl:grid-cols-4">

          {stats.map((item, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-gray-100 bg-gradient-to-b from-white to-slate-50 p-8 text-center transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

              <h3 className="bg-gradient-to-r from-sky-500 to-cyan-400 bg-clip-text text-5xl font-bold text-transparent">
                {item.number}
              </h3>

              <p className="mt-4 text-sm font-medium tracking-wide text-gray-500">
                {item.label}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}