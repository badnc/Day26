import React, { Component } from 'react';
import axios from 'axios';

class PostRequest extends Component {
    constructor(props) {
        super(props);
        this.state = { articleI: null };
    }

    async componentDidMount() {
        const article = { title: 'React POST Request Example' };
        axios.post('https://reqres.in/api/articles', article)
            .then(response => this.setState({ articleId: response.data.id }));
    }

    render() {
        const{ articleId } = this.state;
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">Simple POST Request</h5>
                <div className="card-body">Article Id: {articleId}</div>
            </div>
        );
    }
}

export default PostRequest;