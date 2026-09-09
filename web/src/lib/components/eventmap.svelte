<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import maplibregl from 'maplibre-gl';
	import pkg from 'maplibre-gl';
	const { LngLat, LngLatBounds } = pkg;
	import 'maplibre-gl/dist/maplibre-gl.css';
	import type { Event } from '$lib/types';

	let { events }: { events: Event[] } = $props();

	let map: maplibregl.Map;
	let mapContainer: HTMLDivElement;

	onMount(() => {
		map = new maplibregl.Map({
			container: mapContainer,
			style: 'https://tiles.openfreemap.org/styles/liberty',
			center: [-69.2428, 45.3695],
			zoom: 6.5,
			maxBounds: new LngLatBounds(
				new LngLat(-71.279297, 42.875964),
				new LngLat(-66.708984, 47.546872)
			)
		});

		map.on('load', () => {
			map.addSource('events', {
				type: 'geojson',
				data: {
					type: 'FeatureCollection',
					features: events.map((event) => ({
						type: 'Feature',
						geometry: {
							type: 'Point',
							coordinates: [event.geolocation?.lon, event.geolocation?.lat]
						},
						properties: {
							id: event.id,
							title: event.name
						}
					}))
				}
			});

			map.addLayer({
				id: 'event-points',
				type: 'circle',
				source: 'events',
				paint: {
					'circle-radius': 7,
					'circle-color': '#e85d04',
					'circle-stroke-color': '#fff',
					'circle-stroke-width': 2
				}
			});
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
		aspect-ratio: 0.7;
	}
</style>
