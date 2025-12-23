import type { Action } from 'svelte/action';

export const scrollIntoView: Action<HTMLAnchorElement> = (node) => {
	function handleClick(e: MouseEvent) {
		e.preventDefault();
		const href = node.getAttribute('href');
		if (!href) return;

		const target = document.querySelector(href);
		if (!target) return;

		target.scrollIntoView({
			behavior: 'smooth',
			block: 'center'
		});
	}

	node.addEventListener('click', handleClick);

	return {
		destroy() {
			node.removeEventListener('click', handleClick);
		}
	};
};
