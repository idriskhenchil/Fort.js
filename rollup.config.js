import terser from "@rollup/plugin-terser";

let banner = `// Copyright (c) Idris Khenchil https://github.com/idriskhenchil https://github.com/idriskhenchil/Fort.js`

export default [
    // browser-friendly UMD build
    {
        input: 'src/fort.js',
        output: {
            file: `dist/fort.js`,
            format: 'umd',
            name: 'Fort',
            banner: banner,
        }
    },
    // browser-friendly UMD minified build
    {
        input: 'src/fort.js',
        output: {
            file: `dist/fort.min.js`,
            format: 'umd',
            name: 'Fort',
            banner: banner,
        },
        plugins: [
            terser() // mangler/compressor toolkit
        ]
    }
]