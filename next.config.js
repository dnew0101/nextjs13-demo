/** @type {import('next').NextConfig} */
const nextConfig = {
        images: {
        domains: ['lh3.googleusercontent.com', 'res.cloudinary.com', 'task.com']
        },
        experimental: {
        serverComponentsExternalPackages: ['cloudinary', 'graphql-request'],
        },
        eslint: {
        ignoreDuringBuilds: true
        }
    }
module.exports = nextConfig;