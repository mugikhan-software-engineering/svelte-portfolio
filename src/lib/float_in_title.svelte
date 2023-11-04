<script lang="ts">
	import { fly } from 'svelte/transition';

	export let title: string;
	export let subtitle: string;
	export let isVisible: boolean;
	export let yOffset: number;
</script>

{#if isVisible}
	<div class="flex flex-col px-5" transition:fly={{ duration: 750, y: yOffset, opacity: 0 }}>
		<h5 class="h5 mb-3 opacity-75">{title}</h5>
		<h1 class="h1">{subtitle}</h1>
	</div>
{/if}
