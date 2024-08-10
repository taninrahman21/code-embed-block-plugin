import React from 'react';

import { getTypoCSS } from '../../../../Components/utils/getCSS';

const Style = ({ attributes }) => {
	const { mainStyles, copyBtnPosition, options, headingStyles, cId, btnStyle } = attributes;
	const { height, width } = mainStyles;
	const { displayHeading } = options;
	const { titleColor, titleTypo, backgroundColor } = headingStyles;

	const mainWrapper = `#main-wrapper-${cId}`;
	const codeEditor = `${mainWrapper} .code-editor`;
	const heading = `${mainWrapper} .heading`;
	const copyBtn = `${heading} .copy-btn`;




	return <style dangerouslySetInnerHTML={{
		__html: `

		${getTypoCSS("", titleTypo)?.googleFontLink}
  	    ${getTypoCSS(`${heading} p`, titleTypo)?.styles}

		${getTypoCSS("", btnStyle.typo)?.googleFontLink}
  	    ${getTypoCSS(`${copyBtn}`, btnStyle.typo)?.styles}



		${mainWrapper} {
			max-width: 100%;
		}
  		${codeEditor} {
			height: ${height};
			width: ${width};
    	    max-width: 100%;
 		}

		${copyBtn} {
			position: ${displayHeading ? "static" : "absolute"};
		    ${copyBtnPosition === "topright" && !displayHeading ? "top: 0; right: 0" : "bottom: 0; right: 0"};
			background-color: ${btnStyle.backgroundColor};
   			color: ${btnStyle.textColor};
		}
		${heading}{
		  padding: ${displayHeading ? "5px 0 5px 20px" : "0"};
			background-color: ${backgroundColor};
		}
		${heading} p {
			display: ${displayHeading ? "block" : "none"};
			color: ${titleColor};
		}
			
	`}} />;
}
export default Style;