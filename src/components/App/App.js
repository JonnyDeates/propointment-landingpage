import React from 'react';
import './App.css';
import Header from "../Header/Header";
import {Route, Switch} from "react-router-dom";
import Footer from "../Footer/Footer";
import STORE from "../../STORE";
import NavBar from "../Nav/NavBar";
import Home from "../Home/Home";
import Page from "../Page/Page";

function App() {
  return (
    <div className="App">
        <Header header={STORE.title}/>
        <Route render={(routeProps) => <NavBar currentActive={routeProps.location} links={STORE.links}/>}/>
        <Switch>
            {STORE.pages.map((page, i) => <Route exact key={i} path={'/'+page.link}><Page page={page} /></Route>)}
        </Switch>
        <Footer/>
    </div>
  );
}

export default App;
