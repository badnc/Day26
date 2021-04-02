import React, { Component } from 'react';
import axios from 'axios';

class GetRequestHeaders extends Component {
    constructor(props) {
        super(props);
        this.state = { totalReactPackages: null };
    }

    async componentDidMount() {
        const headers = {
            'Authorization': 'Bearer my-token',
            'My-Custom-Header': 'foobar'
        };
        axios.get('https://api.npms.io/v2/search?q=react', { headers })
            .then(response => this.setState({ totalReactPackages: response.data.total }));
    }

    render() {
        const{ totalReactPackages } = this.state;
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">GET Request with Set Headers</h5>
                <div className="card-body">Total packages: {totalReactPackages}</div>
            </div>
        );
    }
}

export default GetRequestHeaders;