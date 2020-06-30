import React from 'react'
import {View, Image, Text , TouchableOpacity} from 'react-native'

import styles from './styles'

import add from '../../assets/add.png'
import save from '../../assets/save.png'

export default function Footer ( { icon } ){
    return (
        <View style={ styles.Container } >
            
            <TouchableOpacity style={styles.button}>
                <Image source={icon == 'add' ? add : save } style={styles.image} />
            </TouchableOpacity>
            <Text style={styles.text}>
                Organizando tua vida !
            </Text>

        </View>
    )
}