"use client"
import { constants } from "buffer";
import { useEffect, useState } from "react";

export default function AnimationScale({ animationCount, applyScale }: any) {


    const [scale, setScale] = useState<any>([])

    const changeScaleValue = (index: number, value: number) => {
        const copyArray = [...scale]
        //ex) {index : 0, scale : 1}
        const object = { index: index, scale: value }
        let existCheck = false
        for (let i = 0; i < copyArray.length; i++) {
            if (copyArray[i].index === index) {
                existCheck = true
                break
            }
        }
        existCheck ? copyArray[index] = object : copyArray.push(object)
        setScale(copyArray)
    }
    return (
        <div className="w-full">
            <p>animation scale</p>
            <div
                onClick={() => applyScale(scale.map((item : any) => item.scale))}
                className="mt-[4px] py-[4px] px-[12px] rounded-[4px] bg-gray050 hover:bg-gray080 text-white cursor-pointer">
                apply scale
            </div>
            <div className="mt-[8px] w-full max-h-[200px] overflow-hidden flex flex-col">
                <div className="w-full h-full flex flex-col gap-[4px] overflow-auto">
                    {Array(animationCount).fill(0).map((item: number, index: number) => (
                        <div key={index} className="w-full flex gap-[2px] justify-center items-center">
                            <input
                                onChange={(e) => (e.target.value !== "" && !Number.isNaN(Number(e.target.value))) && changeScaleValue(index, Number(e.target.value))}
                                placeholder={`animation scale ${index + 1}`}
                                type="text"
                                className="py-[4px] px-[8px] rounded-[8px] border border-gray080 bg-white outline-0" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}