import React, { Component } from 'react';

import './frontpage.css';
class FrontPage extends Component {
    state = {}
    render() {
        return (

            <div className="minh-50vh">
                <h1 className="todo-title text-center font-weight-bold my-4 ">
                    Welcome to my online store
                </h1>
            </div>
        );
    }
}

export default FrontPage;