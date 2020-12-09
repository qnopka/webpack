import * as $ from 'jquery';
import '@css/style.css';
import Post from '@model/post';
import json from '@assets/data.json';
import webpackLogo from '@assets/icon-square-big.png';
import xml from '@assets/data.xml';
import csv from '@/assets/data.csv';

const post = new Post('Webpack Post title', webpackLogo);

console.log('Post to string', post.toString());

$('pre').html(post.toString())

console.log('JSON', json);

console.log('xml', xml);

console.log('csv', csv);