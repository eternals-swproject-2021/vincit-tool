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

// Large Text:
// Bold text and larger than 14
// Normal text and larger than 18
const checkLargeText = (textSize, isBold) => {
    if((textSize > 14 && isBold) || (textSize > 18)){
        return true;
    } else {
        return false;
    }
}

const wcagCheck = (ratio, level, isLargeText) => {
    let maxRatio;
    if(level === 'AA' && isLargeText){
        maxRatio = WCAG_AA_LARGE;
    }
    else if(level === 'AA' && !isLargeText){
        maxRatio = WCAG_AA_NORMAL;
    }
    else if(level === 'AAA' && isLargeText){
        maxRatio = WCAG_AAA_LARGE;
    }
    else if(level === 'AAA' && !isLargeText){
        maxRatio = WCAG_AAA_NORMAL;
    }

    if(ratio >= maxRatio){
        return true;
    }
    else {
        return false;
    }
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
        
        let isLargeText = checkLargeText(sub_wcag.text_size, sub_wcag.is_bold);
        
        let wcagAA = wcagCheck(ratio, 'AA', isLargeText);
        let wcagAAA = wcagCheck(ratio, 'AAA', isLargeText);

        const wcag = {
            id: sub_wcag.id,
            ratio: ratioFmt,
            wcag_AA: wcagAA,
            wcag_AAA: wcagAAA,   
        }
        subEvaluation.push(wcag);
    });

    const wcagAATrue = subEvaluation.filter((subEval) => {
        return subEval.wcag_AA == true;
    });

    const wcagAAATrue = subEvaluation.filter((subEval) => {
        return subEval.wcag_AAA == true;
    });

    let wcagAAPercentage = wcagAATrue.length / subEvaluation.length * 100;
    let wcagAAAPercentage = wcagAAATrue.length / subEvaluation.length * 100;

    res.send({
        overall_img: `${img}`,
        wcag_AA_percentage: `${wcagAAPercentage.toFixed(2)} %`,
        wcag_AAA_percentage: `${wcagAAAPercentage.toFixed(2)} %`,
        sub_evaluation: subEvaluation
    })

});

// router.get('/color-contrast', (req, res) => {
//     res.json()
// });
module.exports = router;