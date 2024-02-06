import React from 'react';
import { useSpring, animated } from '@react-spring/web';

interface TimelineItemProps {
    year: string;
    title: string;
    description: string;
    index: number;
    scrollIndex: number;
}

const Timeline: React.FC<TimelineItemProps> = ({ year, title, description, index, scrollIndex }) => {
    const adjustedIndex = scrollIndex === 1 ? index : 0;

    const props = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: adjustedIndex * 200,
        config: { mass: 1, tension: 120, friction: 14 },
    });

    return (
        <animated.li style={props}>
            <div className="timeline-middle">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                >
                    <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>
            <div className={`timeline-${adjustedIndex % 2 === 0 ? 'start' : 'end'} md:text-end mb-10`}>
                <time className="font-mono italic">{year}</time>
                <div className="text-lg font-black">{title}</div>
                {description}
            </div>
            <hr />
        </animated.li>
    );
};

export default Timeline;
