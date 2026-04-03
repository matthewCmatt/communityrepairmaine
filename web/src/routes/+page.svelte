<script lang="ts">
	import { Accordion, Button } from 'bits-ui';
</script>

<section>
    <h2>Welcome to the Maine repair community!</h2>
    <div>
        <h3>Find a Repair Event near you</h3>
        <Button.Root href="/events/">Events</Button.Root>
    </div>
    <div>
        <h3>Host a new meetup</h3>
        <Button.Root href="/organizers/create">Register</Button.Root>
    </div>  
</section>

<br/>

<section>
	<Accordion.Root type="single">
		<Accordion.Item value="item-1">
			<Accordion.Header>
				<Accordion.Trigger>What is a Repair Meetup?</Accordion.Trigger>
			</Accordion.Header>
			<Accordion.Content>A repair meetup or repair cafe is a free event hosted, usually by volunteers, with the goal of helping people repair their things and </Accordion.Content>
		</Accordion.Item>
		<Accordion.Item value="item-2">
			<Accordion.Header>
				<Accordion.Trigger>What can I bring?</Accordion.Trigger>
			</Accordion.Header>
			<Accordion.Content>Items and services vary by meetup, but repair cafes typically focus on textiles, small appliances, and electronics. Large appliances and hazardous chemicals are not usually allowed.</Accordion.Content>
		</Accordion.Item>
	</Accordion.Root>
</section>
