<script lang="ts">
	import { kopanoAi, dynexIt, entelectStdBank, entelectOM } from '$lib/experience';
	import experienceCard from '$lib/components/experience_card.svelte';
</script>

<div
	class="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent"
>
	<!-- Item #1 -->
	<div
		class="relative flex md:flex-row items-center justify-start md:items-center md:justify-between group is-active flex-wrap"
	>
		<svelte:component this={experienceCard} experience={entelectOM} order="order-2 md:order-1" />
		<!-- Icon -->
		<div
			class="flex items-center justify-center w-10 h-10 rounded-full bg-surface-50 shadow shrink-0 order-1 md:order-2 p-1"
		>
			<svg viewBox="0 0 128 128">
				<g fill="#3FB6D3"
					><path
						d="M12.3 64.2L76.3 0h39.4L32.1 83.6zM76.3 128h39.4L81.6 93.9l34.1-34.8H76.3L42.2 93.5z"
					/></g
				><path fill="#27AACD" d="M81.6 93.9l-20-20-19.4 19.6 19.4 19.6z" /><path
					fill="#19599A"
					d="M115.7 128L81.6 93.9l-20 19.2L76.3 128z"
				/><linearGradient
					id="flutter-original-a"
					gradientUnits="userSpaceOnUse"
					x1="59.365"
					y1="116.36"
					x2="86.825"
					y2="99.399"
					><stop offset="0" stop-color="#1b4e94" /><stop offset=".63" stop-color="#1a5497" /><stop
						offset="1"
						stop-color="#195a9b"
					/></linearGradient
				><path fill="url(#flutter-original-a)" d="M61.6 113.1l30.8-8.4-10.8-10.8z" />
			</svg>
		</div>
		<!-- Card -->
		<div class="hidden md:flex flex-1 w-[calc(100%-4rem)] p-4 rounded mx-5 order-3 md:order-3">
			<div class="flex flex-row items-end justify-end space-x-2">
				<div class="font-bold">
					<time datetime="2018-04-01">{entelectOM.dateFrom}</time>
					-
					<time datetime="2018-10-30">{entelectOM.dateTo}</time>
				</div>
			</div>
		</div>
	</div>

	<!-- Item #2 -->
	<div
		class="relative flex md:flex-row items-center justify-start md:items-center md:justify-between group is-active flex-wrap"
	>
		<div
			class="hidden md:flex items-end justify-end flex-1 w-[calc(100%-4rem)] p-4 rounded mx-5 order-2 md:order-1"
		>
			<div class="flex flex-row items-end justify-end space-x-2">
				<div class="font-bold">
					<time datetime="2018-08-30">{entelectStdBank.dateFrom}</time>
					-
					<time datetime="2020-12-30">{entelectStdBank.dateTo}</time>
				</div>
			</div>
		</div>

		<!-- Icon -->
		<div
			class="flex items-center justify-center w-10 h-10 rounded-full bg-surface-50 text-white-500 shadow shrink-0 order-1 md:order-2 p-1"
		>
			<svg
				version="1.1"
				id="Layer_1"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				viewBox="0 0 512 512"
				xml:space="preserve"
			>
				<path
					style="fill:#333333;"
					d="M368,512H144c-17.6,0-32-14.4-32-32V32c0-17.6,14.4-32,32-32h224c17.6,0,32,14.4,32,32v448C400,497.6,385.6,512,368,512z"
				/>
				<rect x="135.456" y="50.672" style="fill:#0BA4E0;" width="241.28" height="372" />
				<g>
					<path
						style="fill:#D6D6D6;"
						d="M256.176,489.44c-12.496,0-22.656-10.16-22.656-22.656s10.16-22.672,22.656-22.672s22.672,10.176,22.672,22.672S268.672,489.44,256.176,489.44z M256.176,452.112c-8.08,0-14.656,6.576-14.656,14.672c0,8.08,6.576,14.656,14.656,14.656c8.096,0,14.672-6.576,14.672-14.656C270.848,458.688,264.272,452.112,256.176,452.112z"
					/>
					<circle style="fill:#D6D6D6;" cx="256.16" cy="25.328" r="7.792" />
					<circle style="fill:#D6D6D6;" cx="312.816" cy="25.328" r="7.792" />
					<circle style="fill:#D6D6D6;" cx="337.44" cy="25.328" r="7.792" />
				</g>
				<g>
					<rect x="169.904" y="285.008" style="fill:#FFFFFF;" width="48.928" height="16" />
					<rect x="169.904" y="247.456" style="fill:#FFFFFF;" width="90.016" height="16" />
					<rect x="169.904" y="209.92" style="fill:#FFFFFF;" width="131.104" height="16" />
					<rect x="169.904" y="172.336" style="fill:#FFFFFF;" width="172.192" height="16" />
				</g>
			</svg>
		</div>
		<!-- Card -->
		<svelte:component
			this={experienceCard}
			experience={entelectStdBank}
			order="order-3 md:order-3"
		/>
	</div>

	<!-- Item #3 -->
	<div
		class="relative flex md:flex-row items-center justify-start md:items-center md:justify-between group is-active flex-wrap"
	>
		<svelte:component this={experienceCard} experience={dynexIt} order="order-2 md:order-1" />
		<!-- Icon -->
		<div
			class="flex items-center justify-center w-10 h-10 rounded-full bg-surface-50 text-white-500 shadow shrink-0 order-1 md:order-2 p-1"
		>
			<svg viewBox="0 0 128 128">
				<g fill="#3FB6D3"
					><path
						d="M12.3 64.2L76.3 0h39.4L32.1 83.6zM76.3 128h39.4L81.6 93.9l34.1-34.8H76.3L42.2 93.5z"
					/></g
				><path fill="#27AACD" d="M81.6 93.9l-20-20-19.4 19.6 19.4 19.6z" /><path
					fill="#19599A"
					d="M115.7 128L81.6 93.9l-20 19.2L76.3 128z"
				/><linearGradient
					id="flutter-original-a"
					gradientUnits="userSpaceOnUse"
					x1="59.365"
					y1="116.36"
					x2="86.825"
					y2="99.399"
					><stop offset="0" stop-color="#1b4e94" /><stop offset=".63" stop-color="#1a5497" /><stop
						offset="1"
						stop-color="#195a9b"
					/></linearGradient
				><path fill="url(#flutter-original-a)" d="M61.6 113.1l30.8-8.4-10.8-10.8z" />
			</svg>
		</div>
		<!-- Card -->
		<div class="hidden md:flex flex-1 w-[calc(100%-4rem)] p-4 rounded mx-5 order-3 md:order-3">
			<div class="flex items-center justify-between space-x-2">
				<div class="font-bold">
					<time datetime="2018-04-01">{dynexIt.dateFrom}</time>
					-
					<time datetime="2018-10-30">{dynexIt.dateTo}</time>
				</div>
			</div>
		</div>
	</div>

	<!-- Item #4 -->
	<div
		class="relative flex md:flex-row items-center justify-start md:items-center md:justify-between group is-active flex-wrap"
	>
		<svelte:component this={experienceCard} experience={kopanoAi} order="order-3 md:order-3" />
		<!-- Icon -->
		<div
			class="flex items-center justify-center w-10 h-10 rounded-full bg-surface-50 text-white-500 shadow shrink-0 order-1 md:order-2 p-1"
		>
			<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z"
					fill="#53C1DE"
				/>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6942 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5416 20.3793 11.5771ZM16.0143 8.0481C16.6054 8.66897 17.1974 9.3623 17.7798 10.1145C16.5985 10.0603 15.4153 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8365 22.6531 14.2448 21.8971C15.4328 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9057 19.1657 23.1742 19.9809C22.3043 20.1734 21.3652 20.3284 20.3757 20.4435C21.015 19.4607 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1016 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7561 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z"
					fill="#53C1DE"
				/>
			</svg>
		</div>
		<!-- Card -->
		<div
			class="hidden items-end justify-end md:flex flex-1 w-[calc(100%-4rem)] p-4 rounded mx-5 order-2 md:order-1"
		>
			<div class="flex flex-row items-end justify-end space-x-2">
				<div class="font-bold">
					<time datetime="2018-04-01">{kopanoAi.dateFrom}</time>
					-
					<time datetime="2018-10-30">{kopanoAi.dateTo}</time>
				</div>
			</div>
		</div>
	</div>
</div>
