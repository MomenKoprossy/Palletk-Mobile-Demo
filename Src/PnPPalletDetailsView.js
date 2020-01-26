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

export class PnPPalletDetailsView extends React.Component {
  state = {
    Items: [
      {
        name: "KitKat",
        Q: "",
        oldID: "",
        newID: "",
        itemID: ""
      },
      {
        name: "Flutes",
        Q: "",
        oldID: "",
        newID: "",
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
            <Title>Pallet: {this.props.navigation.state.params.id}</Title>
          </Body>
        </Header>
        <Content contentContainerStyle={styles.container}>
          <ScrollView>
            {(this.state.Items || []).map((Pallet, index) => (
              <Form key={index}>
                <H1>{Pallet.name}</H1>
                <Item fixedLabel style={styles.item}>
                  <Label>Pallet ID:</Label>
                  <Input
                    style={styles.BCinput}
                    editable={false}
                    value={Pallet.oldID}
                  />
                  <Button
                    transparent
                    onPress={() => this.getBarcode("1", index)}
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
                  <Button
                    transparent
                    onPress={() => this.getBarcode("2", index)}
                  >
                    <Icon name="barcode" />
                  </Button>
                </Item>
                <Item fixedLabel style={styles.item}>
                  <Label>Quantity:</Label>
                  <Input
                    style={styles.BCinput}
                    onChangeText={value => this.setQuanitiy(value, index)}
                    value={Pallet.Q}
                  />
                  <Button transparent>
                    <Icon name="barcode" style={{ color: "white" }} />
                  </Button>
                </Item>
                <Item fixedLabel style={styles.item}>
                  <Label>New Pallet ID:</Label>
                  <Input
                    style={styles.BCinput}
                    editable={false}
                    value={Pallet.newID}
                  />
                  <Button
                    transparent
                    onPress={() => this.getBarcode("3", index)}
                  >
                    <Icon name="barcode" />
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
              <Text>Confirm</Text>
            </Button>
          </ScrollView>
        </Content>
      </Container>
    );
  }

  setQuanitiy(value, index) {
    temp = this.state.Items;
    temp[index].Q = value;
    this.setState({ Items: temp });
  }

  getBarcode(code_type, index) {
    if (code_type == "1") {
      this.props.navigation.navigate("Scanner", {
        onChange: data => {
          temp = this.state.Items;
          temp[index].oldID = data;
          this.setState({ Items: temp });
        },
        prevView: "getData"
      });
    } else if (code_type == "2") {
      this.props.navigation.navigate("Scanner", {
        onChange: data => {
          temp = this.state.Items;
          temp[index].itemID = data;
          this.setState({ Items: temp });
        },
        prevView: "getData"
      });
    } else if (code_type == "3") {
      this.props.navigation.navigate("Scanner", {
        onChange: data => {
          temp = this.state.Items;
          temp[index].newID = data;
          this.setState({ Items: temp });
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
