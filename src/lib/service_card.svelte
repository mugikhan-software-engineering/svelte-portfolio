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
		class="card p-6 mx-8 my-8 h-[250px] w-[250px] md:h-[350px] md:w-[300px] flex flex-col justify-center items-center variant-ghost-primary card-hover text-token"
		transition:fly={{ delay: delay, duration: 750, x: xOffset, opacity: 0 }}
	>
		<img src={assetPath} alt="service" class="h-[100px] w-[100px] md:h-[150px] md:w-[150px]" />
		<footer class="card-footer">
			<p
				class="sm:text-[26px] xs:text-[24px] text-[18px] leading-[25px] lg:leading-[40px] mt-6 lg:mt-2 w-full text-center text-token"
			>
				{title}
			</p>
		</footer>
	</div>
{/if}
