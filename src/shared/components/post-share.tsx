'use client';

import { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';

export const PostShare = () => {
	const translation = useTranslations('Blog-Page.posts.components.share');
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		};

		const handleEscapeKey = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				setIsOpen(false);
			}
		};

		if (isOpen) {
			document.addEventListener('mousedown', handleClickOutside);
			document.addEventListener('keydown', handleEscapeKey);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
			document.removeEventListener('keydown', handleEscapeKey);
		};
	}, [isOpen]);

	const handleCopyLink = async () => {
		await navigator.clipboard.writeText(window.location.href);
		setIsOpen(false);
	};

	return (
		<div ref={dropdownRef} className="relative inline-block text-left">
			<button
				type="button"
				onClick={() => setIsOpen(!isOpen)}
				className="flex max-h-max cursor-pointer items-center gap-2 rounded-full bg-transparent px-6 py-2.5 text-center font-semibold text-teal-300 shadow-xs"
			>
				{translation('label')}
				<svg className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-2" aria-hidden="true">
					<use href="/assets/sprite.svg#icon-share" />
				</svg>
			</button>

			{isOpen && (
				<div className="ring-opacity-5 absolute right-0 mt-2 w-39 origin-top-right rounded-md bg-teal-300 shadow-lg ring-1 ring-black">
					<div className="py-1">
						<button
							onClick={handleCopyLink}
							type="button"
							className="flex max-h-max cursor-pointer items-center gap-2 rounded-full bg-transparent px-6 py-2.5 text-center font-semibold text-black shadow-xs"
						>
							<svg className="h-6 w-6 transition-transform group-hover:-translate-x-2" aria-hidden="true">
								<use href="/assets/sprite.svg#icon-link" />
							</svg>
							{translation('drop-down.copy-link')}
						</button>
					</div>
				</div>
			)}
		</div>
	);
};
