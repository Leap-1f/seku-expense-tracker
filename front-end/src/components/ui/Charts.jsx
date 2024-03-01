export const Charts = () => {
  return (
    <div className="w-[1200px] flex pt-8 mx-auto gap-8">
      <div className="w-[588px] h-[294px] bg-[#ffffff] rounded-[12px] ">
        <div className="w-full border-b-[1px] py-4 px-6 border-slate-200 font-[600] text-4 leading-6 text-[#0f172a]">
          Income - Expense
        </div>
      </div>
      {/* chart 2 */}
      <div className="w-[588px] h-[294px] bg-[#ffffff] rounded-[12px] ">
        <div className="w-full flex justify-between border-b-[1px] py-4 px-6 border-slate-200 font-[600] text-4 leading-6 text-[#0f172a]">
          Income - Expense
          <div className="font-[400] text-4 leading-6 text-[#6b7280]">
            Jun 1 - Nov 30s
          </div>
        </div>
      </div>
    </div>
  );
};
