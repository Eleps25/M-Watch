import { ScrollView, Text } from 'react-native';
import { useState, useEffect } from 'react';

import useApiFetch from '../../CustomHooks/useApiFetch';

import styles from './HomePage.style'

const HomePage = () => {
    const { data, isLoad } = useApiFetch('https://raw.githubusercontent.com/24i/smartapps-test/main/data.json');

    return (
        <ScrollView>
            <Text>Home Page</Text>
        </ScrollView>
    )
}

export default HomePage;