import { StyleSheet } from 'react-native';
import { Layout, Palette } from 'consts';

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
  indicatorWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatlistWrapper: {
    width: Layout.SCREEN_WIDTH,
    height: Layout.SCREEN_HEIGHT - 200,
  },
  flatlistContent: {
    paddingVertical: 10,
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
  counter: {
    color: Palette.GREEN,
  },
});
