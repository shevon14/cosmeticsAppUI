import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";

const styles = StyleSheet.create({
    tabRow: {
        flexDirection: 'row',
        backgroundColor: COLORS.primary,
        justifyContent: 'space-around',
        marginBottom: 25,
        marginHorizontal: 15,
        padding: 10,
        borderRadius: 20,
    },
    tabIcon: {
        padding: 10,
        borderRadius: 50,
    }
});

export default styles;