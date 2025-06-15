'use client';

import { useEffect, useRef } from 'react';

const Spotlight = () => {
	const spotlightRef = useRef<HTMLDivElement>(null);
	const animationFrameId = useRef<number | null>(null);

	const dynamicSpotlightPosition = (x: number, y: number) => {
		const spotlight = spotlightRef.current;
		if (!spotlight) return;
		spotlight.style.background = `radial-gradient(600px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
	};

	useEffect(() => {
		const handleMouseMove = (event: MouseEvent) => {
			if (animationFrameId.current) {
				cancelAnimationFrame(animationFrameId.current);
			}

			animationFrameId.current = requestAnimationFrame(() => {
				dynamicSpotlightPosition(event.clientX, event.clientY);
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
		<div
			ref={spotlightRef}
			className="pointer-events-none fixed inset-0 z-0 transition duration-300 ease-out lg:absolute"
			style={{ mixBlendMode: 'lighten' }}
		/>
	);
};

export { Spotlight };
