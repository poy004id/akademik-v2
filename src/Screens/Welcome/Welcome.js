import { ScrollView, StyleSheet, View } from 'react-native'
import React, {useEffect, useRef, useState} from 'react'
import BaseLayout from '../../Layout/BaseLayout';
import { Button, IconButton, List, Text, useTheme } from 'react-native-paper';
import AnimatedLottieView from 'lottie-react-native';
import Container from '../../component/Container';
import {testConnection} from './useApi';
const Welcome = ({navigation}) => {
    const {colors} = useTheme();
    const styles= customStyles(colors);
    const animationRef = useRef(null);

    useEffect(() => {
        animationRef.current.play();
    }, []);

    const BodyComponet = () => (
        <Container>
        <ScrollView contentContainerStyle={{justifyContent:'space-between', flexGrow:1, alignContent:'center', padding:20}} showsVerticalScrollIndicator={false} >
            <View>
            <View style={{alignSelf:'center', marginBottom: 40, paddingTop:20}}>
            <AnimatedLottieView
                source={require('../../../asset/lottie/doctor.json')}
                ref={animationRef}
                style={{width: 180, height: 180, alignSelf: 'center', }}
            />
            </View>

            <Text variant='headlineMedium' style={{alignSelf:'center',  color:colors.primary, fontWeight:'bold'}}>Praktik di RSA UGM?</Text>
            <Text variant='bodyLarge' style={{alignSelf:'center', marginBottom:20}}>Ikuti langkah-langkah berikut!</Text>
            <List.Item
                style={{paddingRight: 10}}
                title="Registrasi Praktik"
                titleStyle={styles.titleList}
                descriptionNumberOfLines={4}
                descriptionStyle={styles.descriptionList}
                description="Input data personal, akademik, dan praktik. Sertakan pasfoto, sertifikat vaksin Covid-19 dan surat pengantar praktik."
                left={()=><IconButton icon="clipboard-list-outline" size={30} iconColor={colors.primary} style={{margin:0, backgroundColor:colors.elevation.level1, alignSelf:'center'}}/>}
            />

            <List.Item
                style={{paddingRight: 10}}
                title="Verifikasi Data oleh Petugas"
                titleStyle={styles.titleList}
                descriptionStyle={styles.descriptionList}
                descriptionNumberOfLines={4}
                description="Jika data valid, petugas akan mengirimkan konfirmasi via App."
                left={()=><IconButton icon="check-decagram-outline" size={30} iconColor={colors.primary} style={{margin:0, backgroundColor:colors.elevation.level1, alignSelf:'center'}}/>}          
            />
            <List.Item
                style={{paddingRight: 10}}
                title="Mulai Praktik"
                titleStyle={styles.titleList}
                descriptionStyle={styles.descriptionList}
                descriptionNumberOfLines={4}
                description="Mulai praktik di RS Akademik UGM, jangan lupa untuk mengisi logbook harian."
                left={()=><IconButton icon="stethoscope" size={30} iconColor={colors.primary} style={{margin:0, backgroundColor:colors.elevation.level2, alignSelf:'center'}}/>}
            />
            </View>
            <View>

            <Button
                mode='contained'
                onPress={() => navigation.navigate('FormInput')}
                style={{marginTop:20, borderRadius:10, }}
                contentStyle={{paddingVertical:3, flexDirection:'row-reverse', }}
                icon="chevron-right"
                >
                Registrasi Praktik
            </Button>
                </View>
        </ScrollView>
        </Container>
    )
  return (
    <BaseLayout
    >
        <BodyComponet/>
    </BaseLayout>
  )
}

export default Welcome

const customStyles = (colors)=> StyleSheet.create({
    titleList:{fontWeight:'bold', 
        fontSize:18, 
        color: colors.onBackground,
         marginBottom:5},
    descriptionList:{
        fontSize:13, 
    }

})