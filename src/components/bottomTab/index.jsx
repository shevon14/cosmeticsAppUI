import React, { useState } from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import styles from './styles';
import { COLORS } from '../../constants/theme';

const BottomTabBar = () => {
    const [tabId, setTabId] = useState(0);
    return (
        <View style={styles.tabRow}>
            <TouchableOpacity onPress={() => { setTabId(0) }}>
                <View style={[styles.tabIcon, {
                    backgroundColor: tabId=== 0 ? COLORS.accent : COLORS.primary
                }]}>
                    <Icon name="home-outline" size={25} color={COLORS.white} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { setTabId(1) }}>
            <View style={[styles.tabIcon, {
                    backgroundColor: tabId=== 1 ? COLORS.accent : COLORS.primary
                }]}>
                    <Icon name="cart-outline" size={25} color={COLORS.white} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { setTabId(2) }}>
            <View style={[styles.tabIcon, {
                    backgroundColor: tabId=== 2 ? COLORS.accent : COLORS.primary
                }]}>
                    <Icon name="chatbubble-ellipses-outline" size={25} color={COLORS.white} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { setTabId(3) }}>
            <View style={[styles.tabIcon, {
                    backgroundColor: tabId=== 3 ? COLORS.accent : COLORS.primary
                }]}>
                    <Icon name="person-circle-outline" size={25} color={COLORS.white} />
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default BottomTabBar;