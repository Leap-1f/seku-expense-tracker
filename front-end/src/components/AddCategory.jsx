import React from "react";
import Image from "next/image";
import Cancel from "@/Public/Vector.png";
import DropDownImg from "../Public/dropdown.svg";

import { FaHome, FaMicrophone } from "react-icons/fa";
import { PiIdentificationBadgeFill, PiIdentificationCardFill, PiLadderFill, PiIntersectSquareFill, PiImageSquareFill, PiMicrosoftExcelLogoFill, PiListPlusBold, PiLeafFill, PiNumberFiveFill, PiNumberCircleSevenFill, PiRoadHorizonFill, PiHourglassSimpleMediumFill, PiAnchorSimpleFill, PiBezierCurveFill, PiExcludeFill, PiVignetteFill, PiBaseballFill, PiQuestionFill, PiExamFill, PiWatchFill, PiGlobeSimpleFill, PiOrangeSliceFill, PiPeaceFill, PiToiletPaperFill, PiPencilFill } from "react-icons/pi";
import { FaMagnifyingGlassPlus, FaHouse } from "react-icons/fa6";
import { BiSolidNotepad } from "react-icons/bi";

export const AddCategory = ({ open, onClose }) => {
  const icons = [
    { name: "FaHome", icon: <FaHome /> },
    { name: "FaMicrophone", icon: <FaMicrophone /> },
    { name: "PiIdentificationBadgeFill", icon: <PiIdentificationBadgeFill /> },
    { name: "PiIdentificationCardFill", icon: <PiIdentificationCardFill /> },
    { name: "PiLadderFill", icon: <PiLadderFill /> },
    { name: "PiIntersectSquareFill", icon: <PiIntersectSquareFill /> },
    { name: "PiImageSquareFill", icon: <PiImageSquareFill /> },
    { name: "PiMicrosoftExcelLogoFill", icon: <PiMicrosoftExcelLogoFill /> },
    { name: "PiListPlusBold", icon: <PiListPlusBold /> },
    { name: "PiLeafFill", icon: <PiLeafFill /> },
    { name: "PiNumberFiveFill", icon: <PiNumberFiveFill /> },
    { name: "PiNumberCircleSevenFill", icon: <PiNumberCircleSevenFill /> },
    { name: "PiRoadHorizonFill", icon: <PiRoadHorizonFill /> },
    { name: "PiHourglassSimpleMediumFill", icon: <PiHourglassSimpleMediumFill /> },
    { name: "PiAnchorSimpleFill", icon: <PiAnchorSimpleFill /> },
    { name: "PiBezierCurveFill", icon: <PiBezierCurveFill /> },
    { name: "PiExcludeFill", icon: <PiExcludeFill /> },
    { name: "PiVignetteFill", icon: <PiVignetteFill /> },
    { name: "PiBaseballFill", icon: <PiBaseballFill /> },
    { name: "PiQuestionFill", icon: <PiQuestionFill /> },
    { name: "PiExamFill", icon: <PiExamFill /> },
    { name: "PiWatchFill", icon: <PiWatchFill /> },
    { name: "PiGlobeSimpleFill", icon: <PiGlobeSimpleFill /> },
    { name: "PiOrangeSliceFill", icon: <PiOrangeSliceFill /> },
    { name: "PiPeaceFill", icon: <PiPeaceFill /> },
    { name: "PiToiletPaperFill", icon: <PiToiletPaperFill /> },
    { name: "PiPencilFill", icon: <PiPencilFill /> },
    { name: "FaMagnifyingGlassPlus", icon: <FaMagnifyingGlassPlus /> },
    { name: "FaHouse", icon: <FaHouse /> },
    { name: "BiSolidNotepad", icon: <BiSolidNotepad /> }
  ];

  if (!open) {
    return null;
  }

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full bg-[#000000] bg-opacity-25 flex justify-center items-center">
        <div className="w-[494px] rounded-[12px] bg-[#e2e8f0]">
          <div className="w-full py-5 px-6 justify-between flex border-b-[1px] border-[#E2E8F0]">
            <div className="font-[600] text-[20px] leading-[28px] text-[#0F172A]">
              Add Record
            </div>
            <button onClick={onClose}>
              <Image src={Cancel} width={15.76} height={15.76} />
            </button>
          </div>
          <div className="w-full p-6 gap-5 flex justify-center items-center">
            <div className="w-[446px] flex gap-[32px] flex-col ">
              <div className="w-full flex gap-3 ">
                <div className="flex gap-4 ">
                  <select className="select select-bordered w-[84px] h-[48px] bg-[#ffffff]">
                    <option disabled selected>
                      <Image src={DropDownImg} width={24} height={24} />
                    </option>
                    {icons.map((icon, index) => (
                      <option key={index} value={icon.name}>
                        {icon.icon}
                      </option>
                    ))}
                  </select>
                </div>
                <select className="select select-bordered w-[350px] h-[48px] bg-[#ffffff] ">
                  <option
                    disabled
                    selected
                    className="text-[16px] font-[400] leading-[24px] text-[#94a3b8]"
                  >
                    Name
                  </option>
                </select>
              </div>
              <button className="font-[400] text-[16px] leading-[24px] text-[#f9fafb] w-full rounded-[20px] px-[12px] py-1 bg-[#16A34A] ">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

