import { ScrollView, Text, ActivityIndicator } from 'react-native';

import useApiFetch from '../../CustomHooks/useApiFetch';

import Carousel from '../../Components/Carousel/index';

import styles from './HomePage.style'

interface CarouselData {
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

const HomePage = () => {
    const { data, isLoad }: { data: any, isLoad: boolean } = useApiFetch('https://raw.githubusercontent.com/24i/smartapps-test/main/data.json');

    return (
        <ScrollView>
            {isLoad ? data.carousels.map((carousel: CarouselData) => { return <Carousel key={carousel.title} title={carousel.title} items={carousel.items} /> }) : <ActivityIndicator />}
        </ScrollView>
    )
}

export default HomePage;