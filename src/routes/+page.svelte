<script lang="ts">
	import profile from '$lib/assets/profile-2.webp';
	import serviceCard from '$lib/service_card.svelte';
	import floatingTitle from '$lib/float_in_title.svelte';
	import technology from '$lib/technology.svelte';
	import timeline from '$lib/timeline.svelte';
	import aboutMe from '$lib/components/about_me.svelte';

	import { enhance, applyAction } from '$app/forms';

	import { services, servicesLight } from '$lib/services';
	import { inview, type Options } from 'svelte-inview';

	import { SyncLoader } from 'svelte-loading-spinners';
	import { getToastStore, modeCurrent } from '@skeletonlabs/skeleton';
	import { GithubIcon, LinkedinIcon, AtSignIcon } from 'svelte-feather-icons';

	import type { ToastSettings } from '@skeletonlabs/skeleton';
	import { Turnstile } from 'svelte-turnstile';

	let isInViewCards: boolean;
	let isInViewOverviewTitle: boolean;
	let isInViewExpTitle: boolean;
	let isInViewTechTitle: boolean;
	let isInViewContactTitle: boolean = true;

	const options: Options = {
		unobserveOnEnter: true
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

	$: active_class = loading ? 'loading pointer-events-none opacity-30' : '';

	let reset: () => void | undefined;
</script>

<div class="container">
	<div>
		<section
			class="left-0 top-0 flex h-[calc(100vh-3rem)] w-screen flex-col bg-[url('$lib/assets/svg/waves.svg')] bg-cover bg-fixed bg-center bg-no-repeat md:h-[calc(100vh-5rem)]"
		>
			<section
				class="left-0 top-0 z-0 mx-auto flex h-[calc(100vh-3rem)] w-full flex-col items-center justify-center overflow-hidden sm:flex-row md:h-[calc(100vh-5rem)]"
			>
				<div
					class="inset-0 top-[250px] z-0 flex h-full w-full columns-6 flex-col items-center justify-center bg-transparent sm:top-[250px] sm:px-16 md:items-start lg:top-[250px] lg:flex-row xl:top-[350px]"
				>
					<div
						class="flex w-full flex-col items-center justify-center text-center sm:mt-5 md:text-left lg:h-full xs:mt-5"
					>
						<h1
							class="h1 mt-6 w-full text-[40px] uppercase text-white sm:text-[60px] lg:mt-2 lg:text-[80px] lg:leading-[90px] xs:text-center xs:text-[50px]"
						>
							Hi, I'm <span class="font-mova text-[50px] font-extrabold uppercase sm:text-[90px]"
								>Mugi</span
							>
						</h1>
						<p
							class="mt-6 w-full text-[16px] leading-[25px] text-white sm:text-[26px] lg:mt-2 lg:text-[30px] lg:leading-[40px] xs:text-[20px]"
						>
							I'm a fullstack developer who has experience with mobile, web and backend development.
						</p>
					</div>
					<div class="col-span-1 row-span-2 flex items-center justify-center lg:h-full">
						<img class="w-full" src={profile} alt="mugi" />
					</div>
				</div>
			</section>
			<div class="flex h-[90px] items-center justify-center">
				<a href="#about" on:click|preventDefault={scrollIntoView}>
					<svg class="arrows h-[72px] w-[60px]">
						<path class="a1" d="M0 0 L30 32 L60 0" />
						<path class="a2" d="M0 20 L30 52 L60 20" />
						<path class="a3" d="M0 40 L30 72 L60 40" />
					</svg>
				</a>
			</div>
		</section>
	</div>

	<section id="about" class="my-12 flex h-fit w-screen flex-col">
		<div
			class="flex w-full flex-row flex-wrap place-content-start items-start"
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

	<section id="services" class="flex h-fit w-screen flex-col">
		<svelte:component
			this={floatingTitle}
			title="WHAT I DO"
			subtitle="Services."
			yOffset={-50}
			isVisible={isInViewCards}
		/>

		<div
			class="my-2 flex w-full flex-row flex-wrap place-content-center items-center gap-x-32 gap-y-6 md:gap-y-12"
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

	<section id="tech" class="mb-5 flex h-fit w-screen flex-col">
		<div
			class="flex h-fit w-full flex-row flex-wrap place-content-start items-start"
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
		<div class="flex w-full flex-row place-content-center items-center">
			<svelte:component this={technology} />
		</div>
	</section>

	<section id="experience" class="flex h-fit w-screen flex-col">
		<div
			class="mb-5 flex h-fit w-full flex-row flex-wrap place-content-start items-start"
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

	<section id="contact" class="my-8 flex h-fit w-screen flex-col">
		<div class="p4 card variant-gradient-tertiary-secondary m-5 flex flex-col bg-gradient-to-tr">
			<div class="mt-5 flex w-full flex-row flex-wrap place-content-start items-start">
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
						reset?.();
						update();
					};
				}}
			>
				<div class="flex flex-col md:flex-row">
					<label class="label m-5 flex-1">
						<span>Name</span>
						<input
							name="name"
							class="peer input text-token rounded-md focus:border-tertiary-500 focus:invalid:border-error-500"
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
							class="peer input text-token rounded-md focus:border-tertiary-500 focus:invalid:border-error-500"
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
					<select name="service" class="select text-token rounded-md" required>
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
							class="peer textarea text-token rounded-md focus:border-tertiary-500 focus:invalid:border-error-500"
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
				<div class="mb-2 flex w-full flex-row items-center justify-center">
					<Turnstile siteKey="0x4AAAAAAAevj-w71wPNa1Ya" bind:reset />
				</div>
				<div
					class="mb-5 flex w-full flex-row items-center justify-center group-invalid:pointer-events-none group-invalid:opacity-30 {active_class}"
				>
					<button type="submit" class="variant-filled btn">
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

	<section id="socials" class="mb-6 w-screen">
		<div class="flex w-full flex-row justify-center gap-x-8 gap-y-2">
			<div class="logo-cloud grid-cols-1 gap-0 [&>.logo-item]:variant-soft-surface md:!grid-cols-3">
				<a
					class="logo-item text-token flex flex-row items-end justify-center !px-4 text-xl"
					href="mailto:mugikhan@gmail.com"
				>
					<AtSignIcon size="32" class="text-token mr-2" />
					<p class="text-token text-xl/[32px]">Email</p>
				</a>
				<a
					class="logo-item text-token flex flex-row items-end justify-center !px-4 text-xl"
					href="https://www.linkedin.com/in/mughees-khan-9261aa15b/"
					target="_blank"
				>
					<LinkedinIcon size="32" class="text-token mr-2" />
					<p class="text-token text-xl/[26px]">LinkedIn</p>
				</a>
				<a
					class="logo-item flex flex-row items-end justify-center !px-4 text-xl/[32px]"
					href="https://github.com/mugikhan"
					target="_blank"
				>
					<GithubIcon size="32" class="text-token" />
					<p class="text-token text-xl/[32px]">GitHub</p>
				</a>
			</div>
		</div>
	</section>
</div>
