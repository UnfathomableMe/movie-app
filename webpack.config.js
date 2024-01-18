const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
 
module.exports = {
    output: {
        path : path.join(__dirname, '/dist'),
        filename: 'index.bundle.js',
        publicPath: '/'
    },
    devServer: {
        port: 3000,
        hot: true ,  
        open: true,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,  //regex to match any js or jsx file
                exclude: /node-modules/,
                use:{
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            }
        ]
    },
    // plugins: [new MiniCssExtractPlugin()],
};
