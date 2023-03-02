import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import NavBar from '../../components/NavigationBar';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonButton expand='full' routerLink='/home/Notis'>
          con la barra
        </IonButton>
        <IonButton expand='full' routerLink='notif'>
          sin la barra
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
