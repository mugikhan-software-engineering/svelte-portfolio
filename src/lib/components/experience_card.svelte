<script lang="ts">
	import type { Experience } from '$lib/experience';

	export let experience: Experience;
	export let order: string;
</script>

<div
	class="experience-card flex-1 w-[calc(100%-4rem)] p-4 mx-5 my-4 {order}"
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

<style>
	.experience-card {
		background: linear-gradient(145deg, rgba(22, 19, 35, 0.8), rgba(15, 12, 28, 0.85));
		border: 1px solid rgba(91, 169, 253, 0.1);
		border-radius: 14px;
		box-shadow:
			0 8px 30px -10px rgba(0, 0, 0, 0.3),
			inset 0 1px 0 rgba(255, 255, 255, 0.03);
		transition: all 0.3s ease;
	}

	.experience-card:hover {
		border-color: rgba(91, 169, 253, 0.3);
		transform: translateY(-2px);
		box-shadow:
			0 12px 40px -10px rgba(0, 0, 0, 0.4),
			0 0 25px rgba(91, 169, 253, 0.15),
			inset 0 1px 0 rgba(255, 255, 255, 0.05);
	}
</style>
