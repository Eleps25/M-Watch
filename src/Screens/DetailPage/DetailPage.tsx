import { View, Text, ImageBackground } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

import styles from './DetailPage.style'

interface DetailPageData {
    id: number,
    title: string,
    year: string,
    duration: string,
    genres: string[],
    director: string,
    actors: string,
    plot: string,
    posterUrl: string
}

const DetailPage = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { title, year, duration, plot, posterUrl } = route.params;

    useEffect(() => {
        navigation.setOptions({
            title: title
        })
    }, [title])

    return (
        <View>
            <View>
                <ImageBackground
                    source={{ uri: `${posterUrl}` }}
                    style={styles.image}
                    resizeMode='cover'
                >
                    <Text style={styles.imageText}>{title}</Text>
                </ImageBackground>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}><Text style={styles.infoBoldText}>Year:</Text> {year}</Text>
                <Text style={styles.infoText}><Text style={styles.infoBoldText}>Duration:</Text> {duration} min</Text>
                <Text style={styles.infoText}><Text style={styles.infoBoldText}>Plot:</Text> {plot}</Text>
            </View>
        </View>
    )
}

export default DetailPage;