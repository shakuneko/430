import React from "react";
import { StyleSheet, Text, View ,Image ,Button,ImageBackground,TouchableOpacity,ScrollView} from "react-native";
import Swiper from 'react-native-swiper'

import headerData from "../json/Header.json";
import contentData from "../json/Content.json";
const Desert = () => {
    return (
        <View  style={{height:'100%',width:'100%',backgroundColor:"#5e7369",flex:1}}>
            <View style={styles.header}>
                <Image style={styles.hamburger} source={{uri: headerData.HeaderPage.hamburger}} />
                <Text style={{fontSize:25,color:"#f1dacc"}}>MeowMo</Text>
                <Image style={{height:48,width:48}} source={{uri: headerData.HeaderPage.search}} />
            </View>

 
             <View style={styles.content}>
              
                <ScrollView style={{top:30,width:360,height:580,backgroundColor:'#fff'}}>
                <View style={styles.menu}>
                    <Text style={styles.word1}>Desert</Text>
                </View>
            
                <View >
                <Swiper style={styles.wrapper} height={200} horizontal={true} autoplay={ true } showsPagination={false}>
                    <View style={styles.slide1}>
                        <Image  style={styles.picture1} source={{ uri:contentData[1].picture}} />
                    </View>
                    <View style={styles.slide2}>
                        <Image  style={styles.picture1} source={{ uri:contentData[1].picture1}} />
                    </View>
                    <View style={styles.slide3}>
                        <Image  style={styles.picture1}source={{ uri:contentData[1].picture2}} />
                    </View>
                </Swiper>
                   
                    </View>
                    <Text style={styles.word2}>Another</Text>
                    <View style={styles.square}>
                        <Image style={styles.p1} source={ { uri:contentData[0].p2}} />
                        <View style={{ justifyContent:"center",alignItems:"flex-start",height:85,left:10,width:200}}>
                        <Text style={styles.word3}>{contentData[1].word}</Text>
                        <Text style={styles.word4}>{contentData[1].word1}</Text>
                        </View>
                    </View>
                    <View style={styles.square}>
                        <Image style={styles.p1} source={{ uri:contentData[1].p2}} />
                        <View style={{ justifyContent:"center",alignItems:"flex-start",height:85,left:10,width:200}}>
                        <Text style={styles.word3}>{contentData[1].word}</Text>
                        <Text style={styles.word4}>{contentData[1].word1}</Text>
                        </View>
                    </View>
                    <View style={styles.square}>
                        <Image style={styles.p1} source={{ uri:contentData[2].p2}} />
                        <View style={{ justifyContent:"center",alignItems:"flex-start",height:85,left:10,width:200}}>
                        <Text style={styles.word3}>{contentData[1].word}</Text>
                        <Text style={styles.word4}>{contentData[1].word1}</Text>
                        </View>
                    </View>
                    <View style={styles.square}>
                        <Image style={styles.p1} source={{ uri:contentData[3].p2}} />
                        <View style={{ justifyContent:"center",alignItems:"flex-start",height:85,left:10,width:200}}>
                        <Text style={styles.word3}>{contentData[1].word}</Text>
                        <Text style={styles.word4}>{contentData[1].word1}</Text>
                        </View>
                    </View>
                    <View style={styles.square}>
                        <Image style={styles.p1} source={{ uri:contentData[4].p2}} />
                        <View style={{ justifyContent:"center",alignItems:"flex-start",height:85,left:10,width:200}}>
                        <Text style={styles.word3}>{contentData[1].word}</Text>
                        <Text style={styles.word4}>{contentData[1].word1}</Text>
                        </View>
                    </View>
                    <View style={styles.square}>
                        <Image style={styles.p1} source={{ uri:contentData[5].p2}} />
                        <View style={{ justifyContent:"center",alignItems:"flex-start",height:85,left:10,width:200}}>
                        <Text style={styles.word3}>{contentData[1].word}</Text>
                        <Text style={styles.word4}>{contentData[1].word1}</Text>
                        </View>
                    </View>
                    
        
        
            </ScrollView>
                </View>
              
               
        </View>
        
        
        );
};

const styles = StyleSheet.create({
    header:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginTop:10,
        padding:16,
 
        
    },
    hamburger:{
        width:48,
        height:48,
    },
    menu:{
        top:0,
        width:360,
        flexDirection:"row",
        
    },
    word:{
        width:100,
        fontSize:15,
        justifyContent:"space-around",
        left:40,
        fontWeight:"bold",

    },
    word1:{
        color:"#5e7369",
        width:100,
        fontSize:20,
        fontWeight:"bold",
        justifyContent:"space-around",
        left:40,
        

    },
    content:{
        backgroundColor:"#fff",
        top:0,
        height:'100%',
        width:'100%',
        borderTopStartRadius:25,
        borderTopEndRadius:25,
        elevation:10
    },
    picture1:{
        width:302,
        height:183,
        top:10,
        left:29,
        borderRadius:25,
    },
    word2:{
        fontWeight:"bold",
        fontSize:18,
        width:302,
        height:183,
        top:25,
        left:34
    },
    word3:{
        color:"#5E7369",
        paddingBottom:7,
        fontWeight:"bold",
        fontSize:15,
        fontFamily:"Roboto"
    },
    word4:{
        lineHeight:13,
        color:"#5E7369",
        fontSize:10.5,
        fontFamily:"Roboto",
     
    },
    square:{
        flexDirection:"row",
        alignItems:"flex-start",
        backgroundColor:"#FCF8F5",
        borderRadius:10,
        width:302,
        height:85,
        top:-130,
        marginTop:10,
        left:29
    },
    p1:{
        borderRadius:10,
        width:85,
        height:85,
    },
    buttom:{
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    borderTopStartRadius:25,
    borderTopEndRadius:25,
    backgroundColor:"#869FB3",
    //borderWidth:1,
    //borderColor:"#1E87B0",
    top:-88,
    width:360,
    height:60,
    elevation:11
   },
   icon:{
    alignItems:"center",
    justifyContent:"center",
   }


});


export default Desert;