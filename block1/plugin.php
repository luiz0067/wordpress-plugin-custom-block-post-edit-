<?php
/**
 * Plugin Name: wordpress plugin custom block post edit 
 * Author: Luiz Fernando Brogliatto Ferreira
 * Author URI: https://stampede-design.com
 * Description: only input title and content for notice box pre formated
 * Version: 1.0
 */

// Load assets for wp-admin when editor is active
function shaiful_gutenberg_notice_block_admin() {
   wp_enqueue_script(
      'gutenberg-notice-block-editor',
      plugins_url( 'block.js', __FILE__ ),
      array( 'wp-blocks', 'wp-element' )
   );

   wp_enqueue_style(
      'gutenberg-notice-block-editor',
      plugins_url( 'block.css', __FILE__ ),
      array()
   );
}
add_action( 'enqueue_block_editor_assets', 'shaiful_gutenberg_notice_block_admin' );

// Load assets for frontend
function shaiful_gutenberg_notice_block_frontend() {

   wp_enqueue_style(
      'gutenberg-notice-block-editor',
      plugins_url( 'block.css', __FILE__ ),
      array()
   );
}
add_action( 'wp_enqueue_scripts', 'shaiful_gutenberg_notice_block_frontend' );