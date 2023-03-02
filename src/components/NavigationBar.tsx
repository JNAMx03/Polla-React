import React from 'react';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import { Route, Redirect } from 'react-router';

import { playCircle, radio, library, search, home, addOutline, wallet, person } from 'ionicons/icons';

import HomePage from '../pages/Tabs/Home';
import Notif from '../pages/Tabs/Notification';
// import RadioPage from './pages/RadioPage';
// import LibraryPage from './pages/LibraryPage';
// import SearchPage from './pages/SearchPage';


function NavBar() {
  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Redirect exact path="/Home" to="/Home" />
          {/*
          Use the render method to reduce the number of renders your component will have due to a route change.

          Use the component prop when your component depends on the RouterComponentProps passed in automatically.
        */}
          <Route path="/Home" render={() => <HomePage />} exact={true} />
          
          {/* <Route path="/radio" render={() => <RadioPage />} exact={true} />
          <Route path="/library" render={() => <LibraryPage />} exact={true} />
          <Route path="/search" render={() => <SearchPage />} exact={true} /> */}
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="Home" href="/Home">
            <IonIcon icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>

          <IonTabButton tab="Search" href="/Search">
            <IonIcon icon={search} />
            <IonLabel>Buscar</IonLabel>
          </IonTabButton>

          <IonTabButton tab="Create" href="/Create">
            <IonIcon icon={addOutline} />
            <IonLabel>Crear</IonLabel>
          </IonTabButton>

          <IonTabButton tab="Shop" href="/Shop">
            <IonIcon icon={wallet} />
            <IonLabel>Shop</IonLabel>
          </IonTabButton>

          <IonTabButton tab="Perfil" href="/Perfil">
            <IonIcon icon={person} />
            <IonLabel>Perfil</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
}
export default NavBar;