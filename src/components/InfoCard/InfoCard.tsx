import React from "react";
import { cn } from "@/lib/utils";

interface InfoCardProps {
	title?: string;
	titleLevel?: "h1" | "h2" | "h3" | "h4";
	children: React.ReactNode;
	variant?: "primary" | "secondary" | "success" | "warning";
	className?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
	title,
	titleLevel = "h3",
	children,
	variant = "primary",
	className,
}) => {
	const variants = {
		primary: "bg-blue-50 border-blue-500 text-blue-700",
		secondary: "bg-gray-50 border-gray-500 text-gray-700",
		success: "bg-green-50 border-green-500 text-green-700",
		warning: "bg-yellow-50 border-yellow-500 text-yellow-700",
	};

	const titleSizes = {
		h1: "text-3xl",
		h2: "text-2xl",
		h3: "text-xl",
		h4: "text-lg",
	};

	const TitleComponent = titleLevel;

	return (
		<div
			className={cn("p-6 rounded-lg border-l-4", variants[variant], className)}
		>
			{title && (
				<TitleComponent
					className={cn(
						"font-semibold mb-3",
						titleSizes[titleLevel],
						variant === "primary"
							? "text-blue-700"
							: variant === "secondary"
							? "text-gray-700"
							: variant === "success"
							? "text-green-700"
							: "text-yellow-700"
					)}
				>
					{title}
				</TitleComponent>
			)}
			<div className="text-gray-700 space-y-4">{children}</div>
		</div>
	);
};

export default InfoCard;
