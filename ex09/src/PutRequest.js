import React, { Component } from 'react';
import axios from 'axios';

class PutRequest extends Component {
    constructor(props) {
        super(props);
        this.state = { postId: null };
    }

    async componentDidMount() {
        axios.put('https://jsonplaceholder.typicode.com/posts/1', { title: 'React PUT Example' })
        .then(response => response.data)
        .then(data => this.setState({ postId: data.id }));
    
    }

    render() {
        const{ postId } = this.state;
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">Simple PUT Request</h5>
                <div className="card-body">Post Id: {postId}</div>
            </div>
        );
    }
}

export default PutRequest;