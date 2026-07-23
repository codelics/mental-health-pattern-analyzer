const features = [
  {
    title: "Track Episodes",
    description:
      "Quickly log anxiety episodes and daily check-ins.",
    icon: "📝",
  },
  {
    title: "Discover Patterns",
    description:
      "Identify recurring triggers and trends over time.",
    icon: "📊",
  },
  {
    title: "Export Reports",
    description:
      "Generate reports that you can share with healthcare professionals.",
    icon: "📄",
  },
];

export default function Features() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-4xl font-bold text-slate-900">
          Why Use Mental Health Pattern Analyzer?
        </h2>

        <p className="mt-4 text-center text-slate-600">
          Everything you need to understand your anxiety patterns.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-slate-200 p-8 shadow-sm transition hover:shadow-lg"
            >
              <div className="text-5xl">{feature.icon}</div>

              <h3 className="mt-6 text-2xl font-semibold">
                {feature.title}
              </h3>

              <p className="mt-3 text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}