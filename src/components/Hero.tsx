import { motion } from 'framer-motion';
import React, { useEffect, useState, useCallback } from 'react';
import Typewriter from 'typewriter-effect';
import Icons from './Icons';

interface MouseType {
    x: number;
    y: number;
}

type Variants = {
    [key: string]: {
        x: number;
        y: number;
        backgroundColor?: string;
        width?: number;
        height?: number;
        mixBlendMode?: string
    };
};

const Hero: React.FC = () => {
    const [mousePosition, setMousePosition] = useState<MouseType>({ x: 0, y: 0 });
    const [cursorVariant, setCursorVariant] = useState<string>('default');
    const textAnimated = ['Frontend Developer', 'Mobile Developer']
    const handleMouseMove = useCallback((e: any) => {
        setMousePosition({
            x: e.clientX,
            y: e.clientY,
        });
    }, []);

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [handleMouseMove]);

    const variants: Variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
        },
        text: {
            height: 150,
            width: 150,
            x: mousePosition.x - 75,
            y: mousePosition.y - 75,
            backgroundColor: 'white',
            mixBlendMode: 'difference',
        },
        linkedin: {
            height: 150,
            width: 150,
            x: mousePosition.x - 75,
            y: mousePosition.y - 75,
            backgroundColor: 'blue',
            mixBlendMode: 'difference',
        }
    };

    const textEnter = () => setCursorVariant('text');
    const linkedinEnter = () => setCursorVariant('linkedin');
    const textLeave = () => setCursorVariant('default');

    return (
        <div className='h-screen flex flex-col items-center justify-center'>
            <Icons textEnter={textEnter} textLeave={textLeave} linkedinEnter={linkedinEnter} />
            <div className="flex my-auto items-center justify-center align-middle">
                <motion.div
                    className="cursor"
                    variants={variants}
                    animate={cursorVariant}
                />
                <div className="text-center">
                    <div className="flex-row">
                        <h1
                            onMouseEnter={textEnter}
                            onMouseLeave={textLeave}
                            className="text-white text-4xl md:text-6xl lg:text-8xl font-bold mb-8 cursor-none"
                        >
                            Hi, I'm
                            <div className=" m-4 text-4xl md:text-6xl lg:text-8xl font-bold mb-8 cursor-none">
                                <Typewriter
                                    options={{
                                        strings: textAnimated,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </div>
                        </h1>
                        <h1
                            onMouseEnter={textEnter}
                            onMouseLeave={textLeave}
                            className="text-white text-2xl md:text-3xl lg:text-4xl font-bold cursor-none"
                        >
                            How about going on a journey?
                        </h1>
                    </div>
                    <button
                        onMouseEnter={textEnter}
                        onMouseLeave={textLeave}
                        className="btn btn-sm sm:btn-sm md:btn-md lg:btn-lg mt-5 cursor-none"
                    >
                        Let's Go
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;