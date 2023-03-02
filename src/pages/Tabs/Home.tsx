import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon } from '@ionic/react';
import { notificationsOutline } from 'ionicons/icons';
import ExploreContainer from '../../components/ExploreContainer';
import NavBar from '../../components/NavigationBar';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
          <IonButton slot='end' href='/Home/Notif' >{/*aca coloque href, por que al utilizar routerlink me deja la barra de navegaciona abaja y no deberia hacerlo, pero al hacerlo con hfer, no aparece la barra, pero si se demora un poco mas en cargar*/}
            <IonIcon icon={notificationsOutline} color='success'/>
          </IonButton>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        
      </IonContent>
    </IonPage>
  );
};

export default Home;
