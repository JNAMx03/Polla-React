import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonBackButton } from '@ionic/react';


const Notif: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
            <IonButton slot='start'>
                <IonBackButton defaultHref='/home'/>
            </IonButton>
          <IonTitle>Notis</IonTitle>
        </IonToolbar>
      </IonHeader>
        
      <IonContent className='ion-padding'>
        
      </IonContent>
    </IonPage>
  );
};

export default Notif;