<script lang="ts">
	export let tag: string = "div";
	export let classList: string = "";
	export let columnCount: string = "2";
</script>

<svelte:element
	this={tag}
	class="multi-column {classList}"
	style:column-count={columnCount}
>
	<slot />
</svelte:element>

<style>
	.multi-column {
		column-width: 400px;
		column-gap: 3rem;
	}
</style>
