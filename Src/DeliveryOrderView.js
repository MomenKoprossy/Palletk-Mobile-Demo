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

export class DeliveryOrderView extends React.Component {
  state = {
    orders: [
      {
        id: "10235564646",
        importer: "Mars"
      },
      {
        id: "54897489412",
        importer: "Mars"
      },
      {
        id: "20057484554",
        importer: "Mars"
      },
      {
        id: "99412054654",
        importer: "Mars"
      },
      {
        id: "98845120102",
        importer: "Mars"
      },
      {
        id: "67000254877",
        importer: "Mars"
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
            <Title>Delivery Orders</Title>
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
                  <Text>importer: {order.importer}</Text>
                </CardItem>
              </Card>
            ))}
          </ScrollView>
        </Content>
      </Container>
    );
  }
  handleOrderDetails = id => {
    this.props.navigation.navigate("DeliveryOrderDetails", { id: id });
  };
}
