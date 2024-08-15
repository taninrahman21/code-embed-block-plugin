import React, { useRef, useState } from 'react';
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-kuroir";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-solarized_light";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/theme-textmate";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/theme-xcode";

import "ace-builds/src-noconflict/mode-csharp";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-elixir";
import "ace-builds/src-noconflict/mode-golang";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/mode-mysql";
import "ace-builds/src-noconflict/mode-php";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-ruby";
import "ace-builds/src-noconflict/mode-sass";
import "ace-builds/src-noconflict/mode-typescript";
import "ace-builds/src-noconflict/mode-xml";


import { GiCheckMark } from 'react-icons/gi';
import { IoCopyOutline } from 'react-icons/io5';
import '../../editor.scss';
import Style from '../Common/Style';



const CodeEmbed = ({ attributes }) => {
  const { options, mainStyles, headingStyles, cId, mainEditor } = attributes;
  const { copyBtnType, language, theme, code } = mainEditor;
  const { wrapEnabled, showLineNumbers, showGutter, showPrintMargin, highlightActiveLine, enableBasicAutocompletion, enableLiveAutocompletion, readOnly } = options;
  const { fontSize, tabSize, lineHeight } = mainStyles;
  const [copied, setCopied] = useState(false);
  const codeRef = useRef(null);


  const handleCopyClick = () => {
    codeRef.current.editor.selectAll();
    navigator.clipboard.writeText(code)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      })
      .catch((err) => {
        console.error('Failed to copy:', err);
      });
  };

  const onLoad = (editor) => {
    editor.session.setOption('useWorker', false);
    editor.on('change', (e) => {
      // console.log('Editor content changed:', e);
    });
  };

  return (
    <>

      <Style attributes={attributes} />

      <div id={`main-wrapper-${cId}`}>

        <div className='heading'>
          <p>{headingStyles.headlineText}</p>

          {
            copyBtnType == "text" ? <button
              className={`copy-btn ${copied ? 'copied' : ''}`}
              onClick={handleCopyClick}
              style={{ zIndex: 5999 }}
            >
              {copied ? 'Copied' : 'Copy Code'}
            </button> : <div onClick={handleCopyClick} className="copy-btn-icon">
              {copied ? <GiCheckMark /> : <IoCopyOutline title="Copy Code" />}
            </div>
          }
        </div>

        <div className="code-editor">
          <AceEditor
            ref={codeRef}
            placeholder="Start Writing Code..."
            mode={language}
            theme={theme}
            name="code-embed"
            onLoad={onLoad}
            fontSize={fontSize}
            lineHeight={lineHeight}
            height="100%"
            width="100%"
            wrapEnabled={wrapEnabled}
            readOnly={readOnly}
            showPrintMargin={showPrintMargin}
            showGutter={showGutter}
            highlightActiveLine={highlightActiveLine}
            value={code}
            setOptions={{
              enableBasicAutocompletion,
              enableLiveAutocompletion,
              enableSnippets: true,
              showLineNumbers,
              tabSize,
            }} />
        </div>

      </div>
    </>
  );
};

export default CodeEmbed;
