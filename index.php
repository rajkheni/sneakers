<!DOCTYPE html>
<html dir="ltr" lang="en">
<head>
<title>Sneakers</title>

<!-- header head -->
<?php
	include_once 'includes/header-includes.php';
?>
<!--close  header head -->

</head>

<body>
	<div id="wrapper">

		<div class="main-wrapper">
			<!-- Header -->
			<?php
				include_once 'includes/header.php';
			?>
			<!--close Header -->

			<!--Content-->
				<section class="product-sec">
					<div class="container">
						<div class="row">
							<div class="product-img-left">
								<div class="product-mobile-slider">
									<div class="owl-carousel product-slider">
										<div class="item">
											<div class="product-slide">
												<img src="images/image-product-1.jpg">
											</div>
										</div>
										<div class="item">
											<div class="product-slide">
												<img src="images/image-product-2-thumbnail.jpg">
											</div>
										</div>
										<div class="item">
											<div class="product-slide">
												<img src="images/image-product-3-thumbnail.jpg">
											</div>
										</div>
										<div class="item">
											<div class="product-slide">
												<img src="images/image-product-4-thumbnail.jpg">
											</div>
										</div>
									</div>
								</div>
								<div class="product-mian-image picZoomer">
									<a href="images/image-product-1-thumbnail.jpg" data-fancybox="gallery">
										<img src="images/image-product-1.jpg">
									</a>
								</div>
								<div class="product-tab-ind">
									<ul class="piclist">
										<li class="active">
											<a href="images/image-product-1-thumbnail.jpg" data-fancybox="gallery">
												<img src="images/image-product-1-thumbnail.jpg">	
											</a>
										</li>
										<li>
											<a href="images/image-product-2-thumbnail.jpg" data-fancybox="gallery">
												<img src="images/image-product-2-thumbnail.jpg">
											</a>
										</li>
										<li>
											<a href="images/image-product-3-thumbnail.jpg" data-fancybox="gallery">
												<img src="images/image-product-3-thumbnail.jpg">
											</a>
										</li>
										<li>
											<a href="images/image-product-4-thumbnail.jpg" data-fancybox="gallery">
												<img src="images/image-product-4-thumbnail.jpg">
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div class="product-info-right">
								<label>Sneaker Company</label>
								<h2>Fall Limited Edition Sneakers</h2>
								<p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can of fer.</p>
								<div class="prise">
									<h3>$125.00 <span class="offer">50%</span></h3>
									<span class="delete-prise">$250.00</span>
								</div>
								<div class="product-action-btn-box">
									<div class="number">
										<span class="minus">-</span>
										<input type="text" value="1"/>
										<span class="plus">+</span>
									</div>
									<button class="btn add-to-cart"><span class="btn-icon"><img src="images/icon-cart.svg"></span>Add to cart</button>
								</div>
							</div>
						</div>
					</div>
				</section>
			<!--Content-->

		</div>
			<!--footer -->
			 <!-- <?php
					// include_once 'includes/footer.php';
			 ?> -->
			<!--close footer -->
	</div>

 <!--footer scrpit -->
<?php
	include_once 'includes/footer-includes.php';
 ?>
 <!--close footer scrpit -->

</body>
</html>
