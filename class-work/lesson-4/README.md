# Настройка сборки

1. Создать в корне проекта package.json с параметрами по умолчанию  
`npm init -y`

1. Установить Vue  
`npm i vue`

1. Установить webpack и модуль для объединения файлов конфигурации 
`npm i -D webpack webpack-cli webpack-dev-server  webpack-merge`  

1. Установить babel и core-js  
`npm i -D babel-loader @babel/core @babel/preset-env core-js@3`   

1. Создайте файл .babelrc, указываем, что нужно использовать полифиллы из corejs3, 
только по мере необходимости  
    ```json
    {
      "presets": [
        ["@babel/preset-env", {
          "useBuiltIns": "usage",
          "corejs": 3
        }]
      ]
    }
    ``` 
    
1. Установите плагины и загрузчики для сборки .vue компонентов
`npm i -D vue-loader vue-template-compiler mini-css-extract-plugin html-webpack-plugin clean-webpack-plugin`  
а также загрузчик для обработки стилей препроцессором  
`npm i -D sass-loader node-sass css-loader`  

1. Создать основной конфиг для сборки  
`webpack.common.config.js`

    ```javascript
    // встроенный node-модуль для обработки путей к файлам и папкам
    const path = require("path");
    // vue плагин для webpack
    const VueLoaderPlugin = require("vue-loader/lib/plugin");
    // плагин для генерации html-файлов через webpack
    const HtmlWebpackPlugin = require("html-webpack-plugin");
    // плагин для очистки ненужных файлов сборки
    const { CleanWebpackPlugin } = require("clean-webpack-plugin");
    
    module.exports = {
        // основной файл приложения
        entry: "./src/index.js",
    
        output: {
            // собранный файл
            filename: "index.min.js",
            // путь для сохранения сборки: в папке build из текущей папки
            path: path.resolve(__dirname, "build"),
        },
    
        module: {
            rules: [
                // для все JS-файлов, кроме файлов из папки node_modules
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: "babel-loader"
                },
                // для всех vue-файлов
                {
                    test: /\.vue$/,
                    loader: "vue-loader"
                },
                // для всех scss-файлов
                {
                    test: /\.scss$/,
                    // применяется несколько лоадеров:
                    // vue извлекает стили из секции style
                    // sass-loader компилирует scss
                    // а уже css-loader обрабатывает получившийся
                    // из исходников на scss файл scss
                    use: [
                        "vue-style-loader",
                        "css-loader",
                        "sass-loader"
                    ]
                }
            ]
        },
    
        plugins: [
            // без этого плагина не работает обработка .vue-файлов
            new VueLoaderPlugin(),
            new CleanWebpackPlugin(),
            // параметры генерируемого автоматом файла index.html
            new HtmlWebpackPlugin({
                title: "Сборка проекта",
                template: "src/index.html"
            })
        ]
    };
    ```  
1. Создать конфиг для dev-сборки  
`webpack.dev.config.js`  
    ```javascript
    const merge = require("webpack-merge");
    const config = require("./webpack.common.config");
    
    module.exports = merge.smart(config, {
        // обязательно указываем dev-режим, по умолчанию webpack собирает в production
        mode: "development",
        // включаем source-maps
        devtool: "inline-source-map",
    
        // активируем рабочий сервер на 9000 порту, включаем hot reload
        devServer: {
            port: 9000,
            hot: true
        }
    });
    ```
1. Создать конфиг для production-сборки  
`webpack.dev.config.js`  
     ```javascript
     const merge = require("webpack-merge");
     const config = require("./webpack.common.config");
     // плагин для извлечения стилей в отдельные файлы
     const MiniCssExtractPlugin = require("mini-css-extract-plugin");
     
     module.exports = merge.smart(config, {
         mode: "production",
         module: {
             rules: [
                 // babel для все JS-файлов, кроме файлов из папки node_modules
                 {
                     test: /\.js$/,
                     exclude: /node_modules/,
                     loader: "babel-loader"
                 },
     
                 // стили в production выносим в отдельный файл
                 {
                     test: /\.scss$/,
                     use: [
                         MiniCssExtractPlugin.loader,
                         "css-loader"
                     ]
                 }
             ],
         },
     
         plugins: [
             // тут как раз название файла для собранного css
             new MiniCssExtractPlugin({
                 filename: "style.css"
             })
         ]
     });
     ```  
1. Прописать скрипты в package.json для запуска сборки
    ```json
    "scripts": {
        "start": "npx webpack-dev-server --color --config=webpack.dev.config.js",
        "build": "npx webpack -p --config=webpack.production.config.js",
        "test": "echo \"Error: no test specified\" && exit 1"
      }
    ```
1. Сборка для production запускается через `npm run build`, а сборка для 
dev-режима просто через `npm start`    
    
