"use client"
import { useEffect, useState } from "react";
import { colorArray } from "@src/data/color";

export default function AnimationColor({ applyColor } : any) {

    const [showColorList, setShowColorList] = useState(false)

    return (
        <>
            <p
                onClick={() => setShowColorList(!showColorList)}
                className="py-[4px] px-[8px] bg-gray050 rounded-[4px] text-white cursor-pointer shadow-shadow10">select color</p>
            {showColorList &&
                <div
                    className="absolute top-[calc(100%_+_4px)] right-0 py-[8px] w-[200px] h-[200px] overflow-y-auto border border-gray020 rounded-[8px] bg-white shadow-shadow10">
                    {colorArray.map((item, index) => (
                        <div
                            key={item.color}
                            className="py-[4px] px-[12px] hover:bg-gray020"
                            onClick={() => {
                                applyColor(item.color)
                                setShowColorList(false)
                            }}>
                            {item.title}
                        </div>
                    ))}
                </div>
            }
        </>
    )
}