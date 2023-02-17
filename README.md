This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

The next js app is turned into a feature hub that consume feature apps using [`this library`](https://feature-hub.io/docs/getting-started/introduction).

## Getting Started

Make sure you have webpack cli installed, you can find it [`here`](https://www.npmjs.com/package/webpack-cli)

Run `npm install` in both project roots and then to run: `npm run dev` in the NextJS app directory and `webpack` in the feature-app directory. After webpack has bundled run `serve -l 1234` and then go to localhost:3000 and navigate to the feature app page in the header.  


# Passing data between remote feature app and hub

The feature app is loaded remotely via CDN or from a server and thanks to the Feature Hub library it can share context and environment. In this POC notice in the console how the NextJS app sets data in the window object and how it is later accessed and logged from the feature app.