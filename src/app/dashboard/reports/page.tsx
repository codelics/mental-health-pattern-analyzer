// src/app/dashboard/reports/page.tsx

export default function ReportsPage() {
  return (
    <div className="max-w-5xl">

      <h1 className="text-3xl font-bold text-slate-900">
        Weekly Report
      </h1>

      <p className="mt-2 text-slate-600">
        Review your patterns and progress from the past week.
      </p>


      {/* Week Summary */}

      <section className="mt-8 grid gap-5 md:grid-cols-3">


        <div className="rounded-xl bg-white p-6 shadow">

          <p className="text-sm text-slate-500">
            Average Anxiety
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            6.2 / 10
          </h2>

        </div>



        <div className="rounded-xl bg-white p-6 shadow">

          <p className="text-sm text-slate-500">
            Average Sleep
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            6.5 hrs
          </h2>

        </div>



        <div className="rounded-xl bg-white p-6 shadow">

          <p className="text-sm text-slate-500">
            Anxiety Episodes
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            8
          </h2>

        </div>


      </section>





      {/* Main Insights */}

      <section className="mt-8 rounded-xl bg-white p-6 shadow">

        <h2 className="text-xl font-bold">
          Weekly Insights
        </h2>


        <div className="mt-5 space-y-4">


          <div className="rounded-lg bg-slate-50 p-4">

            <h3 className="font-semibold">
              Top Trigger
            </h3>

            <p className="mt-1 text-slate-600">
              Work deadlines appeared in 5 anxiety episodes.
            </p>

          </div>



          <div className="rounded-lg bg-slate-50 p-4">

            <h3 className="font-semibold">
              Best Coping Method
            </h3>

            <p className="mt-1 text-slate-600">
              Walking reduced anxiety intensity by an average of 3 points.
            </p>

          </div>



          <div className="rounded-lg bg-slate-50 p-4">

            <h3 className="font-semibold">
              Possible Pattern
            </h3>

            <p className="mt-1 text-slate-600">
              Anxiety levels were higher on days with less than 6 hours of sleep.
            </p>

          </div>


        </div>


      </section>





      {/* Comparison */}

      <section className="mt-8 rounded-xl bg-white p-6 shadow">


        <h2 className="text-xl font-bold">
          Week-to-Week Comparison
        </h2>



        <div className="mt-5 grid gap-5 md:grid-cols-2">


          <div className="rounded-lg border p-4">

            <p className="text-sm text-slate-500">
              Anxiety
            </p>

            <p className="mt-2 text-xl font-bold">
              7.1 → 6.2 ↓
            </p>

          </div>



          <div className="rounded-lg border p-4">

            <p className="text-sm text-slate-500">
              Sleep
            </p>

            <p className="mt-2 text-xl font-bold">
              5.8 → 6.5 ↑
            </p>

          </div>



        </div>


      </section>





      {/* Export */}

      <section className="mt-8 flex gap-4">


        <button
          className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white"
        >
          Export PDF
        </button>


        <button
          className="rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold"
        >
          Export CSV
        </button>


      </section>



    </div>
  );
}