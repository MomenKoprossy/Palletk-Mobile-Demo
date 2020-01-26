import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import {
  Container,
  Button,
  Header,
  Body,
  Title,
  Left,
  Icon,
  Content,
  Text,
  Form,
  Item,
  Label,
  H1
} from "native-base";
import Constants from "expo-constants";
import { ScrollView } from "react-native-gesture-handler";
import { Input } from "galio-framework";

export class OrderDetailsView extends React.Component {
  state = {
    Pallets: [
      {
        name: "Galaxy Carmel mini 280g",
        Q: "",
        expDate: "",
        batchNo: "",
        palletID: "",
        itemID: ""
      },
      {
        name: "Galaxy Carmel mini 280g",
        Q: "",
        expDate: "",
        batchNo: "",
        palletID: "",
        itemID: ""
      },
      {
        name: "Galaxy Carmel mini 280g",
        Q: "",
        expDate: "",
        batchNo: "",
        palletID: "",
        itemID: ""
      },
      {
        name: "Galaxy Carmel mini 280g",
        Q: "",
        expDate: "",
        batchNo: "",
        palletID: "",
        itemID: ""
      }
    ]
  };
  render() {
    return (
      <Container style={{ paddingTop: Constants.statusBarHeight }}>
        <Header style={{ backgroundColor: "#4bccb8" }}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Order: {this.props.navigation.state.params.id}</Title>
          </Body>
        </Header>
        <Content contentContainerStyle={styles.container}>
          <ScrollView>
            {(this.state.Pallets || []).map((Pallet, index) => (
              <Form key={index}>
                <H1>{Pallet.name}</H1>
                <Item fixedLabel style={styles.item}>
                  <Label>Quantity:</Label>
                  <Input
                    style={styles.BCinput}
                    editable={false}
                    value={Pallet.Q}
                  />
                  <Button
                    transparent
                    onPress={() => this.getBarcode("1", index)}
                  >
                    <Icon name="barcode" />
                  </Button>
                </Item>
                <Item fixedLabel style={styles.item}>
                  <Label>Expiration Date:</Label>
                  <Input
                    style={styles.BCinput}
                    editable={false}
                    value={Pallet.expDate}
                  />
                  <Button transparent>
                    <Icon name="barcode" style={{ color: "white" }} />
                  </Button>
                </Item>
                <Item fixedLabel style={styles.item}>
                  <Label>Batch No:</Label>
                  <Input
                    style={styles.BCinput}
                    editable={false}
                    value={Pallet.batchNo}
                  />
                  <Button
                    transparent
                    onPress={() => this.getBarcode("2", index)}
                  >
                    <Icon name="barcode" />
                  </Button>
                </Item>

                <Item fixedLabel style={styles.item}>
                  <Label>Pallet ID:</Label>
                  <Input
                    style={styles.BCinput}
                    editable={false}
                    value={Pallet.palletID}
                  />
                  <Button
                    transparent
                    onPress={() => this.getBarcode("3", index)}
                  >
                    <Icon name="barcode" />
                  </Button>
                </Item>
                <Item fixedLabel style={styles.item}>
                  <Label>Item ID:</Label>
                  <Input
                    style={styles.BCinput}
                    editable={false}
                    value={Pallet.itemID}
                  />
                  <Button transparent>
                    <Icon name="barcode" style={{ color: "white" }} />
                  </Button>
                </Item>
              </Form>
            ))}
            <Button
              style={{
                backgroundColor: "#333435",
                width: "60%",
                justifyContent: "center",
                alignSelf: "center"
              }}
            >
              <Icon name="checkmark-circle-outline" />
              <Text>Confirm Order</Text>
            </Button>
          </ScrollView>
        </Content>
      </Container>
    );
  }
  getBarcode(code_type, index) {
    if (code_type == "1") {
      this.props.navigation.navigate("Scanner", {
        onChange: data => {
          temp = this.state.Pallets;
          temp[index].Q = data.slice(0, 5);
          temp[index].expDate = data.slice(6, 10);
          this.setState({ Pallets: temp });
        },
        prevView: "getData"
      });
    } else if (code_type == "2") {
      this.props.navigation.navigate("Scanner", {
        onChange: data => {
          temp = this.state.Pallets;
          temp[index].batchNo = data.slice(1, 5);
          this.setState({ Pallets: temp });
        },
        prevView: "getData"
      });
    } else if (code_type == "3") {
      this.props.navigation.navigate("Scanner", {
        onChange: data => {
          temp = this.state.Pallets;
          temp[index].palletID = data.slice(2, 5);
          temp[index].itemID = data.slice(6, 10);
          this.setState({ Pallets: temp });
        },
        prevView: "getData"
      });
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    padding: 10
  },
  BCinput: {
    width: 0.5 * Dimensions.get("window").width
  },
  input: {
    width: 0.65 * Dimensions.get("window").width
  },
  item: {
    margin: 8,
    fontSize: 18,
    textAlign: "center"
  }
});
