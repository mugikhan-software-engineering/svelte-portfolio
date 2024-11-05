<script lang="ts">
	import { CodeBlock } from '@skeletonlabs/skeleton';

	export let themeMode: boolean;
</script>

<div class="w-full px-6 my-3">
	<CodeBlock
		language="shell"
		background={themeMode ? 'bg-neutral-900/90' : 'bg-slate-800/90'}
		code={`
> .currentLocation
"Cape Town, South Africa"

> .contactInfo
["mugikhan@gmail.com", "LinkedIn", "GitHub"]

> .interests
["development", "travel", "soccer", "cricket", "gym"]

> .education
"BEngSc - Digital Arts - University of the Witwatersrand"

> .intro
"I have been working as a fullstack developer for the past 5 years. I have worked in multiple environments from startups to corporate clients. I have worked in multi-cultural teams varying in size from 3 to 30 team members. I love learning new technologies and frameworks, such as flutter, react or svelte. I have deployed multiple projects including this one to Amazon Web Services (AWS) and traditional web servers. If you are interested in working together, feel free to contact me."

`}
	/>
</div>
