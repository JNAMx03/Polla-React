import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';



const LogInOrSignUp = () => {
    const navigation = useIonRouter()

    const doLogin = () =>{
        navigation.push('/home', 'root', 'replace');
    }

    return (
        <IonPage>
            <IonHeader>
            <IonToolbar>
                <IonTitle>Log In or Sing Up</IonTitle>
            </IonToolbar>
            </IonHeader>
    
            <IonContent>
                <IonButton expand='full' onClick={() => doLogin()}>
                    Login
                </IonButton>
            </IonContent>
        </IonPage>
    );
  };
  
export default LogInOrSignUp;