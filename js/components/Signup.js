import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Title,
  Button,
  Text,
  Left,
  Body,
  Right
} from "native-base";
const Signup = () => {
  return (
    <Container style={{ width: 400, height: 700 }}>
      <Header>
        <Left>
          <Button hasText transparent>
            <Text>Back</Text>
          </Button>
        </Left>
        <Body>
          <Title>Sign Up</Title>
        </Body>
        <Right />
      </Header>
      <Content>
        <Form>
          <Item floatingLabel>
            <Label>Username</Label>
            <Input />
          </Item>
          <Item floatingLabel last>
            <Label>Password</Label>
            <Input />
          </Item>
          <Item floatingLabel last>
            <Label>Confirm Password</Label>
            <Input />
          </Item>
          <Item floatingLabel last>
            <Label>E-mail</Label>
            <Input />
          </Item>
        </Form>

        <Button block light style={{ marginTop: 100 }}>
          <Text>Sign Up</Text>
        </Button>
      </Content>
    </Container>
  );
};

export default Signup;
