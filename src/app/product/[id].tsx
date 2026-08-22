import { dummyProducts } from '@/assets/assets';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../../../constants';
import { Product } from '../../../constants/types';
import { useCart } from '../../../context/CartContext';
import { useWishlist } from '../../../context/WishlistContext';

const { width } = Dimensions.get('window');

export default function ProductDetails() {

    const { id } = useLocalSearchParams();
    const router = useRouter();
    const [product, setProduct] = useState<Product | null>(null);
    const [ loading, setLoading] = useState(true);

    const { addToCart, cartItems } = useCart();
    const { toggleWishlist, isInWishlist } = useWishlist();
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [activeImageIndex, setActiveImageIndex ] = useState(0);

    const fetchProduct = async () => {
        setProduct(dummyProducts.find((product) => product._id === id) as any)
        setLoading(false);
    }
    const imageUrl = product?.images?.[0]

    useEffect(() => {
       fetchProduct();
    }, [])

    if (loading) {
        return (
            <SafeAreaView className='flex-1 justify-center items-center'>
                <ActivityIndicator size='large' color={COLORS.primary} />
            </SafeAreaView>
        )
    }

    if (!product) {
        return (
            <SafeAreaView className='flex-1 justify-center items-center'>
                <Text className='text-lg font-semibold'>Product not found</Text>
            </SafeAreaView>
        )
    }


  return (
    <View>
      <ScrollView contentContainerStyle={{paddingBottom: 100}}>
        {/* image Carousel */}
        <View className= 'relative h-[450px] bg-gray-100 mb-6'>
            <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}>
                {product.images?.map((image, index) => (
                    <Image
                        key={index}
                        source={{ uri: imageUrl }} 
                        style={{ width, height: 450 }}
                    />
                ))}
            </ScrollView>
            </View>
            </ScrollView>
            {/* Header Actions */}
            <View className='absolute top-12 left-4 right-4 flex-row justify-between items-center z-10'>
                <TouchableOpacity onPress={() => router.back()}
                className='w-10 h-10 bg-white/80 rounded-full justify-center items-center'
                    >
                    <Ionicons name="arrow-back" size={24} color={COLORS.primary} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => toggleWishlist(product)}
                className='w-10 h-10 bg-white/80 rounded-full justify-center items-center'
                    >
                    <Ionicons name={isInWishlist(product._id) ? 'heart' : 'heart-outline'} size={24} color={COLORS.primary} />
                </TouchableOpacity>
            </View>
    </View>
  )
}