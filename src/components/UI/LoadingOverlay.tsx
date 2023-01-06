import {ActivityIndicator, View} from "react-native";
import {style} from "./LoadingOverlay.styles";

export const LoadingOverlay = () => {
    return (
        <View style={style.container}>
            <ActivityIndicator size={'large'} color={'white'} />
        </View>
    )
}
