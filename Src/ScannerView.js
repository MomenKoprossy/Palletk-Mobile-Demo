import * as React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import { Camera } from "expo-camera";
import {
  Container,
  Header,
  Body,
  Right,
  Button,
  Title,
  Content,
  Card,
  CardItem,
  H3,
  Text
} from "native-base";
import Drawer from "react-native-draggable-view";
import { ScrollView } from "react-native-gesture-handler";
import BarcodeMask from "react-native-barcode-mask";

export class ScannerView extends React.Component {
  state = {
    hasCameraPermission: null,
    scanned: false,
    drawer: null,

    prevView: "",

    InfoArray: [{ itemName: "water", barCode: "5550121" }],
    nItemsScanned: 0
  };

  async componentDidMount() {
    this.setState({ prevView: this.props.navigation.state.params.prevView });
    this.getPermissionsAsync();
  }

  getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  };

  render() {
    const { hasCameraPermission, scanned } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }

    //  drawerRender = null;
    //   drawerSize = (0.8 / Dimensions.get("window").height) * 100;
    //   if (this.state.drawer) {
    //     drawerRender = (
    //       <Drawer
    //         initialDrawerSize={drawerSize}
    //         renderInitDrawerView={() => (
    //           <Container>
    //             <Header style={{ backgroundColor: "#333435" }}>
    //               <Body>
    //                 <Title>{this.state.nItemsScanned} Items Scanned </Title>
    //               </Body>
    //               <Right>
    //                 <Button
    //                   style={{ backgroundColor: "#2d8573" }}
    //                   onPress={() => {
    //                     this.setState({ scanned: false });
    //                   }}
    //                 >
    //                   <Text style={{ color: "white" }}>Scan</Text>
    //                 </Button>
    //               </Right>
    //             </Header>
    //             <Content>
    //               <ScrollView>
    //                 {(this.state.InfoArray || []).map((Item, index) => (
    //                   <Card key={index}>
    //                     <CardItem
    //                       button
    //                       onPress={() => {
    //                         this.props.navigation.navigate("Details", {
    //                           unit_barcode: Item.barCode,
    //                           which: ""
    //                         });
    //                       }}
    //                     >
    //                       <Body>
    //                         <H3>{Item.itemName}</H3>
    //                         <Text note>Barcode: {Item.barCode}</Text>
    //                       </Body>
    //                     </CardItem>
    //                   </Card>
    //                 ))}
    //               </ScrollView>
    //             </Content>
    //           </Container>
    //         )}
    //       />
    //     );
    //   }
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "flex-end",
          paddingTop: Constants.statusBarHeight
        }}
      >
        <Camera
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
          // autoFocus={true}
          // focusDepth={0.5}
          // useCamera2Api={true}
        />
        <BarcodeMask />
        <Button
          onPress={() => this.props.navigation.goBack()}
          style={{
            backgroundColor: "#ffffff",
            width: "50%",
            alignSelf: "center",
            justifyContent: "center"
          }}
          rounded
        >
          <Text style={{ alignSelf: "center", color: "#000000" }}>Back</Text>
        </Button>
        {/* {drawerRender} */}
      </View>
    );
  }

  handleBarCodeScanned = ({ data }) => {
    this.setState({ scanned: true });
    if (this.state.prevView == "scan") {
      this.setState({
        drawer: true
      });
    } else if (this.state.prevView == "getData") {
      this.props.navigation.getParam("onChange")(data);
      this.props.navigation.pop();
    } else if (this.state.prevView == "details") {
      this.props.navigation.navigate("Details", {
        unit_barcode: data,
        which: "scan"
      });
    }
  };

  addToArray = (itemName, barcode, inStock) => {
    tempObj = { itemName: itemName, barCode: barcode, inStock: inStock };
    tempArr = this.state.InfoArray;
    tempArr.push(tempObj);
    this.setState({ InfoArray: tempArr, nItemsScanned: tempArr.length });
  };
}
