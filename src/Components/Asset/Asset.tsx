import { Pressable, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { StackParams } from '../../Navigation/NavigationRoutes';

import styles from './Asset.style'

interface Asset {
    title: string,
    imageURL: string,
    data: any
}


const Asset = ({ title, imageURL, data }: Asset) => {
    const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
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