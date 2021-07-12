import React from "react";
import "./App.css";
import "antd-mobile/dist/antd-mobile.css";
import { Redirect, Route, Switch } from "react-router";
import { RegionsPage } from "./pages/regions/regions";
import { RegionsGamePage } from "./pages/regions/regions-play";
import { MainAppHOC } from "./mainAppHoc";

import { EasyCities } from "./pages/cities/citiesLevel1/easyCities";
import { MediumCities } from "./pages/cities/citiesLevel2/mediumCities";
import { HardCities } from "./pages/cities/citiesLevel3/hardCities";

import { EasyCitiesPlay } from "./pages/cities/citiesLevel1/easyCities-play";
import { MediumCitiesPlay } from "./pages/cities/citiesLevel2/mediumCities-play";
import { HardCitiesPlay } from "./pages/cities/citiesLevel3/hardCities-play";

import { PlacesPage } from "./pages/places/places";
import { PlacesGamePage } from "./pages/places/places-play";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/regions" render={() => <RegionsPage />} />
        <Route exact path="/regions/play" render={() => <RegionsGamePage />} />

        <Route exact path="/easyCities" render={() => <EasyCities />} />
        <Route exact path="/mediumCities" render={() => <MediumCities />} />
        <Route exact path="/hardCities" render={() => <HardCities />} />

        <Route exact path="/easyCities/play" render={() => <EasyCitiesPlay />} />
        <Route exact path="/mediumCities/play" render={() => <MediumCitiesPlay />} />
        <Route exact path="/hardCities/play" render={() => <HardCitiesPlay/>} />

        <Route exact path="/places" render={() => <PlacesPage />} />
        <Route exact path="/places/play" render={() => <PlacesGamePage />} />
        <Route path="/" render={() => <Redirect to="/regions" />} />
      </Switch>
    </div>
  );
}

export default MainAppHOC(App);
