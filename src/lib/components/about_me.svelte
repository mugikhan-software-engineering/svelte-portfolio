<script lang="ts">
	import { onMount } from 'svelte';
	import { MapPinIcon, GraduationCapIcon, MailIcon, HeartIcon } from '@lucide/svelte';

	let mounted = $state(false);

	onMount(() => {
		setTimeout(() => {
			mounted = true;
		}, 150);
	});

	const currentLocation = 'Cape Town, South Africa';
	const education = {
		degree: 'BEngSc - Digital Arts',
		institution: 'University of the Witwatersrand'
	};
	const interests = [
		{ name: 'Development', icon: '💻' },
		{ name: 'Travel', icon: '✈️' },
		{ name: 'Soccer', icon: '⚽' },
		{ name: 'Cricket', icon: '🏏' },
		{ name: 'Fitness', icon: '💪' }
	];

	const intro = {
		paragraph1:
			"With over 5 years of experience as a fullstack developer, I've had the privilege of working across diverse environments—from agile startups to established corporate clients. My journey has taken me through teams ranging from tight-knit groups of 3 to larger organizations with 30+ members, each experience enriching my understanding of collaborative development.",
		paragraph2:
			"I'm passionate about staying at the forefront of technology, continuously exploring modern frameworks like Flutter, and Svelte.",
		paragraph3:
			"Whether you're looking to build a mobile app, launch an e-commerce platform, or scale your backend infrastructure, I bring a holistic approach that considers both technical excellence and business objectives. Let's collaborate to bring your vision to life."
	};
</script>

<div class="about-section">
	<div class="about-container" class:animate-in={mounted}>
		<!-- Main Introduction -->
		<div class="intro-card">
			<div class="intro-header">
				<div class="intro-accent"></div>
				<h2 class="intro-title">About Me</h2>
			</div>
			<div class="intro-content">
				<p class="intro-paragraph">{intro.paragraph1}</p>
				<p class="intro-paragraph">{intro.paragraph2}</p>
				<p class="intro-paragraph">{intro.paragraph3}</p>
			</div>
		</div>

		<!-- Info Cards Grid -->
		<div class="info-grid">
			<!-- Location Card -->
			<div class="info-card" style="--delay: 0.1s">
				<div class="card-icon-wrapper" style="--card-color: #5ba9fd">
					<MapPinIcon size={24} />
				</div>
				<div class="card-content">
					<h3 class="card-title">Location</h3>
					<p class="card-text">{currentLocation}</p>
				</div>
			</div>

			<!-- Education Card -->
			<div class="info-card" style="--delay: 0.2s">
				<div class="card-icon-wrapper" style="--card-color: #3781d9">
					<GraduationCapIcon size={24} />
				</div>
				<div class="card-content">
					<h3 class="card-title">Education</h3>
					<p class="card-text">{education.degree}</p>
					<p class="card-subtext">{education.institution}</p>
				</div>
			</div>

			<!-- Contact Card -->
			<div class="info-card" style="--delay: 0.3s">
				<div class="card-icon-wrapper" style="--card-color: #FF9900">
					<MailIcon size={24} />
				</div>
				<div class="card-content">
					<h3 class="card-title">Get In Touch</h3>
					<a href="mailto:mugikhan@gmail.com" class="card-link">mugikhan@gmail.com</a>
					<p class="card-subtext">Available for new projects</p>
				</div>
			</div>

			<!-- Interests Card -->
			<div class="info-card" style="--delay: 0.4s">
				<div class="card-icon-wrapper" style="--card-color: #FA7343">
					<HeartIcon size={24} />
				</div>
				<div class="card-content">
					<h3 class="card-title">Interests</h3>
					<div class="interests-grid">
						{#each interests as interest (interest.name)}
							<div class="interest-item">
								<span class="interest-icon">{interest.icon}</span>
								<span class="interest-name">{interest.name}</span>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.about-section {
		width: 100%;
		padding: 2rem 1.5rem;
	}

	@media (min-width: 768px) {
		.about-section {
			padding: 3rem 2rem;
		}
	}

	.about-container {
		max-width: 1200px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: 2.5rem;
		opacity: 0;
		transform: translateY(30px);
		transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.about-container.animate-in {
		opacity: 1;
		transform: translateY(0);
	}

	/* Intro Card */
	.intro-card {
		background: linear-gradient(145deg, rgba(22, 19, 35, 0.95), rgba(15, 12, 28, 0.98));
		border: 1px solid rgba(91, 169, 253, 0.15);
		border-radius: 20px;
		padding: 2.5rem;
		box-shadow:
			0 20px 60px -15px rgba(0, 0, 0, 0.5),
			0 0 40px rgba(91, 169, 253, 0.08),
			inset 0 1px 0 rgba(255, 255, 255, 0.05);
		transition: all 0.3s ease;
	}

	.intro-card:hover {
		border-color: rgba(91, 169, 253, 0.25);
		box-shadow:
			0 25px 70px -15px rgba(0, 0, 0, 0.6),
			0 0 50px rgba(91, 169, 253, 0.12),
			inset 0 1px 0 rgba(255, 255, 255, 0.08);
	}

	.intro-header {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-bottom: 1.5rem;
	}

	.intro-accent {
		width: 4px;
		height: 40px;
		background: linear-gradient(180deg, #5ba9fd, #3781d9);
		border-radius: 2px;
	}

	.intro-title {
		font-size: 1.75rem;
		font-weight: 700;
		background: linear-gradient(135deg, #fff 0%, #5ba9fd 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		margin: 0;
	}

	.intro-content {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	.intro-paragraph {
		font-size: 1rem;
		line-height: 1.8;
		color: rgba(255, 255, 255, 0.75);
		margin: 0;
	}

	@media (min-width: 768px) {
		.intro-paragraph {
			font-size: 1.05rem;
		}
	}

	/* Info Grid */
	.info-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 1.5rem;
	}

	@media (min-width: 1024px) {
		.info-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	/* Info Card */
	.info-card {
		background: linear-gradient(145deg, rgba(22, 19, 35, 0.9), rgba(15, 12, 28, 0.95));
		border: 1px solid rgba(91, 169, 253, 0.1);
		border-radius: 16px;
		padding: 1.75rem;
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
		box-shadow:
			0 10px 40px -10px rgba(0, 0, 0, 0.4),
			0 0 20px rgba(91, 169, 253, 0.05),
			inset 0 1px 0 rgba(255, 255, 255, 0.03);
		transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
		opacity: 0;
		transform: translateY(20px);
		animation: card-fade-in 0.6s ease forwards;
		animation-delay: var(--delay);
	}

	@keyframes card-fade-in {
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.info-card:hover {
		border-color: var(--card-color);
		transform: translateY(-4px);
		box-shadow:
			0 15px 50px -10px rgba(0, 0, 0, 0.5),
			0 0 30px color-mix(in srgb, var(--card-color) 20%, transparent),
			inset 0 1px 0 rgba(255, 255, 255, 0.05);
	}

	.card-icon-wrapper {
		width: 56px;
		height: 56px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: linear-gradient(
			135deg,
			color-mix(in srgb, var(--card-color) 15%, transparent),
			color-mix(in srgb, var(--card-color) 8%, transparent)
		);
		border: 1px solid color-mix(in srgb, var(--card-color) 25%, transparent);
		border-radius: 14px;
		color: var(--card-color);
		box-shadow: 0 0 20px color-mix(in srgb, var(--card-color) 15%, transparent);
		transition: all 0.3s ease;
	}

	.info-card:hover .card-icon-wrapper {
		transform: scale(1.05);
		box-shadow: 0 0 30px color-mix(in srgb, var(--card-color) 25%, transparent);
	}

	.card-content {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.card-title {
		font-size: 0.95rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: rgba(255, 255, 255, 0.9);
		margin: 0;
	}

	.card-text {
		font-size: 1rem;
		line-height: 1.6;
		color: rgba(255, 255, 255, 0.7);
		margin: 0;
	}

	.card-subtext {
		font-size: 0.875rem;
		line-height: 1.5;
		color: rgba(255, 255, 255, 0.5);
		margin: 0;
	}

	.card-link {
		font-size: 1rem;
		color: #5ba9fd;
		text-decoration: none;
		transition: all 0.2s ease;
		display: inline-block;
	}

	.card-link:hover {
		color: #3781d9;
		text-decoration: underline;
	}

	/* Interests Grid */
	.interests-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 0.75rem;
	}

	.interest-item {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.625rem 0.875rem;
		background: rgba(91, 169, 253, 0.08);
		border: 1px solid rgba(91, 169, 253, 0.15);
		border-radius: 10px;
		transition: all 0.2s ease;
	}

	.interest-item:hover {
		background: rgba(91, 169, 253, 0.12);
		border-color: rgba(91, 169, 253, 0.25);
		transform: translateY(-2px);
	}

	.interest-icon {
		font-size: 1.1rem;
	}

	.interest-name {
		font-size: 0.875rem;
		font-weight: 500;
		color: rgba(255, 255, 255, 0.8);
	}

	/* Responsive */
	@media (max-width: 640px) {
		.about-section {
			padding: 1.5rem 1rem;
		}

		.intro-card {
			padding: 1.75rem;
		}

		.intro-title {
			font-size: 1.5rem;
		}

		.intro-paragraph {
			font-size: 0.95rem;
		}

		.info-grid {
			grid-template-columns: 1fr;
		}

		.info-card {
			padding: 1.5rem;
		}

		.interests-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
