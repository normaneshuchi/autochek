/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['media.autochek.africa', 'storage.googleapis.com', 'images.unsplash.com'],
    },
}

module.exports = nextConfig