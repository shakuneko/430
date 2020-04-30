import React from "react";
import { StyleSheet, Text, View ,Image ,Button,ImageBackground,TouchableOpacity} from "react-native";


const image= {uri:"https://raw.githubusercontent.com/shakuneko/picture2/master/Grimsey.png"}

const Intro_Arctic = ({ navigation }) => {
    return (
        
    <View style={styles.container}>
        <ImageBackground source={image} style={styles.image} >
        <View style={styles.title2}> 
        <Text style={styles.title}>Grimsey</Text>
        </View>
        <View style={styles.title3}>
        <Text style={{fontSize:12,color:"#fff"}}>Grimsey Island - far away in the north: Home of one hundred people - and one million seabirds. The island stands alone far out on the horizon, a blue cliff, surrounded by the wide Arctic Ocean, about 40 km off the north coast of Iceland; it is about 5 square kilometers in area.</Text>
        </View>
        </ImageBackground>
    </View>

    );
};

const styles = StyleSheet.create({
  container:{
      flex:1,
      flexDirection:"column",   
  },
  image:{
      flex:1,
      resizeMode:"cover",
      width:"100%"
  },
  title:{
      color:"#273939",
      fontFamily:"Roboto",
      fontSize:60,
      fontWeight:"bold",
  },
  title2:{
    alignItems:"center",
    justifyContent:"center",
    width:360,
    height:640,
    top:-200
  },
  title3:{
    alignItems:"center",
    left:40,
    width:300,
    height:120,
  }
});
 
  
export default Intro_Arctic;