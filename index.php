<?php
/**
 * Plugin Name: Code Embed
 * Description: Embed Code anywhere you want with a lot of functionality through this block.
 * Version: 1.0.0
 * Author: bPlugins LLC
 * Author URI: http://bplugins.com
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: code-embed
 */

// ABS PATH
if ( !defined( 'ABSPATH' ) ) { exit; }

// Constant
define( 'CEBP_VERSION', isset( $_SERVER['HTTP_HOST'] ) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.0' );
define( 'CEBP_DIR_URL', plugin_dir_url( __FILE__ ) );
define( 'CEBP_DIR_PATH', plugin_dir_path( __FILE__ ) );



require_once CEBP_DIR_PATH . 'inc/block.php';