<script lang="ts">
	import TechContainer from './components/tech_container.svelte';

	import flutter from '$lib/assets/flutter.png';
	import javascript from '$lib/assets/javascript.png';
	import ts from '$lib/assets/ts.png';
	import aws from '$lib/assets/aws.png';
	import sqlite from '$lib/assets/sqlite.png';
	import svelte from '$lib/assets/svelte.png';
	import html from '$lib/assets/html.png';
	import css from '$lib/assets/css3.png';
	import android from '$lib/assets/android.png';
	import swift from '$lib/assets/swift.png';
</script>

<div class="flex w-full flex-row flex-wrap place-content-center items-center">
	<div
		class="flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto scroll-smooth px-4 py-10"
	>
		<svelte:component this={TechContainer} imageUrl={flutter} imageAlt={'Flutter'} />
		<svelte:component this={TechContainer} imageUrl={android} imageAlt={'Android'} />
		<svelte:component this={TechContainer} imageUrl={swift} imageAlt={'Swift'} />
		<svelte:component this={TechContainer} imageUrl={svelte} imageAlt={'Svelte'} />
		<svelte:component this={TechContainer} imageUrl={ts} imageAlt={'TypeScript'} />
		<svelte:component this={TechContainer} imageUrl={javascript} imageAlt={'JavaScript'} />
		<svelte:component this={TechContainer} imageUrl={html} imageAlt={'HTML5'} />
		<svelte:component this={TechContainer} imageUrl={css} imageAlt={'CSS3'} />
		<svelte:component this={TechContainer} imageUrl={aws} imageAlt={'AWS'} />
		<svelte:component this={TechContainer} imageUrl={sqlite} imageAlt={'SQLite'} />
	</div>
</div>
