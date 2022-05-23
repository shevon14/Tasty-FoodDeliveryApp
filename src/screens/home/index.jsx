import React from "react";
import { View, Text, TextInput, ScrollView } from "react-native";
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS } from '../../constants/theme';
import Restaurent from "../../components/restaurent";
import DATA from "../../data/data.json";

const HomeScreen = ({ navigation }) => {

    // filter by price type
    const filterData = (price) => (DATA.restaurents).filter((result) => result.price === price );
    return(
        <View>
            <View style={styles.top}>
                <View style={styles.searchBox}>
                    <Icon name="search" size={25} color={COLORS.grey} />
                    <TextInput placeholder="what you like to eat?" style={styles.search} />
                </View>
            </View>
            <ScrollView>
                <Restaurent title="Cost Effective" data={filterData('$')} navigation={navigation} />
                <Restaurent title="Bit Pricer" data={filterData('$$')} navigation={navigation} />
                <Restaurent title="Big Spender" data={filterData('$$$')} navigation={navigation} />
                <View style={{ height: 80 }}/>
            </ScrollView>
        </View>
    )
}

export default HomeScreen;