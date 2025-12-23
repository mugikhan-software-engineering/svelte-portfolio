<script lang="ts">
	import '../app.css';

	import Header from '$lib/components/header.svelte';

	let { children } = $props();
	const currentYear = new Date().getFullYear().toString();

	let tapCount: number = 0;

	function onFooterTap() {
		tapCount++;
		if (tapCount >= 7) {
			tapCount = 0;
			// modalStore.trigger(modal);
		}
	}
</script>

<div class="min-h-screen grid grid-rows-[auto_1fr_auto]">
	<Header />

	<main>
		{@render children()}
	</main>

	<footer>
		<button
			class="mb-1 flex w-full flex-col items-center justify-center md:flex-row"
			onclick={onFooterTap}
		>
			<div class="flex flex-col items-center justify-center md:flex-row">
				<p class="text-md">
					Copyright © {currentYear}. All Rights Reserved. Website by Mugi Khan
				</p>
			</div>
		</button>
	</footer>
</div>
