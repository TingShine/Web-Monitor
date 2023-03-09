import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import fs from 'fs';
import path from 'path';
import typescript from 'rollup-plugin-typescript2';

const input = 'packages/index.ts'

const buildOption = {
  input,
  plugins: [
    commonjs(),
    nodeResolve(),
    typescript(),
  ],
  output: {
    file: 'bundle.js',
    format: 'cjs'
  }
}

export default buildOption