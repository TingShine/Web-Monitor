import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser'
import pkg from './load-packge.cjs'

const version = pkg.version
const input = 'packages/index.ts'

const buildOption = {
  input,
  plugins: [
    commonjs(),
    nodeResolve(),
    typescript(),
    replace({
      VERSION: JSON.stringify(version),
    }),
  ],
  output: [
    {
      sourcemap: true,
      file: 'dist/bundle.js',
      format: 'cjs',
      name: 'monitor',
    },
    {
      file: 'dist/bundle.min.js',
      format: 'iife',
      name: 'monitor',
      plugins: [terser()]
    }
  ]
}

export default buildOption