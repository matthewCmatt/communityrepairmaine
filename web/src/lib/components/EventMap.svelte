<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import * as maplibregl from 'maplibre-gl';
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
			maxBounds: new maplibregl.LngLatBounds(
				new maplibregl.LngLat(-71.279297, 42.875964),
				new maplibregl.LngLat(-66.708984, 47.546872)
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
					'circle-color': '#823038',
					'circle-stroke-color': '#fff',
					'circle-stroke-width': 2
				}
			});
		});

		map.on('sourcedata', async (e) => {
			if (e.sourceId !== 'events' || !map.getSource('events')?.loaded()) {
				return;
			}

			const source = map.getSource<maplibregl.GeoJSONSource>('events');
			const bounds = (await source?.getBounds()) || new maplibregl.LngLatBounds();
			map.fitBounds(bounds, { padding: 100 });
		});
	});

	onDestroy(() => {
		map?.remove();
	});
</script>

<div class="map" bind:this={mapContainer}></div>

<style>
	.map {
		width: 100%;
		aspect-ratio: 0.7;
		border-radius: 10px;
	}

	.map :global(.maplibregl-canvas-container),
	.map :global(.maplibregl-canvas) {
		border-radius: 10px;
	}
</style>
