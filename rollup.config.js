import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import postcss from 'rollup-plugin-postcss'
import dts from 'rollup-plugin-dts'
import json from '@rollup/plugin-json'
import { terser } from 'rollup-plugin-terser'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import css from 'rollup-plugin-css-export'
import tailwind from 'rollup-plugin-tailwind'
import svg from 'rollup-plugin-svg'

const packageJson = require('./package.json')

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
        exclude: ['node_modules', 'docu'],
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
        exclude: ['node_modules', 'docu'],
      },
    ],
    plugins: [
      commonjs(),
      json(),
      peerDepsExternal(),
      terser(),
      tailwind(),
      svg(),
      typescript({
        tsconfig: './tsconfig.json',
      }),
      postcss({
        minimize: true,
        extract: true,
        // modules: true, // NOTE: do NOT use this option, because it will prefix all css classes!
      }),
      resolve(),
    ],
  },
  {
    input: 'dist/esm/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts(), css()],
    external: [/\.(css|less|scss)$/, 'react', 'react-dom'],
    // include: '**/*.css',
  },
]
