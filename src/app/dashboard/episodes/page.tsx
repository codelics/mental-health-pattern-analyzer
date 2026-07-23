// src/app/dashboard/episodes/page.tsx

export default function EpisodesPage() {
  return (
    <div className="max-w-3xl">

      <h1 className="text-3xl font-bold text-slate-900">
        Anxiety Episode Log
      </h1>

      <p className="mt-2 text-slate-600">
        Record anxiety episodes to discover recurring patterns.
      </p>


      <div className="mt-8 rounded-xl bg-white p-8 shadow">


        <form className="space-y-6">


          {/* Duration */}

          <div>
            <label className="text-sm font-medium text-slate-700">
              Duration
            </label>

            <input
              type="number"
              placeholder="Minutes"
              className="mt-2 w-full rounded-lg border p-3"
            />
          </div>




          {/* Intensity */}

          <div>

            <label className="text-sm font-medium text-slate-700">
              Anxiety Intensity (0-10)
            </label>


            <input
              type="range"
              min="0"
              max="10"
              className="mt-3 w-full"
            />


          </div>





          {/* Activity */}

          <div>

            <label className="text-sm font-medium text-slate-700">
              What were you doing?
            </label>


            <input
              type="text"
              placeholder="Example: Studying, working, resting"
              className="mt-2 w-full rounded-lg border p-3"
            />

          </div>





          {/* People */}

          <div>

            <label className="text-sm font-medium text-slate-700">
              Who were you with?
            </label>


            <select
              className="mt-2 w-full rounded-lg border p-3"
            >

              <option>
                Alone
              </option>

              <option>
                Family
              </option>

              <option>
                Friends
              </option>

              <option>
                Coworkers
              </option>


            </select>

          </div>





          {/* Location */}

          <div>

            <label className="text-sm font-medium text-slate-700">
              Location (Optional)
            </label>


            <input
              type="text"
              placeholder="Example: Home, Office, School"
              className="mt-2 w-full rounded-lg border p-3"
            />


          </div>





          {/* Triggers */}

          <div>

            <label className="text-sm font-medium text-slate-700">
              Possible Triggers
            </label>


            <div className="mt-3 grid grid-cols-2 gap-3">


              {[
                "Work",
                "School",
                "Social",
                "Family",
                "Health",
                "Money",
                "Sleep",
                "Other",
              ].map((trigger) => (

                <label
                  key={trigger}
                  className="flex items-center gap-2 rounded-lg border p-3"
                >

                  <input
                    type="checkbox"
                  />

                  {trigger}

                </label>

              ))}


            </div>

          </div>





          {/* Coping Methods */}

          <div>

            <label className="text-sm font-medium text-slate-700">
              Coping Methods Used
            </label>


            <div className="mt-3 grid grid-cols-2 gap-3">


              {[
                "Breathing",
                "Walking",
                "Exercise",
                "Music",
                "Talking",
                "Meditation",
              ].map((method) => (

                <label
                  key={method}
                  className="flex items-center gap-2 rounded-lg border p-3"
                >

                  <input
                    type="checkbox"
                  />

                  {method}

                </label>

              ))}


            </div>


          </div>






          {/* Effectiveness */}

          <div>

            <label className="text-sm font-medium text-slate-700">
              Coping Effectiveness (1-5)
            </label>


            <select
              className="mt-2 w-full rounded-lg border p-3"
            >

              <option>
                1 - Not helpful
              </option>

              <option>
                2
              </option>

              <option>
                3 - Somewhat helpful
              </option>

              <option>
                4
              </option>

              <option>
                5 - Very helpful
              </option>


            </select>

          </div>





          {/* Notes */}

          <div>

            <label className="text-sm font-medium text-slate-700">
              Notes
            </label>


            <textarea
              rows={4}
              placeholder="Describe what happened..."
              className="mt-2 w-full rounded-lg border p-3"
            />


          </div>





          <button
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Save Episode
          </button>



        </form>


      </div>


    </div>
  );
}