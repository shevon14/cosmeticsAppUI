const { Dimensions } = require("react-native");

const { width, height } = Dimensions.get('window');

export const COLORS = {
    primary: '#0C0E0E',
    accent: '#3D3E40',
    grey: '#DBD5D5',
    lightGrey: '#E4E6EA',
    white: '#FFFFFF',
    white2: '#EEF0F0',
};

export const SIZES = {
    h1: 30,
    h2: 24,
    h3: 20,
    h4: 18,
    h5: 16,
    h6: 14,

    width,
    height,
};

export const FONTWEIGHT = {
    bold: 'bold',
    normal: 'normal',
    weight500: '500',
    weight700: '700',
};