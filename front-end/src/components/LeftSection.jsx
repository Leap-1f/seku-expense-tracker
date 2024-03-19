import React, { useState } from "react";
import Image from "next/image";
import VectorImg from "@/Public/Vector.svg";
import { AddCategory } from "./AddCategory";
import Eye from "@/Public/Leading icon.svg";

import Leading from "@/Public/Leading.svg";
import Plus from "@/Public/Plus.svg";

const category = [
  "Food & Drinks",
  "Shopping",
  "Housing",
  "Transportation",
  "Vehicle",
  "Life & Entertainment",
  "Communication, PC",
  "Financial expenses",
  "Investments",
  "Income",
  "Others",
];

export const LeftSection = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="rounded-[24px] w-[282px] py-6 px-[16px] bg-[#F9FAFB] gap-6 flex flex-col">
      <div className="flex flex-col gap-6 font-[600] text-[24px] leading-[32px] text-[#000000]">
        Records
        <button
          onClick={() => setOpenModal(true)}
          className="gap-1  w-[250px] h-[32px] p-[8px] rounded-[20px] bg-[#0166ff] flex justify-center items-center text-[#ffffff] font-[400] text-[16px] leading-6"
        >
          <Image src={VectorImg} alt="Record" width={15} height={15} />
          Add
        </button>
      </div>
      <input
        type="text"
        placeholder="Search"
        className="rounded-lg border-[1px] pl-3 bg-[#d1d5db] h-[32px] w-[250px] text-[#000000] border-gray-200 py-2"
      />
      <div className="flex flex-col gap-4 font-[600] text-[16px] leading-6 text-[#000000]">
        <div>Types</div>
        <div>
          <div className="p-[12px] flex items-center gap-2">
            <div className="w-4 h-4 border-[1px] rounded-[100px] border-[#000000] flex justify-center items-center">
              <input
                type="checkbox"
                defaultChecked
                className="checkbox w-4 h-4 rounded-[100px] bg-[#E2E8F0]"
              />
            </div>
            All
          </div>
          <div className="p-[12px] flex items-center gap-2">
            <div className="w-4 h-4 border-[1px] rounded-[100px] border-[#000000] flex justify-center items-center">
              <input
                type="checkbox"
                defaultChecked
                className="checkbox w-4 h-4 rounded-[100px] bg-[#E2E8F0]"
              />
            </div>
            Income
          </div>
          <div className="p-[12px] flex items-center gap-2">
            <div className="w-4 h-4 border-[1px] rounded-[100px] border-[#000000] flex justify-center items-center">
              <input
                type="checkbox"
                defaultChecked
                className="checkbox w-4 h-4 rounded-[100px] bg-[#E2E8F0]"
              />
            </div>
            Expense
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <div className="font-[600] text-[16px] justify-center flex items-center leading-6 text-[#000000]">
            Category
          </div>
          <button className="p-[12px] text-[#1f2937] font-[400] text-[16px] leading-6 ">
            Clear
          </button>
        </div>
        <div className="w-full flex flex-col gap-2">
          {category.map((category, index) => (
            <div key={index} className="w-full flex justify-between">
              <div className="py-[0px] px-3 flex items-center gap-2 font-[400] text[16px]">
                <Image src={Eye} width={20} height={20} />
                <div>{category}</div>
              </div>
              <Image src={Leading} width={20} height={20} />
            </div>
          ))}
        </div>
        <div className="flex  px-3 gap-2 ">
          <button
            onClick={() => setOpenModal(true)}
            className="flex  px-3 gap-2"
          >
            <Image src={Plus} width={20} height={20} />
            <div className="font-[400] text-[16px] leading-6 ">
              Add Category
            </div>
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <button className=" font-[600] text-[16px] leading-6 text-[#1f2937]">
          Amount Range
        </button>
        <div className="flex gap-4">
          <div className="flex gap-4">
            <input
              type="number "
              placeholder="0"
              className="w-[114.5px] h-[48px] rounded-lg border-[1px] border-[#f3f4f6] bg-[#d1d5db] p-4 text-[#0f172a]"
            />
            <input
              type="number "
              placeholder="1000"
              className="w-[114.5px] h-[48px] rounded-lg border-[1px] border-[#f3f4f6] bg-[#d1d5db] p-4  text-[#0f172a]"
            />
          </div>
        </div>
      </div>
      <AddCategory open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
};
