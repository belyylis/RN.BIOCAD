import { TextInput } from 'react-native';
import styles from './styles';
import { Driver } from 'types/Driver';
import { Palette } from 'consts';

type Props = {
  name: string;
  initialValue: string;
  editable: boolean;
  setForm: (prevState: any) => void;
};

const BasicInput: React.FC<Props> = ({
  name,
  initialValue,
  editable,
  setForm,
}) => {
  const onChangeText = (value: string) => {
    setForm((prev: Driver) => ({ ...prev, [name]: value }));
  };

  return (
    <TextInput
      defaultValue={initialValue}
      editable={editable}
      onChangeText={onChangeText}
      style={[
        styles.textInput,
        { color: editable ? Palette.BLUE : Palette.GREEN },
      ]}
    />
  );
};

export default BasicInput;
