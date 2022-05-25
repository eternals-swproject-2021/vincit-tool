const router = require('express').Router();

const WCAG_AA_NORMAL = 4.5;
const WCAG_AA_LARGE = 3;
const WCAG_AAA_NORMAL = 7;
const WCAG_AAA_LARGE = 4.5;

const luminance = (r, g, b) => {
    let [lumR, lumG, lumB] = [r, g, b].map(component => {
        let proportion = component / 255;

        return proportion <= 0.03928
            ? proportion / 12.92
            : Math.pow((proportion + 0.055) / 1.055, 2.4);
    });

    return 0.2126 * lumR + 0.7152 * lumG + 0.0722 * lumB;
}

const contrastRatio = (luminance1, luminance2) => {
    let lighterLum = Math.max(luminance1, luminance2);
    let darkerLum = Math.min(luminance1, luminance2);

    return (lighterLum + 0.05) / (darkerLum + 0.05);
}

const checkContrastRGB = (color1, color2) => {
    let [luminance1, luminance2] = [color1, color2].map(color => {
        /* Color format is sent in the RGB color matrix array 
        ex. [255, 255, 255] */ 

        const rgbArray = color;

        let r = rgbArray[0];
        let g = rgbArray[1];
        let b = rgbArray[2];

        return luminance(r, g, b);
    });

    return contrastRatio(luminance1, luminance2);
}

const formatRatio = (ratio) => {
	let ratioAsFloat = ratio.toFixed(2)
	let isInteger = Number.isInteger(parseFloat(ratioAsFloat))
	return `${isInteger ? Math.floor(ratio) : ratioAsFloat}:1`
}

router.post('/color-contrast', (req, res) => {
    const { img } = req.body;
    const { sub } = req.body;
    
    //JSON Request Body validation
    if(!img) {
        res.status(418).send({message: 'img must be filled!'});
    }

    if(!sub) {
        res.status(418).send({message: 'sub must be filled!'});
    }
    //

    const subEvaluation = new Array();

    sub.forEach((sub_wcag) => {
        let ratio = checkContrastRGB(sub_wcag.color_1, sub_wcag.color_2);
        let ratioFmt = formatRatio(ratio);
                
        let wcag_AA_normal = (ratio >= WCAG_AA_NORMAL) ? true : false;
        let wcag_AA_large = (ratio >= WCAG_AA_LARGE) ? true : false;
        let wcag_AAA_normal = (ratio >= WCAG_AAA_NORMAL) ? true : false;
        let wcag_AAA_large = (ratio >= WCAG_AAA_LARGE) ? true : false;

        const wcag = {
            id: sub_wcag.id,
            ratio: ratioFmt,
            wcag_AA_normal: wcag_AA_normal,
            wcag_AA_large: wcag_AA_large,
            wcag_AAA_normal: wcag_AAA_normal,
            wcag_AAA_large: wcag_AAA_large
        }
        subEvaluation.push(wcag);
    });

    const wcagAANormalTrue = subEvaluation.filter((subEval) => {
        return subEval.wcag_AA_normal == true;
    });

    const wcagAALargeTrue = subEvaluation.filter((subEval) => {
        return subEval.wcag_AA_large == true;
    });

    const wcagAAANormalTrue = subEvaluation.filter((subEval) => {
        return subEval.wcag_AAA_normal == true;
    });

    const wcagAAALargeTrue = subEvaluation.filter((subEval) => {
        return subEval.wcag_AAA_large == true;
    });

    let wcagAANormalPercentage = wcagAANormalTrue.length / subEvaluation.length * 100;
    let wcagAALargePercentage = wcagAALargeTrue.length / subEvaluation.length * 100;
    let wcagAAANormalPercentage = wcagAAANormalTrue.length / subEvaluation.length * 100;
    let wcagAAALargePercentage = wcagAAALargeTrue.length / subEvaluation.length * 100;

    res.send({
        overall_img: `${img}`,
        wcag_AA_normal_percentage: `${wcagAANormalPercentage.toFixed(2)} %`,
        wcag_AA_large_percentage: `${wcagAALargePercentage.toFixed(2)} %`,
        wcag_AAA_normal_percentage: `${wcagAAANormalPercentage.toFixed(2)} %`,
        wcag_AAA_large_percentage: `${wcagAAALargePercentage.toFixed(2)} %`,
        sub_evaluation: subEvaluation
    })
});

module.exports = router;