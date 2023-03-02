import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonBackButton } from '@ionic/react';


function Notif() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
            <IonButton slot='start'>
                <IonBackButton defaultHref='/Home/'/>
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