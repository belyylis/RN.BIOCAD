import { Layout, Palette } from 'consts';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    marginHorizontal: 16,
    height: 50,
    width: Layout.SCREEN_WIDTH - 32,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: Palette.DARK,
    paddingLeft: 12,
    marginBottom: 12,
    borderColor: Palette.DARK_BORDER,
  },
  text: {
    fontSize: 16,
    color: Palette.GREEN,
  },
});
