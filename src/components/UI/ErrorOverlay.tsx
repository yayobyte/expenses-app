import { Text, View } from 'react-native';
import { style } from './ErrorOverlay.styles';
import { Button } from './Button';
import { useTranslation } from 'react-i18next';

type ErrorOverlayProps = {
  message: string;
  onPress: () => void;
};

export const ErrorOverlay = ({ message, onPress }: ErrorOverlayProps) => {
  const { t } = useTranslation();

  return (
    <View style={style.container}>
      <Text style={[style.text, style.title]}>{t('AN_ERROR_OCCURRED')}</Text>
      <Text style={[style.text, style.message]}>{message}</Text>
      <Button onPress={onPress}>Confirm</Button>
    </View>
  );
};
