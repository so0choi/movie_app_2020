import React from "react";
import YouTube from "react-youtube";
import "./Home.css";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }

  render() {
    const { location } = this.props;

    if (location.state) {
      const opts = {
        height: "390",
        width: "640",
        playerVars: {
          autoplay: 1,
        },
      };
      return (
        <section className="container">
          <div className="movie__detail">
            <div className="movie__title">{location.state.title}</div>
            <YouTube
              videoId={location.state.trailer}
              opts={opts}
              onReady={this._onReady}
            />
            <span className="movie__summary">{location.state.summary}</span>
          </div>
        </section>
      );
    } else {
      return null;
    }
  }
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default Detail;
