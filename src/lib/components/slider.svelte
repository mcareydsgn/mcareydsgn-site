<script lang="ts">
	import VideoPlayer from "./video-player.svelte";
	interface Slide {
		content_type: string;
		src: string;
		title: string;
		alt: string;
		aspect_ratio: string;
	}

	let current_index = 0;
	export let slides: Slide[] = [];
	let slide: HTMLDivElement;

	$: slider_aspect_ratio = slides[current_index].aspect_ratio;
	$: disable_prev = current_index === 0;
	$: disable_next = current_index >= slides.length - 1;

	let slide_containers: any = [];

	function scrollSlide(
		top: number = 0,
		left: number = slide_containers[current_index].offsetLeft
	) {
		slide.scrollTo({
			top,
			left,
			behavior: "smooth",
		});
	}

	function next() {
		if (current_index >= slides.length) {
			return;
		}
		current_index = current_index + 1;
		scrollSlide();
	}
	function prev() {
		if (current_index === 0) {
			return;
		}
		current_index = current_index - 1;
		scrollSlide();
	}
</script>

<button on:click={prev} disabled={disable_prev}> prev </button>
<button on:click={next} disabled={disable_next}> next </button>
<!-- style="aspect-ratio:{slider_aspect_ratio};" -->
<div
	class="slider"
	bind:this={slide}
	style="aspect-ratio:{slider_aspect_ratio};"
>
	{#each slides as slide, i}
		<div class="slide-container" bind:this={slide_containers[i]}>
			<VideoPlayer src={slide.src} />
		</div>
	{/each}
</div>

<style>
	.slider {
		display: flex;
		width: 100%;
		overflow: hidden;
		transition: aspect-ratio 0.3s ease-in;
	}

	.slide-container {
		width: 100%;
		flex-shrink: 0;
	}
</style>
