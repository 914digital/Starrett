<?php

function custom_excerpt_length( $length ) {
return 55;
}
add_filter( 'excerpt_length', 'custom_excerpt_length', 999 );

/*-----------------------------------------------------------------------------------*/

/* Start WooThemes Functions - Please refrain from editing this section */

/*-----------------------------------------------------------------------------------*/



// Set path to WooFramework and theme specific functions

$functions_path = get_template_directory() . '/functions/';

$includes_path = get_template_directory() . '/includes/';



// Don't load alt stylesheet from WooFramework

if ( ! function_exists( 'woo_output_alt_stylesheet' ) ) {

	function woo_output_alt_stylesheet () {}

}



// Define the theme-specific key to be sent to PressTrends.

define( 'WOO_PRESSTRENDS_THEMEKEY', 'tnla49pj66y028vef95h2oqhkir0tf3jr' );



// WooFramework

require_once ( $functions_path . 'admin-init.php' );	// Framework Init



if ( get_option( 'woo_woo_tumblog_switch' ) == 'true' ) {

	//Enable Tumblog Functionality and theme is upgraded

	update_option( 'woo_needs_tumblog_upgrade', 'false' );

	update_option( 'tumblog_woo_tumblog_upgraded', 'true' );

	update_option( 'tumblog_woo_tumblog_upgraded_posts_done', 'true' );

	require_once ( $functions_path . 'admin-tumblog-quickpress.php' );  // Tumblog Dashboard Functionality 

}



/*-----------------------------------------------------------------------------------*/

/* Load the theme-specific files, with support for overriding via a child theme.

/*-----------------------------------------------------------------------------------*/



$includes = array(

				'includes/theme-options.php', 			// Options panel settings and custom settings

				'includes/theme-functions.php', 		// Custom theme functions

				'includes/theme-actions.php', 			// Theme actions & user defined hooks

				'includes/theme-comments.php', 			// Custom comments/pingback loop

				'includes/theme-js.php', 				// Load JavaScript via wp_enqueue_script

				'includes/sidebar-init.php', 			// Initialize widgetized areas

				'includes/theme-widgets.php',			// Theme widgets

				'includes/theme-advanced.php',			// Advanced Theme Functions

				'includes/theme-shortcodes.php',	 	// Custom theme shortcodes

				'includes/woo-layout/woo-layout.php',	// Layout Manager

				'includes/woo-meta/woo-meta.php',		// Meta Manager

				'includes/woo-hooks/woo-hooks.php'		// Hook Manager

				);



// Allow child themes/plugins to add widgets to be loaded.

$includes = apply_filters( 'woo_includes', $includes );



foreach ( $includes as $i ) {

	locate_template( $i, true );

}



// Load WooCommerce functions, if applicable.

if ( is_woocommerce_activated() ) {

	locate_template( 'includes/theme-woocommerce.php', true );

}



/*-----------------------------------------------------------------------------------*/

/* You can add custom functions below */

/*-----------------------------------------------------------------------------------*/





add_action( 'init', 'woo_custom_move_navigation', 10 );

function woo_custom_move_navigation () {

 // Remove main nav from the woo_header_after hook

 remove_action( 'woo_header_after','woo_nav', 10 );

 // Add main nav to the woo_header_inside hook

 add_action( 'woo_header_inside','woo_nav', 10 );

 } // End woo_custom_move_navigation()

add_action( 'woo_header_inside', 'woo_custom_add_searchform', 10 );
 
function woo_custom_add_searchform () {
    echo '<div id="header-search" class="header-search fr">' . "
";
    get_template_part( 'search', 'form' );
    echo '</div><!--/#header-search .header-search fr-->' . "
";
} // End woo_custom_add_searchform()

function string_limit_words($string, $word_limit)
{
  $words = explode(' ', $string, ($word_limit + 1));
  if(count($words) > $word_limit)
  array_pop($words);
  return implode(' ', $words);
}




/*-----------------------------------------------------------------------------------*/

/* Don't add any code below here or the sky will fall down */

/*-----------------------------------------------------------------------------------*/

?>