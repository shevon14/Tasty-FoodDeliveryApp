import React, { useState} from "react";
import { SafeAreaView, View, Text, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { COLORS } from "../../constants/theme";
import styles from "./styles";
import Icon from 'react-native-vector-icons/FontAwesome'
import RangeSlider from "@jesster2k10/react-native-range-slider";

const Drawer = ({navigation}) => {

    const [location, setLocation] = useState();
    const [cuisines, setCuisines] = useState(1);

    const [open, setOpen] = useState(false);
    const [creditCard, setCreditCard] = useState(false);
    const [free, setFree] = useState(false);

    return(
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.container}>
                <View style={styles.item}>
                    <Text style={styles.title}>REGION</Text>
                    <TextInput value={location} placeholder="where do you live ?" style={styles.input} />
                </View>
                <View style={styles.item}>
                    <Text style={styles.title}>CUISINES</Text>
                    <View style={styles.row}>
                        <TouchableOpacity
                            onPress={() => {
                                setCuisines(1)
                            }}
                            style={[styles.category, { borderColor: cuisines === 1 ? COLORS.primary : COLORS.grey }]}
                        >
                            <Text style={[styles.subtitle, { color: cuisines === 1 ? COLORS.primary : COLORS.grey }]}>All</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                setCuisines(2)
                            }}
                            style={[styles.category, { borderColor: cuisines === 2 ? COLORS.primary : COLORS.grey }]}
                        >
                            <Text style={[styles.subtitle, { color: cuisines === 2 ? COLORS.primary : COLORS.grey }]}>American</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                setCuisines(3)
                            }}
                            style={[styles.category, { borderColor: cuisines === 3 ? COLORS.primary : COLORS.grey }]}
                        >
                            <Text style={[styles.subtitle, { color: cuisines === 3 ? COLORS.primary : COLORS.grey }]}>Asian</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                setCuisines(4)
                            }}
                            style={[styles.category, { borderColor: cuisines === 4 ? COLORS.primary : COLORS.grey }]}
                        >
                            <Text style={[styles.subtitle, { color: cuisines === 4 ? COLORS.primary : COLORS.grey }]}>Burger</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                setCuisines(5)
                            }}
                            style={[styles.category, { borderColor: cuisines === 5 ? COLORS.primary : COLORS.grey }]}
                        >
                            <Text style={[styles.subtitle, { color: cuisines === 5 ? COLORS.primary : COLORS.grey }]}>Chineese</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                setCuisines(6)
                            }}
                            style={[styles.category, { borderColor: cuisines === 6 ? COLORS.primary : COLORS.grey }]}
                        >
                            <Text style={[styles.subtitle, { color: cuisines === 6 ? COLORS.primary : COLORS.grey }]}>Fast Food</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                setCuisines(7)
                            }}
                            style={[styles.category, { borderColor: cuisines === 7 ? COLORS.primary : COLORS.grey }]}
                        >
                            <Text style={[styles.subtitle, { color: cuisines === 7 ? COLORS.primary : COLORS.grey }]}>Italian</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                setCuisines(8)
                            }}
                            style={[styles.category, { borderColor: cuisines === 8 ? COLORS.primary : COLORS.grey }]}
                        >
                            <Text style={[styles.subtitle, { color: cuisines === 8 ? COLORS.primary : COLORS.grey }]}>Mexican</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                setCuisines(9)
                            }}
                            style={[styles.category, { borderColor: cuisines === 9 ? COLORS.primary : COLORS.grey }]}
                        >
                            <Text style={[styles.subtitle, { color: cuisines === 9 ? COLORS.primary : COLORS.grey }]}>Pasta</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                setCuisines(10)
                            }}
                            style={[styles.category, { borderColor: cuisines === 10 ? COLORS.primary : COLORS.grey }]}
                        >
                            <Text style={[styles.subtitle, { color: cuisines === 10 ? COLORS.primary : COLORS.grey }]}>Rice</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                setCuisines(11)
                            }}
                            style={[styles.category, { borderColor: cuisines === 11 ? COLORS.primary : COLORS.grey }]}
                        >
                            <Text style={[styles.subtitle, { color: cuisines === 11 ? COLORS.primary : COLORS.grey }]}>Asian</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.item}>
                     <Text style={styles.title}>FILTER</Text>  
                     <View style={styles.line} />
                     <TouchableOpacity
                        onPress={() => {
                            setOpen(!open);
                        }}
                        style={styles.rowFilter}
                    >
                        <Text style={styles.text}>Open Now</Text>
                        {
                            open && (
                                <Icon name="check" size={20} color={COLORS.primary} />
                            )
                        }
                     </TouchableOpacity>
                     <View style={styles.line} />
                     <TouchableOpacity
                        onPress={() => {
                            setCreditCard(!creditCard);
                        }}
                        style={styles.rowFilter}
                    >
                        <Text style={styles.text}>Credit Card</Text>
                        {
                            creditCard && (
                                <Icon name="check" size={20} color={COLORS.primary} />
                            )
                        }
                     </TouchableOpacity>
                     <View style={styles.line} />
                     <TouchableOpacity
                        onPress={() => {
                            setFree(!free);
                        }}
                        style={styles.rowFilter}
                    >
                        <Text style={styles.text}>Free Delivery</Text>
                        {
                            free && (
                                <Icon name="check" size={20} color={COLORS.primary} />
                            )
                        }
                     </TouchableOpacity>  
                     <View style={styles.line} />        
                </View>
                <View style={styles.item}>
                    <Text style={styles.title}>PRICE RANGE ($)</Text>
                    <RangeSlider
                        min={0}
                        max={300}
                        handleColor={COLORS.primary}
                        tintColor={COLORS.title}
                        handleDiameter={20}
                        tintColorBetweenHandles={COLORS.primary}
                        lineHeight={5}
                        onChange={(min, max) => {}}
                    />
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        navigation.closeDrawer();
                    }}
                >
                    <Text style={styles.buttonTxt}>Apply Filters</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Drawer;