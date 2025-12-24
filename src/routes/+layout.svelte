<script lang="ts">
	import '../app.css';

	import Header from '$lib/components/header.svelte';
	import InfoDialog from '$lib/components/info_dialog.svelte';

	import { Toaster } from 'svelte-french-toast';

	let { children } = $props();
	const currentYear = new Date().getFullYear().toString();
</script>

<Toaster></Toaster>

<div class="min-h-screen grid grid-rows-[auto_1fr_auto]">
	<Header />

	<main>
		{@render children()}
	</main>

	<footer>
		<div class="mb-1 flex w-full flex-col items-center justify-center md:flex-row">
			<div class="flex flex-col items-center justify-center md:flex-row">
				<p class="text-md">
					Copyright © {currentYear}. All Rights Reserved. Website by <InfoDialog />
				</p>
			</div>
		</div>
	</footer>
</div>
