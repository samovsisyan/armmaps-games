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
import {LegendsCities} from "./pages/cities/citiesLevel4/legendsCities";
import { EasyCitiesPlay } from "./pages/cities/citiesLevel1/easyCities-play";
import { MediumCitiesPlay } from "./pages/cities/citiesLevel2/mediumCities-play";
import { HardCitiesPlay } from "./pages/cities/citiesLevel3/hardCities-play";
import {LegendsCitiesPlay} from "./pages/cities/citiesLevel4/legendsCities-play";
import { EasyPlaces } from "./pages/places/placesLevel1/easyPlaces";
import { HardPlaces } from "./pages/places/placesLevel2/hardPlaces";
import { EasyPlacesGamePage } from "./pages/places/placesLevel1/easyPlaces-play";
import { HardPlacesGamePage } from "./pages/places/placesLevel2/hardPlaces-play";



function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/regions" render={() => <RegionsPage />} />
        <Route exact path="/regions/play" render={() => <RegionsGamePage />} />

        <Route exact path="/easyCities" render={() => <EasyCities />} />
        <Route exact path="/mediumCities" render={() => <MediumCities />} />
        <Route exact path="/hardCities" render={() => <HardCities />} />
        <Route exact path="/legendsCities" render={() => <LegendsCities />} />

        <Route exact path="/easyCities/play" render={() => <EasyCitiesPlay />} />
        <Route exact path="/mediumCities/play" render={() => <MediumCitiesPlay />} />
        <Route exact path="/hardCities/play" render={() => <HardCitiesPlay/>} />
        <Route exact path="/legendsCities/play" render={() => <LegendsCitiesPlay/>} />

        <Route exact path="/easyPlaces" render={() => <EasyPlaces />} />
        <Route exact path="/hardPlaces" render={() => <HardPlaces />} />

        <Route exact path="/easyPlaces/play" render={() => <EasyPlacesGamePage />} />
        <Route exact path="/hardPlaces/play" render={() => <HardPlacesGamePage />} />


        <Route path="/" render={() => <Redirect to="/regions" />} />
      </Switch>
    </div>
  );
}

export default MainAppHOC(App);
