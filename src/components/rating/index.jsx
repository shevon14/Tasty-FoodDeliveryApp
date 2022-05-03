import React, { useState} from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";
import { COLORS } from "../../constants/theme";

const Rating = ({count}) => {

    const [starCount] = useState(count);
    const rating = [];

    function isInt(n) {
        return n % 1 === 0;
    }

    for(let i = 0; i < starCount - 1; i++) {
        rating.push(
            <Icon name="star" size={15} color={COLORS.yellow} />
        )
    }

    { !isInt(starCount) && rating.push(<Icon name="star-half-empty" color={COLORS.yellow} size={15} />) }

    for(let i = Math.ceil(rating.length); i< 5; i++) {
        rating.push(
            <Icon name="star" size={15} color={COLORS.grey} />
        )
    }

    return(
        <View style={styles.rating}>
            {
                rating
            }
        </View>
    )
}

export default Rating;
