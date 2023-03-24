import React from 'react';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import { Route, Redirect } from 'react-router';

import { search, home, addOutline, wallet, person } from 'ionicons/icons';

import Home from '../pages/Tabs/Home/Home';
import Search from '../pages/Tabs/Search/Search';
import Create from '../pages/Tabs/Create/Create';
import Shop from '../pages/Tabs/Shop/Shop';
import Perfil from '../pages/Tabs/Perfil/Perfil';



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
          <Route path="/Home" render={() => <Home />} exact={true} />
          <Route path="/Search" render={() => <Search />} exact={true} />
          <Route path="/Create" render={() => <Create />} exact={true} />
          <Route path="/Shop" render={() => <Shop />} exact={true} />
          <Route path="/Perfil" render={() => <Perfil />} exact={true} />
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="Home" href="/Home">
            <IonIcon icon={home} />
            <IonLabel>Inicio</IonLabel>
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
            <IonLabel>Tienda</IonLabel>
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