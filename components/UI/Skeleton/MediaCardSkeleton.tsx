export default function MediaCardSkeleton() {
  return (
    <div className=" max-w-[370px] h-[498px] border border-primary flex flex-col ">
      <div className="animate-pulse flex flex-col">
        <div className="w-full bg-slate-700  h-[270px]  border-b border-primary  " />

        <div className="mt-[18px] px-4 flex flex-col gap-2 flex-grow mb-16 ">
          <div className="h-4 bg-slate-700 rounded"></div>
          <div className="h-4 w-[90%] bg-slate-700 rounded"></div>
          <div className="h-4 w-[80%] bg-slate-700 rounded"></div>
          <div className="h-4 w-[70%] bg-slate-700 rounded"></div>
        </div>

        {/* buttons*/}
        <div className="  border-t border-primary p-[10px]  flex items-center justify-between mt-auto">
          <button className="text-[#4d4d4d] font-inter  text-lg font-semibold  ">
            Read Now
          </button>
          <button className="text-xm text-white px-6 py-1 bg-[#474747]">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}
