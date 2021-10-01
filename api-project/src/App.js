import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Cardlist from "./cardlist";
import searchBox from "./components/searchBox";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      news: [],
      searchField: "",
    };
    console.log(typeof news);
  }

  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/top-headlines?sources=techcrunch&apikey=b9a1f81a2e8d41f2a0cafdf898f3f389"
    )
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          news: response.articles,
        });
      });
    console.log(this.state.news);
  }

  onSearchChange = (e) => {
    this.setState({
      searchField: e.target.value,
    });
  };
  render() {
    const filterNews = this.state.news.filter((story) => {
      return story.author
        .toLowerCase()
        .includes(this.state.searchField.toLocaleLowerCase());
    });

    return (
      <div>
        <searchBox searchNews={this.onSearchChange} />
        <Cardlist newsData={filterNews} />
      </div>
    );
  }
}

export default App;
