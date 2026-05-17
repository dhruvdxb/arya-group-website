type ServiceCardProps = {
    title: string;
    description: string;
  };
  
  export default function ServiceCard({
    title,
    description,
  }: ServiceCardProps) {
    return (
      <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-sky-100 text-2xl">
          🏊
        </div>
  
        <h3 className="text-2xl font-semibold text-gray-900">
          {title}
        </h3>
  
        <p className="mt-4 leading-relaxed text-gray-600">
          {description}
        </p>
  
        <button className="mt-6 text-sm font-semibold text-sky-500 transition hover:text-sky-600">
          Learn More →
        </button>
      </div>
    );
  }