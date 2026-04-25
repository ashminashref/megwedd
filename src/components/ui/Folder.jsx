import React from 'react';
import './Folder.css';
import { IoEllipsisHorizontal, IoFolderOpenOutline } from "react-icons/io5";

const Folder = ({ color = '#3b82f6', title = 'Wedding Highlights', itemCount = 0 }) => {
  return (
    <div className="folder-card group">
      {/* Top Section: Mesh Gradient Background */}
      <div className="folder-visual" style={{ '--folder-accent': color }}>
        <div className="mesh-gradient"></div>
        
        {/* Floating Paper Stack */}
        <div className="paper-orbit">
          <div className="item-paper paper-back"></div>
          <div className="item-paper paper-mid"></div>
          <div className="item-paper paper-front">
             <div className="paper-texture"></div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Pure Black Metadata */}
      <div className="folder-info">
        <div className="info-header">
          <div className="text-group">
            <h3 className="title">{title}</h3>
            <p className="subtitle">Cinematic Collection</p>
          </div>
          <button className="more-btn">
            <IoEllipsisHorizontal />
          </button>
        </div>

        <div className="info-footer">
          <div className="file-badge">
            <IoFolderOpenOutline className="mr-1" />
            {itemCount.toLocaleString()} Assets
          </div>
        </div>
      </div>
    </div>
  );
};

export default Folder;