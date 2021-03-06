// function.js
const { https } = require('firebase-functions');
const { default: next } = require('next');

// const isDev = process.env.NODE_ENV !== 'production';

const server = next({
  dev: false,
  conf: { distDir: '.next' },
})

const nextjsHandle = server.getRequestHandler();
exports.nextSSRServerBB = https.onRequest((req, res) => {
  return server.prepare().then(() => nextjsHandle(req, res));
}) 