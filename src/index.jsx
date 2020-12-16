import React from 'react';
import { render } from 'react-dom';
import '@model/lodash';
const App = () => (
    <div className="container">
        <h1>Webpack training</h1>
        <div className="webpack-logo" />
        <pre />
        <div className="less-demo">
            <h2>Less</h2>
        </div>
        <div className="scss-demo">
            <h2>Scss</h2>
        </div>
        <div className="sass-demo">
            <h2>Sass</h2>
        </div>
    </div>
);
render(<App />, document.querySelector('#app'));