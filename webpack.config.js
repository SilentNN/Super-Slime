const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname)
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif|mp3)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            limit: 8192,
                        },
                    },
                ],
            },
            
        ],
    },
};