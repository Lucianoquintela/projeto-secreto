import { useState } from 'react'
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native'

export default function(){

const [showOption, setShowOption] = useState(false)

  function handleButtonOption() {
    setShowOption(!showOption)
  }

  return(
    <View style={styles.areaBotoes}>
      <Text style={styles.textoRelogios} onPress={handleButtonOption}>{showOption ? 'Fechar Relógio' : 'Omnimatrix'}</Text>

     {showOption &&
       <View style={styles.listaDeAliens}>
        
       </View>
       
      }

    </View>
  )
}

const styles = StyleSheet.create({
  textoRelogios: {
    color:'white',
    fontWeight:'bold',
    backgroundColor:'#3CB371',
    width:278,
    height:44,
    padding:10,
    textAlign: 'center',
    borderRadius:10,
    margin:8
  },

  areaBotoes: {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },

  listaDeAliens:{
    width: 275,
    marginTop:25,
    borderRadius:10,
  },

  nomeAlien:{
    color:'green',
    margin:10,
    fontWeight: 'bold',
    fontSize: 20
  },

  especieAlien:{
    color:'green',
    marginLeft: 10,
    fontWeight: 'bold'
  },

  descricao: {
    marginLeft: 10,
  },

  cardsAliens:{
     marginBottom: 20,
     backgroundColor:'turquoise',
     borderRadius: 10
  },

  imagemsDeAliens:{
    backgroundColor:'red',
    width:150,
    height:200,
    display:'block',
    margin: 'auto',
    marginTop: 15,
    border: ['solid']
  },

  areaRolagem: {
    width: '100%',
    maxHeight: 100,
    padding: 5,
    marginBottom: 10,
    marginTop:10
    
  }
})