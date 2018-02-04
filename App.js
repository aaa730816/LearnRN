/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Text, Image,AppRegistry, View, StyleSheet} from 'react-native';

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = {showText: true};
        setInterval(() => {
            this.setState(previousState => {
                return {showText: !previousState.showText};
            })
        }, 1000);
    }

    render() {
        let display = this.state.showText ? this.props.text : '';
        return (<Text>{display}</Text>);
    }
}

export default class LotsOfStyles extends Component {
    render() {
        return (
            <View style={{alignItems: 'center'}}>
                <Text style={styles.bigblue}>only bigblue</Text>
                <Text style={styles.red}>only red</Text>
                <Text style={[styles.bigblue,styles.red]}>bigblue to red</Text>
                <Text style={[styles.red,styles.bigblue]}>bigblue to red</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    bigblue: {
        color: 'blue',
        fontSize: 30,
        fontWeight: 'bold'
    },
    red: {
        color: 'red'
    }
})
AppRegistry.registerComponent('lotsOfStyles',() => LotsOfStyles)
// export default class BlinkApp extends Component {
//     render() {
//         return (<View style={{alignItems:'center'}}>
//             <Blink text='I am Tony'/>
//         </View>)
//
//     }
// }
