'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP);

const tailDots = Array.from({ length: 8 });

const CustomCursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const dotRefs = useRef<HTMLSpanElement[]>([]);

    useGSAP((context, contextSafe) => {
        if (window.innerWidth < 768) return;

        const handleMouseMove = contextSafe?.((e: MouseEvent) => {
            const { clientX, clientY } = e;

            if (cursorRef.current) {
                gsap.to(cursorRef.current, {
                    opacity: 1,
                    duration: 0.2,
                });
            }

            dotRefs.current.forEach((dot, index) => {
                if (!dot) return;

                const isHead = index === 0;

                gsap.to(dot, {
                    x: clientX,
                    y: clientY,
                    scale: isHead ? 1 : Math.max(0.18, 1 - index * 0.1),
                    opacity: isHead ? 1 : Math.max(0.08, 0.55 - index * 0.06),
                    ease: 'power3.out',
                    duration: isHead ? 0.08 : 0.18 + index * 0.045,
                });
            });
        }) as any;

        const handleMouseLeave = contextSafe?.(() => {
            if (!cursorRef.current) return;

            gsap.to(cursorRef.current, {
                opacity: 0,
                duration: 0.2,
            });
        }) as any;

        window.addEventListener('mousemove', handleMouseMove);
        document.documentElement.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.documentElement.removeEventListener(
                'mouseleave',
                handleMouseLeave,
            );
        };
    });

    return (
        <div
            className="hidden md:block fixed inset-0 opacity-0 z-[50] pointer-events-none mix-blend-difference"
            ref={cursorRef}
            aria-hidden="true"
        >
            {tailDots.map((_, index) => (
                <span
                    key={index}
                    ref={(el) => {
                        if (el) dotRefs.current[index] = el;
                    }}
                    className="fixed top-0 left-0 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
                    style={{
                        boxShadow:
                            index === 0
                                ? '0 0 0 1px rgba(255,255,255,0.4)'
                                : '0 0 14px rgba(255,255,255,0.35)',
                    }}
                />
            ))}
        </div>
    );
};

export default CustomCursor;
