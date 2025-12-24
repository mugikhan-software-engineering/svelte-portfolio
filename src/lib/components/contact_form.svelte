<script lang="ts">
	import { enhance, applyAction } from '$app/forms';
	import { SyncLoader } from 'svelte-loading-spinners';
	import { Turnstile } from 'svelte-turnstile';
	import { showErrorToast, showSuccessToast } from '$lib/toasts/toaster-svelte';
	import { AtSignIcon, LinkedinIcon, GithubIcon, Send } from '@lucide/svelte';

	let email = $state('');
	let loading = $state(false);
	let reset: (() => void) | undefined = $state(undefined);

	let active_class = $derived(loading ? 'loading pointer-events-none opacity-30' : '');
</script>

<div class="contact-form-container">
	<form
		novalidate
		class="contact-form group"
		method="POST"
		action="?/sendEmail"
		use:enhance={({ formElement }) => {
			loading = true;
			return async ({ result, update }) => {
				loading = false;
				if (result.type === 'success') {
					formElement.reset();
					const data = result.data as { success: boolean; description: string } | undefined;
					if (data?.description) {
						showSuccessToast(data.description);
					}
				} else if (result.type === 'failure') {
					const data = result.data as { description: string; error: string } | undefined;
					if (data?.description) {
						showErrorToast(data.description);
					}
				}
				await applyAction(result);
				reset?.();
				await update({ reset: false });
			};
		}}
	>
		<div class="form-row">
			<label class="form-label">
				<span class="label-text">Name</span>
				<input name="name" class="form-input peer" type="text" placeholder="Your name" required />
				<span class="error-message peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
					Please enter your name
				</span>
			</label>
			<label class="form-label">
				<span class="label-text">Email</span>
				<input
					name="email"
					class="form-input peer"
					type="email"
					placeholder="Your email"
					autocomplete="email"
					required
					bind:value={email}
				/>
				<span class="error-message peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
					Please enter a valid email address
				</span>
			</label>
		</div>

		<label class="form-label">
			<span class="label-text">What are you interested in?</span>
			<select name="service" class="form-select" required>
				<option value="Crossplatform mobile application">Crossplatform mobile application</option>
				<option value="Responsive website">Responsive website</option>
				<option value="Ecommerce website">Ecommerce website</option>
				<option value="Other">Other</option>
			</select>
		</label>
		<label class="form-label">
			<span class="label-text">Message</span>
			<div class="textarea-wrapper">
				<textarea
					class="form-textarea peer"
					rows="4"
					required
					minlength="20"
					maxlength="1000"
					placeholder="Let me know a little about your idea or project..."
					name="message"
				></textarea>
				<span class="error-message peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
					Please enter message longer than 20 characters
				</span>
			</div>
		</label>
		<div class="turnstile-wrapper">
			<Turnstile siteKey="0x4AAAAAAAevj-w71wPNa1Ya" bind:reset />
		</div>
		<div
			class="submit-wrapper group-invalid:pointer-events-none group-invalid:opacity-30 {active_class}"
		>
			<button type="submit" class="submit-button text-center">
				{#if loading}
					<span class="button-text">Sending</span>
					<SyncLoader size="20" color="#ffffff" unit="px" duration="1s" />
				{:else}
					<span class="button-text">Send Message</span>
					<Send size={20} />
				{/if}
			</button>
		</div>
	</form>

	<!-- Social Links -->
	<div class="social-links">
		<a href="mailto:mugikhan@gmail.com" class="social-link">
			<AtSignIcon size={24} />
			<span>Email</span>
		</a>
		<a
			href="https://www.linkedin.com/in/mughees-khan-9261aa15b/"
			target="_blank"
			rel="noopener noreferrer"
			class="social-link"
		>
			<LinkedinIcon size={24} />
			<span>LinkedIn</span>
		</a>
		<a
			href="https://github.com/mugikhan"
			target="_blank"
			rel="noopener noreferrer"
			class="social-link"
		>
			<GithubIcon size={24} />
			<span>GitHub</span>
		</a>
	</div>
</div>

<style>
	.contact-form-container {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem 1.5rem;
		width: 100%;
	}

	@media (min-width: 768px) {
		.contact-form-container {
			padding: 3rem 2rem;
		}
	}

	.contact-form {
		background: linear-gradient(145deg, rgba(22, 19, 35, 0.95), rgba(15, 12, 28, 0.98));
		border: 1px solid rgba(91, 169, 253, 0.15);
		border-radius: 20px;
		padding: 2.5rem;
		box-shadow:
			0 20px 60px -15px rgba(0, 0, 0, 0.5),
			0 0 40px rgba(91, 169, 253, 0.08),
			inset 0 1px 0 rgba(255, 255, 255, 0.05);
	}

	@media (max-width: 640px) {
		.contact-form {
			padding: 1.5rem;
		}
	}

	.form-row {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		margin-bottom: 1.5rem;
	}

	@media (min-width: 768px) {
		.form-row {
			flex-direction: row;
			gap: 1.5rem;
		}
	}

	.form-label {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		flex: 1;
	}

	.label-text {
		font-size: 0.9rem;
		font-weight: 600;
		color: rgba(255, 255, 255, 0.9);
		letter-spacing: 0.02em;
	}

	.form-input,
	.form-select,
	.form-textarea {
		width: 100%;
		padding: 0.875rem 1.25rem;
		background: rgba(15, 12, 28, 0.6);
		border: 1px solid rgba(91, 169, 253, 0.2);
		border-radius: 12px;
		color: rgba(255, 255, 255, 0.9);
		font-size: 0.95rem;
		transition: all 0.3s ease;
		outline: none;
	}

	.form-input::placeholder,
	.form-textarea::placeholder {
		color: rgba(255, 255, 255, 0.4);
	}

	.form-input:focus,
	.form-select:focus,
	.form-textarea:focus {
		border-color: #5ba9fd;
		background: rgba(15, 12, 28, 0.8);
		box-shadow:
			0 0 0 3px rgba(91, 169, 253, 0.1),
			0 0 20px rgba(91, 169, 253, 0.15);
	}

	.form-input:invalid:not(:placeholder-shown):not(:focus),
	.form-textarea:invalid:not(:placeholder-shown):not(:focus) {
		border-color: #ef4444;
	}

	.form-select {
		cursor: pointer;
		appearance: none;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%235ba9fd' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
		background-repeat: no-repeat;
		background-position: right 1rem center;
		padding-right: 2.5rem;
	}

	.form-textarea {
		resize: vertical;
		min-height: 120px;
		font-family: inherit;
		line-height: 1.6;
	}

	.textarea-wrapper {
		display: flex;
		flex-direction: column;
	}

	.error-message {
		display: none;
		font-size: 0.85rem;
		color: #ef4444;
		margin-top: 0.5rem;
	}

	.turnstile-wrapper {
		display: flex;
		justify-content: center;
		margin: 2rem 0;
	}

	.submit-wrapper {
		display: flex;
		justify-content: center;
		margin-top: 1.5rem;
	}

	.submit-button {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.75rem;
		padding: 1rem 2.5rem;
		background: linear-gradient(135deg, #5ba9fd 0%, #3781d9 100%);
		border: none;
		border-radius: 12px;
		color: white;
		font-size: 1rem;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.3s ease;
		box-shadow:
			0 4px 15px rgba(91, 169, 253, 0.3),
			inset 0 1px 0 rgba(255, 255, 255, 0.2);
	}

	.button-text {
		display: inline-flex;
		align-items: center;
		line-height: 1;
	}

	.submit-button:hover:not(:disabled) {
		transform: translateY(-2px);
		box-shadow:
			0 6px 20px rgba(91, 169, 253, 0.4),
			inset 0 1px 0 rgba(255, 255, 255, 0.2);
		background: linear-gradient(135deg, #6bb3ff 0%, #4a8fe8 100%);
	}

	.submit-button:active:not(:disabled) {
		transform: translateY(0);
	}

	.submit-button:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}

	.send-icon {
		transition: transform 0.3s ease;
	}

	.social-links {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2rem;
		margin-top: 3rem;
		padding-top: 2rem;
		border-top: 1px solid rgba(91, 169, 253, 0.15);
	}

	.social-link {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
		color: rgba(255, 255, 255, 0.7);
		text-decoration: none;
		transition: all 0.3s ease;
		padding: 0.75rem;
		border-radius: 12px;
	}

	.social-link:hover {
		color: #5ba9fd;
		transform: translateY(-2px);
		background: rgba(91, 169, 253, 0.1);
	}

	.social-link span {
		font-size: 0.9rem;
		font-weight: 500;
	}

	@media (max-width: 640px) {
		.contact-form-container {
			padding: 1.5rem 1rem;
		}

		.contact-form {
			padding: 1.25rem;
		}

		.submit-button {
			width: 100%;
			justify-content: center;
			padding: 0.875rem 2rem;
		}

		.social-links {
			gap: 1.5rem;
			margin-top: 2rem;
			padding-top: 1.5rem;
		}

		.social-link {
			padding: 0.5rem;
		}

		.social-link span {
			font-size: 0.85rem;
		}
	}
</style>
