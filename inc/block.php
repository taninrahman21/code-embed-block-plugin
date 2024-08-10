<?php
class CEBPHelloBlock{
	public function __construct(){
		add_action( 'init', [$this, 'onInit'] );
	}
	function onInit() {
		wp_register_style( 'cebp-hello-style', CEBP_DIR_URL . 'dist/style.css', [ ], CEBP_VERSION ); // Style
		wp_register_style( 'cebp-hello-editor-style', CEBP_DIR_URL . 'dist/editor.css', [ 'cebp-hello-style' ], CEBP_VERSION ); // Backend Style

		register_block_type( __DIR__, [
			'editor_style'		=> 'cebp-hello-editor-style',
			'render_callback'	=> [$this, 'render']
		] ); // Register Block

		wp_set_script_translations( 'cebp-hello-editor-script', 'textdomain', CEBP_DIR_PATH . 'languages' );
	}

	function render( $attributes ){
		extract( $attributes );

		wp_enqueue_style( 'cebp-hello-style' );
		wp_enqueue_script( 'cebp-hello-script', CEBP_DIR_URL . 'dist/script.js', [ 'react', 'react-dom' ], CEBP_VERSION, true );
		wp_set_script_translations( 'cebp-hello-script', 'textdomain', CEBP_DIR_PATH . 'languages' );

		$className = $className ?? '';
		$blockClassName = "wp-block-cebp-hello $className align$align";

		ob_start(); ?>
		<div class='<?php echo esc_attr( $blockClassName ); ?>' id='cebpHelloBlock-<?php echo esc_attr( $cId ) ?>' data-attributes='<?php echo esc_attr( wp_json_encode( $attributes ) ); ?>'></div>

		<?php return ob_get_clean();
	}
}
new CEBPHelloBlock();
