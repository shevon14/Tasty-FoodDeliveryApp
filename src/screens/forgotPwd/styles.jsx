import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants/theme';

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    title: {
        fontWeight: 'bold',
        color: COLORS.title,
        fontSize: SIZES.h1,
        marginVertical: 10,
    },
    subtitle: {
        fontWeight: '500',
        color: COLORS.title,
    },
    textinput: {
        borderBottomColor: COLORS.lightGrey,
        borderBottomWidth: 1,
        fontSize: SIZES.h4,
        paddingVertical: 10,
        marginVertical: 30,
        color: COLORS.title,
    },
    button : {
        backgroundColor: COLORS.primary,
        padding: 20,
        borderRadius: 10,
        marginHorizontal: 20,
        marginTop: 60,
        alignItems: 'center',
    },
    buttonTxt: {
        color: COLORS.white,
        fontWeight: 'bold',
        fontSize: SIZES.h4,
    }
});

export default styles;