import SummaryCard from "./SummaryCard";
import PatternCard from "./PatternCard";


export default function DashboardPage(){

return (

<div>


<h1 className="text-3xl font-bold text-slate-900">
Good morning 👋
</h1>


<p className="mt-2 text-slate-600">
Here is your mental health overview.
</p>



<div className="mt-8 grid gap-5 md:grid-cols-3">


<SummaryCard
title="Today's Stress"
value="7 / 10"
/>


<SummaryCard
title="Energy Level"
value="6 / 10"
/>


<SummaryCard
title="Sleep"
value="6.5 hrs"
/>


</div>



<div className="mt-8 grid gap-6 lg:grid-cols-2">


<div className="rounded-xl bg-white p-6 shadow">

<h2 className="font-semibold">
Anxiety Trend
</h2>


<div className="mt-5 flex h-64 items-center justify-center text-slate-400">

Chart will be here

</div>


</div>



<div className="rounded-xl bg-white p-6 shadow">

<h2 className="font-semibold">
Sleep vs Anxiety
</h2>


<div className="mt-5 flex h-64 items-center justify-center text-slate-400">

Chart will be here

</div>


</div>


</div>



<div className="mt-8">

<PatternCard />

</div>



</div>

)

}