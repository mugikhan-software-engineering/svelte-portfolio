<script lang="ts">
	import logo from '$lib/assets/white-logo-background.webp';
	import { scrollIntoView } from '$lib/utils/scroll';
	import { MenuIcon, XIcon } from '@lucide/svelte';

	let mobileMenuOpen = $state(false);

	const navLinks = [
		{ href: '#about', label: 'About' },
		{ href: '#services', label: 'Services' },
		{ href: '#experience', label: 'Experience' },
		{ href: '#contact', label: 'Contact' }
	];

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}

	function handleNavClick(e: MouseEvent) {
		closeMobileMenu();
	}
</script>

<header class="header-container sticky top-0 z-50">
	<nav class="header-nav">
		<!-- Logo -->
		<a href="/" class="logo-link">
			<img
				alt="Mugi Khan - Fullstack Developer"
				class="logo-img"
				src={logo}
				loading="eager"
			/>
		</a>

		<!-- Desktop Navigation -->
		<div class="desktop-nav">
		{#each navLinks as link (link.href)}
			<a
				href={link.href}
				use:scrollIntoView
				class="nav-link"
			>
				{link.label}
			</a>
		{/each}
		</div>

		<!-- Mobile Menu Button -->
		<button
			class="mobile-menu-btn"
			onclick={toggleMobileMenu}
			aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
			aria-expanded={mobileMenuOpen}
		>
			{#if mobileMenuOpen}
				<XIcon size={28} />
			{:else}
				<MenuIcon size={28} />
			{/if}
		</button>
	</nav>

	<!-- Mobile Navigation Overlay -->
	{#if mobileMenuOpen}
		<button
			class="mobile-overlay"
			onclick={closeMobileMenu}
			aria-label="Close menu"
		></button>
	{/if}

	<!-- Mobile Navigation Panel -->
	<div class="mobile-nav" class:mobile-nav-open={mobileMenuOpen}>
		<div class="mobile-nav-content">
		{#each navLinks as link, i (link.href)}
			<a
				href={link.href}
				use:scrollIntoView
				class="mobile-nav-link"
				onclick={handleNavClick}
				style="animation-delay: {i * 50}ms"
			>
				<span class="mobile-nav-number">0{i + 1}</span>
				<span class="mobile-nav-label">{link.label}</span>
			</a>
		{/each}
		</div>
	</div>
</header>

<style>
	.header-container {
		background: linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4c1d95 100%);
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
	}

	.header-nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.75rem 1.5rem;
		max-width: 1400px;
		margin: 0 auto;
	}

	.logo-link {
		display: flex;
		align-items: center;
		transition: transform 0.2s ease;
	}

	.logo-link:hover {
		transform: scale(1.02);
	}

	.logo-img {
		height: auto;
		width: 160px;
	}

	@media (min-width: 640px) {
		.logo-img {
			width: 200px;
		}
	}

	/* Desktop Navigation */
	.desktop-nav {
		display: none;
		gap: 0.5rem;
	}

	@media (min-width: 768px) {
		.desktop-nav {
			display: flex;
		}
	}

	.nav-link {
		position: relative;
		padding: 0.625rem 1.25rem;
		font-size: 0.9rem;
		font-weight: 500;
		letter-spacing: 0.025em;
		color: rgba(255, 255, 255, 0.9);
		text-decoration: none;
		border-radius: 0.5rem;
		transition: all 0.25s ease;
	}

	.nav-link::after {
		content: '';
		position: absolute;
		bottom: 4px;
		left: 50%;
		width: 0;
		height: 2px;
		background: linear-gradient(90deg, #a78bfa, #c4b5fd);
		border-radius: 1px;
		transition: all 0.25s ease;
		transform: translateX(-50%);
	}

	.nav-link:hover {
		color: #fff;
		background: rgba(255, 255, 255, 0.1);
	}

	.nav-link:hover::after {
		width: calc(100% - 2.5rem);
	}

	/* Mobile Menu Button */
	.mobile-menu-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.5rem;
		color: #fff;
		background: rgba(255, 255, 255, 0.1);
		border: none;
		border-radius: 0.5rem;
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.mobile-menu-btn:hover {
		background: rgba(255, 255, 255, 0.2);
	}

	@media (min-width: 768px) {
		.mobile-menu-btn {
			display: none;
		}
	}

	/* Mobile Overlay */
	.mobile-overlay {
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.6);
		backdrop-filter: blur(4px);
		z-index: 40;
		border: none;
		cursor: pointer;
		animation: fadeIn 0.2s ease;
	}

	@keyframes fadeIn {
		from { opacity: 0; }
		to { opacity: 1; }
	}

	/* Mobile Navigation Panel */
	.mobile-nav {
		position: fixed;
		top: 0;
		right: 0;
		height: 100vh;
		width: 280px;
		background: linear-gradient(180deg, #1e1b4b 0%, #312e81 100%);
		z-index: 50;
		transform: translateX(100%);
		transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		box-shadow: -4px 0 30px rgba(0, 0, 0, 0.4);
	}

	.mobile-nav-open {
		transform: translateX(0);
	}

	@media (min-width: 768px) {
		.mobile-nav {
			display: none;
		}
	}

	.mobile-nav-content {
		display: flex;
		flex-direction: column;
		padding: 5rem 1.5rem 2rem;
		gap: 0.5rem;
	}

	.mobile-nav-link {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1rem 1.25rem;
		color: rgba(255, 255, 255, 0.9);
		text-decoration: none;
		border-radius: 0.75rem;
		transition: all 0.25s ease;
		animation: slideIn 0.3s ease forwards;
		opacity: 0;
		transform: translateX(20px);
	}

	@keyframes slideIn {
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}

	.mobile-nav-link:hover {
		background: rgba(255, 255, 255, 0.1);
		transform: translateX(4px);
	}

	.mobile-nav-number {
		font-size: 0.75rem;
		font-weight: 600;
		color: #a78bfa;
		font-family: 'Montserrat', monospace;
	}

	.mobile-nav-label {
		font-size: 1.125rem;
		font-weight: 500;
		letter-spacing: 0.025em;
	}
</style>

