import { Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { ProductCardProps } from '../constants/types'

export default function ProductCard({ product }: ProductCardProps) {
  // Safe fallback if images array is empty or undefined
  const imageUrl = product.images?.[0] || 'https://via.placeholder.com/300'
  const isLiked = false // Placeholder for like state; replace with actual logic as needed

  return (
    <Link href={`/product/${product._id}`} asChild>
      <TouchableOpacity 
        activeOpacity={0.8}
        className="w-[48%] mb-4 bg-white rounded-lg overflow-hidden"
      >
        {/* Image Container - fixed height for uniform grid alignment */}
        <View className="relative h-56 w-full bg-gray-100">
          <Image 
            source={{ uri: imageUrl }} 
            className="w-full h-full" 
            resizeMode="cover" 
          />
          {/* favorite button */}
          <TouchableOpacity className="absolute top-2 right-2 z-10 p-2 bg-white rounded-full shadow-sm">
          <Ionicons name={isLiked ? 'heart' : 'heart-outline'} size={20} color={isLiked ? 'COLORS.accent' : 'COLORS.primary'} />
          </TouchableOpacity>

          {/* is Featured */}
          {product.isFeatured && (
            <View className="absolute top-2 left-2 bg-black px-2 py-1 rounded">
                <Text className="text-white text-xs font-bold uppercase">Featured</Text>
            </View>
          )}
        </View>

        {/* Product Info */}
        <View className='p-3'>
            <View className='flex-row items-center mb-1'>
                <Ionicons name='star' size={14} color='#FFD700' />
                <Text className='text-primary font-medium text-sm ml-1'>4.6</Text>
            </View>
            <Text className='text-gray-800 font-medium text-sm mb-1' numberOfLines={1}>
                {product.name}
            </Text>
            <View className='flex-row items-center'>
                <Text className='text-base font-bold text-primary'>$ {product.price.toFixed(2)}</Text>
            </View>

        </View>
      </TouchableOpacity>
    </Link>
  )
}