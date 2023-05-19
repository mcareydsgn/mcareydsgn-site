<script>
	import Icons from "../lib/components/icons.svelte";
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="splash section-style-1">
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
<section class="grid grid-column-auto section-style-1 pb-dynamic">
	<div class="about">
		<h3 class="mb-0">Hi, Nice To Meet You!</h3>
		<p class="mt-0">
			<small class="mt-0"
				>The greeting was in first person but the rest in third person.
				\_(ツ)_/</small
			>
		</p>

		<p>
			Matthew Carey is a self-starting front-end web developer who
			specializes in intuitive user interfaces (UI) for web applications.
			His ability to do the heavy lifting of modern web development and
			design UI from a user perspective, sets him apart from other
			developers and designers. Over the past 5 years he has contributed
			to AdRocket<sup>&trade;</sup>
			app and WebFronts<sup>&reg;</sup> eCommerce platform.
		</p>
		<p>
			AdRocket<sup>&trade;</sup> is an application for creating and
			placing Google and Facebook campaigns, generating reports with
			interactive charts, and a whole wealth of other features. As part of
			the AdRocket<sup>&trade;</sup> development team he is responsible for
			creating interactive mock-ups with Figma, implementing the new UI with
			Vue and Vuex, creating custom Vue components, documentation and unit
			testing.
		</p>
		<p>
			His work on WebFronts<sup>&reg;</sup> had a lot of variety. From implementing
			Wells Fargo and Synchrony payment/financing integration at checkout,
			adding Google Analytics 4 and global site tags on a thousand plus retailer
			sites, to developing a system to display product and pricing information
			on electronic shelf labels (FlashTags).
		</p>
		<p>
			Prior to becoming a front-end web developer Matt worked as a graphic
			designer, 4 years, creating both digital and print ads for car
			dealerships. He even had opportunities to design window wraps and
			billboards.
		</p>
	</div>
	<div class="tech-container align-self-end">
		<h3>Favorite Technologies & Tools</h3>
		<ul class="favorite-tech no-list-style">
			<li><Icons name="JavaScript" /></li>
			<li><Icons name="HTML" /></li>
			<li><Icons name="CSS" /></li>
			<li><Icons name="Vue" /></li>
			<li><Icons name="Vite" /></li>
			<li><Icons name="VS Code" /></li>
			<li><Icons name="Illustrator" /></li>
			<li><Icons name="Figma" /></li>
			<li><Icons name="Chart JS" /></li>
		</ul>
		<p class="small-title mb-0">Professional Experience With:</p>
		<ul class="other-tech no-list-style">
			<li>Git,</li>
			<li>SourceTree,</li>
			<li>Eclipse,</li>
			<li>Photoshop,</li>
			<li>XD,</li>
			<li>Cypress,</li>
			<li>RegEx,</li>
			<li>Jest,</li>
			<li>Alpine JS,</li>
			<li>Svelte,</li>
			<li>Vue Styleguidist,</li>
			<li>Apache ECharts,</li>
			<li>GTM,</li>
			<li>GA4,</li>
			<li>AWS Amplify,</li>
			<li>AWS Lambda,</li>
			<li>AWS API Gateway</li>
		</ul>
	</div>
</section>
<section class="portfolio px-dynamic">
	<div class="section-style-1">
		<h3>Telling a Story With Reports</h3>
	</div>
</section>
<section class="section-style-1">
	<h3>Utilizing User Experience Feedback</h3>
</section>
<section class="portfolio px-dynamic">
	<div class="section-style-1">
		<h3>User Interface Design to Enhance Productivity</h3>
	</div>
</section>
<section class="section-style-1">
	<h3>Force Multiplier for the Team</h3>
</section>
<section class="portfolio px-dynamic">
	<div class="section-style-1">
		<h3>Technical Accomplishments (TLDR)</h3>
	</div>
</section>

<style>
	.splash {
		display: grid;
		grid-template-columns: repeat(4, calc(25vw - (1rem / 4)));
		font-size: 5.4vw;
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
			font-size: 81px;
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
		font-family: "Ostrich Sans", sans-serif;
	}

	@media (min-width: 500px) {
		.sub-title {
			grid-template-columns: repeat(3, calc(25vw - (7rem / 4)));
		}
	}

	@media (min-width: 1200px) {
		.sub-title {
			font-family: "Ostrich Sans Inline", sans-serif;
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
		font-family: "Ostrich Sans", sans-serif;
	}

	#rectSolid {
		grid-column: 2 / span 2;
		grid-row: 1 / span 2;
		z-index: -1;
		position: absolute;

		background-image: linear-gradient(
			253deg,
			var(--magenta) 18%,
			var(--dark-magenta)
		);
		width: 38vw;
		height: 68vw; /**75vw*/
		transform: translateY(18.5vw) translateX(22vw) rotate(-67deg);
		/* transform: translateY(17.5vw) translateX(22vw) rotate(-67deg); */
		box-shadow: 1.1vw 2.93vw 0 var(--warm-white),
			1.46vw 2.56vw 0 var(--teal), 2.56vw 5.86vw 0 var(--warm-white),
			2.93vw 5.49vw 0 var(--teal);
	}

	@media (min-width: 1500px) {
		#rectSolid {
			width: 570px;
			height: 1020px;
			transform: matrix(
				0.390731,
				-0.920505,
				0.920505,
				0.390731,
				330,
				277.5
			);
			box-shadow: var(--warm-white) 16.5px 43.95px 0px 0px,
				var(--teal) 21.9px 38.4px 0px 0px,
				var(--warm-white) 38.4px 87.9px 0px 0px,
				var(--teal) 43.95px 82.35px 0px 0px;
		}
	}

	.about {
		background-color: var(--light-teal);
		padding: 1rem;
		grid-column: 1 / -1;
	}
	.tech-container {
		grid-column: 1 /-1;
	}

	@media (min-width: 900px) {
		.about {
			grid-column: 1 / span 2;
			max-width: 900px;
			padding: 2rem;
		}
		.tech-container {
			grid-column: auto;
		}
	}

	.favorite-tech,
	.other-tech {
		display: flex;
		flex-wrap: wrap;
	}

	.favorite-tech {
		margin-bottom: -1rem;
	}

	.other-tech {
		font-size: 0.8rem;
	}
	.small-title {
		font-size: 0.8rem;
		font-weight: 700;
	}
	.favorite-tech li {
		padding: 0 1rem 1rem 0;
	}

	.other-tech li {
		margin-right: 0.5rem;
	}

	.portfolio {
		background-color: var(--tan);
		min-height: 50vh;
	}
</style>
