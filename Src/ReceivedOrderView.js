import React from "react";
import {
  Container,
  Button,
  Header,
  Body,
  Title,
  Left,
  Icon,
  Right,
  Content,
  Card,
  CardItem,
  H3,
  Text
} from "native-base";
import Constants from "expo-constants";
import { ScrollView } from "react-native-gesture-handler";

export class ReceivedOrderView extends React.Component {
  state = {
    orders: [
      {
        id: "10235564646",
        exporter: "Mars"
      },
      {
        id: "21263584899",
        exporter: "Mars"
      },
      {
        id: "16669888751",
        exporter: "Mars"
      },
      {
        id: "54461978887",
        exporter: "Mars"
      },
      {
        id: "66554487484",
        exporter: "Mars"
      },
      {
        id: "19468254757",
        exporter: "Mars"
      },
      {
        id: "69221349754",
        exporter: "Mars"
      },
      {
        id: "10054887984",
        exporter: "Mars"
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
            <Title>Received Orders</Title>
          </Body>
          <Right></Right>
        </Header>
        <Content>
          <ScrollView>
            {(this.state.orders || []).map((order, index) => (
              <Card key={index}>
                <CardItem
                  button
                  onPress={() => this.handleOrderDetails(order.id)}
                >
                  <H3>Order No: {order.id}</H3>
                </CardItem>
                <CardItem>
                  <Text>Exporter: {order.exporter}</Text>
                </CardItem>
              </Card>
            ))}
          </ScrollView>
        </Content>
      </Container>
    );
  }
  handleOrderDetails = id => {
    this.props.navigation.navigate("OrderDetails", { id: id });
  };
}
