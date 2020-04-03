import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonImg,
  IonText
} from "@ionic/react";
import "./Tab1.css";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color='secondary'>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonText>
          <h1>Welcome to My Food App</h1>
        </IonText>
        <IonImg
          className='home-page-img'
          src={
            "https://minimalistbaker.com/wp-content/uploads/2020/01/GUIDE-to-Quick-Pickled-Vegetables-Cucumbers-carrots-radish-SPICY-cauliflower-and-red-onion-recipe-minimalistbaker-pickled-plantbased-glutenfree-13.jpg"
          }
        ></IonImg>
        <IonText>
          <p>Enjoy a couple recipes from Minimalist Baker. </p>
        </IonText>
        <IonButton href={"https://minimalistbaker.com"}>
          View more receipes from Minimalist Baker
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
