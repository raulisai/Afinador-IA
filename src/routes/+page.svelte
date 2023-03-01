<script>
	import imgBackgraunMusic from "$lib/images/rommusic.jpg";
	import imgshets from "$lib/images/kisspng-musical.png";
	import imgRobot from "$lib/images/robot-tuner.png";
	import imgGuitar from "$lib/images/gtClassic.png";
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="container-fluid">
	<div class="row inicio text-center">
		<div class="col-6">
			<h1 class="nameSite  mt-5 me-5">IA-MUSIC</h1>
			<h2 class="labelMusic ms-5 ">
				Aprendec Musica de forma interactiva asi como crea con nustras
				herramientas musicales
			</h2>
		</div>
		<div class="col-6">
			<div class="card citaHome ">
				<div class="card-header">Quote</div>
				<div class="card-body">
					<blockquote class="blockquote mb-0">
						<p>
							La música es la perfecta expresión de lo que no
							puede ser dicho y sobre lo que es imposible
							permanecer en silencio
						</p>
						<div class="blockquote-footer">
							Johann Sebastian Bach <cite title="Source Title"
								>compositor
							</cite>
						</div>
					</blockquote>
				</div>
			</div>
			<div class="btn-Inc">
				<button>Comenzar</button>
			</div>
		</div>
	</div>
	<div class="row bg-dark align-items-center">
		<div class="col-6">
			<p class="text-white text-center txt-desc">
				En esta web escontraras herramientas para aprender a tocar
				la guitarra con ejemplos didacticos y de forma interactiva
				asi como tambien herramientas para crear musica, como un
				sintetizador y un metronomo. Cuenta con una comunidad de
				músicos y aficionados a la música que comparten sus
				conocimientos y experiencias. Los usuarios pueden conectarse
				con otros músicos, colaborar en proyectos musicales y
				compartir sus propias creaciones.
			</p>
			<div class="row justify-content-center mt-5">
				<div class="col-2 "><button>Iniciar session</button></div>
				<div class="col-2 offset-1"><button>Crear cuenta</button></div>
			</div>
		</div>
		<div class="col-6">
			<img
				src={imgBackgraunMusic}
				class="img-fluid float-start img-music"
				alt=""
			/>
		</div>
	</div>
	<div class="container">
		<div class="row">
			<div class="col-6">
				<div class="card mt-5 mb-5">
					<div class="card-body">
						En esta web escontraras herramientas para aprender a
						tocar la guitarra con ejemplos didacticos y de forma
						interactiva asi como tambien herramientas para crear
						musica, como un sintetizador y un metronomo. Cuenta con
						una comunidad de músicos y aficionados a la música que
						comparten sus conocimientos y experiencias. Los usuarios
						pueden conectarse con otros músicos, colaborar en
						proyectos musicales y compartir sus propias creaciones.
					</div>
				</div>
			</div>
			<div class="col-6">
				<img src={imgshets} class="img-fluid float-end  robot" alt="" />
			</div>
		</div>
		<hr />
		<div class="row justify-content-center">
			<div class="col-3">
				<div class="card-services">
					<h4>Efectivo y eficiente</h4>
					<p>Nuestros cursos enseñan a leer, escuchar y hablar en otro idioma de forma efectiva y eficiente. ¿Ya viste nuestros estudios más recientes?</p>
				</div>
				<div class="card-services">
					<h4>Aprende diferente</h4>
					<p>Nuestros cursos enseñan a leer, escuchar y hablar en otro idioma de forma efectiva y eficiente. ¿Ya viste nuestros estudios más recientes?</p>
				</div>
				
			</div>
			<div class="col-4">
				<img src={imgRobot} alt="">
			</div>
			<div class="col-3">
				<div class="card-services">
					<h4>¡Diviértete!</h4>
					<p>Nuestros cursos enseñan a leer, escuchar y hablar en otro idioma de forma efectiva y eficiente. ¿Ya viste nuestros estudios más recientes?</p>
				</div>
				<div class="card-services">
					<h4>Mantente motivado</h4>
					<p>Nuestros cursos enseñan a leer, escuchar y hablar en otro idioma de forma efectiva y eficiente. ¿Ya viste nuestros estudios más recientes?</p>
				</div>
			</div>
		</div>
		<hr />
		<div class="row">
			<div class="col-6">
				<img src={imgGuitar} class="img-fluid float-end  robot" alt="" />
			</div>
			<div class="col-6">
				<div class="card mt-5 mb-5">
					<div class="card-body">
						La música es esencial para todo el mundo. Creamos Musicca para que todas las personas tengan la oportunidad de aprender música, de manera gratuita y para siempre. Cada mes, millones de personas de más de 150 países utilizan Musicca.
					</div>
				</div>
			</div>
		</div>
	</div>
</section>


<style>
	.inicio {
		background-image: url(https://images.unsplash.com/photo-1508854710579-5cecc3a9ff17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80);
		background-size: 100vw 100vh;
		height: 95vh;
	}
	.nameSite {
		font-size: 5em;
		color: rgb(214, 219, 223);
	}
	.labelMusic {
		font-size: 1.5em;
		padding: 1em;
	}

	.citaHome {
		margin-top: 20%;
		opacity: 0.8;
	}
	.btn-Inc {
		margin-top: 50%;
		margin-left: -50%;
	}
	button {
		text-decoration: none;
		position: absolute;
		border: none;
		font-size: 1rem;
		font-family: inherit;
		color: #fff;
		width: 9em;
		height: 3em;
		line-height: 2em;
		text-align: center;
		background: linear-gradient(90deg, #03a9f4, #f4d341, #ffeb3b, #03a9f4);
		background-size: 300%;
		border-radius: 30px;
		z-index: 1;
	}

	button:hover {
		animation: ani 8s linear infinite;
		border: none;
	}

	@keyframes ani {
		0% {
			background-position: 0%;
		}

		100% {
			background-position: 400%;
		}
	}

	button:before {
		content: "";
		position: absolute;
		top: -5px;
		left: -5px;
		right: -5px;
		bottom: -5px;
		z-index: -1;
		background: linear-gradient(90deg, #03a9f4, #41f46e, #ffeb3b, #03a9f4);
		background-size: 400%;
		border-radius: 35px;
		transition: 1s;
	}

	button:hover::before {
		filter: blur(20px);
	}

	button:active {
		background: linear-gradient(32deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
	}


.txt-desc {
	font-size: 1em;

}



</style>
