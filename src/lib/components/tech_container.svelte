<script lang="ts">
	export let imageUrl: string;
	export let imageAlt: string;
</script>

<div
	class="m-5 flex h-24 w-24 shrink-0 snap-start flex-col place-content-center items-center md:h-36 md:w-36"
>
	<img src={imageUrl} alt={imageAlt} class="flex-1 object-contain object-center p-5" />

	<div class="flex-0 place-content-center items-center">
		<h1 class="text-md base-font-color font-bold">{imageAlt}</h1>
	</div>
</div>
