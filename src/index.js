import '@babel/polyfill';
import * as $ from 'jquery';
import '@css/style.css';
import Post from '@model/post';
import json from '@assets/data.json';
import webpackLogo from '@assets/icon-square-big.png';
import xml from '@assets/data.xml';
import csv from '@/assets/data.csv';
import './less/style.less';
import './sass/style.scss';
import './sass/style.sass';
import '@model/lodash';

const post = new Post('Webpack Post title', webpackLogo);

console.log('Post to string', post.toString());

$('pre').addClass('code').html(post.toString())

console.log('JSON', json);

console.log('xml', xml);

console.log('csv', csv);

async function start() {
    return await new Promise((r) => setTimeout(() => r('Async done.'), 2000));
}
start().then((res) => console.log(res));

class Util {
    static id = Date.now();
}
console.log('Util Id:', Util.id);

// import React from 'react';
// import { render } from 'react-dom';
// const App = () => (
//     <div className="container">
//         <h1>Webpack training</h1>
//         <div className="webpack-logo" />
//         <pre />
//         <div className="less-demo">
//             <h2>Less</h2>
//         </div>
//         <div className="scss-demo">
//             <h2>Scss</h2>
//         </div>
//         <div className="sass-demo">
//             <h2>Sass</h2>
//         </div>
//     </div>
// );
// render(<App />, document.querySelector('#app'));