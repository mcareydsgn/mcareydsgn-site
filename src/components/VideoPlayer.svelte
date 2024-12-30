<script lang="ts">
	import Icons from "./icons.svelte";
	import { onMount } from "svelte";

	export let src: string = "";
	export let container_class_list: string = "";
	export let style: string = "";

	let video_element: HTMLVideoElement;
	let seekbar_element: HTMLInputElement;
	let is_video_playing: Boolean = false;
	let is_video_mutted: Boolean = false;

	let debounce: any;

	function playVideoToggle() {
		if (video_element.paused || video_element.ended) {
			is_video_playing = true;
			video_element.play();
		} else {
			video_element.pause();
			is_video_playing = false;
		}
	}

	function muteToggle() {
		video_element.muted = !video_element.muted;
		is_video_mutted = video_element.muted;
	}

	function fullscreen() {
		if (document.fullscreenElement !== null) {
			// The document is in fullscreen mode
			document.exitFullscreen();
		} else {
			// The document is not in fullscreen mode
			video_element.requestFullscreen();
		}
	}

	onMount(() => {
		seekbar_element.max = video_element.duration.toString();
		// console.log(video_element.duration);

		video_element.addEventListener("timeupdate", () => {
			seekbar_element.value = video_element.currentTime.toString();
		});
		video_element.addEventListener("ended", () => {
			is_video_playing = false;
		});

		seekbar_element.addEventListener("input", function () {
			video_element.currentTime = Number(this.value);
			is_video_playing = true;
			video_element.play();
		});
	});
</script>

<div class={container_class_list} {style}>
	<!-- svelte-ignore a11y-media-has-caption -->
	<video
		on:click={playVideoToggle}
		bind:this={video_element}
		preload="metadata"
		class={is_video_playing ? "playing" : ""}
	>
		<source {src} type="video/mp4" />

		<!-- <track kind="captions" /> -->
	</video>
	<menu class="list-style-none">
		<li>
			<button on:click={playVideoToggle}>
				{#if is_video_playing}
					<Icons name="paused" icon_library_name="heroicons" />
				{:else}
					<Icons name="play" icon_library_name="heroicons" />
				{/if}
			</button>
		</li>
		<li class="seeker-container">
			<input
				bind:this={seekbar_element}
				type="range"
				id="seeker"
				name="seeker"
				min="0"
				step="0.1"
				value="0"
			/>
		</li>
		<li>
			<button on:click={muteToggle}>
				{#if is_video_mutted}
					<Icons name="mute" icon_library_name="heroicons" />
				{:else}
					<Icons name="volume" icon_library_name="heroicons" />
				{/if}
			</button>
			<!-- <input
				type="range"
				id="volume"
				name="volume"
				min="0"
				max="100"
				step="0.5"
				value="45"
			/> -->
		</li>
		<li>
			<button on:click={fullscreen}
				><Icons name="expand" icon_library_name="heroicons" /></button
			>
		</li>
	</menu>
</div>

<style>
	/* video {
		cursor: url("/icons/play-cursor-circle.svg") 0 0, pointer;
	}

	video.playing {
		cursor: url("/icons/pause-cursor-circle.svg") 0 0, pointer;
	} */

	menu {
		display: flex;
		flex-wrap: nowrap;
		background-color: var(--dark-purple);
		padding: 0.5rem;
		gap: 0.5rem;
		margin: 0;
	}

	menu li {
		display: flex;
	}

	menu .seeker-container {
		flex-grow: 1;
	}

	input[type="range"] {
		width: 100%;
	}

	menu button {
		background-color: transparent;
		outline: none;
		border: none;
		color: white;
		padding: 0;
		cursor: pointer;
	}
</style>
