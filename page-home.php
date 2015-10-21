<?php
/*
Template Name: Home Page
*/


get_header();

?>


	<!-- #content Starts -->

<?php woo_content_before(); ?>

	<div id="content" class="col-full">

		<section id="home-feature" class="row">

			<div id="grid" class="twelvecol">

				<div class="col-1 col" id="open_video">
					<div class="row-1">
						<div class="text-left">
							<h2>THE 601 EXPERIENCE</h2>

							<p class="text_desktop">Home to many of the world's most recognizable brands,<br/>
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

				<div class="mobile_text">
										<p>Home to many of the world's most recognizable brands,<br/>
											the Starrett-Lehigh building is a pivotal West Chelsea landmark,
											and a source of enduring creativity, innovation and inspiration.<br/>
											Click play and experience a day in the life.
										</p>
									</div>
				<div class="col-wrap col">
					<div class="col-2 col">
						<div class="row-1 h_row" onclick="document.location = '/happenings'">
							<div class="b_title">HAPPENINGS</div>
						</div>
						<div class="row-2 h_row" onclick="document.location = '/shuttle-service'">
							<div class="b_title">SHUTTLE SCHEDULE</div>
						</div>
						<div class="row-3 h_row"
						     onclick="document.location = '/pages/the-building/gallery/tenant-spaces/'">
							<div class="b_title">INSIDE TENANT SPACES</div>
						</div>
					</div>
					<div class="col-3 col">
						<div class="row-1 h_row" onclick="document.location = '/food'">
							<div class="b_title">FOOD SCHEDULE</div>
						</div>
						<div class="row-2 h_row" onclick="document.location = '/fitness'">
							<div class="b_title">FITNESS CENTRE</div>
						</div>
						<div class="row-3 h_row"
						     onclick="document.location = '/pages/the-building/about-the-building/'">
							<div class="b_title">THE BUILDING</div>
						</div>
					</div>
				</div>
			</div>
			<!--/ #grid -->

		</section>


	</div><!-- /#content -->

<?php woo_content_after(); ?>


<?php get_footer(); ?>