<script lang="ts">
	import type { PageData, ActionData } from './$types';
	import Meta from '$lib/components/meta.svelte';
	let { data, form }: { data: PageData; form: ActionData } = $props();
</script>

<Meta title="Register" description="Register as an organizer" />

<hgroup>
	<h2>Register as an organizer</h2>
	<p>
		Provide your information below and you can submit it for approval to be included in this site!
	</p>
</hgroup>

<form method="POST">
	<label>
		Name
		<input name="name" type="text" />
	</label>
	<label>
		Email
		<input name="email" type="email" />
	</label>
	<button>Register</button>

	{#if form?.success === true}
		Within a few days your account will be approved and you can publish your event!
	{/if}

	{#if form?.success === false}
		There was an issue submitting your page information. Try again or email us!
	{/if}
</form>
