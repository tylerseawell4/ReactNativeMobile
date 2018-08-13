'use strict';
var React = require('react-native');
var { StyleSheet } = React;

import { Dimensions } from 'react-native';
const win = Dimensions.get('window');

module.exports = StyleSheet.create({
    heading: {
        fontSize: 25,
        textAlign: 'center',
        backgroundColor: '#f4f4f4',
        padding: 5,
        marginBottom: 5
    },
    sectionText: {
        padding: 15,
        lineHeight: 25,
        textAlign: 'center'
    },
    image: {
        flex: 1,
        resizeMode: 'stretch',
        width: win.width
    },
    imageWrap: {
        height: 175,
        justifyContent: 'center',
        alignItems: 'center'
    },
    toolbar:{
        height:60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#e9eaed'
    }
});
