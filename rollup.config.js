import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import ts from '@wessberg/rollup-plugin-ts';

export default {
  input: 'index.tsx',
  output: {
    file: 'index.js',
    format: 'iife'
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    nodeResolve({
      browser: true
    }),
    commonjs(),
    ts()
  ]
};
