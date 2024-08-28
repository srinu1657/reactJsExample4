import React from 'react';
import ReactDom from 'react-dom'
import Header from './components/Header'

const App = () => {
    return (
        <div>
            <Header/>
            <h1>Hi..... I am from react... </h1>
            <h2>this is my code</h2>
        </div>

    )
}

ReactDom.render(<App />, document.getElementById('root'))
