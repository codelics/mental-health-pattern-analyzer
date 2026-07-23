export default function Hero(){
    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-6">
            <h1 className="text-5xl font-bold text-slate-900 text center">
                Mental Health Pattern Analyzer
            </h1>

            <p className="mt-6 max-w-2xl text-center text-lg text-slate-600">
                Track your anxiety. Discover recurring patterns. Understand your mental well-being. 
            </p>


            <button className="mt-8 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 transition">
                Get Started
            </button>

        </section>


    );
}