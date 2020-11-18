import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Navigation, Footer, Home, Cases, Map, SurveyReact, About } from './components';

export class App extends Component {
  render() {
    return (
      <Router basename="/project-amazingspencer">
        <Navigation />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/cases' exact component={Cases} />
          <Route path='/map' exact component={Map} />
          <Route path='/survey' exact component={SurveyReact} />
          <Route path='/about' exact component={About} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
