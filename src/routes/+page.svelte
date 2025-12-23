<script lang="ts">
	import Hero from '$lib/components/hero.svelte';
	import Services from '$lib/components/services.svelte';
	import SectionTitle from '$lib/components/section_title.svelte';
	import timeline from '$lib/timeline.svelte';
	import aboutMe from '$lib/components/about_me.svelte';

	import { enhance, applyAction } from '$app/forms';

	import { SyncLoader } from 'svelte-loading-spinners';

	import { Turnstile } from 'svelte-turnstile';

	import { showErrorToast, showSuccessToast } from '$lib/toasts/toaster-svelte';

	import { AtSignIcon, LinkedinIcon, GithubIcon } from '@lucide/svelte';

	let email: string = '';

	let loading: boolean = false;

	$: active_class = loading ? 'loading pointer-events-none opacity-30' : '';

	let reset: () => void | undefined;
</script>

<!-- Hero Section - Full Width -->
<Hero />

<div class="container">
	<section id="about" class="my-12 flex h-fit w-screen flex-col">
		<SectionTitle title="INTRODUCTION" subtitle="Overview" />
		<svelte:component this={aboutMe} />
	</section>

	<section id="services" class="flex h-fit w-screen flex-col">
		<SectionTitle title="WHAT I DO" subtitle="Services" />
		<Services />
	</section>

	<!-- <section id="tech" class="mb-5 flex h-fit w-screen flex-col">
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
	</section> -->

	<!-- <section id="experience" class="flex h-fit w-screen flex-col">
		<SectionTitle title="WHAT I'VE DONE SO FAR" subtitle="Work Experience" />
		<svelte:component this={timeline} />
	</section> -->

	<section id="contact" class="my-8 flex h-fit w-screen flex-col">
		<div class="p4 card from-tertiary-500 to-secondary-500 m-5 flex flex-col bg-linear-to-tr">
			<div class="mt-5">
				<SectionTitle title="GET IN TOUCH" subtitle="Contact" />
			</div>
			<form
				novalidate
				class="group"
				method="POST"
				action="?/sendEmail"
				use:enhance={({ formElement }) => {
					loading = true;
					return async ({ result, update }) => {
						loading = false;
						if (result.type === 'success') {
							formElement.reset();
							if (result.data) {
								showSuccessToast(result.data['body'] as string);
							}
						} else if (result.type === 'failure') {
							if (result.data) {
								showErrorToast(result.data['description'] as string);
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
							class="peer input base-font-color rounded-md focus:border-tertiary-500 focus:invalid:border-error-500"
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
							class="peer input base-font-color rounded-md focus:border-tertiary-500 focus:invalid:border-error-500"
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
					<select name="service" class="select base-font-color rounded-md" required>
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
							class="peer textarea base-font-color rounded-md focus:border-tertiary-500 focus:invalid:border-error-500"
							rows="4"
							required
							minlength="50"
							maxlength="1000"
							placeholder="Let me know a little about your idea or project..."
							name="message"
						></textarea>
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
					<button type="submit" class="preset-filled btn">
						{#if loading}
							<p>Sending</p>
							<SyncLoader size="30" color="#000000" unit="px" duration="1s" />
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
										<g id="Icon-Set" transform="translate(-568.000000, -254.000000)" fill="#000000">
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
			<div class="logo-cloud grid-cols-1 gap-0 [&>.logo-item]:preset-tonal-surface md:grid-cols-3!">
				<a
					class="logo-item base-font-color flex flex-row items-end justify-center px-4! text-xl"
					href="mailto:mugikhan@gmail.com"
				>
					<AtSignIcon size="32" class="base-font-color mr-2" />
					<p class="base-font-color text-xl/[32px]">Email</p>
				</a>
				<a
					class="logo-item base-font-color flex flex-row items-end justify-center px-4! text-xl"
					href="https://www.linkedin.com/in/mughees-khan-9261aa15b/"
					target="_blank"
				>
					<LinkedinIcon size="32" class="base-font-color mr-2" />
					<p class="base-font-color text-xl/[26px]">LinkedIn</p>
				</a>
				<a
					class="logo-item flex flex-row items-end justify-center px-4! text-xl/[32px]"
					href="https://github.com/mugikhan"
					target="_blank"
				>
					<GithubIcon size="32" class="base-font-color" />
					<p class="base-font-color text-xl/[32px]">GitHub</p>
				</a>
			</div>
		</div>
	</section>
</div>
