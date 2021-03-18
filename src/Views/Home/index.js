import React, { useState, useRef, useContext } from 'react';
import Tweet from '../../Components/Tweet';

import { IoIosSearch } from 'react-icons/io';

import './styles.css';

import GlobalState from '../../globalState';

const COMP_NAME = 'home';

const Home = () => {
  const { state, addPost, removePost, changeLikes } = useContext(GlobalState);
  const [search, setSearch] = useState('');
  const searchRef = useRef('');
  const postRef = useRef('');

  const handleSearch = () => {
    setSearch(searchRef.current.value);
  };

  const handlePostCreator = () => {
    addPost(postRef.current.value);
    postRef.current.value = "";
  };

  return (
    <div className={`${COMP_NAME}__main-container`}>

      <section className={`${COMP_NAME}__main-section`}>
        <div className={`${COMP_NAME}__search-bar`}>
           <input onChange={handleSearch} value={search} ref={searchRef} className={`${COMP_NAME}__search-input`} placeholder="Buscar por palabras clave"/>
           <IoIosSearch color={'#909090'} size={24}/>
        </div>

        <div className={`${COMP_NAME}__create-section`}>
          <textarea ref={postRef} className={`${COMP_NAME}__create-input`} placeholder="Nuevo post"/>
          <button onClick={handlePostCreator} className={`${COMP_NAME}__create-button`}> Crear </button>
        </div>
      </section>

      <section className={`${COMP_NAME}__post-section`}>
        {
          search.trim().length === 0 ? // Si no se ha escrito nada 
          state.posts.map((singlePost) => ( // Se muestra toda la lista
            <Tweet 
              key={singlePost.id} 
              onChangeLikes={(option) => changeLikes(singlePost.id, option)} 
              onDelete={() => removePost(singlePost.id)}
              liked={singlePost.liked} 
              text={singlePost.text} 
              likes={singlePost.likes} /> 
          ))
          : // Si se escribió algo
          state.posts.filter((singlePost) => singlePost.text.includes(search)).map((singlePost) => ( // Se muestra la lista filtrada
            <Tweet 
              key={singlePost.id} 
              onChangeLikes={(option) => changeLikes(singlePost.id, option)} 
              onDelete={() => removePost(singlePost.id)}
              liked={singlePost.liked} 
              text={singlePost.text} 
              likes={singlePost.likes} /> 
          ))
        }
      </section>

      
    </div>
  )
};

export default Home;