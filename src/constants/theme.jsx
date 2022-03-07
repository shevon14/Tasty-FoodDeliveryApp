import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('screen');

export const COLORS = {
    primary: '#f52d56',
    title: '#072F4A',
    white: '#FFFFFF',
    lightGrey: '#D3D6D6',
    blue: '#087BB6',
};

export const SIZES = {
    h1: 24,
    h2: 22,
    h3: 20,
    h4: 18,
    h5: 16,
    h6: 14,

    width,
    height,
}