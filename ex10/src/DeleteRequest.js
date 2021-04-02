import React, { Component } from 'react';
import axios from 'axios';

class DeleteRequest extends Component {
    constructor(props) {
        super(props);
        this.state = { status: null };
    }

    async componentDidMount() {
        
        axios.delete('https://jsonplaceholder.typicode.com/posts/1' )
            .then(() => this.setState({ status: 'Delete successful' }));
    
    }

    render() {
        const{ status } = this.state;
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">Simple DELETE Request</h5>
                <div className="card-body">Status: {status}</div>
            </div>
        );
    }
}

export default DeleteRequest;