// The banner to add to the top of each file
// Pulls details from the package.json file
let banner = `// Copyright (c) Idris Khenchil https://github.com/idriskhenchil https://github.com/idriskhenchil/Fort.js`

// The formats to output
// Full list here: https://rollupjs.org/guide/en/#outputformat
let formats = ['iife', 'es', 'cjs'];

// The files to compile with rollup.js,
export default formats.map(function (format) {
    return {
        input: 'src/fort.js',
        output: {
            file: `dist/fort.${format}.js`,
            format: format,
            name: 'Fort.js',
            banner: banner,
            exports: 'auto'
        }
    };
});