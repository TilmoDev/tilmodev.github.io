/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	reactStrictMode: false, // Disabling for now because of rerender issue. See: https://stackoverflow.com/questions/71847778/why-my-nextjs-component-is-rendering-twice
};

export default nextConfig;
