import { Navigation } from "react-native-navigation";
import App from "./App";
import PhoneNumberInput from "./src/components/PhoneNumberInput";
import WelcomeScreen from "./src/components/WelcomeScreen";

const appLaunchedListener = Navigation.events().registerAppLaunchedListener(() => {

});

Navigation.registerComponent(`navigation.WelcomeScreen`, () => WelcomeScreen);
Navigation.registerComponent(`navigation.PhoneNumberInput`, () => PhoneNumberInput);


Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          // {component: { name: "WelcomeScreen"}},
          {component: { name: `navigation.PhoneNumberInput`}}
        ]
      }
    }
  });
});


// Navigation.events().registerAppLaunchedListener(() => {
//   Navigation.setRoot({
//     root: {
//       component: {
//         name: "navigation.playground.PhoneNumberInput"
//       }
//     }
//   });
// });
