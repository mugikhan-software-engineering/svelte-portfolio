<script lang="ts">
	import { fly } from 'svelte/transition';

	export let title: string;
	export let assetPath: string;
	export let isVisible: boolean;
	export let delay: number;
	export let xOffset: number;
</script>

{#if isVisible}
	<div
		class="card variant-ghost-primary text-token flex w-56 flex-col items-center justify-center p-8 md:w-60 md:p-6"
		transition:fly={{ delay: delay, duration: 750, x: xOffset, opacity: 0 }}
	>
		<img src={assetPath} alt="service" class="h-24 w-24 md:h-40 md:w-40" />
		<footer class="card-footer">
			<p
				class="leading-sm lg:leading-xl sm:text-md xs:text-md text-token mt-6 w-full text-center text-lg lg:mt-2"
			>
				{title}
			</p>
		</footer>
	</div>
{/if}
