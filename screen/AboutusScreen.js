import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground, 
  SafeAreaView
} from "react-native";

//library imports
//import { Icon, Button, Container, Header, Content, Left } from 'native-base'

//custom components imports 
const image = { uri: "https://raw.githubusercontent.com/shakuneko/picture2/master/Mmo.png" }
class AboutusScreen extends Component {
  
  static navigationOptions = {
    drawerIcon : ({tintColor}) => (
      <Image 
      source={require('../assets/icon_drawer_aboutus.png')}
      style = {{width:24 ,height:24,marginBottom:20,marginTop:20,tintColor:tintColor}}
      />
    )
  }

  render() {
    return (
      <View style={styles.container}>
            <ImageBackground source={image} style={styles.image} >
                <Text style={styles.title}>MeowMo</Text>
                <Text style={styles.title2}>展開新旅程</Text>
                  <View style={{  
                        width: 135, height: 37
                    }}>
                        <TouchableOpacity
                            onPress={() => navigation.push('Introduction')}
                            style={{ width: '100%', height: '100%' }}
                        >
                         <Image style={{width:50,height:50}}  source={require('../assets/Arctic_change.png')} />
                </TouchableOpacity>
                    </View>
                   
            </ImageBackground>

        </View>

    )
  }

}

export default AboutusScreen;

const styles = StyleSheet.create({
  container5: {
    backgroundColor: '#00b49f',
  },
  container: {
    flex: 1,
    flexDirection: "column",
},
image: {
    zIndex: 0,
    flex: 1,
    resizeMode: "cover",
    width: 360,
    height: 640
},
title: {
    color: "#fff",
    fontSize: 35,
    top: 236,
    left: 155

},
title2: {
    color: "#fff",
    fontSize: 15,
    top: 236,
    left: 230
},
go: {
    top: 414,
    left: 113,
    width: 135,
    height: 37,
    zIndex: 10
}
});
