import React, { Component } from "react";
import { StyleSheet, Dimensions } from "react-native";
import {
  Container,
  Header,
  Left,
  Body,
  Button,
  Icon,
  Title,
  Content,
  Form,
  Item,
  Text,
  Label,
  Right
} from "native-base";
import Constants from "expo-constants";
import { Input } from "galio-framework";
import { ScrollView } from "react-native-gesture-handler";

export class StackingView extends Component {
  state = {
    palletID: "",
    location: ""
  };

  renderLocation() {
    if (this.state.location != "") {
      return (
        <Input
          style={styles.BCinput}
          editable={false}
          value={this.state.location}
        />
      );
    } else {
      return (
        <Input
          style={styles.BCinput}
          onChangeText={val => this.setState({ location: val })}
          value={this.state.location}
        />
      );
    }
  }
  renderpalletID() {
    if (this.state.palletID != "") {
      return (
        <Input
          style={styles.BCinput}
          editable={false}
          value={this.state.palletID}
        />
      );
    } else {
      return (
        <Input
          style={styles.BCinput}
          onChangeText={val => this.setState({ palletID: val })}
          value={this.state.palletID}
        />
      );
    }
  }

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
            <Title>Stacking</Title>
          </Body>
          <Right></Right>
        </Header>
        <Content contentContainerStyle={styles.container}>
          <ScrollView>
            <Form>
              <Item fixedLabel style={styles.item}>
                <Label>Pallet ID:</Label>
                {this.renderpalletID()}
                <Button transparent onPress={() => this.getBarcode("palletID")}>
                  <Icon name="barcode" />
                </Button>
              </Item>
              <Item fixedLabel style={styles.item}>
                <Label>Location:</Label>
                {this.renderLocation()}
                <Button transparent onPress={() => this.getBarcode("location")}>
                  <Icon name="barcode" />
                </Button>
              </Item>

              <Button
                style={{
                  backgroundColor: "#333435",
                  width: "60%",
                  justifyContent: "center",
                  alignSelf: "center",
                  marginTop: 20
                }}
              >
                <Icon name="add" />
                <Text>Confirm Stacking</Text>
              </Button>
            </Form>
          </ScrollView>
        </Content>
      </Container>
    );
  }

  getBarcode(code_type) {
    if (code_type == "palletID") {
      this.props.navigation.navigate("Scanner", {
        onChange: data => this.setState({ palletID: data }),
        prevView: "getData"
      });
    } else if (code_type == "location") {
      this.props.navigation.navigate("Scanner", {
        onChange: data => this.setState({ location: data }),
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
    width: 0.5 * Dimensions.get("window").width
  },
  item: {
    margin: 8,
    fontSize: 18,
    textAlign: "center"
  }
});
