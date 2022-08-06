import { Pressable, Text, Image } from 'react-native';

import styles from './Asset.style'

interface Asset {
    title: string,
    imageURL: string
}

const Asset = ({ title, imageURL }: Asset) => {
    return (
        <Pressable onPress={() => { console.log("Pressed") }}>
            <Image
                style={styles.image}
                source={{ uri: `${imageURL}` }}
            />
            <Text>{title}</Text>
        </Pressable>
    )
}

export default Asset;