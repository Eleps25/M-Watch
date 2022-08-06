import { FlatList } from 'react-native';

import styles from './Carousel.style'

const renderAsset = () => {
    //return Asset component
}

const Carousel = ({ data }) => {
    return (
        <FlatList
            data={data}
            keyExtractor={(item: any) => item.title}
            renderItem={renderAsset}
        />
    )
}

export default Carousel;