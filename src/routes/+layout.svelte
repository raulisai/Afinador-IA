<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<div class="container">
			<div class="row">
				<div class="col-md-6">
					<p>
						&copy; 2023 Tuner-IA. Todos los derechos reservados a
						Djoker.
					</p>
				</div>
				<div class="col-md-6 text-md-right">
					<p>
						<a href="#">Términos y condiciones</a> |
						<a href="#">Política de privacidad</a>
					</p>
				</div>
			</div>
		</div>
	</footer>
</div>

<style>
	
	footer {
		background-color: #0077b6;
		color: #fff;
		padding: 30px 0;
	}

	footer p {
		margin: 0;
	}

	footer a {
		color: #fff;
		text-decoration: none;
	}

	footer a:hover {
		text-decoration: underline;
	}
</style>
