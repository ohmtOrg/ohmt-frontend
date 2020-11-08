import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import SignupReducer from "./SignupReducer"
import UserReducer from "./UserReducer";
import LayoutReducer from "./LayoutReducer";
import ScrumBoardReducer from "./ScrumBoardReducer";
import NotificationReducer from "./NotificationReducer";
import EcommerceReducer from "./EcommerceReducer";
import NavigationReducer from "./NavigationReducer";


const RootReducer = combineReducers({
  login: LoginReducer,
  user: UserReducer,
  Signup:SignupReducer,
  layout: LayoutReducer,
  scrumboard: ScrumBoardReducer,
  notification: NotificationReducer,
  ecommerce: EcommerceReducer,
  navigations: NavigationReducer
});

export default RootReducer;
