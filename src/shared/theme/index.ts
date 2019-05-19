import { Mixins } from '@material-ui/core/styles/createMixins';
import { createMuiTheme, Theme } from '@material-ui/core/styles';
import createBreakpoints, {
  Breakpoint,
} from '@material-ui/core/styles/createBreakpoints';

// Custom mixins.
interface IMixins extends Mixins {
}

// Custom theme.
export interface ITheme extends Theme {
  mixins: IMixins;
}

// Custom breakpoints.
const BREAKPOINTS = {
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1200,
  xl: 1440,
};

/**
 * Creates custom theme for project.
 */
export function createTheme(): ITheme {
  return createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    mixins: {},
    breakpoints: createBreakpoints({
      values: BREAKPOINTS,
      width: (key: Breakpoint) => BREAKPOINTS[key] - 32,
    }),
  });
}
