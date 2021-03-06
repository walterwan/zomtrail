import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// components
import Story from './components/story';
import Game from './components/game';
import Data from './components/data';
import Login from './components/login';
import Locations from './components/locations';
import ChooseWaypoint from './components/choose-waypoint';
import Scoreboard from './components/scoreboard';

function notValidPath() {
  return (
    <p>Not valid path</p>
  );
}

class App extends Component {
  constructor(prop) {
    super(prop);

    this.state = {
      currentUser: null,
      path: null,
    };
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/:userId/story" component={Story} />
          <Route exact path="/:userId/:pathId/game" component={Game} />
          <Route exact path="/location" component={Locations} />
          <Route exact path="/eHMLgUEVXV" component={Data} />
          <Route exact path="/:userId/:pathId/waypoints" component={ChooseWaypoint} />
          <Route exact path="/:userId/:pathId/scoreboard" component={Scoreboard} />
          <Route path="**" component={notValidPath} />
        </Switch>
      </div>
    );
  }
}

export default App;
