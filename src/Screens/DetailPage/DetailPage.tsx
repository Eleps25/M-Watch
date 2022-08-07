import { View, Text, ImageBackground } from 'react-native';
import { useRoute } from '@react-navigation/native';

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
    const route = useRoute();
    const { title, year, duration, plot, posterUrl } = route.params;
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