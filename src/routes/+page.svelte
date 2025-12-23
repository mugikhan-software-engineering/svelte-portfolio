<script lang="ts">
	import Hero from '$lib/components/hero.svelte';
	import Services from '$lib/components/services.svelte';
	import SectionTitle from '$lib/components/section_title.svelte';
	import timeline from '$lib/timeline.svelte';
	import aboutMe from '$lib/components/about_me.svelte';
	import ContactForm from '$lib/components/contact_form.svelte';
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

	<section id="experience" class="flex h-fit w-screen flex-col">
		<SectionTitle title="WHAT I'VE DONE SO FAR" subtitle="Work Experience" />
		<svelte:component this={timeline} />
	</section>

	<section id="contact" class="my-8 flex h-fit w-screen flex-col">
		<SectionTitle title="GET IN TOUCH" subtitle="Contact" />
		<ContactForm />
	</section>
</div>
