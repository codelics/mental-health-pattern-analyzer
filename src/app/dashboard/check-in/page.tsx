export default function CheckInPage() {
  return (
    <div className="max-w-3xl">

      <h1 className="text-3xl font-bold text-slate-900">
        Daily Check-in
      </h1>

      <p className="mt-2 text-slate-600">
        Track how you feel today and identify patterns over time.
      </p>


      <div className="mt-8 rounded-xl bg-white p-8 shadow">


        <form className="space-y-6">


          {/* Sleep */}

          <div>
            <label className="text-sm font-medium text-slate-700">
              Sleep Hours
            </label>

            <input
              type="number"
              placeholder="Example: 7"
              className="mt-2 w-full rounded-lg border p-3"
            />

          </div>



          {/* Energy */}

          <div>

            <label className="text-sm font-medium text-slate-700">
              Energy Level (0-10)
            </label>


            <input
              type="range"
              min="0"
              max="10"
              className="mt-3 w-full"
            />

          </div>




          {/* Exercise */}

          <div>

            <label className="text-sm font-medium text-slate-700">
              Exercise Today?
            </label>


            <select
              className="mt-2 w-full rounded-lg border p-3"
            >

              <option>
                Yes
              </option>

              <option>
                No
              </option>

            </select>

          </div>




          {/* Caffeine */}

          <div>

            <label className="text-sm font-medium text-slate-700">
              Caffeine Intake
            </label>


            <select
              className="mt-2 w-full rounded-lg border p-3"
            >

              <option>
                None
              </option>

              <option>
                1 cup
              </option>

              <option>
                2+ cups
              </option>


            </select>


          </div>




          {/* Stress */}

          <div>

            <label className="text-sm font-medium text-slate-700">
              Stress Level (0-10)
            </label>


            <input
              type="range"
              min="0"
              max="10"
              className="mt-3 w-full"
            />


          </div>





          {/* Emotion */}

          <div>

            <label className="text-sm font-medium text-slate-700">
              Main Emotion
            </label>


            <select
              className="mt-2 w-full rounded-lg border p-3"
            >

              <option>
                Calm
              </option>

              <option>
                Happy
              </option>

              <option>
                Anxious
              </option>

              <option>
                Sad
              </option>

              <option>
                Angry
              </option>


            </select>


          </div>





          <button
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Save Check-in
          </button>


        </form>


      </div>


    </div>
  );
}