import React, { useState, } from 'react'
import {
    TouchableOpacity,
    Image,
    TextInput,
    DatePickerAndroid,
    TimePickerAndroid
} from 'react-native'

import styles from './styles'

import iconCalender from '../../assets/calendar.png'
import iconClock from '../../assets/clock.png'

export default function DateTimeInputAndroid({ type }) {

    const [datetime, setDatetime] = useState()

    async function selecDateOrHour(){
        if(type == 'date'){
            const {action, year, month, day} = await DatePickerAndroid.open({
                mode:'calendar'
            })
            if(action == DatePickerAndroid.dateSetAction)
                setDatetime(`${day} - ${month} - ${year}`)
                console.log(datetime)
        }else{
            const {action, hour, minuto} = await TimePickerAndroid.open({
               is24Hour: true 
            })

        if(action != TimePickerAndroid.dismissedAction)
            setDatetime(`${hour}:${minuto}`)
            console.log(datetime)
        }
    }
    return(
        <TouchableOpacity onPress={selecDateOrHour}>
            <TextInput style={styles.input} 
            placeholder={type == 'date' ? 'Clique aqui para definir a data...' : 'Clique aqui para definir a hora...'}
             editable={false} 
             value={datetime} />
             
            <Image style={styles.iconTextInput}
            source={type == 'date' ? iconCalender : iconClock}/>
            
        </TouchableOpacity>
    )
}