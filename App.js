import React from "react";
import * as Font from "expo-font";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { HomePageView } from "./Src/HomePageView";
import { LoadingView } from "./Src/LoadingView";
import { StackingView } from "./Src/StackingView";
import { ScannerView } from "./Src/ScannerView";
import { ReceivedOrderView } from "./Src/ReceivedOrderView";
import { OrderDetailsView } from "./Src/OrderDetailsView";
import { PnPOrderView } from "./Src/PnPOrderView";
import { PnPOrderDetailsView } from "./Src/PnPOrderDetailsView";
import { PnPPalletDetailsView } from "./Src/PnPPalletDetailsView";
import { LoginView } from "./Src/LoginView";
import { DeliveryOrderView } from "./Src/DeliveryOrderView";
import { DeliveryOrderDetailsView } from "./Src/DeliveryOrderDetailsView";

const DemoNav = createStackNavigator(
  {
    Login: { screen: LoginView },
    Home: { screen: HomePageView },
    Scanner: { screen: ScannerView },
    Stacking: { screen: StackingView },
    Receiving: { screen: ReceivedOrderView },
    OrderDetails: { screen: OrderDetailsView },
    PnPOrder: { screen: PnPOrderView },
    PnPOrderDetails: { screen: PnPOrderDetailsView },
    PnPPalletDetails: { screen: PnPPalletDetailsView },
    DeliveryOrder: { screen: DeliveryOrderView },
    DeliveryOrderDetails: { screen: DeliveryOrderDetailsView }
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

const Main = createAppContainer(DemoNav);

export default class App extends React.Component {
  state = {
    loading: true
  };
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }
  render() {
    if (this.state.loading) {
      return <LoadingView />;
    }

    return <Main></Main>;
  }
}
