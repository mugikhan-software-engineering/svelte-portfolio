<script lang="ts">
	let { title, subtitle }: { title: string; subtitle: string } = $props();
</script>

<div class="section-title">
	<div class="title-eyebrow">
		<span class="eyebrow-line"></span>
		<span class="eyebrow-text text-primary">{title}</span>
		<span class="eyebrow-line"></span>
	</div>
	<h2 class="title-heading">{subtitle}</h2>
</div>

<style>
	.section-title {
		width: 100%;
		padding: 0 1.5rem 2rem;
		text-align: center;
	}

	@media (min-width: 768px) {
		.section-title {
			padding: 0 2rem 2.5rem;
		}
	}

	.title-eyebrow {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		margin-bottom: 0.75rem;
	}

	.eyebrow-line {
		width: 40px;
		height: 1px;
		background: linear-gradient(90deg, transparent, #5ba9fd, transparent);
	}

	@media (min-width: 640px) {
		.eyebrow-line {
			width: 60px;
		}
	}

	.eyebrow-text {
		font-size: 0.8rem;
		font-weight: 600;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		white-space: nowrap;
	}

	@media (min-width: 768px) {
		.eyebrow-text {
			font-size: 0.875rem;
		}
	}

	.title-heading {
		font-size: clamp(2rem, 6vw, 3.5rem);
		font-weight: 700;
		line-height: 1.1;
		background: linear-gradient(135deg, #fff 0%, #5ba9fd 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		margin: 0;
	}
</style>
