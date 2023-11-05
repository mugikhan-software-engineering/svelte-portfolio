<script lang="ts">
	import profile from '$lib/assets/profile_2.png';
	import serviceCard from '$lib/service_card.svelte';
	import floatingTitle from '$lib/float_in_title.svelte';
	import technology from '$lib/technology.svelte';
	import timeline from '$lib/timeline.svelte';
	import aboutMe from '$lib/components/about_me.svelte';

	import { enhance, applyAction } from '$app/forms';

	import { services, servicesLight } from '$lib/services';
	import { inview, type Options } from 'svelte-inview';

	import { SyncLoader } from 'svelte-loading-spinners';
	import { error, type ActionResult } from '@sveltejs/kit';
	import { Toast, getToastStore, modeCurrent } from '@skeletonlabs/skeleton';
	import { GithubIcon, LinkedinIcon, AtSignIcon } from 'svelte-feather-icons';

	import type { ToastSettings, ToastStore } from '@skeletonlabs/skeleton';

	let isInViewCards: boolean;
	let isInViewOverviewTitle: boolean;
	let isInViewExpTitle: boolean;
	let isInViewContactTitle: boolean = true;
	let isHoneypotChecked: boolean = false;

	const options: Options = {
		unobserveOnEnter: true
	};

	const onChangehoneypotCheck = (event: any) => {
		isHoneypotChecked = event.target.checked;
	};

	const scrollIntoView = ({ currentTarget }: any) => {
		const scrollToElement = document.querySelector(currentTarget.getAttribute('href'));

		if (!scrollToElement) return;

		scrollToElement.scrollIntoView({
			behavior: 'smooth',
			block: 'center'
		});
	};

	const toastStore = getToastStore();

	const showSuccessToast = (message: any) => {
		const t: ToastSettings = {
			message: message as string,
			background: 'variant-filled-success',
			timeout: 2000
		};
		toastStore.trigger(t);
	};

	const showErrorToast = (message: any) => {
		const t: ToastSettings = {
			message: message as string,
			background: 'variant-filled-error',
			timeout: 2000
		};
		toastStore.trigger(t);
	};

	let email: String = '';

	let loading: Boolean = false;

	function validateEmail(email: String) {
		var emailRegEx =
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return emailRegEx.test(String(email).toLowerCase());
	}

	$: isValidEmail = validateEmail(email);

	$: active_class = loading ? 'loading pointer-events-none opacity-30' : '';

	export let form;
</script>

<div class="container">
	<div>
		<section
			class="top-0 left-0 bg-[url('$lib/assets/svg/waves.svg')] h-[calc(100vh-3rem)] md:h-[calc(100vh-5rem)] w-screen bg-cover bg-no-repeat bg-center bg-fixed flex flex-col"
		>
			<section
				class="top-0 left-0 flex sm:flex-row flex-col w-full h-[calc(100vh-3rem)] md:h-[calc(100vh-5rem)] mx-auto overflow-hidden z-0 justify-center items-center"
			>
				<div
					class="w-full h-full bg-transparent columns-6 inset-0 sm:top-[250px] top-[250px] lg:top-[250px] xl:top-[350px] sm:px-16 flex lg:flex-row flex-col items-center justify-center md:items-start z-0"
				>
					<div
						class="flex flex-col justify-center items-center w-full lg:h-full xs:mt-5 sm:mt-5 text-center md:text-left"
					>
						<h1
							class="text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[90px] xs:text-center mt-6 lg:mt-2 uppercase w-full"
						>
							Hi, I'm <span class="sm:text-[90px] text-[50px] font-mova font-extrabold uppercase"
								>Mugi</span
							>
						</h1>
						<p
							class="text-white lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] leading-[25px] lg:leading-[40px] mt-6 lg:mt-2 w-full"
						>
							I'm a fullstack developer who has experience with mobile, web and backend development.
						</p>
					</div>
					<div class="flex col-span-1 row-span-2 justify-center items-center lg:h-full">
						<img class="w-full" src={profile} alt="mugi" />
					</div>
				</div>
			</section>
			<div class="flex justify-center items-center h-[90px]">
				<a href="#about" on:click|preventDefault={scrollIntoView}>
					<svg class="arrows w-[60px] h-[72px]">
						<path class="a1" d="M0 0 L30 32 L60 0" />
						<path class="a2" d="M0 20 L30 52 L60 20" />
						<path class="a3" d="M0 40 L30 72 L60 40" />
					</svg>
				</a>
			</div>
		</section>
	</div>

	<section id="about" class="h-fit w-screen flex flex-col my-12">
		<div
			class="flex flex-row flex-wrap w-full place-content-start items-start"
			use:inview
			on:inview_change={(event) => {
				const { inView } = event.detail;
				isInViewOverviewTitle = inView;
			}}
		>
			<svelte:component
				this={floatingTitle}
				title="INTRODUCTION"
				subtitle="Overview."
				yOffset={-50}
				isVisible={isInViewOverviewTitle}
			/>
		</div>

		<svelte:component this={aboutMe} themeMode={$modeCurrent} />
	</section>

	<section id="services" class="h-fit w-screen flex flex-col">
		<svelte:component
			this={floatingTitle}
			title="WHAT I DO"
			subtitle="Services."
			yOffset={-50}
			isVisible={isInViewCards}
		/>

		<div
			class="flex flex-row flex-wrap w-full place-content-center items-center"
			use:inview={options}
			on:inview_change={(event) => {
				const { inView } = event.detail;
				isInViewCards = inView;
			}}
		>
			<svelte:component
				this={serviceCard}
				title="Mobile app development"
				assetPath={$modeCurrent ? servicesLight['mobile'] : services['mobile']}
				isVisible={isInViewCards}
				delay={500}
				xOffset={-400}
			/>
			<svelte:component
				this={serviceCard}
				title="Website development"
				assetPath={$modeCurrent ? servicesLight['web'] : services['web']}
				isVisible={isInViewCards}
				delay={1000}
				xOffset={-300}
			/>
			<svelte:component
				this={serviceCard}
				title="Backend development"
				assetPath={$modeCurrent ? servicesLight['backend'] : services['backend']}
				isVisible={isInViewCards}
				delay={1500}
				xOffset={-200}
			/>
			<svelte:component
				this={serviceCard}
				title="Maintenance and upgrades"
				assetPath={$modeCurrent ? servicesLight['maintenance'] : services['maintenance']}
				isVisible={isInViewCards}
				delay={2000}
				xOffset={-100}
			/>
		</div>
	</section>

	<!-- <section id="tech" class="h-fit w-screen flex flex-col">
		<div
			class="flex flex-row flex-wrap h-fit w-full place-content-start items-start mb-5"
			use:inview
			on:inview_change={(event) => {
				const { inView } = event.detail;
				isInViewTechTitle = inView;
			}}
		>
			<svelte:component
				this={floatingTitle}
				title="MY SKILLS"
				subtitle="Technologies."
				yOffset={-50}
				isVisible={isInViewTechTitle}
			/>
		</div>
		<div
			class="flex flex-row w-full place-content-center items-center"
			use:inview={options}
			on:inview_change={(event) => {
				const { inView } = event.detail;
				isInViewTech = inView;
			}}
		>
			<svelte:component this={technology} isVisible={isInViewTech} />
		</div>
	</section> -->

	<section id="experience" class="flex flex-col h-fit w-screen">
		<div
			class="flex flex-row flex-wrap h-fit w-full place-content-start items-start mb-5"
			use:inview
			on:inview_change={(event) => {
				const { inView } = event.detail;
				isInViewExpTitle = inView;
			}}
		>
			<svelte:component
				this={floatingTitle}
				title="WHAT I'VE DONE SO FAR"
				subtitle="Work Experience."
				yOffset={-50}
				isVisible={isInViewExpTitle}
			/>
		</div>
		<svelte:component this={timeline} />
	</section>

	<section id="contact" class="flex flex-col h-fit w-screen my-8">
		<div class="flex flex-col card p4 m-5 bg-gradient-to-tr variant-gradient-tertiary-secondary">
			<div class="flex flex-row flex-wrap w-full place-content-start items-start mt-5">
				<svelte:component
					this={floatingTitle}
					title="GET IN TOUCH"
					subtitle="Contact."
					yOffset={-50}
					isVisible={isInViewContactTitle}
				/>
			</div>
			<form
				novalidate
				class="group"
				method="POST"
				action="?/sendEmail"
				use:enhance={({ formElement, formData }) => {
					loading = true;
					return async ({ result, update }) => {
						loading = false;
						if (result.type === 'success') {
							formElement.reset();
							if (result.data) {
								showSuccessToast(result.data['body']);
							}
						} else if (result.type === 'failure') {
							if (result.data) {
								showErrorToast(result.data['description']);
							}
						}
						await applyAction(result);
						update();
					};
				}}
			>
				<div class="flex flex-col md:flex-row">
					<label class="label m-5 flex-1">
						<span>Name</span>
						<input
							name="name"
							class="input peer focus:border-tertiary-500 focus:invalid:border-error-500 rounded-md text-token"
							type="text"
							placeholder="Your name"
							required
						/>
						<span
							class="mt-2 hidden text-sm text-red-700 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block"
						>
							Please enter your name
						</span>
					</label>
					<label class="label m-5 flex-1">
						<span>Email</span>
						<input
							name="email"
							class="input peer focus:border-tertiary-500 focus:invalid:border-error-500 rounded-md text-token"
							type="email"
							placeholder="Your email"
							autocomplete="email"
							required
							bind:value={email}
						/>
						<span
							class="mt-1 hidden text-sm text-red-700 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block"
						>
							Please enter a valid email address
						</span>
					</label>
				</div>

				<label class="label m-5">
					<span>What are you interested in?</span>
					<select name="service" class="select rounded-md text-token" required>
						<option value="Crossplatform mobile application"
							>Crossplatform mobile application</option
						>
						<option value="Responsive website">Responsive website</option>
					</select>
				</label>
				<label class="label m-5">
					<span>Message</span>
					<div class="flex flex-col">
						<textarea
							class="textarea peer focus:border-tertiary-500 focus:invalid:border-error-500 rounded-md text-token"
							rows="4"
							required
							minlength="50"
							maxlength="1000"
							placeholder="Let me know a little about your idea or project..."
							name="message"
						/>
						<span
							class="mt-1 hidden text-sm text-red-700 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block"
						>
							Please enter message longer than 50 characters
						</span>
					</div>
				</label>

				<label class="flex items-center justify-center space-x-2 opacity-0">
					<input class="checkbox" type="checkbox" on:change={onChangehoneypotCheck} />
					<p>Click here to confirm</p>
				</label>
				<div
					class="w-full flex flex-row items-center justify-center mb-5 group-invalid:pointer-events-none group-invalid:opacity-30 {active_class}"
				>
					<button type="submit" class="btn variant-filled">
						{#if loading}
							<p>Sending</p>
							<SyncLoader
								size="30"
								color={$modeCurrent ? '#fff' : '#000000'}
								unit="px"
								duration="1s"
							/>
						{:else}
							Send
							<div class="ml-3">
								<svg
									width="20px"
									viewBox="0 0 33 33"
									version="1.1"
									xmlns="http://www.w3.org/2000/svg"
									xmlns:xlink="http://www.w3.org/1999/xlink"
								>
									<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
										<g
											id="Icon-Set"
											transform="translate(-568.000000, -254.000000)"
											fill={$modeCurrent ? '#fff' : '#000000'}
										>
											<path
												d="M584,283 C584,283 580.872,276.976 580,275 L596.075,259.779 L584,283 L584,283 Z M572,270 L595,259 L579,274 C578.996,273.996 572,270 572,270 L572,270 Z M599,255 C597.844,255.563 568,270 568,270 C568,270 578.052,276.059 578,276 C577.983,275.981 584,287 584,287 C584,287 599.75,256.5 600,256 C600.219,255.375 599.75,254.688 599,255 L599,255 Z"
												id="send-email"
											/>
										</g>
									</g>
								</svg>
							</div>
						{/if}
					</button>
				</div>
			</form>
		</div>
	</section>

	<section id="socials" class="w-screen mb-6">
		<div class="flex flex-row flex-wrap justify-center w-full gap-x-4 gap-y-2">
			<a
				class="flex flex-row items-center text-2xl block text-gray-900 rounded hover:text-slate-500 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
				href="mailto:mugikhan@gmail.com"
				><AtSignIcon size="32" class="text-black mr-4 hover:text-slate-500" /></a
			>
			<a
				class="flex flex-row items-center text-2xl block text-gray-900 rounded hover:text-slate-500 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
				href="https://www.linkedin.com/in/mughees-khan-9261aa15b/"
				target="_blank"><LinkedinIcon size="32" class="text-black mr-4 hover:text-slate-500" /></a
			>
			<a
				class="flex flex-row items-center text-2xl block text-gray-900 rounded hover:text-slate-500 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
				href="https://github.com/mugikhan"
				target="_blank"><GithubIcon size="32" class="text-black mr-4 hover:text-slate-500" /></a
			>
		</div>
	</section>
</div>
