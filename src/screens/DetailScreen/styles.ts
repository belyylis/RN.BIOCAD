import { Layout, Palette } from 'consts';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Palette.DARK_BACKGROUND,
  },
  headerWrapper: {
    width: Layout.SCREEN_WIDTH,
    height: 100,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingBottom: 10,
    paddingLeft: 16,
    borderBottomColor: Palette.DARK_BORDER,
    borderBottomWidth: 1,
  },
  header: {
    fontSize: 26,
    color: Palette.GREEN,
    fontWeight: 'bold',
  },
  content: {
    paddingTop: 10,
    paddingHorizontal: 16,
  },
  textInput: {
    fontSize: 24,
    marginBottom: 16,
    color: Palette.RED,
  },
  buttonWrapper: {
    position: 'absolute',
    height: 100,
    width: Layout.SCREEN_WIDTH,
    bottom: 0,
    left: 0,
    backgroundColor: Palette.DARK,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
