"use client"
import { useEffect, useState } from "react";

export default function AnimationCount({applyCount} : any) {

    return (
        <div className="w-full">
            <input
                onChange={(e) => !Number.isNaN(Number(e.target.value)) && applyCount(Number(e.target.value))}
                placeholder="animation count" type="text" className="w-full py-[4px] px-[8px] rounded-[8px] border border-gray080 bg-white outline-0" />
        </div>
    )
}