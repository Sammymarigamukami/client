import { Ionicons } from '@expo/vector-icons'
import { Text, TouchableOpacity, View } from 'react-native'
import { COLORS } from '../constants'
import { CategoryItemProps } from '../constants/types'

export default function CategoryItem({item, isSelected, onPress}: CategoryItemProps) {
  return (
    <TouchableOpacity onPress={onPress} className='items-center justify-center mr-4 mt-4' activeOpacity={0.7}>
        <View className={`w-14 h-14 rounded-full items-center justify-center mb-2 ${isSelected ? 'bg-blue-950' : 'bg-gray-200'}`}>
            <Ionicons name={item.icon as any} size={24} color={isSelected ? '#FFF' : COLORS.primary} />
        </View>
        {/* FIX: Fixed the ternary style so it changes color distinctly based on selection state */}
        <Text className={`text-xs font-semibold ${isSelected ? 'text-blue-950' : 'text-gray-600'}`}>
            {item.name}
        </Text>
    </TouchableOpacity>
  )
}