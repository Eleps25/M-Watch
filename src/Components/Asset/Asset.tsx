import { Pressable, Text } from 'react-native';

import styles from './Asset.style'

const Asset = () => {
    return (
        <Pressable onPress={() => { console.log("Pressed") }}>
            <Text>Asset</Text>
        </Pressable>
    )
}

export default Asset;