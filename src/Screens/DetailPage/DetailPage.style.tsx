import { StyleSheet } from 'react-native';
import { Device } from '../../Vars';

const styles = StyleSheet.create({
    image: {
        width: Device.width,
        height: Device.height / 2
    }
})

export default styles;