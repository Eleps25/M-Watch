import { StyleSheet } from 'react-native';
import { Device } from '../../Vars';

const styles = StyleSheet.create({
    image: {
        width: Device.width,
        height: Device.height / 2
    },
    imageText: {
        fontSize: 30,
        paddingLeft: 10,
        paddingBottom: 5,
        position: 'absolute',
        bottom: 0,
        color: 'white'
    },
    infoContainer: {
        paddingHorizontal: 10,
        paddingVertical: 25,
    },
    basicInfoContainer: {
        paddingBottom: 20
    },
    infoText: {
        fontSize: 16
    },
    infoBoldText: {
        fontWeight: "bold"
    }
})

export default styles;