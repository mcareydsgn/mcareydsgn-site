<script>
	import Icons from "../../lib/components/icons.svelte";
	import MultiColumn from "../../lib/components/multi-column.svelte";
	import VideoPlayer from "../../lib/components/video-player.svelte";
	import Slider from "../../lib/components/slider.svelte";

	let videos = [
		{
			content_type: "video",
			src: "/videos/bubblechart.mp4",
			alt: "",
			title: "",
			aspect_ratio: "1404/596",
		},
		{
			content_type: "video",
			src: "/videos/treemapchart.mp4",
			alt: "",
			title: "",
			aspect_ratio: "1404/702",
		},
		{
			content_type: "video",
			src: "/videos/gnattchart.mp4",
			alt: "",
			title: "",
			aspect_ratio: "1404/865",
		},
		{
			content_type: "video",
			src: "/videos/drilldowntable.mp4",
			alt: "",
			title: "",
			aspect_ratio: "1404/1111",
		},
	];
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<header>
	<h1>Musings of a Front End Dev</h1>
</header>
<article class="section-style-1 px-dynamic">
	<MultiColumn tag="div" class_list="container-max-width" column_count="2">
		<h2>Telling a Story With Reports</h2>
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
		<h3>Goals</h3>
		<ul>
			<li>Demonstrate the value of our service.</li>
			<li>Show our retailers the info they care about the most.</li>
			<li>
				New ways to present data that tell a specific story about their
				ad metrics.
			</li>
			<li>Build upon what has worked in the past.</li>
		</ul>

		<h3>Approach</h3>
		<p>
			When designing the report mock up I took some inspiration from the
			concept of the inverted pyramid often used in journalism. Present
			the most newsworthy info first, followed by important details, and
			the less important details that are nice to know for the people who
			are deeply invested.
		</p>
		<h3 class="break-before-column">Data Organization</h3>
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
		<h3>Engaging Charts</h3>
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
</article>
<article class="container-max-width px-dynamic">
	<h2>Utilizing User Experience Feedback</h2>
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
	<h3>Creating a Process</h3>
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
	<h3>Reception</h3>
	<p>
		The response was amazing, it created a new way for our users to express
		issues, bugs, or features that would improve their job. The best part
		was that once they saw that the development team actually fixed or
		released a requested feature they became more invested and were more
		open to asking for improvements. It changed the culture as other teams
		started to adapt the process.
	</p>
</article>

<style>
</style>
