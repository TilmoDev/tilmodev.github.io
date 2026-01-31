import { ReactNode } from "react";
import { useTranslations } from "next-intl";

// Default rich text components
const DEFAULT_COMPONENTS = {
	emphasis: (chunks: ReactNode) => <strong>{chunks}</strong>,
	critical: (chunks: ReactNode) => (
		<strong>
			<i>{chunks}</i>
		</strong>
	),
	strong: (chunks: ReactNode) => <strong>{chunks}</strong>,
	italic: (chunks: ReactNode) => <i>{chunks}</i>,
	em: (chunks: ReactNode) => <em>{chunks}</em>,
} as const;

type RichComponents = Record<string, (chunks: ReactNode) => ReactNode>;

interface UseRichTranslationsOptions {
	namespace?: string;
	components?: RichComponents;
}

export function useRichTranslations(options: UseRichTranslationsOptions = {}) {
	const { namespace, components: customComponents } = options;

	const t = useTranslations(namespace);
	const components = { ...DEFAULT_COMPONENTS, ...customComponents };

	// Rich text function
	const richText = (key: string, overrideComponents?: RichComponents) => {
		const finalComponents = overrideComponents
			? { ...components, ...overrideComponents }
			: components;

		return t.rich(key, finalComponents);
	};

	// Helper to get raw array data
	const getRawArray = <T = any,>(key: string): T[] => t.raw(key) as T[];

	return {
		t,
		richText,
		getRawArray,
		// Convenience methods for common array types
		getComponents: (key: string) =>
			getRawArray<{ title: string; content: string; example?: string }>(key),
		getTypes: (key: string) =>
			getRawArray<{ title: string; content: string; example?: string }>(key),
	};
}
