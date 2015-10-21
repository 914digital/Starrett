<?php

/**
 * Footer Template
 *
 * Here we setup all logic and XHTML that is required for the footer section of all screens.
 *
 * @package WooFramework
 * @subpackage Template
 */


global $woo_options;


woo_footer_top();

woo_footer_before();

?>

<h3 class="site-title-footer">601 West 26th Street, NEW YORK</h3>
<div class="clear"></div>
<div class="foot-social"><a target="_blank" href="https://www.facebook.com/starrettlehigh"><img
			src="/wp-content/themes/canvas/images/icon-fb.svg"/></a><a target="_blank"
                                                                       href="https://twitter.com/starrettlehigh"><img
			src="/wp-content/themes/canvas/images/icon-tw.svg"/></a><a target="_blank"
                                                                       href="http://instagram.com/starrettlehigh/"><img
			src="/wp-content/themes/canvas/images/icon-in.svg"/></a></div>
<div class="footer-rule"></div>

<footer id="footer" class="col-full">


	<?php woo_footer_inside(); ?>


	<div id="copyright" class="col-left">

		<?php woo_footer_left(); ?>

	</div>


	<!--<div id="credit" class="col-right">

		<?php /*woo_footer_right(); */ ?>

	</div>-->


</footer>


<?php woo_footer_after(); ?>


</div><!-- /#inner-wrapper -->

<div class="mobile_side_menu">
	<div class="side_menu_container">
		<?php woo_nav_primary(); ?>

		<div class="mobile_search"><?php woo_custom_add_searchform(); ?></div>
		<div class="mobile_subscribe">
			<a target="_blank" href="http://info.starrett-lehigh.com/subscribe-to-receive-starrett-lehigh-emails"
			   class="subscribe"></a>
		</div>
		<div class="clear"></div>
		<div class="mobile_social">
			<a target="_blank" href="https://www.facebook.com/starrettlehigh"><img
					src="/wp-content/themes/canvas/images/icon-fb-white.svg"/></a><a target="_blank"
			                                                                         href="https://twitter.com/starrettlehigh"><img
					src="/wp-content/themes/canvas/images/icon-tw-white.svg"/></a><a target="_blank"
			                                                                         href="http://instagram.com/starrettlehigh/"><img
					src="/wp-content/themes/canvas/images/icon-in-white.svg"/></a>
		</div>
	</div>
</div>

</div><!-- /#wrapper -->

<div class="ufooter-wrapper">

	<a href="http://rxrrealty.com" class="logo"></a>
	<a id="cd-menu-trigger" href="#0"><span class="cd-menu-text"></span><span class="cd-menu-icon"></span></a>


	<nav id="cd-lateral-nav">


		<ul class="cd-navigation cd-single-item-wrapper">
			<li><a href="http://rxrrealty.com"><img
						src="<?php bloginfo( 'template_directory' ) ?>/footer/img/mainlogo.png"/></a></li>
			<li><a href="http://www.rxrrealty.com/portfolio/new-york-city/">Portfolio</a></li>
			<li><a href="http://www.rxrrealty.com/nyc-availabilities/">Availibilities</a></li>
			<li><a href="http://www.rxrrealty.com/investment-strategy/">Investors</a></li>
			<li><a href="http://news.rxrrealty.com/">News</a></li>
			<li class="nyc-prop">NYC PROPERTIES</li>
			<li><a href="http://75rockefellerplaza.com/stackingplans.html">75 Rockefeller Plaza</a></li>
			<li><a href="http://web.1330aofa.com/availabilities/">1330 Avenue of the Americas</a></li>
			<li><a href="http://237parknyc.com/availability/">237 Park Avenue</a></li>
			<li><a href="http://www.450lex.com/availabilities/">450 Lexington Avenue</a></li>
			<li><a href="http://www.starrett-lehigh.com/pages/spaces-for-lease/">Starrett-Lehigh</a></li>
			<li><a href="http://61broadwaynyc.com/site/">61 Broadway</a></li>
			<li><a href="http://www.340madisonave.com/availabilities/">340 Madison Avenue</a></li>
			<li><a href="http://www.rxrrealty.com/8520/530-fifth-avenue/">530 Fifth Avenue</a></li>
			<li><a href="http://www.rxrrealty.com/4145/620-avenue-of-the-americas/">620 Avenue of the Americas</a></li>
			<li><a href="http://470vanderbilt.com/availability/">470 Vanderbilt</a></li>
			<li><a href="http://www.rxrrealty.com/8452/standard-motors-products-building/">Standard Motor Products
					Building</a></li>


		</ul>
		<!-- cd-single-item-wrapper -->


</nav>


<script src="<?php bloginfo( 'template_directory' )  ?>/footer/parts/js/main.js"></script>
<!-- Resource jQuery -->


</div><!-- /.ufooter-wrapper -->


<div class="fix"></div><!--/.fix-->


<div id="video_overlay">
	<div class="video_block">
		<div class="table-cell">
			<div class="video_content">
				<div class="col-1 email_pic col ov_block">
					<div class="row-1">
						<div class="text-left">
							<h2>THE 601 EXPERIENCE</h2>

							<p>Home to many of the world's most recognizable brands,<br/>
								the Starrett-Lehigh building is a pivotal West Chelsea landmark,
								and a source of enduring creativity, innovation and inspiration.<br/>
								Click play and experience a day in the life.
							</p>

							<div class="play-button">
								&#9655;&nbsp;&nbsp;&nbsp;PLAY
							</div>
						</div>
						<div class="text-right">
							<div class="manufacturing">MANUFACTURING</div>
							<div class="creativity">CREATIVITY</div>
						</div>
					</div>
				</div>

				<div id="video_1" class="ov_block">
					<!--<iframe id="player1" src="https://player.vimeo.com/external/140679412.hd.mp4?s=78d0fd0d469514e5de2572d3440fdf17&profile_id=113&api=1&player_id=player1&title=0&autoplay=0&badge=0&byline=0" width="920" height="610" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>-->
					<div class="text-right">

						<h2>THE 601 EXPERIENCE</h2>

						<div class="bonus_logo"></div>
					</div>
					<video controls id="reel_1" class="video-js vjs-default-skin"
					       preload="auto" width="920" height="520"
					       data-setup='{"autoplay": false}'>
						<source
							src="https://player.vimeo.com/external/140679412.hd.mp4?s=78d0fd0d469514e5de2572d3440fdf17&profile_id=119"
							type='video/mp4'>
						<p class="vjs-no-js">
							To view this video please enable JavaScript, and consider upgrading to a web browser
							that <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5
								video</a>
						</p>
					</video>

					<div class="text-right">

						<p class="see_bonus">See bonus video reels</p>

					</div>
				</div>


				<div id="bonus_reels" class="bonus_reels ov_block">
					<div id="bonus_splash" class="bonus_splash">
						<div class="bonus_title_wrap">
							<div class="bonus_title">
								<div class="bonus_title_left">
									<div class="bonus_logo"></div>
									<h2>THE 601 EXPERIENCE</h2></div>
								<div class="bonus_title_right">BONUS REELS</div>
							</div>
						</div>

						<div class="bonus_selector" style="display: none">
							<div class="bonus_excerpt">
								<p>Want to see more? Watch extra footages of the environment by following the
									instructions
									below.</p>

								<p>You can switch between the three bonus reels at any point by pressing the H, B and N
									buttons on your keyboard.</p>
							</div>
							<div class="bonus_selector_top">
								<div class="bonus_selector_wrap">
									<div class="bonus selector_title">
										Press "H" to see more of the High Line
									</div>
									<div class="bonus_selector_vid" data-reel="h">
										<div class="bonus_selector_button">H</div>
									</div>
								</div>
							</div>
							<div class="bonus_selector_bottom">
								<div class="bonus_selector_wrap">
									<div class="bonus_selector_vid" data-reel="b">
										<div class="bonus_selector_button">B</div>
									</div>
									<div class="bonus selector_title">
										Press "B" to see more of the Building
									</div>
								</div>
								<div class="bonus_selector_wrap">
									<div class="bonus_selector_vid vid_n" data-reel="n">
										<div class="bonus_selector_button">N</div>
									</div>
									<div class="bonus selector_title">
										Press "N" to see more of the Neighborhood
									</div>
								</div>
							</div>
						</div>

						<div class="bonus_video_wrap">
							<div id="bonus_h" class="bonus_vid">
								<video controls id="reel_h" class="video-js vjs-default-skin"
								       preload="auto" width="100%" height="100%"
								       data-setup='{"autoplay": false}'>
									<source
										src="https://player.vimeo.com/external/140841945.hd.mp4?s=949da2a19a7cd351e7714d82029eb12b&profile_id=113"
										type='video/mp4'>
									<p class="vjs-no-js">
										To view this video please enable JavaScript, and consider upgrading to a web
										browser
										that <a href="http://videojs.com/html5-video-support/" target="_blank">supports
											HTML5
											video</a>
									</p>
								</video>
							</div>
							<div id="bonus_b" class="bonus_vid">
								<video controls id="reel_b" class="video-js vjs-default-skin"
								       preload="auto" width="100%" height="100%"
								       data-setup='{"autoplay": false}'>
									<source
										src="https://player.vimeo.com/external/140841738.hd.mp4?s=e4e66595a4eee12ae11a85f81356b83c&profile_id=113"
										type='video/mp4'>
									<p class="vjs-no-js">
										To view this video please enable JavaScript, and consider upgrading to a web
										browser
										that <a href="http://videojs.com/html5-video-support/" target="_blank">supports
											HTML5
											video</a>
									</p>
								</video>
							</div>
							<div id="bonus_n" class="bonus_vid">
								<video controls id="reel_n" class="video-js vjs-default-skin"
								       preload="auto" width="100%" height="100%"
								       data-setup='{"autoplay": false}'>
									<source
										src="https://player.vimeo.com/external/140842271.hd.mp4?s=f4922d1ece149e17e9890737e9510361&profile_id=113"
										type='video/mp4'>
									<p class="vjs-no-js">
										To view this video please enable JavaScript, and consider upgrading to a web
										browser
										that <a href="http://videojs.com/html5-video-support/" target="_blank">supports
											HTML5
											video</a>
									</p>
								</video>
							</div>


						</div>
						<div class="bonus_controls">
							<div class="controls_top">
								<div class="control_h b_control active" data-reel="h">H</div>
							</div>
							<div class="controls_bottom">
								<div class="control_b b_control" data-reel="b">B</div>
								<div class="control_n b_control" data-reel="n">N</div>
							</div>
						</div>
					</div>

				</div>


				<div class="col-1 col replay ov_block">
					<div class="row-1">
						<div class="text-left">
							<h2>THE 601 EXPERIENCE</h2>

							<div class="play-button replay-button">
								&#9655;&nbsp;&nbsp;&nbsp;REPLAY
							</div>
						</div>
						<div class="text-right">
							<div class="manufacturing">MANUFACTURING</div>
							<div class="creativity">CREATIVITY</div>
						</div>
					</div>
				</div>
			</div>
		</div>


	</div>
	<div class="close_block">
		<div class="table-cell">
			<div class="close_cross" id="cross_close">
			</div>
		</div>
	</div>
</div>

<div class="mobile_video">
	<video controls id="reel_m" class="video-js vjs-default-skin"
						       preload="auto" width="100%" height="100%"
						       data-setup='{"autoplay": false}'>
							<source
								src="https://player.vimeo.com/external/140679412.hd.mp4?s=78d0fd0d469514e5de2572d3440fdf17&profile_id=119"
								type='video/mp4'>
							<p class="vjs-no-js">
								To view this video please enable JavaScript, and consider upgrading to a web browser
								that <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5
									video</a>
							</p>
						</video>
</div>

<?php wp_footer(); ?>

<?php woo_foot(); ?>

</body>

</html>