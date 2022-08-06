import { View, FlatList, Text } from 'react-native';

import Asset from '../Asset/index';

import styles from './Carousel.style';

interface Carousel {
    title: string,
    items: [
        id: number,
        title: string,
        year: string,
        duration: string,
        genres: string[],
        director: string,
        actors: string,
        plot: string,
        posterUrl: string
    ]
}

const Carousel = ({ title, items }: Carousel) => {
    const renderAsset = (itemData: any) => {
        return <Asset title={itemData.item.title} imageURL={itemData.item.posterUrl} />
    }
    return (
        <View>
            <Text>{title}</Text>
            <FlatList
                data={items}
                keyExtractor={(item: any) => item.title}
                renderItem={renderAsset}
                horizontal
            />
        </View>
    )
}

export default Carousel;