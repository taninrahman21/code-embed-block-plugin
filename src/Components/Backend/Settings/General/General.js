import { PanelBody, SelectControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import React from 'react';
import { updateData } from '../../../../utils/functions';
import { languageOptions, themeOptions } from '../../../../utils/options';



const General = ({ attributes, setAttributes }) => {
  const { options, mainEditor } = attributes;
  const { copyBtnType, language, theme, copyBtnPosition } = mainEditor;
  const { wrapEnabled, showLineNumbers, showGutter, showPrintMargin, highlightActiveLine, enableBasicAutocompletion, enableLiveAutocompletion, readOnly, displayHeading } = options;
  

  return <>
    <PanelBody title={__('Settings', 'code-embed')}>
      <SelectControl
        label="Language"
        value={language}
        options={languageOptions}
        onChange={(language) => setAttributes({ mainEditor: updateData(mainEditor, language, "language") })} />

      <SelectControl
        label="Editor Theme"
        value={theme}
        options={themeOptions}
        onChange={(theme) => setAttributes({ mainEditor: updateData(mainEditor, theme, "theme") })} />

      <SelectControl
        label={__("Copy Button Type")}
        value={copyBtnType}
        options={[
          { label: 'Text', value: 'text' },
          { label: 'Icon', value: 'icon' }
        ]}
        onChange={(value) => setAttributes({ mainEditor: updateData(mainEditor, value, "copyBtnType") })}
      />

      {
        !displayHeading && <SelectControl
          label="Copy Button Position"
          value={copyBtnPosition}
          options={[
            { label: 'Top Right', value: 'topright' },
            { label: 'Bottom Right', value: 'bottomright' }
          ]}
          onChange={(position) => setAttributes({ mainEditor: updateData(mainEditor, position, "copyBtnPosition") })} />
      }


      <ToggleControl
        label={__('Display Heading', 'code-embed')}
        checked={displayHeading}
        onChange={(displayHeading) => setAttributes({ options: { ...options, displayHeading } })}
      />
    </PanelBody>

    <PanelBody title={__('Options', 'code-embed')}>

      <ToggleControl
        label={__('Show Line Numbers', 'code-embed')}
        checked={showLineNumbers}
        onChange={(showLineNumbers) => setAttributes({ options: { ...options, showLineNumbers } })}
      />
      <ToggleControl
        label={__('Wrap Enabled', 'code-embed')}
        checked={wrapEnabled}
        onChange={(wrapEnabled) => setAttributes({ options: { ...options, wrapEnabled } })}
      />
      <ToggleControl
        label={__('Show Gutter', 'code-embed')}
        checked={showGutter}
        onChange={(showGutter) => setAttributes({ options: { ...options, showGutter } })}
      />
      <ToggleControl
        label={__('Show Print Margin', 'code-embed')}
        checked={showPrintMargin}
        onChange={(showPrintMargin) => setAttributes({ options: { ...options, showPrintMargin } })}
      />
      <ToggleControl
        label={__('Highlight Active Line', 'code-embed')}
        checked={highlightActiveLine}
        onChange={(highlightActiveLine) => setAttributes({ options: { ...options, highlightActiveLine } })}
      />
      <ToggleControl
        label={__('Enable Basic Autocompletion', 'code-embed')}
        checked={enableBasicAutocompletion}
        onChange={(enableBasicAutocompletion) => setAttributes({ options: { ...options, enableBasicAutocompletion } })}
      />
      <ToggleControl
        label={__('Enable Live Autocompletion', 'code-embed')}
        checked={enableLiveAutocompletion}
        onChange={(enableLiveAutocompletion) => setAttributes({ options: { ...options, enableLiveAutocompletion } })}
      />
      <ToggleControl
        label={__('Read Only', 'code-embed')}
        checked={readOnly}
        help={__('Applicable only for frontend view')}
        onChange={(readOnly) => setAttributes({ options: { ...options, readOnly } })}
      />

    </PanelBody>
  </>


}

export default General;