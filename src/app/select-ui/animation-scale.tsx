"use client"
import { useEffect, useState } from "react";

export default function AnimationScale({ animationCount, applyScale }: any) {

    console.log(animationCount)

    //ex) {index : 0, scale : 1}
    //reset -> animationCount를 dependency 로 사용하고 걍 바뀔때마다 array reset
    return (
        <div className="w-full">
            <p>animation scale</p>
            <div className="w-full flex flex-col gap-[4px]">
                {Array(animationCount).fill(0).map((item: number, index: number) => (
                    <div key={index} className="w-full flex gap-[2px] justify-center items-center">
                        <input
                            placeholder={`animation scale ${index + 1}`}
                            type="text"
                            className="py-[4px] px-[8px] rounded-[8px] border border-gray080 bg-white outline-0" />
                    </div>
                ))}
            </div>
        </div>
    )
}