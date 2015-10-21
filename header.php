<?php

/**
 * Header Template
 *
 * Here we setup all logic and XHTML that is required for the header section of all screens.
 *
 * @package WooFramework
 * @subpackage Template
 */

?><!DOCTYPE html>

<html <?php language_attributes(); ?>>

<head>

	<meta charset="<?php echo esc_attr( get_bloginfo( 'charset' ) ); ?>"/>
	<link rel="stylesheet" href="<?php bloginfo( 'template_directory' ) ?>/footer/parts/css/footer.css">
	<!-- Main style -->
	<link rel="stylesheet" type="text/css" href="<?php bloginfo( 'template_directory' ) ?>/search.css"/>
	<link href='http://fonts.googleapis.com/css?family=Titillium+Web:400,600,700' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" href="<?php bloginfo( 'template_directory' ) ?>/footer/parts/css/reset.css">
	<!-- CSS reset -->


	<title><?php wp_title( '' ); ?></title>

	<?php woo_meta(); ?>

	<link rel="pingback" href="<?php echo esc_url( get_bloginfo( 'pingback_url' ) ); ?>"/>
	<script type="text/javascript">

		var _gaq = _gaq || [];
		_gaq.push(['_setAccount', 'UA-30032394-1']);
		_gaq.push(['_gat._forceSSL']);
		_gaq.push(['_trackPageview']);

		(function () {
			var ga = document.createElement('script');
			ga.type = 'text/javascript';
			ga.async = true;
			ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
			var s = document.getElementsByTagName('script')[0];
			s.parentNode.insertBefore(ga, s);
		})();

	</script>
	<!-- Start of Async HubSpot Analytics Code -->
	<script type="text/javascript">
		(function (d, s, i, r) {
			if (d.getElementById(i)) {
				return;
			}
			var n = d.createElement(s), e = d.getElementsByTagName(s)[0];
			n.id = i;
			n.src = '//js.hs-analytics.net/analytics/' + (Math.ceil(new Date() / r) * r) + '/327788.js';
			e.parentNode.insertBefore(n, e);
		})(document, "script", "hs-analytics", 300000);
	</script>
	<!-- End of Async HubSpot Analytics Code -->
	<link href="<?php echo get_template_directory_uri(); ?>/includes/js/video-js/video-js.css" rel="stylesheet">
	<script src="<?php echo get_template_directory_uri(); ?>/includes/js/video-js/video.js"></script>
	<?php wp_head(); ?>

	<?php woo_head(); ?>

</head>

<body <?php body_class(); ?>>


<div id="wrapper">


	<div id="inner-wrapper">


		<header id="header" class="col-full">


			<?php woo_header_inside(); ?>

			<a target="_blank" href="http://info.starrett-lehigh.com/subscribe-to-receive-starrett-lehigh-emails"
			   class="subscribe"></a>

			<div class="clear"></div>

		</header>

		<header id="header_mobile" class="col-full">

			<div class="logo_mobile">
				<a href="/"><img src="<?php echo get_template_directory_uri();?>/images/logo-mobile.svg"/></a>
			</div>
			<div class="mobile_nav_menu">

			</div>
			<div class="clear"></div>

		</header>

		<div class="header_grey_bg" style=""></div>
		<?php woo_header_before(); ?>
		<?php woo_header_after(); ?>


<?php if ( is_page( 2074 ) ) {
} else {
	woo_top();
} ?>