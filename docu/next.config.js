/**
 * @type {import('next').NextConfig}
 */

const withPlugins = require('next-compose-plugins')

const path = require('path')
const { i18n } = require('./next-i18next.config')
const packageJson = require('./package.json')

const { parsed: localEnv } = require('dotenv-safe').config({
  allowEmptyValues: false,
  path: path.resolve(__dirname, `environments/.env.${process.env.ENV}`),
  example: path.resolve(__dirname, `environments/.env.example`),
})

localEnv.APP_VERSION = packageJson.version

const nextConfig = {
  reactStrictMode: true,
  env: localEnv,
  distDir: './dist',
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = withPlugins([
  [nextConfig],
  {
    i18n,
  },
])
