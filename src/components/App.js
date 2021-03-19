import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Post from './Post/Post';

import Header from './Header/Header';
import Compose from './Compose/Compose';

class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: [],
      text: 'I wrote this but it is hard coded',
      date: 'when did this happen?'

    };

    this.updatePost = this.updatePost.bind( this );
    this.deletePost = this.deletePost.bind( this );
    this.createPost = this.createPost.bind( this );
  }
  
  componentDidMount() {
    axios.get('https://practiceapi.devmountain.com/api/posts')
    .then((response) => {
      console.log(response.data);
      this.setState({ posts: response.data })
    })
  }

  updatePost(id, text) {
    axios.put('https://practiceapi.devmountain.com/api/posts')
    .then ((response) => {
      console.log(response);

    } )
  }

  deletePost() {

  }

  createPost() {

  }

  render() {
    const { posts } = this.state;

    return (
      <div className="App__parent">
        <Header />

        <section className="App__content">

          <Compose />
          {
          posts.map( post => (
            <Post key={ post.id } text={this.text} date={this.date}/>
          ))
          }
          
        </section>
      </div>
    );
  }
}

export default App;
