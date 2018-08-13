import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView, Switch, ToolbarAndroid } from 'react-native';
import Home from './app/components/Home/Home';
import About from './app/components/About/About';
import Contact from './app/components/Contact/Contact'
var s = require('./app/style');

type Props = {};
export default class App extends Component<Props> {
  constructor() {
    super();
    this.state = {
      logoHidden: false
    }
  }
  render() {
    let logoHide = this.state.logoHidden;
    let img = <Text></Text>;
    if (logoHide) {
      img = <Image style={s.image} source={require('./trollLogo1.png')} />
    } else {
      img = <Image style={s.image} source={require('./trollLogo2.png')} />
    }
    return (
      <View style={{ flex: 1 }}>
        <ToolbarAndroid style={s.toolbar} logo={require('./trollToolBar.png')} title="Me" subtitle="Welcome" />
        <View style={s.imageWrap}>
          {img}
          <Switch onValueChange={(value) => this.setState({ logoHidden: value })} value={this.state.logoHidden} />
        </View>
        <ScrollView style={{ flex: 1 }}>
          <Home />
          <About />
          <Contact />
        </ScrollView>
      </View>
    );
  }
}
