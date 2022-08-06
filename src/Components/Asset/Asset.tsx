import { Pressable, Text, Image } from 'react-native';

import styles from './Asset.style'

interface Asset {
    title: string,
    image: string
}

const Asset = ({ title, image }: Asset) => {
    return (
        <Pressable onPress={() => { console.log("Pressed") }}>
            <Text>{title}</Text>
            <Image
                style={styles.image}
                source={{ uri: `${image}` }}
            />
        </Pressable>
    )
}

export default Asset;