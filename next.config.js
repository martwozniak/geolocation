/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        MAPTILER_TOKEN: process.env.MAPTILER_TOKEN,
    }
}

module.exports = nextConfig
