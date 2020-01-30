import React from "react";
import { withRouter} from "react-router-dom";

import "./menu-item.style.scss";

const MenuItem = ({ title, imageURL, size, history,match, linkURL}) => {
  return (
   
      <div className={`menu-item ${size}`} onClick={()=> history.push(`${match.url}${linkURL}`)}>
        <div
          className="background-image"
          style={{ backgroundImage: `url(${imageURL})` }}
        ></div>
        <div className="content">
          <h1 className="title">{title.toUpperCase()}</h1>
          <span className="subtitle">Shop now</span>
        </div>
      </div>

  );
};
export default withRouter(MenuItem);
