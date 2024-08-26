import NextFederationPlugin from '@module-federation/nextjs-mf';

/** @type {import('next').NextConfig} */
const remotes = (isServer) => {
  const location = isServer ? 'ssr' : 'chunks';
  return {
    mfeApp2: `mfeApp2@http://localhost:3001/_next/static/${location}/remoteEntry.js`,
    mfeApp3: `mfeApp3@http://localhost:3002/_next/static/${location}/remoteEntry.js`,
    mfeApp4: `mfeApp4@http://localhost:3003/_next/static/${location}/remoteEntry.js`,
    mfeApp5: `mfeApp5@http://localhost:3004/_next/static/${location}/remoteEntry.js`,
    mfeApp6: `mfeApp6@http://localhost:3005/_next/static/${location}/remoteEntry.js`,
    mfeApp7: `mfeApp7@http://localhost:3006/_next/static/${location}/remoteEntry.js`,
    mfeApp8: `mfeApp8@http://localhost:3007/_next/static/${location}/remoteEntry.js`,
    mfeApp9: `mfeApp9@http://localhost:3008/_next/static/${location}/remoteEntry.js`,
    mfeApp10: `mfeApp10@http://localhost:3009/_next/static/${location}/remoteEntry.js`,
    mfeApp11: `mfeApp11@http://localhost:3010/_next/static/${location}/remoteEntry.js`,
  };
};

const nextConfig = {
  reactStrictMode: true,
  webpack(config, { isServer }) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'mfeApp',
        remotes: remotes(isServer),
        filename: 'static/chunks/remoteEntry.js',
        exposes: {},
        extraOptions: {
          debug: false,
          exposePages: false,
        },
        shared: {

        },
      })
    );

    return config;
  },
};

export default nextConfig;
//npm install @module-federation/nextjs-mf