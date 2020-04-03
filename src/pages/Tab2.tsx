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
import "./Tab2.css";
import { ellipseOutline } from "ionicons/icons";

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color='secondary'>
          <IonTitle>Pizza Recipes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>Pizza Recipes</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Mushroom Pizza</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonImg
              src={
                "https://minimalistbaker.com/wp-content/uploads/2013/06/Goat-Cheese-Caramelized-Onion-Flatbread-minimalistbaker.com_.jpg"
              }
            ></IonImg>
            <IonItem color='primary'>
              <IonIcon
                className='ingredients-icon'
                icon={ellipseOutline}
              ></IonIcon>
              <IonLabel>1 10-inch flat bread or small pizza crust</IonLabel>
            </IonItem>
            <IonItem color='primary'>
              <IonIcon
                className='ingredients-icon'
                icon={ellipseOutline}
              ></IonIcon>
              <IonLabel>1 medium white onion (cut into thin rings)</IonLabel>
            </IonItem>
            <IonItem color='primary'>
              <IonIcon
                className='ingredients-icon'
                icon={ellipseOutline}
              ></IonIcon>
              <IonLabel>Salt and pepper</IonLabel>
            </IonItem>
            <IonItem color='primary'>
              <IonIcon
                className='ingredients-icon'
                icon={ellipseOutline}
              ></IonIcon>
              <IonLabel>Olive oil or butter (for sautéing)</IonLabel>
            </IonItem>
            <IonItem color='primary'>
              <IonIcon
                className='ingredients-icon'
                icon={ellipseOutline}
              ></IonIcon>
              <IonLabel>3 ounces goat cheese</IonLabel>
            </IonItem>
            <IonItem color='primary'>
              <IonIcon
                className='ingredients-icon'
                icon={ellipseOutline}
              ></IonIcon>
              <IonLabel>1 splash milk</IonLabel>
            </IonItem>
            <IonItem color='primary'>
              <IonIcon
                className='ingredients-icon'
                icon={ellipseOutline}
              ></IonIcon>
              <IonLabel>Fresh basil or arugula (for topping)</IonLabel>
            </IonItem>
            <IonList>
              <IonListHeader color='secondary'>
                <IonLabel>Instructions</IonLabel>
              </IonListHeader>
              <IonItem color='tertiary'>
                <IonLabel className='ion-text-wrap'>
                  Preheat oven to 400 degrees F (204 C) and position a rack in
                  the middle of the oven. If using a pizza stone, place the
                  stone in the oven as it preheats.
                </IonLabel>
              </IonItem>
              <IonItem color='tertiary'>
                <IonLabel className='ion-text-wrap'>
                  Sauté onion in butter or olive oil over medium heat until
                  soft, stirring frequently. Season with salt and pepper. Cover
                  to keep in the moisture if they begin to look dry – add a
                  splash or two of water if they’re getting too brown. Set aside
                  once cooked.
                </IonLabel>
              </IonItem>
              <IonItem color='tertiary'>
                <IonLabel className='ion-text-wrap'>
                  Once oven is preheated, brush flatbread with olive oil and
                  place on the pizza stone or a baking sheet and “pre-bake” to
                  crisp for about 5 minutes.
                </IonLabel>
              </IonItem>
              <IonItem color='tertiary'>
                <IonLabel className='ion-text-wrap'>
                  In the meantime, spoon goat cheese into a bowl and add a
                  splash of milk or water to thin so it’s spreadable. Whisk
                  until smooth.
                </IonLabel>
              </IonItem>
              <IonItem color='tertiary'>
                <IonLabel className='ion-text-wrap'>
                  Remove flatbread from oven and spread with goat cheese and top
                  with onions – I used all of the onions but use less and
                  reserve the leftovers if you prefer.
                </IonLabel>
              </IonItem>
              <IonItem color='tertiary'>
                <IonLabel className='ion-text-wrap'>
                  Place back in the oven and bake for 10 minutes, or until the
                  edges appear crisp and the onions and goat cheese have warmed
                  through.
                </IonLabel>
              </IonItem>
              <IonItem color='tertiary'>
                <IonLabel className='ion-text-wrap'>
                  Slice and serve with desired toppings
                </IonLabel>
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
