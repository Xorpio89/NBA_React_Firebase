import React from "react";
import "../Articles.css";
import moment from "moment";

const formatDate = date => {
  return moment(date).format(" DD.MM.YYY");
};

const PostData = props => {
  return (
    <div className="articlePostData">
      <div>
        Date:
        <span>{formatDate(props.data.date)}</span>
      </div>
      <div>
        Author:
        <span>{props.data.author}</span>
      </div>
    </div>
  );
};

export default PostData;
