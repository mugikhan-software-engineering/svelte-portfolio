<script lang="ts">
	import '../app.postcss';

	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	import logo from '$lib/assets/white-logo-background.webp';

	import {
		storePopup,
		popup,
		initializeStores,
		Toast,
		LightSwitch,
		localStorageStore,
		storeHighlightJs,
		Drawer,
		getDrawerStore,
		modeCurrent,
		setModeUserPrefers,
		setModeCurrent,
		setInitialClassState,
		getModeOsPrefers
	} from '@skeletonlabs/skeleton';

	import type { DrawerSettings, DrawerStore } from '@skeletonlabs/skeleton';

	import { onMount } from 'svelte';
	import { hljs } from '$lib/utils/highlight_setup';

	import { XIcon, CodeIcon, BookOpenIcon, ListIcon, MailIcon } from 'svelte-feather-icons';

	storeHighlightJs.set(hljs);

	let currentYear: String = '2023';

	//Drawer and toasts`
	initializeStores();
	const drawerStore: DrawerStore = getDrawerStore();

	function onToggleHandler(): void {
		$modeCurrent = !$modeCurrent;
		setModeUserPrefers($modeCurrent);
		setModeCurrent($modeCurrent);
	}

	onMount(() => {
		const d: Date = new Date();
		currentYear = `${d.getFullYear()}`;

		if (!('modeCurrent' in localStorage)) {
			setModeCurrent(getModeOsPrefers());
		}
	});

	const scrollIntoView = ({ currentTarget }: any) => {
		const scrollToElement = document.querySelector(currentTarget.getAttribute('href'));

		if (!scrollToElement) return;

		scrollToElement.scrollIntoView({
			behavior: 'smooth',
			block: 'center'
		});
	};

	const drawerSettings: DrawerSettings = {
		id: 'drawer-nav',
		// bgDrawer: '!bg-slate-100',
		bgBackdrop: '!variant-soft',
		width: 'xs:w-[calc(100%-30px)] sm:w-[calc(100%-40px)] md:w-[480px]',
		padding: 'pr-4',
		rounded: 'rounded-lg'
	};

	const openDrawer = () => {
		drawerStore.open(drawerSettings);
	};

	const closeDrawer = () => {
		drawerStore.close();
	};
</script>

<Drawer>
	<div class="flex flex-row justify-between items-center p-5 gap-3">
		<div class="flex-1">
			<img
				alt="The project logo"
				class="h-auto xs:h-[30px] max-w-[280px] xxs:max-w-[140px]"
				src={logo}
			/>
		</div>
		<div class="flex-none">
			<button
				type="button"
				data-drawer-hide="drawer-navigation"
				aria-controls="drawer-navigation"
				on:click={closeDrawer}
				class="btn-icon variant-ringed-tertiary text-black"
			>
				<XIcon
					size="32"
					class="text-token dark:hover:bg-gray-600 dark:hover:text-white hover:bg-black-200 hover:text-slate-500"
				/>
				<span class="sr-only">Close menu</span>
			</button>
		</div>
	</div>
	<div class="block absolute bottom-8 w-[calc(100%-50px)]">
		<div class="flex flex-col justify-end grow py-4 overflow-y-auto self-end">
			<ul class="font-medium flex flex-col space-y-12 pl-1 w-full">
				<li>
					<a
						on:click={closeDrawer}
						on:click|preventDefault={scrollIntoView}
						class="flex flex-row items-center px-4 text-2xl block text-token rounded hover:text-slate-500 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
						href="#about"
						><BookOpenIcon size="32" class="text-token mr-4 hover:text-slate-500" />About</a
					>
				</li>
				<li>
					<a
						on:click={closeDrawer}
						on:click|preventDefault={scrollIntoView}
						class="flex flex-row items-center px-4 text-2xl block text-token rounded hover:text-slate-500 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
						href="#services"
						><CodeIcon size="32" class="text-token mr-4 hover:text-slate-500" />Services</a
					>
				</li>
				<li>
					<a
						on:click={closeDrawer}
						on:click|preventDefault={scrollIntoView}
						class="flex flex-row items-center px-4 text-2xl block text-token rounded hover:text-slate-500 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
						href="#experience"
						><ListIcon size="32" class="text-token mr-4 hover:text-slate-500" />Experience</a
					>
				</li>
				<li>
					<a
						on:click={closeDrawer}
						on:click|preventDefault={scrollIntoView}
						class="flex flex-row items-center px-4 text-2xl block text-token rounded hover:text-slate-500 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
						href="#contact"
						><MailIcon size="32" class="text-token mr-4 hover:text-slate-500" />Contact</a
					>
				</li>
				<li
					class="flex flex-row justify-end px-4 text-2xl block text-token rounded md:border-0 md:p-0"
				>
					<LightSwitch />
				</li>
			</ul>
		</div>
	</div>
</Drawer>

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
					<a href="#services" on:click|preventDefault={scrollIntoView}>Services</a>
					<a href="#experience" on:click|preventDefault={scrollIntoView}>Experience</a>
					<a href="#contact" on:click|preventDefault={scrollIntoView}>Contact</a>
				</div>
				<div class="md:hidden">
					<button
						type="button"
						data-collapse-toggle="#navbar-default"
						class="md:hidden btn-icon variant-filled bg-slate-100 inline-flex items-center justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
						aria-controls="navbar-default"
						aria-expanded="false"
						on:click={openDrawer}
						><span class="sr-only">Open main menu</span>
						<svg
							class="w-7 h-5"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 23 14"
						>
							<path
								stroke="#000"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M1 1h15M1 7h15M1 13h15"
							/>
						</svg></button
					>
				</div>
				<div class="hidden md:flex gap-5">
					<LightSwitch />
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
