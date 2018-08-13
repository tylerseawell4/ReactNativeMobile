import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, AppRegistry, TextInput, Button, Alert } from 'react-native';
var s = require('../../style');

export default class Contact extends Component {
    constructor() {
        super();
        this.state = {
            nameInput: ''
        };
    }

    trollThem() {
        Alert.alert(
            'Trolled',
            this.state.nameInput + ", you just got trolled!",
            [
                {text: 'Cancel'},
                {
                    text: 'OK', onPress: () => {
                        Alert.alert(
                            ':(',
                            "JK, just haven't gotten that far yet.",
                            [
                                { text: 'OK' }
                            ],
                            { cancelable: false }
                        )
                    }
                }
            ],
            { cancelable: false }
        )
    }

    render() {
        return (
            <View>
                <Text style={s.heading}>Contact</Text>
                <View style={{ padding: 10 }}>
                    <TextInput style={{ height: 40 }} placeholder="Enter Name"
                        onChangeText={(text) => this.setState({ nameInput: text })} />
                    <TextInput style={{ height: 40 }} placeholder="Enter Email" />
                    <TextInput style={{ height: 40 }} placeholder="Enter Optional Message" />
                    <Button title="Submit" color="#841584" onPress={this.trollThem.bind(this)} />
                </View>
            </View>
        );
    }
}

AppRegistry.registerComponent('Contact', () => Contact);