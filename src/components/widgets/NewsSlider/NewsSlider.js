import React, { Component } from "react";
import { firebaseArticles, firebaseLooper } from "../../../firebase";

import SliderTemplates from "./SliderTemplates";

export class NewsSlider extends Component {
  state = {
    news: []
  };

  componentWillMount() {
    firebaseArticles
      .limitToFirst(3)
      .once("value")
      .then(snapshot => {
        const news = firebaseLooper(snapshot);
        this.setState({
          news
        });
      });

    // axios
    //   .get(
    //     `${URL}/articles?_start=${this.props.start}&_end=${this.props.amount}`
    //   )
    //   .then(res => {
    //     this.setState({
    //       articles: res.data
    //     });
    //   })
    //   .catch(err => console.log(err));
  }
  render() {
    return (
      <SliderTemplates
        data={this.state.news}
        type={this.props.type}
        settings={this.props.settings}
      />
    );
  }
}

export default NewsSlider;
