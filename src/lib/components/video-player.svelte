<script lang="ts">
	import Icons from "./icons.svelte";

	export let src: string = "";
	export let container_class_list: string = "";

	let video_element: HTMLVideoElement;
	let is_video_playing: Boolean = false;
	let is_video_mutted: Boolean = false;

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
</script>

<div class={container_class_list}>
	<!-- svelte-ignore a11y-media-has-caption -->
	<video bind:this={video_element}>
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
		<li>
			<button on:click={muteToggle}>
				{#if is_video_mutted}
					<Icons name="mute" icon_library_name="heroicons" />
				{:else}
					<Icons name="volume" icon_library_name="heroicons" />
				{/if}
			</button>
			<input type="range" id="volume" name="volume" min="0" max="100" />
		</li>
		<li>FullScreen</li>
	</menu>
</div>

<style>
	menu {
		display: flex;
	}
</style>
