<script>
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="splash">
	<picture class="headshot">
		<img src="/headshot.png" alt="" />
	</picture>

	<h1 class="home-page-title">Matthew Carey</h1>
	<h2 class="sub-title">
		<span class="designer">A Creative<br />Designer</span>
		<img src="/ampersand.svg" alt="" class="ampersand" />
		<span class="developer">
			<span>Front- End</span><br />
			Web<br /> Developer</span
		>
	</h2>
	<div id="rectSolid" />
</section>
<section class="about">
	<h3 class="mb-0">Hi, Nice To Meet You!</h3>
	<p class="mt-0">
		<small class="mt-0"
			>The greating was a first person but the rest in third person.
			\_(ツ)_/</small
		>
	</p>

	<p>
		Over the past 5 years Matt has contributed to AdRocket<sup>&trade;</sup>
		app and WebFronts<sup>&reg;</sup> eCommerce platform.
	</p>
	<p>
		AdRocket<sup>&trade;</sup> is an application for creating and placing
		Google and Facebook campaigns, generating reports with interactive
		charts, and a whole wealth of other features. As part of the AdRocket<sup
			>&trade;</sup
		> development team he is responsible for creating interactive mock-ups with
		Figma, implementing the new UI with Vue and Vuex, creating custom Vue components,
		documentation and unit testing.
	</p>
	<p>
		His work on WebFronts<sup>&reg;</sup> had a lot of variety. From implementing
		Wells Fargo and Synchrony payment/financing integration at checkout, adding
		Google Analytics 4 and global site tags on a thousand plus retailer sites,
		to developing a system to display product and pricing information on electronic
		shelf labels (FlashTags).
	</p>
	<p>
		Prior to becoming a front-end web developer Matt worked as a graphic
		designer, 4 years, creating both digital and print ads for car
		dealerships. He even had opportunities to design window wraps and
		billboards.
	</p>
</section>

<style>
	.splash {
		display: grid;
		grid-template-columns: repeat(4, calc(25vw - (1rem / 4)));
		font-size: 6vw;
		text-transform: uppercase;
	}

	@media (min-width: 500px) {
		.splash {
			grid-template-columns: repeat(4, calc(25vw - (7rem / 4)));
		}
	}

	@media (min-width: 1500px) {
		.splash {
			grid-template-columns: repeat(4, 1fr);
			font-size: 90px;
		}
	}

	.headshot {
		position: relative;
		grid-column: 1 / span 2;
		grid-row: 1 / span 2;
	}

	.headshot img {
		width: 100%;
	}

	.home-page-title {
		grid-column: 2 / span 3;
		grid-row: 1 / span 1;
		justify-self: stretch;
		align-self: end;
		margin: 0;
		text-align: right;
		font-size: inherit;
		font-weight: 900;
		color: var(--teal);
	}

	.sub-title {
		display: grid;
		grid-template-columns: repeat(3, calc(25vw - (2rem / 4)));
		grid-column: 2 / span 3;
		grid-row: 2;
		justify-self: stretch;
		align-self: start;
		font-size: 1.28em;
		font-weight: 300;
		margin: 0;
		line-height: 0.8;
		font-family: "Ostrich Sans";
	}

	@media (min-width: 500px) {
		.sub-title {
			grid-template-columns: repeat(3, calc(25vw - (7rem / 4)));
		}
	}

	@media (min-width: 1200px) {
		.sub-title {
			font-family: "Ostrich Sans Inline";
		}
	}

	@media (min-width: 1500px) {
		.sub-title {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	.sub-title .designer {
		grid-column: 2 / span 2;
		grid-row: 1;
		justify-self: end;
		text-align: right;
		color: var(--magenta);
	}

	.sub-title .ampersand {
		grid-column: 2 / span 3;
		grid-row: 1 / span 2;
		width: 55%;
		justify-self: center;
		margin: 6vw 14vw 6vw 0;
	}

	@media (min-width: 1500px) {
		.sub-title .ampersand {
			margin: 90px 210px 90px 0;
		}
	}

	.sub-title .developer {
		grid-column: 1 / span 2;
		grid-row: 2;
		justify-self: center;
		align-self: end;
		color: white;
		margin-left: 5vw;
	}

	@media (min-width: 1500px) {
		.sub-title .developer {
			margin-left: 75px;
		}
	}

	.sub-title .developer span {
		font-size: 0.4em;
		font-family: "Ostrich Sans";
	}

	#rectSolid {
		grid-column: 2 / span 2;
		grid-row: 1 / span 2;
		z-index: -1;
		position: absolute;
		background-color: var(--magenta);
		width: 38vw;
		height: 75vw;
		transform: translateY(17.5vw) translateX(22vw) rotate(-67deg);
		box-shadow: 1.1vw 2.93vw 0 white, 1.46vw 2.56vw 0 var(--teal),
			2.56vw 5.86vw 0 white, 2.93vw 5.49vw 0 var(--teal);
	}

	@media (min-width: 1500px) {
		#rectSolid {
			width: 570px;
			height: 1125px;
			transform: matrix(
				0.390731,
				-0.920505,
				0.920505,
				0.390731,
				366.96,
				291.9
			);
			box-shadow: white 16.5px 43.95px 0px 0px,
				var(--teal) 21.9px 38.4px 0px 0px, white 38.4px 87.9px 0px 0px,
				var(--teal) 43.95px 82.35px 0px 0px;
		}
	}

	.about {
		background-color: whitesmoke;
		padding: 1rem;
	}

	@media (min-width: 600px) {
		.about {
			width: 55vw;
			max-width: 900px;
			padding: 2rem;
		}
	}
</style>
