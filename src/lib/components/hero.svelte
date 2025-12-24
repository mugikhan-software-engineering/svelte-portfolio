<script lang="ts">
	import { scrollIntoView } from '$lib/utils/scroll';
	import { onMount } from 'svelte';

	let mounted = $state(false);

	onMount(() => {
		setTimeout(() => {
			mounted = true;
		}, 100);
	});

	// Slot for custom animation component (Lottie, Spline, Canvas, etc.)
	let { animationSlot }: { animationSlot?: import('svelte').Snippet } = $props();

	const services = [
		{ name: 'Mobile', color: '#5ba9fd', icon: '📱' },
		{ name: 'Frontend', color: '#FF3E00', icon: '🎨' },
		{ name: 'Backend', color: '#3178C6', icon: '⚙️' },
		{ name: 'Ecommerce', color: '#FF9900', icon: '🛒' },
		{ name: 'API', color: '#FA7343', icon: '🔌' },
		{ name: 'Cloud', color: '#339933', icon: '☁️' },
		{ name: 'AI', color: '#FF3E00', icon: '🤖' }
	];
</script>

<section class="hero-section">
	<!-- Animated background layers -->
	<div class="hero-bg-layer"></div>
	<div class="hero-gradient-overlay"></div>

	<!-- Floating geometric elements -->
	<div class="floating-elements" aria-hidden="true">
		<div class="float-element float-1"></div>
		<div class="float-element float-2"></div>
		<div class="float-element float-3"></div>
	</div>

	<!-- Main hero content - single column, centered -->
	<div class="hero-content">
		<!-- Orbiting service icons at top -->
		<div class="hero-visual" class:animate-in={mounted}>
			{#if animationSlot}
				{@render animationSlot()}
			{:else}
				<div class="visual-container">
					<div class="orbit-container">
						{#each services as service, i (service.name)}
							<div
								class="orbit-item"
								style="--delay: {i * -4}s; --color: {service.color}"
								title={service.name}
							>
								<span class="orbit-icon">{service.icon}</span>
								<span class="orbit-label">{service.name}</span>
							</div>
						{/each}
					</div>
					<!-- Center glow -->
					<div class="center-glow"></div>
				</div>
			{/if}
		</div>

		<!-- Text content below -->
		<div class="hero-text-container" class:animate-in={mounted}>
			<!-- Eyebrow text -->
			<div class="eyebrow">
				<span class="eyebrow-line"></span>
				<span class="eyebrow-text">Fullstack Developer</span>
				<span class="eyebrow-line"></span>
			</div>

			<!-- Main heading -->
			<h1 class="hero-heading">
				<span class="greeting">Hi, I'm</span>
				<span class="name-wrapper">
					<span class="name">Mugi</span>
					<span class="name-accent"></span>
				</span>
			</h1>

			<!-- Tagline -->
			<p class="hero-tagline">
				I craft <span class="highlight">mobile</span>, <span class="highlight">web</span>, and
				<span class="highlight">backend</span> experiences that solve real problems.
			</p>

			<!-- CTA Buttons -->
			<div class="hero-cta">
				<a href="#contact" use:scrollIntoView class="cta-primary">
					<span>Let's Work Together</span>
					<svg
						class="cta-arrow"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
					>
						<path d="M5 12h14M12 5l7 7-7 7" />
					</svg>
				</a>
				<a href="#services" use:scrollIntoView class="cta-secondary"> View Services </a>
			</div>
		</div>
	</div>

	<!-- Scroll indicator -->
	<div class="scroll-indicator" class:animate-in={mounted}>
		<a href="#about" use:scrollIntoView aria-label="Scroll to about section">
			<div class="scroll-mouse">
				<div class="scroll-wheel"></div>
			</div>
			<span class="scroll-text">Scroll</span>
		</a>
	</div>
</section>

<style>
	.hero-section {
		position: relative;
		min-height: 100vh;
		width: 100%;
		display: flex;
		flex-direction: column;
		overflow: hidden;
	}

	/* Background layers */
	.hero-bg-layer {
		position: absolute;
		inset: 0;
		background-image: url('$lib/assets/svg/waves.svg');
		background-size: cover;
		background-position: center bottom;
		background-attachment: fixed;
		background-repeat: no-repeat;
	}

	.hero-gradient-overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(
			180deg,
			rgba(18, 11, 24, 0.92) 0%,
			rgba(18, 11, 24, 0.7) 50%,
			rgba(18, 11, 24, 0.5) 100%
		);
	}

	/* Floating elements */
	.floating-elements {
		position: absolute;
		inset: 0;
		overflow: hidden;
		pointer-events: none;
	}

	.float-element {
		position: absolute;
		border-radius: 50%;
		background: linear-gradient(135deg, rgba(91, 169, 253, 0.12), rgba(55, 129, 217, 0.08));
		filter: blur(2px);
		animation: float 25s ease-in-out infinite;
	}

	.float-1 {
		width: 400px;
		height: 400px;
		top: -5%;
		right: -5%;
		animation-delay: 0s;
	}

	.float-2 {
		width: 250px;
		height: 250px;
		bottom: 10%;
		left: -5%;
		animation-delay: -8s;
	}

	.float-3 {
		width: 180px;
		height: 180px;
		top: 40%;
		left: 60%;
		animation-delay: -15s;
	}

	@keyframes float {
		0%,
		100% {
			transform: translate(0, 0) scale(1);
		}
		33% {
			transform: translate(40px, -30px) scale(1.05);
		}
		66% {
			transform: translate(-30px, 20px) scale(0.95);
		}
	}

	/* Main content - single column centered */
	.hero-content {
		position: relative;
		z-index: 10;
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 0 auto;
		padding: 2rem 1rem;
		width: 100%;
		max-width: 100%;
		gap: 1rem;
	}

	@media (min-width: 640px) {
		.hero-content {
			padding: 2rem 1.5rem;
		}
	}

	@media (min-width: 1024px) {
		.hero-content {
			padding: 3rem 2rem;
			max-width: 1200px;
		}
	}

	/* Hero visual (orbiting icons) */
	.hero-visual {
		display: flex;
		align-items: center;
		justify-content: center;
		opacity: 0;
		transform: translateY(-20px) scale(0.9);
		transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.hero-visual.animate-in {
		opacity: 1;
		transform: translateY(0) scale(1);
	}

	/* Visual container */
	.visual-container {
		position: relative;
		width: 260px;
		height: 260px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	@media (min-width: 375px) {
		.visual-container {
			width: 280px;
			height: 280px;
		}
	}

	@media (min-width: 640px) {
		.visual-container {
			width: 360px;
			height: 360px;
		}
	}

	@media (min-width: 1024px) {
		.visual-container {
			width: 400px;
			height: 400px;
		}
	}

	/* Center glow */
	.center-glow {
		position: absolute;
		width: 100px;
		height: 100px;
		background: radial-gradient(circle, rgba(91, 169, 253, 0.25) 0%, transparent 70%);
		border-radius: 50%;
		animation: glow-pulse 3s ease-in-out infinite;
	}

	@media (min-width: 375px) {
		.center-glow {
			width: 110px;
			height: 110px;
		}
	}

	@media (min-width: 640px) {
		.center-glow {
			width: 120px;
			height: 120px;
		}
	}

	@media (min-width: 1024px) {
		.center-glow {
			width: 140px;
			height: 140px;
		}
	}

	@keyframes glow-pulse {
		0%,
		100% {
			transform: scale(1);
			opacity: 0.6;
		}
		50% {
			transform: scale(1.3);
			opacity: 1;
		}
	}

	/* Orbiting tech icons */
	.orbit-container {
		position: absolute;
		inset: 0;
		animation: orbit-rotate 30s linear infinite;
	}

	@keyframes orbit-rotate {
		to {
			transform: rotate(360deg);
		}
	}

	.orbit-item {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 44px;
		height: 44px;
		margin: -22px 0 0 -22px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background: rgba(18, 14, 30, 0.95);
		border: 1.5px solid var(--color);
		border-radius: 12px;
		box-shadow:
			0 0 25px color-mix(in srgb, var(--color) 35%, transparent),
			inset 0 1px 0 rgba(255, 255, 255, 0.08);
		animation: orbit-item 30s linear infinite;
		animation-delay: var(--delay);
		transform: rotate(0deg) translateX(100px) rotate(0deg);
		transition: box-shadow 0.3s ease;
	}

	.orbit-item:hover {
		box-shadow:
			0 0 35px color-mix(in srgb, var(--color) 50%, transparent),
			inset 0 1px 0 rgba(255, 255, 255, 0.1);
	}

	@keyframes orbit-item {
		to {
			transform: rotate(-360deg) translateX(100px) rotate(360deg);
		}
	}

	@media (min-width: 375px) {
		.orbit-item {
			width: 48px;
			height: 48px;
			margin: -24px 0 0 -24px;
			transform: rotate(0deg) translateX(110px) rotate(0deg);
		}

		@keyframes orbit-item {
			to {
				transform: rotate(-360deg) translateX(110px) rotate(360deg);
			}
		}
	}

	@media (min-width: 640px) {
		.orbit-item {
			width: 70px;
			height: 70px;
			margin: -35px 0 0 -35px;
			transform: rotate(0deg) translateX(155px) rotate(0deg);
		}

		@keyframes orbit-item {
			to {
				transform: rotate(-360deg) translateX(155px) rotate(360deg);
			}
		}
	}

	@media (min-width: 1024px) {
		.orbit-item {
			width: 80px;
			height: 80px;
			margin: -40px 0 0 -40px;
			transform: rotate(0deg) translateX(170px) rotate(0deg);
		}

		@keyframes orbit-item {
			to {
				transform: rotate(-360deg) translateX(170px) rotate(360deg);
			}
		}
	}

	.orbit-icon {
		font-size: 1rem;
		color: var(--color);
	}

	@media (min-width: 375px) {
		.orbit-icon {
			font-size: 1.1rem;
		}
	}

	@media (min-width: 640px) {
		.orbit-icon {
			font-size: 1.4rem;
		}
	}

	.orbit-label {
		font-size: 0.45rem;
		font-weight: 700;
		color: rgba(255, 255, 255, 0.85);
		margin-top: 2px;
		text-transform: uppercase;
		letter-spacing: 0.04em;
		display: none;
	}

	@media (min-width: 375px) {
		.orbit-label {
			font-size: 0.5rem;
			display: block;
		}
	}

	@media (min-width: 640px) {
		.orbit-label {
			font-size: 0.55rem;
			margin-top: 3px;
		}
	}

	/* Text container */
	.hero-text-container {
		text-align: center;
		opacity: 0;
		transform: translateY(30px);
		transition: all 0.8s 0.15s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.hero-text-container.animate-in {
		opacity: 1;
		transform: translateY(0);
	}

	/* Eyebrow */
	.eyebrow {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		margin-bottom: 1rem;
	}

	.eyebrow-line {
		width: 20px;
		height: 1px;
		background: linear-gradient(90deg, transparent, #5ba9fd, transparent);
	}

	@media (min-width: 375px) {
		.eyebrow-line {
			width: 30px;
		}
	}

	.eyebrow-text {
		font-size: 0.7rem;
		font-weight: 600;
		letter-spacing: 0.15em;
		text-transform: uppercase;
		color: #5ba9fd;
	}

	@media (min-width: 375px) {
		.eyebrow-text {
			font-size: 0.8rem;
			letter-spacing: 0.2em;
		}
	}

	/* Hero heading */
	.hero-heading {
		font-size: clamp(2rem, 8vw, 5.5rem);
		font-weight: 700;
		line-height: 1.05;
		margin-bottom: 1rem;
	}

	@media (min-width: 375px) {
		.hero-heading {
			font-size: clamp(2.5rem, 10vw, 5.5rem);
			margin-bottom: 1.25rem;
		}
	}

	.greeting {
		display: block;
		color: rgba(255, 255, 255, 0.85);
		font-weight: 400;
		font-size: 0.35em;
		margin-bottom: 0.1em;
		letter-spacing: 0.02em;
	}

	.name-wrapper {
		position: relative;
		display: inline-block;
	}

	.name {
		position: relative;
		background: linear-gradient(135deg, #fff 0%, #5ba9fd 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.name-accent {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 5px;
		background: linear-gradient(90deg, #5ba9fd, #3781d9, #085bb4);
		border-radius: 3px;
		transform: scaleX(0);
		transform-origin: left;
		animation: accent-reveal 0.8s 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
	}

	@keyframes accent-reveal {
		to {
			transform: scaleX(1);
		}
	}

	/* Tagline */
	.hero-tagline {
		font-size: clamp(0.875rem, 2.5vw, 1.25rem);
		line-height: 1.7;
		color: rgba(255, 255, 255, 0.7);
		max-width: 520px;
		margin: 0 auto 1.5rem;
		padding: 0 1rem;
	}

	@media (min-width: 375px) {
		.hero-tagline {
			font-size: clamp(0.95rem, 2.5vw, 1.25rem);
			margin: 0 auto 2rem;
			padding: 0;
		}
	}

	.highlight {
		color: #5ba9fd;
		font-weight: 500;
	}

	/* CTA Buttons */
	.hero-cta {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1rem;
	}

	.cta-primary {
		display: inline-flex;
		align-items: center;
		gap: 0.75rem;
		padding: 0.875rem 1.5rem;
		background: linear-gradient(135deg, #5ba9fd 0%, #3781d9 100%);
		color: #fff;
		font-weight: 600;
		font-size: 0.875rem;
		border-radius: 50px;
		text-decoration: none;
		transition: all 0.3s ease;
		box-shadow: 0 4px 25px rgba(91, 169, 253, 0.35);
	}

	@media (min-width: 375px) {
		.cta-primary {
			padding: 0.9rem 1.75rem;
			font-size: 0.9rem;
		}
	}

	.cta-primary:hover {
		transform: translateY(-2px);
		box-shadow: 0 6px 35px rgba(91, 169, 253, 0.45);
	}

	.cta-arrow {
		width: 16px;
		height: 16px;
		transition: transform 0.3s ease;
	}

	.cta-primary:hover .cta-arrow {
		transform: translateX(4px);
	}

	.cta-secondary {
		display: inline-flex;
		align-items: center;
		padding: 0.875rem 1.5rem;
		background: transparent;
		color: #fff;
		font-weight: 500;
		font-size: 0.875rem;
		border: 1px solid rgba(255, 255, 255, 0.25);
		border-radius: 50px;
		text-decoration: none;
		transition: all 0.3s ease;
	}

	@media (min-width: 375px) {
		.cta-secondary {
			padding: 0.9rem 1.75rem;
			font-size: 0.9rem;
		}
	}

	.cta-secondary:hover {
		background: rgba(255, 255, 255, 0.08);
		border-color: rgba(255, 255, 255, 0.4);
	}

	/* Scroll indicator */
	.scroll-indicator {
		position: relative;
		z-index: 10;
		display: flex;
		justify-content: center;
		padding-bottom: 1.5rem;
		opacity: 0;
		transform: translateY(15px);
		transition: all 0.8s 0.5s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.scroll-indicator.animate-in {
		opacity: 1;
		transform: translateY(0);
	}

	.scroll-indicator a {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
		color: rgba(255, 255, 255, 0.4);
		text-decoration: none;
		transition: color 0.3s ease;
	}

	.scroll-indicator a:hover {
		color: rgba(255, 255, 255, 0.7);
	}

	.scroll-mouse {
		width: 22px;
		height: 36px;
		border: 2px solid currentColor;
		border-radius: 11px;
		display: flex;
		justify-content: center;
		padding-top: 5px;
	}

	.scroll-wheel {
		width: 3px;
		height: 7px;
		background: currentColor;
		border-radius: 2px;
		animation: scroll-bounce 2s ease-in-out infinite;
	}

	@keyframes scroll-bounce {
		0%,
		100% {
			transform: translateY(0);
			opacity: 1;
		}
		50% {
			transform: translateY(6px);
			opacity: 0.4;
		}
	}

	.scroll-text {
		font-size: 0.65rem;
		letter-spacing: 0.15em;
		text-transform: uppercase;
	}
</style>
