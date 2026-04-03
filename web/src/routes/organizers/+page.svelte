<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

</script>

<ol>
        {#each data.organizers.items as org}
            <li>
                <a href={`/organizers/${org.id}/`}>
                    {org.name}
                </a>
            </li>
        {/each}
</ol>
