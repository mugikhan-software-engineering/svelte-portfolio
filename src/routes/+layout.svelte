<script lang="ts">
	import '../app.postcss';

	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	import logo from '$lib/assets/white-logo-background.png';

	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';

	import {
		storePopup,
		popup,
		initializeStores,
		Toast,
		LightSwitch,
		localStorageStore
	} from '@skeletonlabs/skeleton';

	import type { PopupSettings } from '@skeletonlabs/skeleton';

	import type { Writable } from 'svelte/store';

	import { onMount } from 'svelte';

	let currentYear: String = '2023';

	//Popup and toasts
	initializeStores();
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	onMount(() => {
		const d: Date = new Date();
		currentYear = `${d.getFullYear()}`;
	});

	const scrollIntoView = ({ currentTarget }: any) => {
		const scrollToElement = document.querySelector(currentTarget.getAttribute('href'));

		if (!scrollToElement) return;

		scrollToElement.scrollIntoView({
			behavior: 'smooth',
			block: 'center'
		});
	};

	const popupClick: PopupSettings = {
		event: 'click',
		target: 'popupClick',
		placement: 'bottom'
	};

	const themeMode: Writable<string> = localStorageStore('storeExample', 'initialValueHere');
</script>

<Toast />

<AppShell>
	<svelte:fragment slot="header">
		<AppBar gridColumns="grid-cols-3" slotDefault="place-self-start" slotTrail="place-content-end">
			<svelte:fragment slot="lead"
				><img alt="The project logo" src={logo} height="180" width="180" /></svelte:fragment
			>
			<svelte:fragment slot="trail">
				<div class="hidden md:flex gap-5">
					<a href="#about" on:click|preventDefault={scrollIntoView}>About</a>
					<a href="#tech" on:click|preventDefault={scrollIntoView}>Tech</a>
					<a href="#experience" on:click|preventDefault={scrollIntoView}>Experience</a>
					<a href="#contact" on:click|preventDefault={scrollIntoView}>Contact</a>
					<LightSwitch />
				</div>
				<div class="md:hidden">
					<button
						type="button"
						data-collapse-toggle="#navbar-default"
						class="md:hidden btn-icon variant-filled inline-flex items-center justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
						aria-controls="navbar-default"
						aria-expanded="false"
						use:popup={popupClick}
						><span class="sr-only">Open main menu</span>
						<svg
							class="w-7 h-5"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 23 14"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M1 1h15M1 7h15M1 13h15"
							/>
						</svg></button
					>
					<div class="block" data-popup="popupClick">
						<ul
							class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
						>
							<li>
								<a
									class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
									href="#about"
									on:click|preventDefault={scrollIntoView}>About</a
								>
							</li>
							<li>
								<a
									class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
									href="#tech"
									on:click|preventDefault={scrollIntoView}>Tech</a
								>
							</li>
							<li>
								<a
									class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
									href="#experience"
									on:click|preventDefault={scrollIntoView}>Experience</a
								>
							</li>
							<li>
								<a
									class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
									href="#contact"
									on:click|preventDefault={scrollIntoView}>Contact</a
								>
							</li>
							<li>
								<LightSwitch />
							</li>
						</ul>
					</div>
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<slot />
	<svelte:fragment slot="pageFooter"
		><div class="flex flex-col md:flex-row justify-center items-center pl-2 md:pl-0">
			<p class="text-md">
				Copyright © {currentYear}. All Rights Reserved. Website by Mugi Khan
			</p>
		</div>
	</svelte:fragment>
</AppShell>
