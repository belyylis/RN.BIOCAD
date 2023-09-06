import { Palette } from 'consts';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    height: 45,
    width: 120,
    borderRadius: 10,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    borderColor: Palette.GREEN,
  },
  disabled: {
    borderColor: Palette.GRAY,
  },
  textActive: {
    color: Palette.GREEN,
  },
  textDisabled: {
    color: Palette.GRAY,
  },
});
