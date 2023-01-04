import {Pressable, View} from "react-native";
import { Ionicons } from '@expo/vector-icons'
import {IconProps} from "@expo/vector-icons/build/createIconSet";
import {style} from "./IconButton.styles";

type IconButtonProps = {
    size: IconProps<string>['size'],
    color: IconProps<string>['color'],
    onPress: () => void,
    icon: any,
}

export const IconButton = ({ icon, size, color, onPress }: IconButtonProps) => {
    return (
        <Pressable onPress={onPress} style={({ pressed }) => pressed && style.pressed}>
            <View style={style.buttonContainer}>
                <Ionicons name={icon} size={size} color={color}/>
            </View>
        </Pressable>
    )
}
