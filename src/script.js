import { createRoot } from 'react-dom/client';
import CodeEmbed from './Components/Frontend/CodeEmbed';
import './editor.scss';
// Block Name
function FrontEnd({ attributes }) {
	return (
		<>
			<CodeEmbed attributes={attributes} />
		</>
	);
}

const container = document.querySelectorAll('.wp-block-cebp-hello');
container?.forEach(ele => {
	const attributes = JSON.parse(ele.dataset.attributes);
	const root = createRoot(ele);
	root.render(<FrontEnd attributes={attributes} />);
})