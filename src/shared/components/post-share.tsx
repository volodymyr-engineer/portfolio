'use client';

import { useState, useEffect, useRef } from 'react';
import type { MouseEvent, TouchEvent } from 'react';
import { useTranslations } from 'next-intl';

export const PostShare = () => {
	const translation = useTranslations('Blog-Page.posts.components.share');
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	const handlerStopPropagation = (event: MouseEvent<HTMLButtonElement> | TouchEvent<HTMLButtonElement>) => {
		event.stopPropagation();
	};

	const handlerCloseDropdown = () => {
		if (isOpen) {
			setIsOpen(false);
		}
	};

	const handleEscapeKey = (event: KeyboardEvent) => {
		if (event.key === 'Escape') {
			setIsOpen(false);
		}
	};

	const handleCopyLink = async () => {
		await navigator.clipboard.writeText(window.location.href);
		setIsOpen(false);
	};

	const handlerClick = async (event: MouseEvent<HTMLButtonElement> | TouchEvent<HTMLButtonElement>) => {
		handlerStopPropagation(event);
		await handleCopyLink();
	};

	useEffect(() => {
		if (isOpen) {
			document.addEventListener('keydown', handleEscapeKey);
			const bodyRef = document.getElementById('root');
			if (bodyRef) bodyRef.style.overflow = 'hidden';
		}

		return () => {
			document.removeEventListener('keydown', handleEscapeKey);
			const bodyRef = document.getElementById('root');
			if (bodyRef) bodyRef.style.overflow = 'auto';
		};
	}, [isOpen]);

	return (
		<div ref={dropdownRef} className="relative inline-block text-left">
			<button
				type="button"
				onClick={() => setIsOpen(!isOpen)}
				className="group flex max-h-max cursor-pointer items-center gap-2 rounded-full bg-transparent px-6 py-2.5 text-center font-semibold text-teal-300 shadow-xs"
			>
				{translation('label')}
				<svg className="mr-1 h-5 w-5 transition-transform group-hover:translate-x-2" aria-hidden="true">
					<use href="/assets/sprite.svg#icon-share" />
				</svg>
			</button>

			{isOpen && (
				<div className="bg-opacity-50 fixed inset-0 z-50 backdrop-blur-[3px]" onClick={handlerCloseDropdown}>
					<div className="mx-auto max-w-screen-lg px-6 py-12 md:px-12 md:py-16 lg:py-24">
						<div className="ml-auto w-39">
							<div className="mt-[45px] py-1">
								<button
									onClick={handlerClick}
									type="button"
									className="ring-opacity-5 flex max-h-max cursor-pointer items-center gap-2 rounded-md bg-teal-300 py-2 pr-6 pl-3 text-center font-semibold text-stone-900 shadow-xs ring-1 ring-black"
								>
									<svg className="h-6 w-6" aria-hidden="true">
										<use href="/assets/sprite.svg#icon-link" />
									</svg>
									{translation('drop-down.copy-link')}
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
