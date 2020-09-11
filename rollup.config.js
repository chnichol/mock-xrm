import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import { terser } from 'rollup-plugin-terser';
import strip from 'rollup-plugin-strip';
import alias from 'rollup-plugin-alias';
import { eslint } from "rollup-plugin-eslint";

export default [
    {
        input: './src/Xrm.js',
        output: {
            file: 'debug/Xrm.debug.js',
            name: 'Xrm',
            format: 'iife',
            sourcemap: 'inline'
        },
        plugins: [
            eslint(),
            resolve({
                jsnext: true,
                main: true,
                browser: true,
            }),
            commonjs(),
            babel({
                exclude: 'node_modules/**',
            }),
            replace({
                ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
            }),
        ],
        external: ['debug']

    },
    {
        input: './src/Xrm.js',
        output: {
            file: 'dist/Xrm.min.js',
            name: 'Xrm',
            format: 'iife',
            sourcemap: 'inline'
        },
        plugins: [
            eslint(),
            alias({
                debug: 'node_modules/debug/dist/debug.js',
            }),
            resolve({
                jsnext: true,
                main: true,
                browser: true,
            }),
            commonjs(),
            babel({
                exclude: 'node_modules/**',
            }),
            strip(),
            terser()
        ],
        external: ['debug']
    }];