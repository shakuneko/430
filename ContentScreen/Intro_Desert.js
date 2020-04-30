import React from "react";
import { StyleSheet, Text, View ,Image ,Button,ImageBackground,TouchableOpacity} from "react-native";


const image= {uri:"https://raw.githubusercontent.com/shakuneko/picture2/master/Desert%20(1).png"}

const Intro_Desert = ({ navigation }) => {
    return (
        
    <View style={styles.container}>
        <ImageBackground source={image} style={styles.image} >
        <View style={styles.title2}> 
        <Text style={styles.title}>Tengger Desert</Text>
        </View>
        <View style={styles.title3}>
        <Text style={{fontSize:12,color:"#fff"}}>Tengger Desert(Tenggeli Desert in Chinese), is located in southwestern Alxa Left Banner, Inner Mongolia Autonomous Region.  It borders the Gansu Province and Ningxia Hui Autonomous Region. Tengger Desert is 240 kilometers (149 miles) from north to south, and 160 kilometers (99 miles) from east to west, making it the fourth largest desert in China with a size of 43,000 square kilometers (16,602 sq miles). </Text>
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
      width:360
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
 
  
export default Intro_Desert;