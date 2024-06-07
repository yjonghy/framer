"use client"
import {motion, useAnimationControls} from "framer-motion";
import {useState} from "react";
import {colorArray} from "@src/data/color";
import {AnimateType} from "@src/types/AnimateType";


export default function Home() {


    const [showColorList, setShowColorList] = useState(false)
    const [selectColor, setSelectColor] = useState(colorArray[0].color)
    const [animateObject, setAnimateObject] = useState<AnimateType>({})

    // scale 스케일 (사이즈)
    // rotate 회전값
    // borderRadius 라운딩값
    //ease: 천천-빠름-천천
    // ease-in: 보통-빠르게
    // ease-out: 보통-느리게
    // ease-in-out: 천천-보통-천천(ease와 그래프 모양이 같은데, 기울기 변화 속도는 다르다)

    const motionVariants = {
        scale: [1, 2, 2, 1, 1],
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
                style={{background: selectColor}}
                animate={controls}
                initial={false}
                className={`w-[200px] h-[200px] rounded-[16px]`}
            />

            <button
                onClick={() => {
                    controls.start(motionVariants).then(r => {console.log(r, "result")})
                }}
                className="absolute bottom-[16px] right-[16px] py-[8px] px-[16px] bg-hourblue text-white rounded-[16px]">
                start animation
            </button>

            <div className="absolute top-[16px] right-[16px]">
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
                                    setSelectColor(item.color)
                                    setShowColorList(false)
                                }}>
                                {item.title}
                            </div>
                        ))}
                    </div>
                }
            </div>

        </main>
    );
}
