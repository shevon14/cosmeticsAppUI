import { Platform, StyleSheet } from "react-native";
import { COLORS, FONTWEIGHT, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 15,
        paddingTop: 5,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    titleBold: {
        color: COLORS.primary,
        fontSize: SIZES.h1,
        fontWeight: FONTWEIGHT.bold,
    },
    title: {
        color: COLORS.primary,
        fontSize: SIZES.h2,
        marginTop: -2,
    },
    categoriesTab: {
        paddingTop: 10,
        paddingHorizontal: 15,
        marginLeft: 10,
    },
    category: {
        borderRadius: 20,
        minWidth: 80,
        paddingVertical: 10,
        paddingHorizontal: 15,
        alignItems: 'center',
    },
    subtitle: {
        color: COLORS.accent,
        fontWeight: FONTWEIGHT.weight500,
    },
    productContainer: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        marginBottom: Platform.OS === "ios" ? 280 : 350,
    },
    product: {
        margin: 5,
        padding: 10,
        backgroundColor: COLORS.lightGrey,
        borderRadius: 15,
        width: SIZES.width / 2  - 25,
        alignItems: 'center',
    },
    image: {
        width: SIZES.width / 3,
        height: 150,
        resizeMode: 'contain',
    },
    price: {
        fontWeight: FONTWEIGHT.bold
    },
    add: {
        position: 'absolute',
        right: 10,
        top: 10,
        zIndex: 1,
        backgroundColor: COLORS.white2,
        padding: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 25,
        shadowColor: COLORS.primary,
        shadowOffset: {width: 0, height: 1},
        shadowRadius: 2,
        shadowOpacity: 0.3,
        elevation: 10,
    }

});

export default styles;