import React, { Component } from "react";
import {
  firebase,
  firebaseDB,
  firebaseLooper,
  firebaseTeams
} from "../../../../firebase";

import "../../Articles.css";
import ArticleHeader from "./ArticleHeader";
import ArticleBody from "./ArticleBody";

export class NewsArticles extends Component {
  state = {
    article: [],
    team: [],
    imageURL: ""
  };

  componentWillMount() {
    firebaseDB
      .ref(`articles/${this.props.match.params.id}`)
      .once("value")
      .then(snapshot => {
        let article = snapshot.val();

        firebaseTeams
          .orderByChild("teamId")
          .equalTo(article.team)
          .once("value")
          .then(snapshot => {
            const team = firebaseLooper(snapshot);
            this.setState({
              article,
              team
            });
            this.getImageURL(article.image);
          });
      });

    // axios.get(`${URL}/articles/?id=${this.props.match.params.id}`).then(res => {
    //   let article = res.data[0];

    //   axios.get(`${URL}/teams?id=${article.team}`).then(res => {
    //     this.setState({
    //       article,
    //       team: res.data
    //     });
    //   });
    // });
  }

  getImageURL = filename => {
    firebase
      .storage()
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then(url => {
        this.setState({
          imageURL: url
        });
      });
  };
  render() {
    const { article, team, imageURL } = this.state;

    return (
      <div className="articleWrapper">
        <ArticleHeader
          teamData={team[0]}
          date={article.date}
          author={article.author}
        />
        <ArticleBody article={article} imageURL={imageURL} />
      </div>
    );
  }
}

export default NewsArticles;
