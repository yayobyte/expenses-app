import {Text, View} from "react-native";
import {style} from "./ErrorOverlay.styles";
import {Button} from "./Button";

type ErrorOverlayProps = {
    message: string
    onPress: () => void
}

export const ErrorOverlay = ({ message, onPress }: ErrorOverlayProps) => {
    return (
        <View style={style.container}>
            <Text style={[style.text, style.title]}>An Error Occurred</Text>
            <Text style={[style.text, style.message]}>{message}</Text>
            <Button onPress={onPress}>Confirm</Button>
        </View>
    )
}
