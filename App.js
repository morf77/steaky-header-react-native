import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import BookScreen from "./src/screens/BookScreen";

const navigator = createStackNavigator(
  {
    Book: BookScreen,
  },
  {
    initialRoutName: "Book",
    defaultNavgationOptions: {
      title: "Books",
    },
  }
);
export default createAppContainer(navigator);
