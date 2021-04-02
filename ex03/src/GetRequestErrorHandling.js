import React, { Component } from 'react';
import axios from 'axios';

class GetRequestErrorHandling extends Component {
    constructor(props) {
        super(props);
        this.state = { totalReactPackages: null, errorMessage: null };
    }

    async componentDidMount() {
        axios.get('https://api.npms.io/v2/invalid-url')
            .then((response) => this.setState({ totalReactPackages: response.data.total }))
            .catch((error) => {
                this.setState({ errorMessage: error.message });
                console.log('There was an error!', error);
            });
    
    }

    render() {
        const{ errorMessage } = this.state;
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">GET Request with Error Handling</h5>
                <div className="card-body">Error message: {errorMessage}</div>
            </div>
        );
    }
}

export default GetRequestErrorHandling;