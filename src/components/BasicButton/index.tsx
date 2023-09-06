import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

type Props = {
  text: string;
  isDisabled?: boolean;
  onPress: () => any;
};

const BasicButton: React.FC<Props> = ({
  text,
  isDisabled = false,
  onPress,
}) => {
  return (
    <TouchableOpacity
      disabled={isDisabled}
      style={[styles.container, !isDisabled ? styles.active : styles.disabled]}
      onPress={onPress}>
      <Text style={!isDisabled ? styles.textActive : styles.textDisabled}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default BasicButton;
