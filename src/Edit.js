import { RichText } from "@wordpress/block-editor";
import React, { useEffect, useRef, useState } from "react";
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

import Settings from "./Components/Backend/Settings/Settings";
import Style from "./Components/Common/Style";
import './editor.scss';




const Edit = props => {
	const { className, setAttributes, clientId, attributes } = props;
	const { content, language, editorTheme, options, mainStyles, headingStyles, cId } = attributes;
	const { wrapEnabled, showLineNumbers, showGutter, showPrintMargin, highlightActiveLine, enableBasicAutocompletion, enableLiveAutocompletion } = options;
	const { fontSize, tabSize, lineHeight, height } = mainStyles;

	const [copied, setCopied] = useState(false);
	const codeRef = useRef(null);

	useEffect(() => { clientId && setAttributes({ cId: clientId.substring(0, 10) }); }, [clientId]); // Set & Update clientId to cId

	const handleCopyClick = () => {
		codeRef.current.editor.selectAll();
		navigator.clipboard.writeText(content)
			.then(() => {
				setCopied(true);
				setTimeout(() => setCopied(false), 1500);
			})
			.catch((err) => {
				console.error('Failed to copy:', err);
			});
	};

	const onLoad = (editor) => {
		// console.log('Editor loaded:', editor);
		editor.session.setOption('useWorker', false);
		editor.on('change', (e) => {
			// console.log('Editor content changed:', e);
		});
	};

	const handleChange = (value) => {
		setAttributes({ content: value });

		const lines = value.split('\n').length;
		const minHeight = 100;
		const eachLineHeight = lineHeight;

		const newHeight = Math.max(minHeight, lines * eachLineHeight);
		const finalHeight = newHeight > height ? height : newHeight + "px";

		setAttributes({ mainStyles: { ...mainStyles, height: finalHeight } })
	}


	return (
		<>
			<Style attributes={attributes} />
			<Settings attributes={attributes} setAttributes={setAttributes} />

			<div id={`main-wrapper-${cId}`}>

				<div className='heading'>
					<RichText
						tagName="p"
						placeholder="Write Headline"
						value={headingStyles.headlineText}
						onChange={(headlineText) => setAttributes({ headingStyles: { ...headingStyles, headlineText } })}
					/>

					<button
						className={`copy-btn ${copied ? 'copied' : ''}`}
						onClick={handleCopyClick}
						style={{ zIndex: 5999 }}
					>
						{copied ? 'Copied' : 'Copy Code'}
					</button>
				</div>

				<div className="code-editor">
					<AceEditor
						ref={codeRef}
						placeholder="Start Writing Code..."
						mode={language}
						theme={editorTheme}
						name="quick-code-embed"
						onLoad={onLoad}
						onChange={handleChange}
						fontSize={fontSize}
						lineHeight={lineHeight}
						height="100%"
						width="100%"
						wrapEnabled={wrapEnabled}
						showPrintMargin={showPrintMargin}
						showGutter={showGutter}
						highlightActiveLine={highlightActiveLine}
						value={content}
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
	)
};
export default Edit;