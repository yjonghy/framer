"use client"
import { motion } from "framer-motion";
import { useState } from "react";
import { colorArray } from "@src/data/color";





export default function Home() {


  const [showColorList, setShowColorList] = useState(false)
  const [selectColor, setSelectColor] = useState(colorArray[0].color)

  return (
    <main className="relative w-full min-h-screen flex flex-col items-center justify-center">
      <motion.div
        style={{ background : selectColor }}
        className={`w-[200px] h-[200px] rounded-[16px]`}
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"]
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 2000
        }}
      />

      <div className="absolute top-[16px] right-[16px] ">
        <p
          onClick={() => setShowColorList(!showColorList)}
          className="py-[4px] px-[8px] bg-gray050 rounded-[4px] text-white cursor-pointer">select color</p>
       {showColorList && 
          <div className="absolute top-[calc(100%_+_10px)] right-0 py-[8px] px-[12px] w-[200px] h-[200px] overflow-y-auto border border-gray020 rounded-[4px]">
            {colorArray.map((item, index) => (
              <div
                onClick={() => setSelectColor(item.color)}
                key={index}>
                {item.title}
              </div>
            ))}
          </div>
       }
    
      </div>

    </main>
  );
}
