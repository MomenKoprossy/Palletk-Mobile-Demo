import React from "react";
import {
  Container,
  Button,
  Header,
  Body,
  Title,
  Left,
  Icon,
  Content,
  Card,
  CardItem,
  H3
} from "native-base";
import Constants from "expo-constants";
import { ScrollView } from "react-native-gesture-handler";

export class PnPOrderDetailsView extends React.Component {
  state = {
    Pallets: [
      {
        id: "61949856498",
        loc: "a4787"
      },
      {
        id: "32156498478",
        loc: "a5687"
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
        <Content>
          <ScrollView>
            {(this.state.Pallets || []).map((Pallet, index) => (
              <Card key={index}>
                <CardItem
                  button
                  onPress={() => this.handlePalletDetails(Pallet.id)}
                >
                  <H3>Pallet No: {Pallet.id}</H3>
                </CardItem>
                <CardItem>
                  <Text>Location: {Pallet.loc}</Text>
                </CardItem>
              </Card>
            ))}
          </ScrollView>
        </Content>
      </Container>
    );
  }
  handlePalletDetails = id => {
    this.props.navigation.navigate("PnPPalletDetails", { id: id });
  };
}
