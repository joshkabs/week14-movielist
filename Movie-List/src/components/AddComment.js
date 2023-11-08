import React, { useState } from 'react';

function AddComment() {
  const [comment, setCommment] = useState('');
  const [comments, setCommments] = useState([]);

  const onClickHandler = () => {
    setCommments(comments => [...comments, comment]);
  };
  const onChangeHandler = e => {
    setCommment(e.target.value);
  };
  return (
    <div className="main-container">
      {comments.map(text =>
        <div className="comment-container">
          {text}{' '}
        </div>
      )}

      <div className="comment-flexbox">
        <h3 className="comment-text">comment</h3>
        <textarea
          value={comment}
          onChange={onChangeHandler}
          className="input-box"
        />
        <button className="comment-button">Submit</button>
      </div>
    </div>
  );
}

export default AddComment;
