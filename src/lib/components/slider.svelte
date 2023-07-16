<script lang="ts">
	interface Slide {
		content_type: string;
		src: string;
		title: string;
		alt: string;
	}
	export let slides: Slide[] = [];
</script>

<div class="slider">
	{#each slides as slide}
		<div class="slide-container">
			{#if slide.content_type === "video"}
				<video controls style="aspect-ratio:3/2;">
					<source src={slide.src} type="video/mp4" />
					<track kind="captions" />
				</video>
			{/if}
		</div>
	{/each}
</div>
