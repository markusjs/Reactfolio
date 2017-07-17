import React, { Component } from 'react';
import {
    Route,
    Switch,
    Link
} from 'react-router-dom'

import 'semantic-ui-css/semantic.min.css';
import './css/style.css'
import 'typeface-merriweather'

/*Components*/
import Topmenu from './components/Topmenu'
import NavMenu from './components/NavMenu'

// This component makes it possible to disable the scrolling when a state is changed
import BodyScroll from './components/BodyScroll'

/*Pages*/
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'

// Projects
import InfoFinder from './components/projects/InfoFinder'
import Dubi from './components/projects/Dubi'


import { Grid, Container, Menu, Header, Icon } from 'semantic-ui-react'

class App extends Component {
    constructor() {
    super();
      this.state = {
          navmenuVisible: true,
          backBtnVisible: false,
          disablescroll: true
      }
      this.toggleMenu = this.toggleMenu.bind(this);
      this.toggleBackBtn = this.toggleBackBtn.bind(this);
  }
  toggleMenu() {
      this.setState(prevState => ({
          navmenuVisible: !prevState.navmenuVisible,
          disablescroll: !prevState.disablescroll,
      }));
      console.log("Clicked" + this.state.navmenuVisible);
  }
  toggleBackBtn(e) {
      if(!e) {
          this.setState({backBtnVisible: false})
      } else {
          this.setState({backBtnVisible: true})
      }
  }
  render() {

    return (
        <Grid.Column className={this.state.navmenuVisible ? "active main-wrap" : "main-wrap"}>
            <Topmenu toggleMenu={this.toggleMenu.bind(this)} navmenuVisible={this.state.navmenuVisible} toggleBackBtn={this.toggleBackBtn.bind(this)} backBtnVisible={this.state.backBtnVisible} />
            <BodyScroll disablescroll={this.state.disablescroll}>
                <p>{this.state.disablescroll}</p>
            </BodyScroll>
            <NavMenu visible={this.state.navmenuVisible} toggleMenu={this.toggleMenu.bind(this)}/>
            <Grid>
                <Grid.Column>
                    <Container text className="content-wrap">
                        <Switch>
                            <Route exact path='/' render={(props) => (
                                <Home toggleBackBtn={this.toggleBackBtn.bind(this)}/>
                            )}/>
                            <Route exact path='/projects' render={(props) => (
                                <Projects/>
                            )}/>
                            <Route exact path='/about' render={(props) => (
                                <About toggleBackBtn={this.toggleBackBtn.bind(this)}/>
                            )}/>
                            <Route path='/InfoFinder' render={(props) => (
                                <InfoFinder tags={["design", "hobby", "utvikling"]} toggleBackBtn={this.toggleBackBtn.bind(this)}/>
                            )}/>
                            <Route path='/Dubi' render={(props) => (
                                <Dubi tags={["konsept", "design", "front-end"]} toggleBackBtn={this.toggleBackBtn.bind(this)}/>
                            )}/>
                            <Route path='/projects/InfoFinder' render={(props) => (
                                <InfoFinder tags={["design", "hobby", "utvikling"]}/>
                            )}/>
                            <Route render={function (e) {
                                return <div className="centered">
                                    <div>
                                        <Header textAlign="center" icon="help" content="404 "></Header>
                                        <a href="http://www.sorem.no">Gå tilbake til hjemmesiden</a>
                                    </div>
                                </div>

                            }}/>
                        </Switch>
                    </Container>
                </Grid.Column>
            </Grid>
        </Grid.Column>
    );
  }
}

export default App;