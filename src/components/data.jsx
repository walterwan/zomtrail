import React, { Component } from 'react';
import axios from 'axios';
// import { withRouter } from "react-router-dom";
class PathObj extends Component {
  handleDelete(pathId) {
    return () => {
      let ans = confirm(`Do you wan to delete this path? ${pathId}`);
      if (ans) {
        axios({
          method: 'DELETE',
          url: `/api/paths/${pathId}`
        }).then(res => {
          console.log(res);
        });
      }
    };
  }

  renderImg(images) {
    if (!Array.isArray(images) || !images.length) {
      return (
        <div></div>
      );
    } else {
      return (
        <div>
          {images.map((image) => {
            return (
              <img src={image.filename} alt="Smiley face" height="200" width="200" />
            );
          })}
        </div>
      );
    }
  }

  renderPoint(point) {
    if (point) {
      return (
        <div>
          <p>{point.description}</p>
          {this.renderImg(point.images)}
        </div>
      );
    } else {
      return (
        <p></p>
      );
    }
  }
  render() {
    let { path } = this.props;
    console.log(path);
    return (
      <li key={path._id}>
        <h4>{path._id}</h4>
        <button onClick={this.handleDelete(path._id)}>Delete</button>
        {this.renderPoint(path.start_point)}
        {this.renderPoint(path.end_point)}
      </li>
    );
  }
}

class Data extends Component {
  constructor(props) {
    super(props);

    this.state = {
      paths: []
    };
  }

  componentDidMount() {
    axios({
      method: 'GET',
      url: `/api/paths`
    }).then(res => {
      let arr = res.data;
      this.setState({
        paths: arr
      });
      // console.log(arr);
      let target = arr[18];
      let start = target.start_point;
      let end = target.end_point;
      // console.log(start.address);
      // console.log(start.description);
      // console.log(start.images);

    });
  }

  render() {
    let { paths } = this.state;
    console.log(paths);
    // let target = paths[18];
    // console.log(target);
    return (
      <div>
        <h2>All Paths</h2>
        <ul>
          {paths.map((path) => <PathObj key={path._id} path={path}></PathObj>)}
        </ul>
      </div>
    );
  }
}

export default Data;
