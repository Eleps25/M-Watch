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
                >
                    <Text>{title}</Text>
                </ImageBackground>
            </View>
            <View>
                <Text>Year: {year}</Text>
                <Text>Duration: {duration} min</Text>
                <Text>Plot: {plot}</Text>
            </View>
        </View>
    )
}

export default DetailPage;