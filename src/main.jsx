import _ from "lodash";
import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
import "./index.css";

const API_KEY = import.meta.env.VITE_API_KEY;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };

    this.videoSearch("cat vs dog");
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0],
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {
      this.videoSearch(term);
    }, 300);
    return (
      <div className="container-fluid mt-3">
        <div className="mb-4">
          <SearchBar onSearchTermChange={videoSearch} />
        </div>

        <div className="row">
          <div className="col-lg-8 col-md-7 col-sm-12 mb-4">
            <VideoDetail video={this.state.selectedVideo} />
          </div>

          <div className="col-lg-4 col-md-5 col-sm-12">
            <VideoList
              onVideoSelect={(selectedVideo) =>
                this.setState({ selectedVideo })
              }
              videos={this.state.videos}
            />
          </div>
        </div>
      </div>
    );
  }
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
