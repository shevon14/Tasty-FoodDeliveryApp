import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
    top: {
        backgroundColor: COLORS.primary,
        padding: 10,
        alignItems: 'center',
    },
    searchBox: {
        flexDirection: 'row',
        width: SIZES.width - 20,
        backgroundColor: COLORS.white,
        padding: 10,
        borderRadius: 5,
    },
    search: {
        marginLeft: 10,
        color: COLORS.title,
    }
});

export default styles;