import React, { useEffect, useRef, useState, useCallback } from 'react';

type Props = {};

type CursorType = {
  x: number;
  y: number;
};

const MyCursor: React.FC<Props> = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorBorderRef = useRef<HTMLDivElement>(null);
  const [cursorPos, setCursorPos] = useState<CursorType>({ x: 0, y: 0 });
  const [cursorBorderPos, setCursorBorderPos] = useState<CursorType>({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    }
  }, [cursorRef]);

  const handleMouseOver = useCallback(
    (item: HTMLDivElement) => () => {
      if (cursorBorderRef.current) {
        if (item.dataset.cursor === 'pointer') {
          cursorBorderRef.current.style.backgroundColor = 'rgba(0, 144, 144, .4)';
          cursorBorderRef.current.style.setProperty('--size', '55px');
        }
        if (item.dataset.cursor === 'pointer2') {
          cursorBorderRef.current.style.backgroundColor = 'white';
          cursorBorderRef.current.style.mixBlendMode = 'difference';
          cursorBorderRef.current.style.setProperty('--size', '60px');
        }
      }
    },
    [cursorBorderRef]
  );

  const handleMouseOut = useCallback(() => {
    if (cursorBorderRef.current) {
      cursorBorderRef.current.style.backgroundColor = 'unset';
      cursorBorderRef.current.style.mixBlendMode = 'unset';
      cursorBorderRef.current.style.setProperty('--size', '30px');
    }
  }, [cursorBorderRef]);

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.querySelectorAll('[data-cursor]').forEach((item) => {
      item.addEventListener('mouseover', handleMouseOver(item));
      item.addEventListener('mouseout', handleMouseOut);

      return () => {
        item.removeEventListener('mouseover', handleMouseOver(item));
        item.removeEventListener('mouseout', handleMouseOut);
      };
    });
  }, [handleMouseMove, handleMouseOver, handleMouseOut]);

  useEffect(() => {
    const loop = () => {
      const easting = 8;
      setCursorBorderPos((prev) => ({
        x: prev.x + (cursorPos.x - prev.x) / easting,
        y: prev.y + (cursorPos.y - prev.y) / easting,
      }));

      if (cursorBorderRef.current) {
        cursorBorderRef.current.style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`;
      }
      requestAnimationFrame(loop);
    };

    requestAnimationFrame(loop);
  }, [cursorPos, cursorBorderPos]);

  return (
    <>
      <div id="cursor" ref={cursorRef}></div>
      <div id="cursor-border" ref={cursorBorderRef}></div>
    </>
  );
};

export default MyCursor;
