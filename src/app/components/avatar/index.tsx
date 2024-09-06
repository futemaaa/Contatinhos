import { Image, ImageProps, Text } from 'react-native'

import { styles } from './styles'
import { View } from 'react-native-reanimated/lib/typescript/Animated'

const variants = {
    size: {
        medium: {width: 54, height: 54,
            borderRadius: 18},
        large: {width: 100, height: 100,
            borderRadius: 32},
    },
    text: {
        medium: {fontSize: 24},
        large: {fontSize: 52},
    }
}

type Props = {
    name: string
    image?: ImageProps | null
    variant?: "medium" | "large"
}

export function Avatar({ image, name, variant="medium" }: Props){
    return (
    <View>
        { image? (
            <Image source={image} style={variants.size[variant]}/>
            ) : (
                <View style={styles.letter}>
                    <Text style={variants.text[variant]}>
                    {name[0].toUpperCase()}</Text>
            </View>
        )}
    </View>
    )
}