import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 border-r bg-white p-6">

      <h1 className="text-xl font-bold text-slate-900">
        MindTrack
      </h1>

      <p className="mt-2 text-sm text-slate-500">
        Mental Health Analyzer
      </p>


      <nav className="mt-8 space-y-2">

        <Link
          href="/dashboard"
          className="block rounded-lg px-3 py-2 hover:bg-slate-100"
        >
          Dashboard
        </Link>


        <Link
          href="/dashboard/check-in"
          className="block rounded-lg px-3 py-2 hover:bg-slate-100"
        >
          Daily Check-in
        </Link>


        <Link
          href="/dashboard/episodes"
          className="block rounded-lg px-3 py-2 hover:bg-slate-100"
        >
          Anxiety Episodes
        </Link>


        <Link
          href="/dashboard/reports"
          className="block rounded-lg px-3 py-2 hover:bg-slate-100"
        >
          Weekly Report
        </Link>


        <Link
          href="/dashboard/profile"
          className="block rounded-lg px-3 py-2 hover:bg-slate-100"
        >
          Profile
        </Link>


      </nav>


    </aside>
  );
}