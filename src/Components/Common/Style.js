import React from 'react';

import { getTypoCSS } from '../../../../Components/utils/getCSS';

const Style = ({ attributes }) => {
	const { mainStyles, options, headingStyles, cId, btnStyle, alignment, mainEditor } = attributes;
	const { copyBtnPosition } = mainEditor;
	const { height, width } = mainStyles;
	const { displayHeading } = options;
	const { titleColor, titleTypo, backgroundColor } = headingStyles;

	const mainWrapper = `#main-wrapper-${cId}`;
	const codeEditor = `${mainWrapper} .code-editor`;
	const heading = `${mainWrapper} .heading`;
	const copyBtn = `${heading} .copy-btn`;
	const copyBtnIcon = `${heading} .copy-btn-icon`;



	return <style dangerouslySetInnerHTML={{
		__html: `

		${getTypoCSS("", titleTypo)?.googleFontLink}
  	    ${getTypoCSS(`${heading} p`, titleTypo)?.styles}

		${getTypoCSS("", btnStyle.typo)?.googleFontLink}
  	    ${getTypoCSS(`${copyBtn}`, btnStyle.typo)?.styles}



		${mainWrapper} {
			width: ${width};
			max-width: 100%;
			position: relative;
			${alignment === 'center' ? 'margin: 0 auto;' : ''}
      ${alignment === 'left' ? 'margin-left: 0; margin-right: auto;' : ''}
      ${alignment === 'right' ? 'margin-left: auto; margin-right: 0;' : ''}
		}
  	${codeEditor} {
			height: ${height};
			width: 100%;
    	max-width: 100%;
 		}
		${copyBtnIcon} {
			color: ${btnStyle.copyBtnIconColor};
			font-size: ${btnStyle.copyBtnIconSize}px;
			position: ${displayHeading ? "static" : "absolute"};
		  ${copyBtnPosition === "topright" && !displayHeading ? "top: 0; right: 0" : "bottom: 0; right: 0"};
			z-index: 5000;
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