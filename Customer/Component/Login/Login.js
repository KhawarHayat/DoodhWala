import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { Container, Header, Content, Item, Input, Icon, Label, Button, Form } from 'native-base';
import { TextInput } from 'react-native-gesture-handler';
export default class Login extends Component {
    state = {
        username: '',
        password: ''
    }

    onLoginClick = () => {
        alert(this.state.password)
    }
    render() {
        // const {height: screenHeight} = Dimensions.get('window');
        return (
            <Container >
                <Header />

                <Content style={{ flex: 1 }}>
                    <Form>
                        <Item fixedLabel style={{ flex: 1, justifyContent: 'center' }}>
                            <Icon active name='person' />
                            <Label>Username</Label>

                            <Input
                                name='username'
                                onChangeText={(username) => { this.setState({ username }) }}
                                value={this.state.username}
                            />


                        </Item>

                        <Item fixedLabel last>
                            <Icon active name='person' />
                            <Label>Password</Label>
                            <Input
                                name='password'
                                secureTextEntry={true}
                                onChangeText={(password) => this.setState({
                                    password
                                })}
                                value={this.state.password}
                            />
                        </Item>
                        <Button light style={{ alignSelf: 'center' }} onPress={this.onLoginClick}><Text>  Login  </Text></Button>
                    </Form>
                    <Button light style={{ alignSelf: 'center' }} onPress={() => this.props.navigation.navigate('SignUp')}><Text>  SignUp  </Text></Button>
                </Content>
                
            </Container>

        );
    }
}