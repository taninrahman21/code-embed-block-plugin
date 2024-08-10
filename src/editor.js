import { registerBlockType } from '@wordpress/blocks';
import metadata from '../inc/block.json';
import Edit from './Edit';
import './editor.scss';
import { blockIcon } from './utils/icons';

registerBlockType(metadata, {
	icon: {
		src: blockIcon,
    foreground: '#000000',
	},

	// Build in Functions
	edit:Edit,

	save: () =>null,
});
