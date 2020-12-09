const path = require('path');

module.exports = env => {

    return {
        entry: './' + env.FILE,
        devtool: 'source-map',
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        target: ['web', 'es5'],
        output: {
            filename: env.FILE.replace('.ts', '') + '.js',
            path: path.resolve(__dirname, 'dist'),
            libraryTarget: 'umd'
        },
        // optimization: {
        //     minimize: false
        // }
    }
};
