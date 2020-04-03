import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonListHeader,
  IonList,
  IonIcon,
  IonImg
} from "@ionic/react";
import "./Tab3.css";
import { ellipseOutline } from "ionicons/icons";

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color='secondary'>
          <IonTitle>Drink Recipes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>Drink Recipes</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Watermelon Limeade Cocktail</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonImg
              src={
                "https://minimalistbaker.com/wp-content/uploads/2012/08/Grown-Up-Watermelon-Limeades1.jpg"
              }
            ></IonImg>
            <IonItem color='tertiary'>
              <IonIcon
                className='ingredients-icon'
                icon={ellipseOutline}
              ></IonIcon>
              <IonLabel>1 small seedless watermelon</IonLabel>
            </IonItem>
            <IonItem color='tertiary'>
              <IonIcon
                className='ingredients-icon'
                icon={ellipseOutline}
              ></IonIcon>
              <IonLabel>2 medium limes</IonLabel>
            </IonItem>
            <IonItem color='tertiary'>
              <IonIcon
                className='ingredients-icon'
                icon={ellipseOutline}
              ></IonIcon>
              <IonLabel>2 shots white rum (Bacardi)</IonLabel>
            </IonItem>
            <IonItem color='tertiary'>
              <IonIcon
                className='ingredients-icon'
                icon={ellipseOutline}
              ></IonIcon>
              <IonLabel>2 Tbsp sugar</IonLabel>
            </IonItem>
            <IonItem color='tertiary'>
              <IonIcon
                className='ingredients-icon'
                icon={ellipseOutline}
              ></IonIcon>
              <IonLabel>1 liter club soda</IonLabel>
            </IonItem>
            <IonList>
              <IonListHeader color='secondary'>
                <IonLabel>Instructions</IonLabel>
              </IonListHeader>
              <IonItem color='primary'>
                <IonLabel className='ion-text-wrap'>
                  Sice 3/4 of a seedless watermelon into cubes, reserving one
                  quarter for juice, and place in a bag and freeze for several
                  hours or preferably overnight.
                </IonLabel>
              </IonItem>
              <IonItem color='primary'>
                <IonLabel className='ion-text-wrap'>
                  In a strainer over a bowl, press the remaining chunks of fresh
                  watermelon with a muddler or flat surface until most of the
                  juice is extracted.
                </IonLabel>
              </IonItem>
              <IonItem color='primary'>
                <IonLabel className='ion-text-wrap'>
                  Slice limes into quarters and squeeze the juice of one fruit
                  into each serving glass, throwing the limes into the glass
                  along with it. (Only use half of a lime instead of 2 medium
                  limes if you prefer a drink that's not as tart.)
                </IonLabel>
              </IonItem>
              <IonItem color='primary'>
                <IonLabel className='ion-text-wrap'>
                  Add 1 tbsp sugar and one shot (2 Tbsp // 30 ml) of white rum
                  to each serving glass and muddle until well mixed.
                </IonLabel>
              </IonItem>
              <IonItem color='primary'>
                <IonLabel className='ion-text-wrap'>
                  Fill to the brim with watermelon ice cubes, add a healthy
                  splash of watermelon juice (about 1/4 cup), and top off with
                  club soda.
                </IonLabel>
              </IonItem>
              <IonItem color='primary'>
                <IonLabel className='ion-text-wrap'>
                  Stir, garnish with lime wedge, and serve with a straw.
                </IonLabel>
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
