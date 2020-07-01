import React,{useState} from 'react'
import {Plataform} from 'react-native'

import DataTimeInputAndroid from './index.android'
import DataTimeInputIOS from './index.ios'

export default function Index(){

    return(
        Plataform.OS === 'android' 
        ?
        <DataTimeInputAndroid/>
        :
        <DataTimeInputIOS/>
    )
}