const dev = process.env.NODE_ENV !== 'production'

export const server  = dev ? "http://localhost:3000/" : "https://dpsv2.vercel.app/"