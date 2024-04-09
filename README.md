# Farcaster Transaction Frame

Farcaster Transaction Frame is an innovative application that enables users to claim NFTs directly from a Farcaster Frame. This repository contains all the necessary code and instructions to get the application up and running.

## Getting Started

To use the Farcaster Transaction Frame, you'll need to clone this repository, install dependencies, set up environment variables, and deploy the application. Below are the steps to follow:

### Cloning the Repository

To get started, clone the repository to your local machine:
```
git clone https://github.com/thirdweb-example/farcaster-transaction-frame-youtube.git
```
```
cd farcaster-transaction-frame-youtube
```


### Installing Dependencies

This application requires several dependencies to function, including thirdweb and Coinbase's OnchainKit. Install them using npm or yarn:

```
npm install
```
or
```
yarn install
```


### Video Tutorial

For a detailed setup and deployment guide, watch our video tutorial on YouTube:

[How to build a Farcaster Transaction Frame](https://youtu.be/j7U97ZgnDts)

### Deploying with Vercel

To deploy the Farcaster Transaction Frame, we recommend using Vercel. If you haven't already, sign up for a Vercel account and install the Vercel CLI:

```
npm i -g vercel
```

Then, within your project directory, run:
```
vercel
```


Follow the prompts to set up and deploy your project.

### Setting Environment Variables

Vercel requires specific environment variables for the Farcaster Transaction Frame to operate correctly. These include:

- `TW_SECRET_KEY`: thirdweb API secret key.
- `CONTRACT_ADDRESS`: The contract address for the NFT.
- `NEXT_PUBLIC_HOST_URL`: The URL of your deployed application.
- `NEYMAR_API_KEY` (optional): Your Neymar API key, if you choose to use it.

To add these variables in Vercel, navigate to your project settings on the Vercel dashboard, find the Environment Variables section, and add the variables listed above.

### Final Steps

Once your environment variables are set, your application is ready to go! 

You can test you Frame using [Farcaster's Frame Validator](https://warpcast.com/~/developers/frames)

## Learn More

To learn more about thirdweb and Next.js, take a look at the following resources:

- [thirdweb docs Documentation](https://portal.thirdweb.com) - 
- [thirdweb dashboard](https://thirdweb.com)

You can check out [the thirdweb GitHub organization](https://github.com/thirdweb-dev) - your feedback and contributions are welcome!

## Join our Discord!

For any questions, suggestions, join our discord at [https://discord.gg/thirdweb](https://discord.gg/thirdweb).