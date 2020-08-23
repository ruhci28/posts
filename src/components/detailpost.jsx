import React from 'react';
import {useSelector} from 'react-redux';
function DetailPost() {
  const detailpost = useSelector(state => state.detailpost);
  return (
    <div className="detailpost" >
    <h3>{detailpost.title}</h3>
    <p>{detailpost.body}</p>
    </div>
  );
}

export default DetailPost;
