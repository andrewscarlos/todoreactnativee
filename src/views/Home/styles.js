import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#FFF',
        justifyContent:'flex-start',
        alignItems:'center'
    },

    Filter:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        height: 70,
        alignItems: 'center'
    },
    filterTextActived:{
        fontWeight: 'bold',
        fontSize: 18,
        color: '#EE6B26'
    },
    filterTextInative:{
        fontWeight: 'bold',
        fontSize: 18,
        color: '#20295F',
        opacity: 0.5
    },
    content:{
        width: '100%',
        marginTop: 30
    },
    title:{
        width: '100%',
        borderBottomWidth: 1,
        borderColor: '#20295F',
        alignItems: 'center'
    },
    titleTarefas:{
        color: '#20295F',
        fontSize: 18,
        position: 'relative',
        top: 11,
        backgroundColor: '#fff',
        paddingHorizontal: 10
    }
})


export default styles;