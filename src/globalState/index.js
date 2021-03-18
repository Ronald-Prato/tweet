import React, { useState, createContext } from 'react';
import { posts } from '../provisionalData';

const GlobalState = createContext({});

const stateObj = {
  posts: posts
};

export const ContextProvider = ({ children }) => {
  const [state, setState] = useState(stateObj);

  const addPost = (postText) => {
    const newPost = {
      id: Math.random().toString(36).substr(2, 9),
      text: postText,
      likes: 0,
      liked: false
    };
    setState({
      posts: [...state.posts, newPost]
    });
  };

  const removePost = (postId) => {
    setState({
      posts: state.posts.filter(post => post.id !== postId)
    });
  };

  const changeLikes = (postId, option) => {
    setState({
      posts: state.posts.map(post => {
        if ( post.id === postId ) {
          option === 'increase' ? post.likes ++ : post.likes --;
        }
        return post;
      }) 
    });
  };

  return (
    <GlobalState.Provider value={{state, addPost, removePost, changeLikes}}>
      { children }
    </GlobalState.Provider>
  );
};

export default GlobalState;