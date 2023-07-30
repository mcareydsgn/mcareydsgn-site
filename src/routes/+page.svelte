<script>
	import Icons from "../lib/components/icons.svelte";
	import MultiColumn from "../lib/components/multi-column.svelte";
	import VideoPlayer from "../lib/components/video-player.svelte";
	import Slider from "../lib/components/slider.svelte";

	let videos = [
		{
			content_type: "video",
			src: "/videos/bubblechart.mp4",
			alt: "",
			title: "",
			aspect_ratio: "500/193",
		},
		{
			content_type: "video",
			src: "/videos/treemapchart.mp4",
			alt: "",
			title: "",
			aspect_ratio: "704/325",
		},
		{
			content_type: "video",
			src: "/videos/gnattchart.mp4",
			alt: "",
			title: "",
			aspect_ratio: "168/97",
		},
		{
			content_type: "video",
			src: "/videos/drilldowntable.mp4",
			alt: "",
			title: "",
			aspect_ratio: "692/521",
		},
	];
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="splash container-max-width">
	<picture class="headshot">
		<img src="/headshot.png" alt="" />
	</picture>

	<h1 class="home-page-title">Matthew Carey</h1>
	<h2 class="sub-title">
		<span class="designer">A Creative<br />Designer</span>
		<img src="/ampersand.svg" alt="" class="ampersand" />
		<span class="developer">
			<span>Front- End</span><br />
			Software<br /> Developer</span
		>
	</h2>
	<div id="rectSolid" />
</section>
<section class="grid grid-column-auto container-max-width pb-dynamic">
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
		<ul class="favorite-tech list-style-none">
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
		<ul class="other-tech list-style-none">
			<li>Git,</li>
			<li>SourceTree,</li>
			<li>Eclipse,</li>
			<li>Photoshop,</li>
			<li>XD,</li>
			<li>Cypress,</li>
			<li>RegEx,</li>
			<li>Jest,</li>
			<li>Webpack,</li>
			<li>Alpine JS,</li>
			<li>Svelte,</li>
			<li>Vue Styleguidist,</li>
			<li>Apache ECharts,</li>
			<li>GTM,</li>
			<li>GA4</li>
		</ul>
	</div>
</section>
<section class="section-style-1 px-dynamic">
	<MultiColumn tag="div" class_list="container-max-width" column_count="2">
		<h3>Telling a Story With Reports</h3>
		<p>
			Marketing campaigns with Google and Facebook come with a large
			footprint of data. There are many types of metrics that go into a
			performance report, such as spend, clicks, impressions, reach, and a
			whole suite of site and ad conversions. It is a challenging problem
			to solve both technically and visually. The asynchronous nature of
			waiting or data from two separate ad platforms requires dynamic
			updates as data streams in and managing how the page looks while
			retriving and displaying all that data. It is very easy for the
			report to turn into an endless amount of unrully tables.
		</p>
		<p>
			A recent refresh of our ad platform performance reports provided an
			opportunity to rethink how we can present more data that
			communicates a return on investiment for the retailers using our
			service.
		</p>
		<h4>Goals</h4>
		<ul>
			<li>Demonstrate the value of our service.</li>
			<li>Show our retailers the info they care about the most.</li>
			<li>
				New ways to present data that tell a specific story about their
				ad metrics.
			</li>
			<li>Build upon what has worked in the past.</li>
		</ul>

		<h4>Approach</h4>
		<p>
			When designing the report mock up I took some inspiration from the
			concept of the inverted pyramid often used in journalism. Present
			the most newsworthy info first, followed by important details, and
			the less important details that are nice to know for the people who
			are deeply invested.
		</p>
		<h4 class="break-before-column">Data Organization</h4>
		<p>
			The page itself was broken into several sections with report
			highlights being at the top and it would get progressivly more
			detailed. To avoid an overwelming amount of data being shown at once
			I created a custom tab component with dynamic named slots passsed in
			as prop array. This would allow sections to be created on the fly
			depending on when data was loaded. One thing many tab components in
			popular UI libraries cause the to content jump up and down between
			differnt tabs because the height of each tab varies based on conent.
			One way to get around this was to get the content height after it
			was loaded and maintain its value in an array. As a users switched
			be tabs and the index changed the <code>max-height</code>. CSS
			transitions would allow it smoothly animate between the two values
			and reduce the otherwise instant content jump.
		</p>
		<VideoPlayer src="/videos/tabs.mp4" style="aspect-ratio:3/2;" />
	</MultiColumn>
	<div class="container-max-width">
		<h4>Engaging Charts</h4>
		<p>
			As a user moved from tab to tab they are presented with an engaging
			chart as well as tables for detailed info. The charts are vital to
			quickly show and compare metrics to spend or pefomance by device.
			One of the newest charts I am most proud of is a bubble scatter
			chart that shows a specific metric like clicks, impressions, or
			purchase to the spend of all the campaign during the report time
			frame. It was a great way to show how the amount they spent for a
			campaing impacts its perfomances. Users can select a metric to
			compare to the campaing spend. The challenging part was handling ad
			platform data as it came in at different times and it was further
			complicated by Google and Facebook have some platform exclusive
			metrics. In a nutshell I used a Vue computed property to dynamically
			build mertics options based on the available platform metrics. I
			also used a computed property to dynamically format the data for the
			chart component based on the user's selected options. This required
			extensive knowledge of Vue's reactivity, JavaScript array methods:
			map, filter, reduce, from, as well as the object from entries
			method. In total there were three separate sources of data. Google
			key metrics, Google conversions, and Facebook metrics.
		</p>
		<p>
			The peformance report page is full of custom components like a gnatt
			chart that utilized CSS grid to show when campaigns started and
			ended in comparison to each other, and a drill down table with
			breadcrumb navigation that would swap between tables when a user
			clicked on a table row.
		</p>
		<Slider slides={videos} />
		<small
			>Back-end Collaborators: Avery Gonzales, Andrew Towe, Preston
			McCumber
		</small>
	</div>
</section>
<section class="container-max-width">
	<h3>Utilizing User Experience Feedback</h3>
	<p>
		I have always thought of my role as a front-end developer as a support
		role. The applications I have developed were used internally by other
		employees and clients. If our users encountered friction that got in the
		way of doing their job then it was my responsibility to addresss it. I
		found that the majority of people just accept it as fact and continue to
		be frustrated. I had a co-worker tell me about a modal that would close
		on background click losing all of values they inputed in an input. This
		happened frequently as the accidently clicked on the background. They
		put up with it for years and I told them I could fix it app wide in an
		hour. After hearing this I created a smart goal to improve user
		satisfaction and hopefully open a dialog with our users to fix any
		issue.
	</p>
	<h4>Creating a Process</h4>
	<p>
		If you want anything to stick you must create a good process that makes
		it easy for others to adapt and apply to their needs.
	</p>
	<ul>
		<li>
			Created documentation that covered the dos and dont's of creating
			UX/UI survey.
		</li>
		<li>
			Google Form templates with standard questions to set a common
			baseline.
		</li>
		<li>
			Automations to create a follow up story when a new page, feature, or
			change to a workflow was deployed.
		</li>
	</ul>
	<h4>Reception</h4>
	<p>
		The response was amazing, it created a new way for our users to express
		issues, bugs, or features that would improve their job. The best part
		was that once they saw that the development team actually fixed or
		released a requested feature they became more invested and were more
		open to asking for improvements. It changed the culture as other teams
		started to adapt the process.
	</p>
	<img src="https://placehold.co/600x400" alt="Animated SVG" />
</section>
<section class="container-max-width">
	<h3>
		Lessons Learned: Architecting Component Libraries & State Management.
	</h3>
</section>
<section class="section-style-1 px-dynamic">
	<div class="container-max-width">
		<h3>Technical Accomplishments (TLDR)</h3>
		<ul>
			<li>
				AdRocket<sup>&trade;</sup>, an application that allows large
				scale management of Google and Facebook advertising campaigns.
				<ul>
					<li>UI design and development direction of the app.</li>
					<li>
						Vue component paradigm and state management of AdRocket
						App.
					</li>
					<li>
						Utilized Vue Styleguidist to create autogenerated
						Front-End documentation based on Vue component comments
						with working examples.
					</li>
					<li>UX/UI Survey</li>
				</ul>
			</li>
			<li>
				WebFronts<sup>&reg;</sup>, an eCommerce platform for thousands
				of independant appliance and furniture retailers.
				<ul>
					<li>
						Depolyed Global Site Tag (GA4, AdWords, UA)
						implementation to 1,000 plus retailer sites.
					</li>
					<li>
						Two years later, reworked Google and Facebook Analytics
						to use GTM utilizing event delegation.
					</li>
					<li>
						Added Wells Fargo and Synchrony payment/financing
						options for checkout on WebFronts eCommmerce platform.
					</li>
				</ul>
			</li>
			<li>
				FlashTags, an application that manages & integrates retailer
				product pricing and data with physical electronic shelf lables
				inside stores. (Similar technology to the LCD or eInk price tags
				seen at Best Buy and other stores.)
				<ul>
					<li>Designed the FlashTags logo</li>
					<li>
						Designed and built the App with fellow Front-End
						developer Nick Randall.
					</li>
					<li>
						Developed a way to convert dynamic HTML tag layouts to
						PNG that would be transmitted to the physical tag.
					</li>
				</ul>
			</li>
		</ul>
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
		width: 51%;
		justify-self: center;
		margin: 6vw 0;
		padding: 1rem;
	}

	@media (min-width: 1500px) {
		.sub-title .ampersand {
			margin: 90px 0;
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
		gap: 0 0.5rem;
	}

	.favorite-tech {
		gap: 1rem;
	}

	.small-title,
	.other-tech {
		font-size: var(--font-size-small);
	}
	.small-title {
		font-weight: 700;
	}
</style>
