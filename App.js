  import {SafeAreaView, StyleSheet, Image, ScrollView} from 'react-native'
  import PrototipoOmnitrix from './components/PrototipoOmnitrix'
  import OmnitrixRecalibrado from './components/OmnitrixRecalibrado'
  import Omnimatrix from './components/Omnimatrix'
  import Superomnitrix from './components/Superomnitrix'
  import Biomnitrix from './components/Biomnitrix'


  export default function App(){
    return(
      <SafeAreaView style={styles.background}>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.areaRolagem}>
          <PrototipoOmnitrix/>
          <OmnitrixRecalibrado/>
          <Superomnitrix/>
          <Omnimatrix/>
          <Biomnitrix/>
         
        </ScrollView>
      
      
     
      </SafeAreaView>

    )
  }

  const styles = StyleSheet.create({
  background: {
    width:'100%',
    height:'100%',
    backgroundColor:'#90EE90',
  
  }
})
