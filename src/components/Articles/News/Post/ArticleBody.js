import React from "react";
import "../../Articles.css";

const ArticleBody = props => {
  return (
    <div className="articleBody">
      <h1>{props.article.title}</h1>
      <div
        className="articleImage"
        style={{
          background: `url('${props.imageURL}')`
        }}
      />
      <div
        className="articleText"
        dangerouslySetInnerHTML={{
          __html: props.article.body
        }}
      />
    </div>
  );
};

export default ArticleBody;
