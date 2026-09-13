<script lang="ts">
	import { onMount, onDestroy, mount, unmount } from 'svelte';
	import * as maplibregl from 'maplibre-gl';
	import 'maplibre-gl/dist/maplibre-gl.css';
	import type { Event } from '$lib/types';
	import EventMapIcon from '$lib/components/EventMapIcon.svelte';

	import workerUrl from 'maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url';
	maplibregl.setWorkerUrl(workerUrl);

	let { events }: { events: Event[] } = $props();

	let map: maplibregl.Map;
	let mapContainer: HTMLDivElement;
	let mountedInstances: ReturnType<typeof mount>[] = [];
	let mapMarkers: maplibregl.Marker[] = [];

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

		map.once('load', () => {
			const bounds = new maplibregl.LngLatBounds();
			events.forEach((event) => {
				if (!event.geolocation) return;

				const el = document.createElement('div');

				const instance = mount(EventMapIcon, {
					target: el,
					props: { event: event }
				});
				mountedInstances.push(instance);

				const marker = new maplibregl.Marker({ element: el, anchor: 'bottom' })
					.setLngLat(new maplibregl.LngLat(event.geolocation.lon, event.geolocation.lat))
					.addTo(map);

				mapMarkers.push(marker);

				bounds.extend(new maplibregl.LngLat(event.geolocation.lon, event.geolocation.lat));
			});
			map.fitBounds(bounds, {
				padding: 100,
				duration: 0
			});
		});
	});

	onDestroy(() => {
		mountedInstances.forEach((instance) => unmount(instance));
		mapMarkers.forEach((marker) => marker.remove());
		map?.remove();
	});
</script>

<div class="map" bind:this={mapContainer}></div>

<style>
	.map {
		width: 100%;
		aspect-ratio: 0.6885;
		border-radius: 1rem;
	}

	.map :global(.maplibregl-canvas-container),
	.map :global(.maplibregl-canvas) {
		border-radius: 1rem;
	}
</style>
