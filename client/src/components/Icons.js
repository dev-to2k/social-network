/* eslint-disable react/prop-types */
import React from 'react';

const Icons = ({ setContent, content }) => {
  const reactions = [
    '❤️',
    '😆',
    '😯',
    '😢',
    '😡',
    '👍',
    '👎',
    '😄',
    '😂',
    '😍',
    '😘',
    '😗',
    '😚',
    '😳',
    '😭',
    '😓',
    '😤',
    '🤤',
    '👻',
    '💀',
    '🤐',
    '😴',
    '😷',
    '😵',
  ];

  return (
    <div className="nav-item p-1 dropdown" style={{ opacity: 1 }}>
      <span
        className="nav-link d-flex position-relative p-0"
        id="navbarDropdown"
        role="button"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <span className="material-icons-outlined text-warning pointer">emoji_emotions</span>
      </span>

      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        <div className="reactions">
          {reactions.map((icon) => (
            <button key={icon} onClick={() => setContent(content + icon)} type="button">
              <span>{icon}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Icons;
