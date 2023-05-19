<script>
	import Header from "./Header.svelte";
	import "./styles.css";
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>
	<footer>
		<p>
			<small
				>Copyright Matthew Carey 2023 || WebFronts<sup>&reg;</sup>,
				AdRocket<sup>&trade;</sup> are owned by Retailer Web Services LLC.
				All logos and materials not explicitly said to be created by Matthew
				Carey are owned by their respective companies.
			</small>
		</p>
	</footer>
</div>

<style>
</style>
