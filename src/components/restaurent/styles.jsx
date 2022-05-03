import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
    container: {
        margin: 5,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        color: COLORS.title,
        fontSize: SIZES.h3,
        fontWeight: 'bold',
        marginVertical: 5,
    },
    textBtn: {
        color: COLORS.primary,
        fontSize: SIZES.h6,
        fontWeight: '700',
    },
    item: {
        marginRight: 5,
        backgroundColor: COLORS.white,
        borderRadius: 5,
    },
    image: {
        width: SIZES.width / 2 + 60,
        height: 120,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    name: {
        color: COLORS.title,
        fontWeight: 'bold',
        marginTop: 5,
        marginHorizontal: 5,
        fontSize: SIZES.h4,
    },
    address: {
        color: COLORS.grey,
        fontWeight: '800',
        fontSize: SIZES.h6,
        marginHorizontal: 5,
    },
    rating: {
        flexDirection: 'row',
        marginLeft: 5,
        marginVertical: 10,
    }
});

export default styles;