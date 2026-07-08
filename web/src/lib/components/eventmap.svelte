<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import maplibregl from 'maplibre-gl';
	import 'maplibre-gl/dist/maplibre-gl.css';

	let map: maplibregl.Map;
	let mapContainer: HTMLDivElement;

	onMount(() => {
		map = new maplibregl.Map({
			container: mapContainer,
			style: `https://demotiles.maplibre.org/globe.json`,
			center: [-69.2428, 45.3695],
			zoom: 6
		});
	});

	onDestroy(() => {
		map?.remove();
	});
</script>

<div bind:this={mapContainer}></div>

<style>
	div {
		width: 100%;
		aspect-ratio: 1;
	}
</style>
