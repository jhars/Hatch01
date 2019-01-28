import { Navigation } from "react-native-navigation";
import App from "./App";
import PhoneNumberInput from "./src/components/PhoneNumberInput";
import WelcomeScreen from "./src/components/WelcomeScreen";
import PasswordEntry from "./src/components/PasswordEntry";

const appLaunchedListener = Navigation.events().registerAppLaunchedListener(() => {

});

Navigation.registerComponent(`navigation.WelcomeScreen`, () => WelcomeScreen);
Navigation.registerComponent(`navigation.PhoneNumberInput`, () => PhoneNumberInput);
Navigation.registerComponent(`navigation.PasswordEntry`, () => PasswordEntry);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {component: { name: `navigation.WelcomeScreen`}},
        ]
      }
    }
  });
});
