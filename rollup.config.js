let banner = `// Copyright (c) Idris Khenchil https://github.com/idriskhenchil https://github.com/idriskhenchil/Fort.js`

let formats = ['es', 'cjs', 'umd'];

export default formats.map(function (format) {
    return {
        input: 'src/fort.js',
        output: {
            file: `dist/fort.${format}.js`,
            format: format,
            name: 'Fort',
            banner: banner,
            exports: 'auto'
        }
    };
});