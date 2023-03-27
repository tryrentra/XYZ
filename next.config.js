/** @type {import('next').NextConfig} */
module.exports={env: {
    NEXT_PUBLIC_API_URL: 'http://68.183.85.63:8080/',
    NEXT_PUBLIC_SOCKET: 'http://68.183.85.63:4000/'
  },
  server: {
    https: false
  }
}
