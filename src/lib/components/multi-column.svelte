<script lang="ts">
	export let tag: string = "div";
	export let class_list: string = "";
	export let column_count: string = "2";
</script>

<svelte:element
	this={tag}
	class="multi-column {class_list}"
	style:column-count={column_count}
>
	<slot />
</svelte:element>

<style>
	.multi-column {
		column-width: 400px;
		column-gap: 3rem;
	}
</style>
