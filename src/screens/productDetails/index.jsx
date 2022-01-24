import React, { useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";
import { COLORS } from '../../constants/theme';

const ProductDetails = ({navigation}) => {
    const name = navigation.getParam('name');
    const image = navigation.getParam('image');
    const description = navigation.getParam('description');
    const price = navigation.getParam('price');

    const [quantity, setQuantity] = useState(1);

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.back}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('home');
                }}>
                    <Icon name="chevron-left" size={30} color={COLORS.primary} />
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={styles.imageContainer}>
                    <Image source={image} style={styles.image} />
                </View>
                <View style={styles.nameAndQuantity}>
                    <Text style={styles.name}>{name}</Text>
                    <View style={styles.quantityContainer}>
                        <TouchableOpacity onPress={() => {
                            if( quantity > 1) {
                                setQuantity( quantity - 1);
                            }
                        }}>
                            <View style={styles.quantityIcon}>
                                <Icon name="minus" size={10} color={COLORS.primary} />
                            </View>
                        </TouchableOpacity>
                        <Text style={styles.quantity}>{quantity}</Text>
                        <TouchableOpacity onPress={() => {
                            setQuantity(quantity + 1);
                        }}>
                            <View style={styles.quantityIcon}>
                                <Icon name="plus" size={10} color={COLORS.primary} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <Text style={styles.description}>{description}</Text>
                </View>
                <View style={styles.bottomRow}>
                    <View style={styles.priceContainer}>
                        <Text style={styles.subtitle}>Total Price</Text>
                        <Text style={styles.price}>$ {price * quantity}</Text>
                    </View>
                    <TouchableOpacity>
                        <View style={styles.basketContainer}>
                            <Text style={styles.addToBasket}>Add to basket</Text>
                            <View style={styles.basketIcon}>
                                <Icon name="shopping-basket" size={20} color={COLORS.primary} />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ProductDetails;