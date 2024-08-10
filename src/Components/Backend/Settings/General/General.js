import { PanelBody, SelectControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import React from 'react';



const General = ({ attributes, setAttributes }) => {
  const { language, editorTheme, options, copyBtnPosition } = attributes;
  const { wrapEnabled, showLineNumbers, showGutter, showPrintMargin, highlightActiveLine, enableBasicAutocompletion, enableLiveAutocompletion, readOnly, displayHeading } = options;


  return <>
    <PanelBody title={__('Settings', 'code-embed')}>
      <SelectControl label="Language" value={language}
        options={[
          { label: 'JavaScript', value: 'javascript' },
          { label: 'HTML', value: 'html' },
          { label: 'CSS', value: 'css' },
          { label: 'PHP', value: 'php' },
          { label: 'Python', value: 'python' },
          { label: 'XML', value: 'xml' },
          { label: 'Ruby', value: 'ruby' },
          { label: 'Java', value: 'java' },
          { label: 'TypeScript', value: 'typescript' },
          { label: 'Json', value: 'json' },
          { label: 'GoLang', value: 'golang' },
          { label: 'C Sharp', value: 'csharp' },
          { label: 'MySql', value: 'mysql' },
          { label: 'Sass', value: 'sass' },
          { label: 'Elixir', value: 'elixir' }
        ]} onChange={(language) => setAttributes({ language })} />

      <SelectControl
        label="Editor Theme"
        value={editorTheme}
        options={[
          { label: 'Monokai', value: 'monokai' },
          { label: 'Github', value: 'github' },
          { label: 'Tomorrow', value: 'tomorrow' },
          { label: 'Solarized_Dark', value: 'solarized_dark' },
          { label: 'Solarized_Light', value: 'solarized_light' },
          { label: 'Terminal', value: 'terminal' },
          { label: 'Kuroir', value: 'kuroir' },
          { label: 'XCode', value: 'xcode' },
          { label: 'TextMate', value: 'textmate' },
          { label: 'Twilight', value: 'twilight' }
        ]}
        onChange={(theme) => setAttributes({ editorTheme: theme })} />

      <SelectControl
        label="Copy Button Position"
        value={copyBtnPosition}
        options={[
          { label: 'Top Right', value: 'topright' },
          { label: 'Bottom Right', value: 'bottomright' }
        ]}
        onChange={(position) => setAttributes({ copyBtnPosition: position })} />


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