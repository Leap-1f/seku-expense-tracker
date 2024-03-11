import { useEffect } from "react";
import BarChart from "../ui/BarChart";
import DonutChart from "../ui/DonutChart";

export const Charts = () => {
  useEffect(() => {}, []);

  const barChartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    values: [65, 59, 80, 81, 56, 55, 40],
  };

  const donutChartData = {
    labels: ["Bills", "Food", "Shopping", "Insurance", "Clothig"],
    values: [12, 19, 3, 5, 2],
  };

  return (
    <div className="w-[1200px] flex pt-8 mx-auto gap-8">
      <div className="w-[588px] bg-[#ffffff] rounded-[12px] ">
        <div className="w-full border-b-[1px] py-4 px-6 border-slate-200 font-[600] text-4 leading-6 text-[#0f172a]">
          Income - Expense
        </div>
        <div className="px-8 py-6">
          <BarChart data={barChartData} />
        </div>
      </div>

      <div className="w-[588px] bg-[#ffffff] rounded-[12px] ">
        <div className="w-full flex justify-between border-b-[1px] py-4 px-6 border-slate-200 font-[600] text-4 leading-6 text-[#0f172a]">
          Income - Expense
          <div className="font-[400] text-4 leading-6 text-[#6b7280]">
            Jun 1 - Nov 30s
          </div>
        </div>
        <div className="px-8 py-6">
          <DonutChart data={donutChartData} />
        </div>
      </div>
    </div>
  );
};

export default Charts;
