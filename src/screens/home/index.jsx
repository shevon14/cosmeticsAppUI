import React, { useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, FlatList, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./styles";
import {COLORS} from '../../constants/theme';

const CATEGORIES = [
    {
      id: '1',
      title: 'All',
    },
    {
      id: '2',
      title: 'Bodywash',
    },
    {
      id: '3',
      title: 'Face care',
    },
    {
      id: '4',
      title: 'Cosmetics',
    },
    {
      id: '5',
      title: 'Creams',
    },
  ];
  
  const PRODUCTS = [
    {
      id: '1',
      name: 'Cosmetic Kit',
      image: require('../../assets/product1.png'),
      discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      price: '350.00',
      category: 4,
    },
    {
      id: '2',
      name: 'Hair Cream',
      image: require('../../assets/product2.png'),
      discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      price: '120.00',
      category: 5,
    },
    {
      id: '3',
      name: 'Dove skin care',
      image: require('../../assets/product3.png'),
      discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ',
      price: '180.00',
      category: 2,
    },
    {
      id: '4',
      name: 'eye liner',
      image: require('../../assets/product4.png'),
      discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      price: '45.00',
      category: 4,
    },
    {
      id: '4',
      name: 'face wash',
      image: require('../../assets/product5.png'),
      discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      price: '70.00',
      category: 3,
    },
  ];
  

const Home = ({ navigation }) => {
    const [categoryId, setCategoryId] = useState('1');
    return(
        <SafeAreaView>
            <View style={styles.header}>
                <View style={styles.row}>
                    <Text style={styles.titleBold}>Cosmetics that</Text>
                    <TouchableOpacity>
                        <Icon name="search" size={30} color={COLORS.primary} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.title}>everyone loves !</Text>
            </View>
            <View style={styles.categoriesTab}>
                <FlatList
                    data={CATEGORIES}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    key={({item}) => item.id}
                    renderItem={({item}) => (
                        <TouchableOpacity onPress={() => {
                            setCategoryId(item.id);
                        }}>
                            <View style={[styles.category, {
                                backgroundColor: item.id === categoryId ? COLORS.primary : 'transparent'
                            }]}>
                                <Text style={[styles.subtitle, {
                                    color: item.id === categoryId ? COLORS.white: COLORS.accent,
                                }]}>{item.title}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
            <View style={styles.productContainer}>
                <FlatList
                    data={PRODUCTS}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    key={({item}) => item.id}
                    renderItem={({item}) => (
                        <TouchableOpacity onPress={() => {
                          navigation.navigate('details', {
                            id: item.id,
                            name: item.name,
                            image: item.image,
                            price: item.price,
                            description : item.discription,
                          })
                        }}>
                            <View style={styles.product}>
                                <TouchableOpacity onPress={() => {}} style={styles.add}>
                                    <Icon name="add-outline" size={15} />
                                </TouchableOpacity>
                                <Image source={item.image} style={styles.image} />
                                <Text style={styles.subtitle}>{item.name}</Text>
                                <Text style={styles.price}>$ {item.price}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </SafeAreaView>
    )
}

export default Home;