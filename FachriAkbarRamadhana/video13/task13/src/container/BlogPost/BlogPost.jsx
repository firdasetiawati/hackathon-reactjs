import React from "react";
import { Fragment } from "react";
import { Component } from "react";
import './BlogPost.css';
import Post from "../../component/Post/Post";
import axios from 'axios';

class BlogPost extends Component {
    state = {
        post: []
    }

    getPostAPI = () => {
        axios.get('http://localhost:3000/posts')
        .then((result)=> {
            // console.log(result.data);
            this.setState({
                post: result.data
            })
        })
    }

    handleRemove = (data) => {
        axios.delete(`http://localhost:3000/posts/${data}`).then((res) =>{
            this.getPostAPI()
        })
    }
    componentDidMount(){
        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(response => response.json())
        // .then(json => {
        //     this.setState({
        //         post: json
        //     })
        // })
        this.getPostAPI();
    }
    render(){
        return(
            <Fragment>
            <p className="section-title">Blog Post</p>
            {
                this.state.post.map(post => {
                    return <Post key={post.id} data={post} remove={this.handleRemove} />
                })
            }
            </Fragment>
        )
    }
}

export default BlogPost;