import StyleDictionaryPackage from 'style-dictionary';
import fs from 'fs-extra';
import path from 'path';

import { ConfigTargets } from './@types/Config';

// SCRIPT CONFIG

const distFolder = path.resolve(__dirname, '../dist');

// CUSTOM TRANSFORMS

StyleDictionaryPackage.registerTransform({
    name: 'spacing/pxToRem',
    type: 'value',
    matcher: function(token) {
        return token.group === 'spacing';
    },
    transformer: function (token, platform) {
        const val = parseFloat(token.value);
        const baseFont = platform?.basePxFontSize || 16;
        if (isNaN(val)) throw `Invalid Number: '${token.name}: ${token.value}' is not a valid number, cannot transform to 'rem' \n`;
        return `${(token.value / baseFont)}rem`;
    }
});

// copy of SD "size/px" but using the "group" for matching
StyleDictionaryPackage.registerTransform({
    name: 'spacing/px',
    type: 'value',
    matcher: function(token) {
        return token.group === 'spacing';
    },
    transformer: function (token) {
        const val = parseFloat(token.value);
        if (isNaN(val)) throw `Invalid Number: '${token.name}: ${token.value}' is not a valid number, cannot transform to 'px' \n`;
        return `${token.value}px`;
    }
});

// copy of SD "size/px" but using the "group" for matching
StyleDictionaryPackage.registerTransform({
    name: 'elevation/color',
    type: 'value',
    matcher: function(token) {
        return token.category === 'elevation' && token.type === 'color';
    },
    transformer: function (token) {
        if (token?.alpha) {
            const alpha = parseFloat(token.alpha);
            if (isNaN(alpha) || alpha < 0 || alpha > 1) throw `Invalid alpha: '${token.name}: ${token.alpha}' is not a valid alpha value (should be in the format 0.x).\n`;
            const hex = `${token.value}|${token.alpha}`;
            return hex;
        } else {
            return token.value;
        }
    }
});


StyleDictionaryPackage.registerTransformGroup({
    // copy of the SD "web" transform customized to support "spacing/pxToRem"
    // see: https://github.com/amzn/style-dictionary/blob/1fe585f196211200b3de671a941aae9b87e1163b/lib/common/transformGroups.js#L30-L34
    name: 'products/custom/web',
    transforms: ['attribute/cti', 'name/cti/kebab', 'spacing/pxToRem', 'color/css']
});

StyleDictionaryPackage.registerTransformGroup({
    // copy of the SD "web" transform customized to support "spacing/px"
    // see: https://github.com/amzn/style-dictionary/blob/1fe585f196211200b3de671a941aae9b87e1163b/lib/common/transformGroups.js#L30-L34
    name: 'marketing/custom/web',
    transforms: ['attribute/cti', 'name/cti/kebab', 'spacing/px', 'color/css']
});


// DYNAMIC CONFIG

const targets: ConfigTargets = {
    'products': {
        'source': [
            `src/global/**/*.json`,
            `src/products/shared/**/*.json`
        ],
        'transformGroup': 'products/custom/web',
    },
    'marketing': {
        'source': [
            `src/global/**/*.json`,
            `src/marketing/**/*.json`
        ],
        'transformGroup': 'marketing/custom/web',
    }
};

function getStyleDictionaryConfig({ target }: { target: string }) {
    return {
        "source": targets[target].source,
        "platforms": {
            "web/css-variables": {
                "transformGroup": targets[target].transformGroup,
                "buildPath": `dist/${target}/css/`,
                "prefix": "token",
                "basePxFontSize": 16,
                "files": [
                    {
                        "destination": "tokens.css",
                        "format": "css/variables",
                    }
                ]
            }
        }
    };
}

// PROCESS THE DESIGN TOKENS

console.log('Build started...');
console.log('\n==============================================');

// empty the dist folder
console.log(`\nCleaning up dist folder`);
fs.emptyDirSync(distFolder);

Object.keys(targets).forEach(target => {
    const StyleDictionary = StyleDictionaryPackage.extend(getStyleDictionaryConfig({ target }));

    console.log(`\nProcessing target "${target}"...`);
    StyleDictionary.buildPlatform('web/css-variables');
    console.log('\nEnd processing');
})


console.log('\n==============================================');
console.log('\nBuild completed!');
