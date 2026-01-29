import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function ViewsAnalytics() {
  const months = [
    { name: "Jan", views: 130 },
    { name: "Feb", views: 190 },
    { name: "Mar", views: 80 },
    { name: "Apr", views: 20 },
    { name: "May", views: 30 },
    { name: "Jun", views: 110 },
    { name: "Jul", views: 120 },
    { name: "Aug", views: 170 },
    { name: "Sep", views: 120 },
    { name: "Oct", views: 40 },
    { name: "Nov", views: 60 }
  ];

  const week = [
    { name: "Sun", views: 110 },
    { name: "Mon", views: 120 },
    { name: "Tue", views: 10 },
    { name: "Wed", views: 80 },
    { name: "Fri", views: 30 },
    { name: "Sat", views: 120 }
  ];

  return (
    <>
     
  <h1 className="text-2xl sm:text-3xl text-white mb-6 text-center lg:text-left">
    Video Analytics
  </h1>

  <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">

    {/* Monthly */}
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-6">
      <h2 className="text-white text-lg sm:text-xl font-semibold text-center mb-4">
        Monthly Views
      </h2>

      <div className="h-[220px] sm:h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={months}>
            <XAxis dataKey="name" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip />
            <Line dataKey="views" stroke="#fff" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>

    {/* Weekly */}
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-6">
      <h2 className="text-white text-lg sm:text-xl font-semibold text-center mb-4">
        Weekly Views
      </h2>

      <div className="h-[220px] sm:h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={week}>
            <XAxis dataKey="name" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip />
            <Line dataKey="views" stroke="#22d3ee" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>

  </div>

    </>
  );
}
