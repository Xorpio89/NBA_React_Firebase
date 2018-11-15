import React from "react";
import "../../Articles.css";

const ArticleBody = props => {
  return (
    <div className="articleBody">
      <h1>{props.article.title}</h1>
      <div
        className="articleImage"
        style={{
          background: `url('/images/articles/${props.article.image}')`
        }}
      />
      <div className="articleText">{props.article.body}</div>
    </div>
  );
};

export default ArticleBody;
