const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry : {
        index: path.resolve(__dirname , './src/index.js')
    },
    output : {
        
        path : path.resolve(__dirname ,'dist' ),
        filename : '[name].bundle.js',
        clean : true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html',
        }),
    ],
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
        ],
      }    
}
