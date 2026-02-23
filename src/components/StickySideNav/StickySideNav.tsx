"use client";

import React from "react";

interface NavItem {
	id: string;
	label: string;
	href: string;
}

interface StickySideNavProps {
	items: NavItem[];
	className?: string;
}

const StickySideNav: React.FC<StickySideNavProps> = ({
	items,
	className = "",
}) => {
	const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
		e.preventDefault();
		const targetId = href.replace('#', '');
		const targetElement = document.getElementById(targetId);
		
		if (targetElement) {
			// Account for navbar height (56px) plus some padding
			const offset = 80; // 56px navbar + 24px padding
			const elementPosition = targetElement.getBoundingClientRect().top;
			const offsetPosition = elementPosition + window.pageYOffset - offset;

			window.scrollTo({
				top: offsetPosition,
				behavior: 'smooth'
			});
		}
	};

	return (
		<nav
			className={`sticky top-14 bg-white border border-gray-300 rounded-lg p-4 shadow-md ${className}`}
		>
			<h3 className="text-lg font-semibold mb-4 text-gray-800">Navigation</h3>
			<ul className="space-y-2">
				{items.map((item) => (
					<li key={item.id}>
						<a
							href={item.href}
							onClick={(e) => handleNavClick(e, item.href)}
							className="block py-2 px-3 text-gray-700 hover:bg-gray-100 rounded transition-colors duration-200"
						>
							{item.label}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default StickySideNav;