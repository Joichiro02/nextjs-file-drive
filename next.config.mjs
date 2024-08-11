/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: 'clever-snail-106.convex.cloud',
			},
		],
	},
	experimental: {
		serverActions: {
			allowedOrigins: ['xxxx.com', 'localhost:3000'],
		},
	},
};

export default nextConfig;
