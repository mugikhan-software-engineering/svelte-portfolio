<script lang="ts">
	import '../app.css';
	import '../app.postcss';

	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	import logo from '$lib/assets/white-logo-background.webp';

	import {
		initializeStores,
		Toast,
		LightSwitch,
		storeHighlightJs,
		Drawer,
		getDrawerStore,
		setModeCurrent,
		getModeOsPrefers,
		Modal,
		getModalStore
	} from '@skeletonlabs/skeleton';

	import type {
		DrawerSettings,
		DrawerStore,
		ModalStore,
		ModalSettings
	} from '@skeletonlabs/skeleton';

	import { onMount } from 'svelte';
	import { hljs } from '$lib/utils/highlight_setup';

	import { XIcon, CodeIcon, BookOpenIcon, ListIcon, MailIcon } from 'svelte-feather-icons';

	storeHighlightJs.set(hljs);

	let currentYear: String = '2023';

	let tapCount: number = 0;

	//Drawers, toasts and modals
	initializeStores();
	const drawerStore: DrawerStore = getDrawerStore();
	const modalStore: ModalStore = getModalStore();

	const modal: ModalSettings = {
		type: 'alert',
		title: 'For the love of my life, Ayesha ❤️',
		modalClasses: 'text-center'
	};

	function onFooterTap() {
		tapCount++;
		if (tapCount >= 7) {
			tapCount = 0;
			modalStore.trigger(modal);
		}
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
	<div class="flex flex-row items-center justify-between gap-3 p-5">
		<div class="flex-1">
			<img
				alt="The project logo"
				class="h-auto max-w-[280px] xxs:max-w-[140px] xs:h-[30px]"
				src={logo}
			/>
		</div>
		<div class="flex-none">
			<button
				type="button"
				data-drawer-hide="drawer-navigation"
				aria-controls="drawer-navigation"
				on:click={closeDrawer}
				class="variant-ringed-tertiary btn-icon text-black"
			>
				<XIcon
					size="32"
					class="hover:bg-black-200 text-token hover:text-slate-500 dark:hover:bg-gray-600 dark:hover:text-white"
				></XIcon>
				<span class="sr-only">Close menu</span>
			</button>
		</div>
	</div>
	<div class="absolute bottom-8 block w-[calc(100%-50px)]">
		<div class="flex grow flex-col justify-end self-end overflow-y-auto py-4">
			<ul class="flex w-full flex-col space-y-12 pl-1 font-medium">
				<li>
					<a
						on:click={closeDrawer}
						on:click|preventDefault={scrollIntoView}
						class="text-token block flex flex-row items-center rounded px-4 text-2xl hover:text-slate-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
						href="#about"
						aria-label="More about me"
						><BookOpenIcon size="32" class="text-token mr-4 hover:text-slate-500"
						></BookOpenIcon>About</a
					>
				</li>
				<li>
					<a
						on:click={closeDrawer}
						on:click|preventDefault={scrollIntoView}
						class="text-token block flex flex-row items-center rounded px-4 text-2xl hover:text-slate-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
						href="#services"
						aria-label="Services I provide"
						><CodeIcon size="32" class="text-token mr-4 hover:text-slate-500"></CodeIcon>Services</a
					>
				</li>
				<li>
					<a
						on:click={closeDrawer}
						on:click|preventDefault={scrollIntoView}
						class="text-token block flex flex-row items-center rounded px-4 text-2xl hover:text-slate-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
						href="#experience"
						aria-label="Experience in the industry"
						><ListIcon size="32" class="text-token mr-4 hover:text-slate-500"
						></ListIcon>Experience</a
					>
				</li>
				<li>
					<a
						on:click={closeDrawer}
						on:click|preventDefault={scrollIntoView}
						class="text-token block flex flex-row items-center rounded px-4 text-2xl hover:text-slate-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
						href="#contact"
						aria-label="Contact me via email"
						><MailIcon size="32" class="text-token mr-4 hover:text-slate-500"></MailIcon>Contact</a
					>
				</li>
				<li
					class="text-token block flex flex-row justify-end rounded px-4 text-2xl md:border-0 md:p-0"
				>
					<LightSwitch></LightSwitch>
				</li>
			</ul>
		</div>
	</div>
</Drawer>

<Toast></Toast>
<Modal></Modal>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar gridcolumns="grid-cols-3" slotdefault="place-self-start" slottrail="place-content-end">
			<svelte:fragment slot="lead"
				><img alt="The project logo" src={logo} height="180" width="180" /></svelte:fragment
			>
			<svelte:fragment slot="trail">
				<div class="hidden gap-5 md:flex">
					<a href="#about" on:click|preventDefault={scrollIntoView}>About</a>
					<a href="#services" on:click|preventDefault={scrollIntoView}>Services</a>
					<a href="#experience" on:click|preventDefault={scrollIntoView}>Experience</a>
					<a href="#contact" on:click|preventDefault={scrollIntoView}>Contact</a>
				</div>
				<div class="md:hidden">
					<button
						type="button"
						data-collapse-toggle="#navbar-default"
						class="variant-filled btn-icon inline-flex items-center justify-center rounded-lg bg-slate-100 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
						aria-controls="navbar-default"
						aria-expanded="false"
						on:click={openDrawer}
						><span class="sr-only">Open main menu</span>
						<svg
							class="h-5 w-7"
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
				<div class="hidden gap-5 md:flex">
					<LightSwitch></LightSwitch>
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<slot></slot>
	<svelte:fragment slot="pageFooter">
		<button
			class="mb-1 flex w-[100%] flex-col items-center justify-center md:flex-row"
			on:click={onFooterTap}
		>
			<div class="flex flex-col items-center justify-center md:flex-row">
				<p class="text-md">
					Copyright © {currentYear}. All Rights Reserved. Website by Mugi Khan
				</p>
			</div>
		</button>
	</svelte:fragment>
</AppShell>
