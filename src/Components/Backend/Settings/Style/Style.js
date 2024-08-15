import { PanelBody, RangeControl, __experimentalUnitControl as UnitControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import React from 'react';

import { BColor, Typography } from '../../../../../../Components';
import { updateData } from '../../../../utils/functions';


const Style = ({ attributes, setAttributes }) => {
  const { mainStyles, options, headingStyles, btnStyle, mainEditor } = attributes;
  const { copyBtnType } = mainEditor;
  const { titleColor, titleTypo, backgroundColor } = headingStyles;
  const { displayHeading } = options;
  const { height, width, fontSize, lineHeight, tabSize } = mainStyles;
  return (
    <>
      <PanelBody title={__('Style', 'code-embed')}>
        <RangeControl
          label={__('Font Size', 'code-embed')}
          value={fontSize}
          onChange={(fontSize) => setAttributes({ mainStyles: { ...mainStyles, fontSize } })}
        />

        <RangeControl
          label={__('Line Height', 'code-embed')}
          value={lineHeight}
          onChange={(lineHeight) => setAttributes({ mainStyles: { ...mainStyles, lineHeight } })}
        />
        <RangeControl
          label={__('Tab Size', 'code-embed')}
          value={tabSize}
          onChange={(tabSize) => setAttributes({ mainStyles: { ...mainStyles, tabSize } })}
        />
        <UnitControl
          label={__('Maximum Height', 'code-embed')}
          value={height}
          onChange={(height) => setAttributes({ mainStyles: { ...mainStyles, height } })}
          step={1}
        />
        <UnitControl
          label={__('Width', 'code-embed')}
          value={width}
          onChange={(width) => setAttributes({ mainStyles: { ...mainStyles, width } })}
          step={1}
        />
      </PanelBody>

      {/* Heading Style */}
      {
        displayHeading && <PanelBody title={__('Heading', 'code-embed')}>
          {/* Heading Title Color */}
          <BColor
            label={__('Title Color', 'code-embed')}
            value={titleColor}
            onChange={(titleColor) => setAttributes({ headingStyles: { ...headingStyles, titleColor } })}
          />

          {/* Title Typography */}
          <Typography
            label={__('Title Typography', 'code-embed')}
            value={titleTypo}
            onChange={(titleTypo) => setAttributes({ headingStyles: { ...headingStyles, titleTypo } })}
          />

          {/* Background Color */}
          <BColor
            label={__('Background Color', 'code-embed')}
            value={backgroundColor}
            onChange={(backgroundColor) => setAttributes({ headingStyles: { ...headingStyles, backgroundColor } })}
          />
        </PanelBody>
      }

      {/* Copy Button Style */}
      {copyBtnType == "text" && <PanelBody title={__("Copy Button", "code-embed")} initialOpen={false}>
        {/* Text Color */}
        <BColor
          label={__('Button Text Color', 'code-embed')}
          value={btnStyle.textColor}
          onChange={(textColor) => setAttributes({ btnStyle: { ...btnStyle, textColor } })}
        />

        {/* Background Color */}
        <BColor
          label={__('Background Color', 'code-embed')}
          value={btnStyle.backgroundColor}
          onChange={(backgroundColor) => setAttributes({ btnStyle: { ...btnStyle, backgroundColor } })}
        />

        {/* Font Size */}
        <Typography
          label={__('Typography', 'code-embed')}
          value={btnStyle.typo}
          onChange={(typo) => setAttributes({ btnStyle: { ...btnStyle, typo } })}
        />
      </PanelBody>}

      {/* Copy Button Style For Icon */}
      {copyBtnType === 'icon' && <PanelBody title={__('Copy Button Style', 'code-embed')} initialOpen={false}>
        {/* Icon Color */}
        <BColor
          label={__('Background Color', 'code-embed')}
          value={btnStyle.copyBtnIconColor}
          onChange={(color) => setAttributes({ btnStyle: updateData(btnStyle, color, "copyBtnIconColor") })}
        />

        {/* Icon Size */}
        <RangeControl
          label={__('Icon Size', 'code-embed')}
          value={btnStyle.copyBtnIconSize}
          onChange={(size) => setAttributes({ btnStyle: updateData(btnStyle, size, "copyBtnIconSize") })}
        />
      </PanelBody>
      }
    </>
  )
}

export default Style;