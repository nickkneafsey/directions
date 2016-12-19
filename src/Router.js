import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux'
import AgeMenu from './components/AgeMenu';


const RouterComponent = () => (
  <Router sceneStyle={{ paddingTop: 65 }}>
    <Scene key="main">
      <Scene
        component={AgeMenu}
        key="ageMenu"
        title="Select An Age Group"
        initial
      />

    </Scene>

  </Router>
);

export default RouterComponent;
