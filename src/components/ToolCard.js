import React from 'react';
import './ToolCard.css';

function ToolCard({ tool }) {
  const handleClick = () => {
    if (tool.url) {
      window.open(tool.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <article className="tool-card" onClick={handleClick}>
      <div className="tool-icon">
        {tool.icon || tool.name.charAt(0).toUpperCase()}
      </div>
      <div className="tool-content">
        <h3 className="tool-name">{tool.name}</h3>
        <p className="tool-description">{tool.description}</p>
      </div>
      <div className="tool-arrow">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </article>
  );
}

export default ToolCard;
