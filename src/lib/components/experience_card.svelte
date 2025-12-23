<script lang="ts">
	import type { Experience } from '$lib/experience';

	export let experience: Experience;
	export let order: string;
</script>

<div
	class="flex-1 w-[calc(100%-4rem)] card card-hover p-4 preset-tonal-primary rounded border-white shadow-md mx-5 my-4 {order}"
>
	<div class="flex items-center justify-between space-x-2 mb-1">
		<div class="font-bold">{experience.companyName}</div>
		{#if experience.subtitle}<div class="text-white-500">{experience.subtitle}</div>{/if}
	</div>
	<div class="mb-2">{experience.position}</div>
	<div class="mb-1">{experience.description}</div>
	<div class="flex flex-row flex-wrap gap-x-1 gap-y-1 mb-1">
		{#each experience.tech as technology (technology)}
			<span class="chip preset-outlined-primary-500 rounded-md">{technology}</span>
		{/each}
	</div>

	<div class="md:hidden flex flex-row items-end justify-end space-x-2 mb-1">
		<div class="font-bold">
			<time datetime="2018-04-01">{experience.dateFrom}</time>
			-
			<time datetime="2018-10-30">{experience.dateTo}</time>
		</div>
	</div>
</div>
