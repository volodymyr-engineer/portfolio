'use client';

import { useEffect, useRef } from 'react';

export const SpotlightEffect = () => {
	const spotlightRef = useRef<HTMLDivElement>(null);
	const animationFrameId = useRef<number | null>(null);

	const dynamicSpotlightPosition = (x: number, y: number) => {
		const spotlight = spotlightRef.current;
		if (!spotlight) return;
		spotlight.style.background = `radial-gradient(550px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
	};

	useEffect(() => {
		if (window.innerWidth < 1024) return;

		const handleMouseMove = (event: MouseEvent) => {
			if (animationFrameId.current) {
				cancelAnimationFrame(animationFrameId.current);
			}

			animationFrameId.current = requestAnimationFrame(() => {
				dynamicSpotlightPosition(event.pageX, event.pageY);
			});
		};

		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			if (animationFrameId.current) {
				cancelAnimationFrame(animationFrameId.current);
			}
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);

	return (
		<section
			ref={spotlightRef}
			className="pointer-events-none fixed inset-0 z-0 hidden mix-blend-lighten transition duration-300 ease-out lg:absolute lg:block"
		/>
	);
};
