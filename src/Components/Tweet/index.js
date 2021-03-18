import React, { useState, useContext } from 'react';
import './styles.css';

import { IoIosHeartEmpty, IoIosHeart, IoIosTrash } from 'react-icons/io';

import GlobalState from '../../globalState';

const COMP_NAME = 'tweet';

const Tweet = ({ text, likes, liked, onChangeLikes, onDelete }) => {
  const [localLike, setLocalLike] = useState(liked);
  const { state } = useContext(GlobalState);

  const likeHandler = () => {
    localLike ? onChangeLikes('decrease') : onChangeLikes('increase');
    setLocalLike(!localLike);
  };

  return (
    <div className={`${COMP_NAME}__main-container`}>

      <section className={`${COMP_NAME}__post-section`}>
        { text }
      </section>

      <section className={`${COMP_NAME}__interaction-section`}>
        {
          localLike ? 
            <IoIosHeart className={`${COMP_NAME}__heart-icon`} onClick={likeHandler} color={'tomato'} size={24} />
          :
            <IoIosHeartEmpty className={`${COMP_NAME}__heartempty-icon`} onClick={likeHandler} size={24} />
        }
        
        <p className={`${COMP_NAME}__likes-amount`}> { likes } likes </p>

        <IoIosTrash className={`${COMP_NAME}__trash-icon`} onClick={onDelete} color={'tomato'} size={24} />
      </section>

    </div>
  );
};

export default Tweet;