import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { COLORS } from '../constants'
import { HeaderProps } from '../constants/types'

export default function Header({title, showBack, showSearch, showCart, showMenu, showLogo}: HeaderProps) {
    const router = useRouter()
    const {itemCount} = {itemCount: 8} // Replace with actual cart item count from state or context
  return (
    <View className='flex-row items-center justify-between px-4 py-3 bg-white'>
        <View className='flex-row items-center flex-1'>
            {showBack && (
                <TouchableOpacity onPress={()=> router} className='mr-4'>
                    <Ionicons name="arrow-back" size={24} color={COLORS.primary} />
                </TouchableOpacity>
            )}

            {showMenu && (
                <TouchableOpacity className='mr-3'>
                    <Ionicons name="menu-outline" size={28} color={COLORS.primary} />
                </TouchableOpacity>
            )}

            {showLogo ? (
                <View className='flex-1'>
                    <Image source={require('@/assets/logo.png')} 
                    style={{width: "100%", height: 24}} resizeMode='contain' />
                </View>
            ) : title && (
                <Text className='text-xl font-bold text-primary text-center flex-1 mr-8'>{title}</Text>
            )}

            {(!title && !showSearch ) && <View className='flex-1' />}
        </View>
        <View className='flex-row items-center' gap-4>
            {showSearch && (
                <TouchableOpacity className='mr-3'>
                    <Ionicons name="search-outline" size={24} color={COLORS.primary} />
                </TouchableOpacity>
            )}
            {showCart && (
                <TouchableOpacity className='mr-3' onPress={() => router.push('/(tab)/cart')}>
                    <View className='relative'>
                        <Ionicons name="bag-outline" size={24} color={COLORS.primary} />
                        <Text className='absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center'>
                            {itemCount}
                        </Text>
                    </View>
                </TouchableOpacity>
            )}
        </View>
    </View>
  )
}