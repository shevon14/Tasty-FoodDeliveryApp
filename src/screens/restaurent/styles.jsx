import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
    },
    top: {
        marginBottom: 10,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    name: {
        fontSize: SIZES.h1,
        fontWeight: 'bold',
        color: COLORS.title,
        marginRight: 5,
    },
    address: {
        marginTop: 5,
        fontSize: SIZES.h4,
        fontWeight: '500',
        color: COLORS.title,
    },
    subTxt: {
        fontSize: SIZES.h5,
        fontWeight: '500',
        marginLeft: 5,
        color: COLORS.title,
    },
    line: {
        backgroundColor: COLORS.grey,
        height: 1,
        marginVertical: 10,
    },
    icon: {
        backgroundColor: COLORS.lightGrey,
        marginHorizontal: 5,
        borderRadius: 50,
        padding: 10,
    },
    row2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        color: COLORS.white,
        fontWeight: '500',
        fontSize: SIZES.h5,
    },
    items: {
        backgroundColor: COLORS.primary,
        borderRadius: 15,
        paddingHorizontal: 20,
        paddingVertical: 8,
    },
    subtitle: {
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: SIZES.h4,
        color: COLORS.title,
    },
    imageConatiner: {
        marginTop: 5,
        marginBottom: 10,
    },
    image: {
        width: SIZES.width - 10,
        height: ((SIZES.width -10) / 16) * 9,
        borderRadius: 5,
    },
    hoursValuesContainer: {
        paddingHorizontal: 5,
    }
});

export default styles;