<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<script>
	 /** @type {import('./$types').PageData} */
	import Mastil from './Mastil.svelte';


	export let data;
  </script>
  
  <div class="container">
	<Mastil fret={data.post.fret} />
  </div>
  
