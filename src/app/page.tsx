"use client"
import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";
import { colorArray } from "@src/data/color";
import { AnimateType } from "@src/types/AnimateType";
import AnimationColor from "./select-ui/animation-color";
import AnimationCount from "./select-ui/animation-count";
import AnimationScale from "./select-ui/animation-scale";


export default function Home() {


    const [animationCount, setAnimationCount] = useState(0)
    const [colorResult, setColorResult] = useState(colorArray[0].color)
    const [scaleResult, setScaleResult] = useState([])

    useEffect(() => {
        console.log(scaleResult, "scaleResult")
    }, [scaleResult])

    const [animateObject, setAnimateObject] = useState<AnimateType>({})

    // scale 스케일 (사이즈)
    // rotate 회전값
    // borderRadius 라운딩값
    //ease: 천천-빠름-천천
    // ease-in: 보통-빠르게
    // ease-out: 보통-느리게
    // ease-in-out: 천천-보통-천천(ease와 그래프 모양이 같은데, 기울기 변화 속도는 다르다)
    const motionVariants = {
        scale: scaleResult,
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 2000
    }
    const controls = useAnimationControls();


    return (
        <main className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gray015">
            <motion.div
                style={{ background: colorResult }}
                animate={controls}
                initial={false}
                className={`w-[200px] h-[200px] rounded-[16px]`} />

            <button
                onClick={() => {

                    console.log(motionVariants)
                    controls.start(motionVariants).then(r => { console.log(r, "result") })
                }}
                className="absolute bottom-[16px] right-[16px] py-[8px] px-[16px] bg-hourblue text-white rounded-[16px]">
                start animation
            </button>

            <div className="absolute top-[16px] right-[16px] max-w-[200px]">
                <div className="w-full flex flex-col gap-[8px]">
                    <AnimationCount applyCount={(count : number) => setAnimationCount(count)}/>
                    <div className="relative w-full">
                        <AnimationColor applyColor={(color : string) => setColorResult(color)}/>
                    </div>
                    <AnimationScale animationCount={animationCount} applyScale={(scale : []) => setScaleResult(scale)}/>
                </div>
            </div>
        </main>
    );
}
