import { Pressable, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './Asset.style'

interface Asset {
    title: string,
    imageURL: string,
    data: any
}

const Asset = ({ title, imageURL, data }: Asset) => {
    const navigation = useNavigation();
    const onPressHandler = () => {
        navigation.navigate('DetailPage', {
            ...data
        })
    }
    //console.log(data)
    return (
        <Pressable onPress={onPressHandler} style={styles.assetContainer}>
            <Image
                style={styles.image}
                source={{ uri: `${imageURL}` }}
                resizeMode='cover'
            />
            <Text style={styles.assetTitle}>{title}</Text>
        </Pressable>
    )
}

export default Asset;