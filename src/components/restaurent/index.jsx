import React from "react";
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import Rating from "../rating";
import styles from "./styles";

const Restaurent = ({title, data, navigation}) => {
    return(
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.title}>{title}</Text>
                <TouchableOpacity onPress={() => {}}>
                    <Text style={styles.textBtn}>{`View all >>`}</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={data}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => {
                    return(
                        <TouchableOpacity style={styles.item} onPress={() => {
                            navigation.navigate('restaurent');
                        }}>
                            <View>
                                <Image source={{uri: item.image_url}} style={styles.image} resizeMode="cover" />
                            </View>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.address}>{`${item.location.address1}, ${item.location.city}`}</Text>
                            <View style={styles.rating}>
                                <Rating count={item.rating} />
                                <Text style={styles.address}>({item.review_count} reviews)</Text>
                            </View>    
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

export default Restaurent;