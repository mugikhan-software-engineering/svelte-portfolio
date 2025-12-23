<script lang="ts">
	import { onMount } from 'svelte';
	import {
		SmartphoneIcon,
		GlobeIcon,
		ServerIcon,
		ShoppingCartIcon,
		ZapIcon,
		CloudIcon,
		SparklesIcon,
		WrenchIcon
	} from '@lucide/svelte';
	import { inview, type Options } from 'svelte-inview';

	let mounted = $state(false);
	let isInView = $state(false);

	onMount(() => {
		setTimeout(() => {
			mounted = true;
		}, 100);
	});

	const options: Options = {
		unobserveOnEnter: true
	};

	const primaryServices = [
		{
			name: 'Mobile Development',
			description: 'Native and cross-platform mobile applications for iOS and Android',
			icon: SmartphoneIcon,
			color: '#5ba9fd',
			features: ['Flutter', 'iOS', 'Android', 'React Native']
		},
		{
			name: 'Web Development',
			description: 'Modern, responsive web applications with cutting-edge frameworks',
			icon: GlobeIcon,
			color: '#FF3E00',
			features: ['Svelte', 'HTML', 'CSS', 'JavaScript', 'TypeScript']
		}
	];

	const secondaryServices = [
		{ name: 'Backend', icon: ServerIcon, color: '#3178C6' },
		{ name: 'Ecommerce', icon: ShoppingCartIcon, color: '#FF9900' },
		{ name: 'API Development', icon: ZapIcon, color: '#FA7343' },
		{ name: 'Cloud Services', icon: CloudIcon, color: '#339933' },
		{ name: 'AI Integration', icon: SparklesIcon, color: '#FF3E00' },
		{ name: 'Maintenance', icon: WrenchIcon, color: '#9d0aff' }
	];
</script>

<div class="services-section">
	<div
		class="services-container"
		class:animate-in={mounted}
		use:inview={options}
		oninview_change={(event) => {
			isInView = event.detail.inView;
		}}
	>
		<!-- Primary Services - Mobile & Web -->
		<div class="primary-services">
			{#each primaryServices as service, i (service.name)}
				<div
					class="primary-card"
					class:card-visible={isInView}
					style="--delay: {i * 0.15}s; --card-color: {service.color}"
				>
					<div class="card-glow" style="--glow-color: {service.color}"></div>
					<div class="card-header">
						<div class="icon-wrapper" style="--icon-color: {service.color}">
							<svelte:component this={service.icon} size={32} />
						</div>
						<h3 class="card-title">{service.name}</h3>
					</div>
					<p class="card-description">{service.description}</p>
					<div class="card-features">
						{#each service.features as feature (feature)}
							<span class="feature-tag">{feature}</span>
						{/each}
					</div>
					<div class="card-accent" style="--accent-color: {service.color}"></div>
				</div>
			{/each}
		</div>

		<!-- Secondary Services Grid -->
		<div class="secondary-services">
			<div class="secondary-header">
				<span class="header-line"></span>
				<h4 class="header-title">Additional Services</h4>
				<span class="header-line"></span>
			</div>
			<div class="secondary-grid">
				{#each secondaryServices as service, i (service.name)}
					<div
						class="secondary-card"
						class:card-visible={isInView}
						style="--delay: {0.3 + i * 0.05}s; --card-color: {service.color}"
					>
						<div class="secondary-icon-wrapper" style="--icon-color: {service.color}">
							<svelte:component this={service.icon} size={20} />
						</div>
						<span class="secondary-label">{service.name}</span>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	.services-section {
		width: 100%;
		padding: 3rem 1.5rem;
	}

	@media (min-width: 768px) {
		.services-section {
			padding: 4rem 2rem;
		}
	}

	.services-container {
		max-width: 1400px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: 3rem;
		opacity: 0;
		transform: translateY(30px);
		transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.services-container.animate-in {
		opacity: 1;
		transform: translateY(0);
	}

	/* Primary Services */
	.primary-services {
		display: grid;
		grid-template-columns: 1fr;
		gap: 2rem;
	}

	@media (min-width: 1024px) {
		.primary-services {
			grid-template-columns: repeat(2, 1fr);
			gap: 2.5rem;
		}
	}

	.primary-card {
		position: relative;
		background: linear-gradient(145deg, rgba(22, 19, 35, 0.95), rgba(15, 12, 28, 0.98));
		border: 1px solid rgba(91, 169, 253, 0.15);
		border-radius: 24px;
		padding: 2.5rem;
		overflow: hidden;
		box-shadow:
			0 20px 60px -15px rgba(0, 0, 0, 0.5),
			0 0 40px rgba(91, 169, 253, 0.08),
			inset 0 1px 0 rgba(255, 255, 255, 0.05);
		transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
		opacity: 0;
		transform: translateY(40px) scale(0.95);
	}

	.primary-card.card-visible {
		animation: card-enter 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
		animation-delay: var(--delay);
	}

	@keyframes card-enter {
		to {
			opacity: 1;
			transform: translateY(0) scale(1);
		}
	}

	.primary-card:hover {
		border-color: var(--card-color);
		transform: translateY(-8px) scale(1.02);
		box-shadow:
			0 30px 80px -15px rgba(0, 0, 0, 0.6),
			0 0 60px color-mix(in srgb, var(--card-color) 20%, transparent),
			inset 0 1px 0 rgba(255, 255, 255, 0.08);
	}

	.card-glow {
		position: absolute;
		top: -50%;
		right: -50%;
		width: 200%;
		height: 200%;
		background: radial-gradient(
			circle,
			color-mix(in srgb, var(--glow-color) 15%, transparent) 0%,
			transparent 70%
		);
		opacity: 0;
		transition: opacity 0.4s ease;
		pointer-events: none;
	}

	.primary-card:hover .card-glow {
		opacity: 1;
	}

	.card-header {
		display: flex;
		align-items: center;
		gap: 1.25rem;
		margin-bottom: 1.5rem;
	}

	.icon-wrapper {
		width: 64px;
		height: 64px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: linear-gradient(
			135deg,
			color-mix(in srgb, var(--icon-color) 20%, transparent),
			color-mix(in srgb, var(--icon-color) 10%, transparent)
		);
		border: 1.5px solid color-mix(in srgb, var(--icon-color) 30%, transparent);
		border-radius: 16px;
		color: var(--icon-color);
		box-shadow: 0 0 30px color-mix(in srgb, var(--icon-color) 20%, transparent);
		transition: all 0.3s ease;
	}

	.primary-card:hover .icon-wrapper {
		transform: scale(1.1) rotate(5deg);
		box-shadow: 0 0 40px color-mix(in srgb, var(--icon-color) 30%, transparent);
	}

	.card-title {
		font-size: 1.75rem;
		font-weight: 700;
		background: linear-gradient(135deg, #fff 0%, var(--card-color) 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		margin: 0;
	}

	.card-description {
		font-size: 1rem;
		line-height: 1.7;
		color: rgba(255, 255, 255, 0.7);
		margin: 0 0 1.5rem 0;
	}

	@media (min-width: 768px) {
		.card-description {
			font-size: 1.05rem;
		}
	}

	.card-features {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		margin-bottom: 1rem;
	}

	.feature-tag {
		padding: 0.5rem 1rem;
		background: rgba(91, 169, 253, 0.1);
		border: 1px solid rgba(91, 169, 253, 0.2);
		border-radius: 8px;
		font-size: 0.875rem;
		font-weight: 500;
		color: rgba(255, 255, 255, 0.8);
		transition: all 0.2s ease;
	}

	.primary-card:hover .feature-tag {
		background: rgba(91, 169, 253, 0.15);
		border-color: rgba(91, 169, 253, 0.3);
	}

	.card-accent {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 3px;
		background: linear-gradient(90deg, var(--accent-color), transparent);
		transform: scaleX(0);
		transform-origin: left;
		transition: transform 0.4s ease;
	}

	.primary-card:hover .card-accent {
		transform: scaleX(1);
	}

	/* Secondary Services */
	.secondary-services {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.secondary-header {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
	}

	.header-line {
		flex: 1;
		height: 1px;
		background: linear-gradient(90deg, transparent, rgba(91, 169, 253, 0.3), transparent);
		max-width: 100px;
	}

	.header-title {
		font-size: 0.875rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.15em;
		color: rgba(255, 255, 255, 0.5);
		margin: 0;
	}

	.secondary-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
		gap: 1rem;
	}

	@media (min-width: 640px) {
		.secondary-grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@media (min-width: 1024px) {
		.secondary-grid {
			grid-template-columns: repeat(6, 1fr);
		}
	}

	.secondary-card {
		background: linear-gradient(145deg, rgba(22, 19, 35, 0.8), rgba(15, 12, 28, 0.85));
		border: 1px solid rgba(91, 169, 253, 0.1);
		border-radius: 14px;
		padding: 1.25rem 1rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.75rem;
		transition: all 0.3s ease;
		opacity: 0;
		transform: translateY(20px);
		box-shadow:
			0 8px 30px -10px rgba(0, 0, 0, 0.3),
			inset 0 1px 0 rgba(255, 255, 255, 0.03);
	}

	.secondary-card.card-visible {
		animation: secondary-enter 0.5s ease forwards;
		animation-delay: var(--delay);
	}

	@keyframes secondary-enter {
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.secondary-card:hover {
		border-color: var(--card-color);
		transform: translateY(-4px);
		box-shadow:
			0 12px 40px -10px rgba(0, 0, 0, 0.4),
			0 0 25px color-mix(in srgb, var(--card-color) 15%, transparent),
			inset 0 1px 0 rgba(255, 255, 255, 0.05);
	}

	.secondary-icon-wrapper {
		width: 44px;
		height: 44px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: linear-gradient(
			135deg,
			color-mix(in srgb, var(--icon-color) 12%, transparent),
			color-mix(in srgb, var(--icon-color) 6%, transparent)
		);
		border: 1px solid color-mix(in srgb, var(--icon-color) 20%, transparent);
		border-radius: 12px;
		color: var(--icon-color);
		transition: all 0.3s ease;
	}

	.secondary-card:hover .secondary-icon-wrapper {
		transform: scale(1.1);
		box-shadow: 0 0 20px color-mix(in srgb, var(--icon-color) 20%, transparent);
	}

	.secondary-label {
		font-size: 0.8rem;
		font-weight: 500;
		color: rgba(255, 255, 255, 0.7);
		text-align: center;
		transition: color 0.2s ease;
	}

	.secondary-card:hover .secondary-label {
		color: rgba(255, 255, 255, 0.9);
	}

	/* Responsive */
	@media (max-width: 640px) {
		.services-section {
			padding: 2rem 1rem;
		}

		.primary-card {
			padding: 2rem 1.5rem;
		}

		.card-title {
			font-size: 1.5rem;
		}

		.secondary-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
