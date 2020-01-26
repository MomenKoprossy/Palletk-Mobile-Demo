import React, { Component } from "react";
import { StyleSheet, Image } from "react-native";
import {
  Container,
  Header,
  Left,
  Body,
  Button,
  Title,
  Content,
  Right,
  Text
} from "native-base";
import Constants from "expo-constants";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

export class HomePageView extends Component {
  render() {
    return (
      <Container style={{ paddingTop: Constants.statusBarHeight }}>
        <Header style={{ backgroundColor: "#4bccb8" }}>
          <Left></Left>
          <Body>
            <Title>Main Menu</Title>
          </Body>
          <Right>
            <Button
              hasText
              transparent
              onPress={() => this.props.navigation.goBack()}
            >
              <Text>Logout</Text>
            </Button>
          </Right>
        </Header>
        <Content contentContainerStyle={styles.container}>
          <ScrollView>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate("Receiving");
              }}
            >
              <Image
                source={require("../assets/parcel.png")}
                style={{
                  marginBottom: 10,
                  width: 80,
                  height: 80,
                  marginStart: 6
                }}
              />
              <Button
                rounded
                style={{ backgroundColor: "#333435", justifyContent: "center" }}
              >
                <Text>Receiving</Text>
              </Button>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate("Stacking");
              }}
            >
              <Image
                source={require("../assets/box.png")}
                style={{
                  marginBottom: 10,
                  width: 80,
                  height: 80,
                  marginStart: 7
                }}
              />
              <Button
                rounded
                style={{ backgroundColor: "#333435", justifyContent: "center" }}
              >
                <Text>Stacking</Text>
              </Button>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate("PnPOrder")}
            >
              <Image
                source={require("../assets/pallet.png")}
                style={{
                  marginBottom: 10,
                  width: 80,
                  height: 80,
                  marginStart: 18
                }}
              />
              <Button
                rounded
                style={{ backgroundColor: "#333435", justifyContent: "center" }}
              >
                <Text>Pick & Pack</Text>
              </Button>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate("DeliveryOrder")}
            >
              <Image
                source={require("../assets/delivery.png")}
                style={{
                  marginBottom: 10,
                  width: 80,
                  height: 80,
                  marginStart: 9
                }}
              />
              <Button
                rounded
                style={{ backgroundColor: "#333435", justifyContent: "center" }}
              >
                <Text>Delivery</Text>
              </Button>
            </TouchableOpacity>
          </ScrollView>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    padding: 10,
    flexDirection: "column",
    justifyContent: "center"
  },
  button: {
    marginBottom: 50,
    alignSelf: "center"
  },
  icon: {
    marginBottom: 10,
    width: 80,
    height: 80
  }
});
