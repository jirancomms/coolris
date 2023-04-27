const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

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
        mode: 'production',
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        target: ['web', 'es5'],
        output: {
            filename: env.FILE.replace('.ts', '') + '.js',
            path: path.resolve(__dirname, 'dist'),
            libraryTarget: 'umd'
        },
        optimization: {
            minimize: true,
            minimizer: [
                new TerserPlugin({
                    test: /\.js$/, // js 파일에만 적용
                }),
            ],
        },
        // optimization: {
        //     minimize: false
        // }
    }
};
