<script lang="ts">
	import { Accordion, type AccordionItem } from 'melt/builders';
	import { _ } from 'svelte-i18n';
	import { localeStore } from '../i18n.svelte';
	import { slide } from 'svelte/transition';
	import { ChevronDown } from '@lucide/svelte';
	import { type Snippet } from 'svelte';

	type Item = AccordionItem<{
		title: string;
	}>;

	const items: Item[] = [];

	const accordion = new Accordion({
		multiple: true
	});
</script>

<div class="accordion-root" {...accordion.root}>
</div>

<style lang="scss">
	.accordion-root {
		width: 100%;
	}
</style>
