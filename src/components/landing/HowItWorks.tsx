const steps = [
  {
    number: "1",
    title: "Complete a Daily Check-In",
    description:
      "Record your mood, stress level, sleep, and energy in less than a minute.",
  },
  {
    number: "2",
    title: "Log Anxiety Episodes",
    description:
      "Whenever an anxiety episode occurs, quickly record the intensity and any notes.",
  },
  {
    number: "3",
    title: "View Weekly Insights",
    description:
      "See trends and summaries of your anxiety patterns over time.",
  },
  {
    number: "4",
    title: "Understand Your Patterns",
    description:
      "Identify recurring triggers and learn what coping strategies work best for you.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-slate-50 py-20 px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-4xl font-bold text-slate-900">
          How It Works
        </h2>

        <p className="mt-4 text-center text-slate-600">
          Four simple steps to better understand your mental well-being.
        </p>

        <div className="mt-14 space-y-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex items-start gap-6 rounded-xl bg-white p-6 shadow-sm"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
                {step.number}
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-2 text-slate-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}