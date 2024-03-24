import CurrencyImg from "../Public/StepsImg/Currency.svg";
import Image from "next/image";

export const SignUpConfirm = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="absolute top-[317px] gap-8 flex flex-col ">
        <div className="flex flex-col gap-3 ">
          <div className="flex flex-col gap-8 items-center">
            <div className="flex gap-4 flex-col items-center font-[600] text-[24px] leading-8 text-[#0172a]">
              <Image src={CurrencyImg} width={48} height={48} />
              Select base currency
            </div>
            <select className="select bg-[#D1D5DB]  rounded-lg border-[1px] border-[#f3f4f6]  h-[64px] w-[384px] ">
              <option disabled selected>
                Select currency
              </option>
              <option>MNT</option>
              <option>USD</option>
            </select>
          </div>
          <p className="w-[384px]  font-[400] text-[12px] leading-4 text-[#475569]">
            You base currency should be the one you use most often.All
            transaction in order currencies will be calculated based on this one
          </p>
        </div>
        <button className="bg-[#0166ff] px-4 rounded-[20px] w-[384px] h-[48px] text-[#ffffff]">
          Confirm
        </button>
      </div>
    </div>
  );
};
