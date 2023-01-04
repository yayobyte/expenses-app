import {Pressable, View, Text, ViewStyle} from "react-native";
import React from "react";
import {styles} from "./Button.styles";

type ButtonProps = {
    children: React.ReactElement | string,
    onPress: () => void,
    mode?: string,
    style?: ViewStyle,
}

enum ButtonMode {
    flat = 'flat'
}

export const Button = ({ children, onPress, mode, style }: ButtonProps) => {
    const isFlatMode = mode === ButtonMode.flat
    return (
        <View style={style}>
            <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
                <View style={[styles.button, isFlatMode && styles.flat ]}>
                    <Text style={[styles.buttonText, isFlatMode && styles.flatText]}>{children}</Text>
                </View>
            </Pressable>
        </View>
    )
}
