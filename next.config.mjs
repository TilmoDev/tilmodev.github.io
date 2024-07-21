/** @type {import('next').NextConfig} */
const nextConfig = {
	basePath: "/sellswords",	// Changes the app to be seen in tilmodev.githhub.io/sellswords
	output: "export",
	reactStrictMode: false,		// Disabling for now because of rerender issue. See: https://stackoverflow.com/questions/71847778/why-my-nextjs-component-is-rendering-twice
};

export default nextConfig;
