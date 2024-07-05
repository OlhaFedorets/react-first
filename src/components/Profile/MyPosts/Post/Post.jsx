import React from 'react';
import classes from './Post.module.css';


const Post = (props) => {
  return (
    <div className={classes.item}>
      <img alt='ava' src='https://avatars.mds.yandex.net/i?id=41a92853df609dba779d86bec52c5f0335cdc4ae-10931123-images-thumbs&n=13' />
      { props.message }
      <div>
        <span>like {props.likeCounter}</span>
      </div>
    </div>
  );
}

export default Post; 