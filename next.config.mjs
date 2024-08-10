/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		serverActions: {
			allowedOrigins: ['xxxx.com', 'localhost:3000'],
		},
	},
};

export default nextConfig;
