import { css, cx } from '@emotion/css';

import themify, {themes} from '../../themes';

export default function useThemifiedComponent (uiComponent, theme) {

    const defaultTheme = css(themify('default', uiComponent));
    const overrideTheme = ((theme !== 'default') && (themes[theme])) ? css(themify(theme, uiComponent)) : null;
    const isThemeOverriden = ((theme !== 'default') && (themes[theme])) ? true : false;

    const appliedClass = cx(
        { [defaultTheme]: true },
        { [overrideTheme]: isThemeOverriden }
    );
        
    return [appliedClass];
};