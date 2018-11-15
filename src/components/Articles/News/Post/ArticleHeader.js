import React from "react";

import TeamNfo from "../../Elements/TeamNfo";
import PostData from "../../Elements/PostData";

const ArticleHeader = props => {
  const teamNfo = team => {
    return team ? <TeamNfo team={team} /> : null;
  };
  const postData = (date, author) => <PostData data={{ date, author }} />;
  return (
    <div>
      {teamNfo(props.teamData)}
      {postData(props.date, props.author)}
    </div>
  );
};

export default ArticleHeader;
