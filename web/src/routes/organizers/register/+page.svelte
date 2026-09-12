<script lang="ts">
	import type { PageData, ActionData } from './$types';
	import Meta from '$lib/components/meta.svelte';
	let { data, form }: { data: PageData; form: ActionData } = $props();
</script>

<Meta title="Register" description="Register as an organizer" />

<hgroup>
	<h2>Already an organizer? Register here!</h2>
	<p>
		Provide your information below and you can submit it for approval to be included in this site!
	</p>
</hgroup>

<form method="POST">
	<label for="name"> Name </label>
	<input name="name" type="text" required />
	<label for="email">
		Email
	</label>
	<input name="email" type="email" required />
	<button class="button">Register</button>

	{#if form?.success === true}
		Within a few days your account will be approved and you can publish your event!
	{/if}

	{#if form?.success === false}
		There was an issue submitting your page information. Try again or email us!
	{/if}
</form>

<br />

<h2>Want to start a Repair Cafe?</h2>

<p>
	Aside from registering above, here are some helpful resources for starting a repair cafe in your
	community.
</p>

<a href="https://www.maine.gov/dep/waste/recycle/documents/starting-a-repair-clinic.pdf"
	>A guide from Maine Department of Environmental Protection</a
>

<h4>Printables/pamphlets/flyers</h4>
<ul>
	<li>
		<a href="https://makeityourown.carrd.co/">A zine with information on clothing mending</a>
	</li>

	<li>
		<a href="https://www.maine.gov/dep/waste/recycle/documents/starting-a-repair-clinic.pdf"
			>A zine</a
		>
	</li>
</ul>

<style>
	form {
		display: grid;
		margin: 2rem 3rem;
		gap: 0.4rem;
	}
</style>
