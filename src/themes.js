import FONTS_REGISTRY from './fonts';

/**
 *   
 */

export const themes = {
    "default": {
        // ======= Replace this by your own default theming structure ========
        "counter-container": {
            "display": 'flex',
            "flexDirection": 'column',
            "alignItems": 'center',
            "justifyContent": 'center',
            "fontSize": '300%',
            "padding": '5% 0',
            "width": '100%',
            "textAlign": 'center',
        },

        "counter-title": {
            "fontFamily": 'Roboto',
        },

        "control-box": {
            "dispay": 'flex',
            "flexDirection": 'column',
        },

        "counter-value": {
            "fontSize": '120%',
            "padding": '1% 0',
            "margin": '3% 0',
        },

        "increase-button": {
            "fontSize": '60%',
            "marginRight": '5px',
            "backgroundColor": 'green',
            "borderRadius": '8%',
            "color": 'white',
        },

        "decrease-button": {
            "fontSize": '60%',
            "marginLeft": '5px',
            "backgroundColor": 'red',
            "borderRadius": '8%',
            "color": 'white',
        },

        "static-string": {
            "fontSize": '50%',
            "color": '#4e4e4e',
        },
        // ==============================

        "fonts-list": [],

        // * following is for  Web Font Loader */
        //for using Google's Font API,
        "google-fonts": [],
    },

    // =========== Add your themes declaration here ====================
    "dark": {
        "counter-container": {
            "backgroundColor": '#333',
        },

        "counter-title": {
            "fontFamily": 'Chilanka',
            "color": '#ffa500',
        },

        "counter-value": {
            "color": '#7fffd4',
            "order": 2,
        },

        "increase-button": {
            "borderRadius": '0 22px',
            "fontFamily": 'IBM Plex Mono',
        },

        "decrease-button": {
            "borderRadius": '22px 0',
            "fontFamily": 'IBM Plex Mono',
        },

        "static-string": {
            "order": 3,
            "color": '#3bbf28',
        },

        "fonts-list": ['deutsch_gothicnormal'],

        // * following is for  Web Font Loader */
        //for using Google's Font API,
        "google-fonts": ['Chilanka', 'IBM Plex Mono'],
    }
    // ==================================================
};

// *********************************************
//**   DON'T  DELETE FUNCTIONS  BELOW !!! **/
// *********************************************
const themify = (theme, component) => {
    return themes[theme][component];
};

export const fontsLoader = (theme) => {
    const fontsList = themes['default']["fonts-list"];

    if ((theme !== 'default') && (themes[theme]["fonts-list"].length)) {
        themes[theme]["fonts-list"].forEach(
            fnt => {if (!fontsList.includes(fnt)) fontsList.push(fnt)}
        );
    };

    const loaderExpression = fontsList.reduce(
        (acc, itm) => {
            acc = acc + `@font-face {
                font-family: ${itm};
                src: ${FONTS_REGISTRY[itm]["sources"]};
                font-weight: ${FONTS_REGISTRY[itm]["fontWeight"]};
                font-style: ${FONTS_REGISTRY[itm]["fontStyle"]};
            };` + `\n`;
            return acc;
        }, ``
    );
    return loaderExpression;
};

export default themify;