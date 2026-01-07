// Comment.jsx
import React from 'react';
import UserInfo from './UserInfo';

function Comment({ author, text, date }) {
  return (
    <div className="Comment" style={{ border: '1px solid #eee', padding: '15px', margin: '10px', borderRadius: '5px' }}>
      <UserInfo user={author} />
      <div className="Comment-text">
        {text}
      </div>
      <div className="Comment-date" style={{ fontSize: '0.8em', color: '#666' }}>
        {date.toLocaleDateString()}
      </div>
    </div>
  );
}

export default Comment;