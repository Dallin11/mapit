import React, { Component } from 'react';
import './fly.css';
import {Link} from 'react-router-dom'
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import Drone from '../drone/Drone';

// import header footer
import Header from '../header/Header';
import Footer from '../footer/Footer';






const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

function handleActive(tab) {

}

const TabsExampleSimple = () => (
  
  <div>
  <Header />
  <Tabs>
    <Tab label="Fly" >
      <div>
        <h2 style={styles.headline}>Fly</h2>
        <p>
          This is an example tab.
        </p>
        <p>
          You can put any sort of HTML or react component in here. It even keeps the component state!
        </p>
        <Drone/>
      </div>
    </Tab>
    <Tab label="Map 1" >
      <div>
        <h2 style={styles.headline}>Map1</h2>
        <p>
          This is another example tab.
        </p>
      </div>
    </Tab>
    <Tab
      label="Map 2"
      data-route="/home"

    >
      <div>
        <h2 style={styles.headline}>Map2</h2>
        <p>
          This is a third example tab.
        </p>
      </div>
    </Tab>
  </Tabs>
  <Footer />

  </div>
)
export default TabsExampleSimple;