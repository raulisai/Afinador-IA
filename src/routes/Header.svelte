<script>
// @ts-nocheck

	import { page } from '$app/stores';
	import logo from '$lib/images/LogoNoteCatch.png';
	import github from '$lib/images/github.svg';
	import { isLoggedIn, user } from "../helpers/stores";
	import { signOut, onAuthStateChanged } from "firebase/auth";
    import { auth} from "../helpers/firebase";


const logout = async () => {
try {
await signOut (auth);
$isLoggedIn = false;
$user = {};
} catch (error) {
console.error(error);
}
};

onAuthStateChanged (auth, authUser => {
$user=authUser
$isLoggedIn = !!authUser;
})

	
</script>

<header>
	<div class="corner">
		<a href="https://kit.svelte.dev">
			<img src={logo} class="img-logo" alt="SvelteKit" />
		</a>
	</div>

	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			
			{#if $isLoggedIn}
			<li aria-current={$page.url.pathname === '/profile' ? 'page' : undefined}>
				<a href="/profile">Perfil</a>
			</li>
			{:else}
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			{/if}

			
			<li aria-current={$page.url.pathname === '/tuner' ? 'page' : undefined}>
				<a href="/tuner">Tuner</a>
			</li>
			<li aria-current={$page.url.pathname === '/tuner' ? 'page' : undefined}>
				<a href="/metronome">Metronomo</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/learn') ? 'page' : undefined}>
				<a href="/learn">Clases</a>
			</li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<div class="corner">
		{#if $isLoggedIn}
		<a href="/" class="login">
			<button class="boton-login" on:click={logout}>Log Out</button>
		</a>
		{:else}
		<a href="/login" class="login">
			<button class="boton-login">Iniciar sesión</button>
		</a>
			{/if}
		
		
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 9em;
		height: 3em;
	}
.img-logo {
	width: 300px;

}


	nav {
		display: flex;
		justify-content: center;
		--background: rgba(170, 164, 164, 0.7);
		width: 90%;
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
	.login {
		color: var(--color-theme-1);
         width: 100%;
		 height: 100%;
	}

	.boton-login{
		background-color: var(--color-theme-1);
		color: var(--color-text);
		border: none;
		border-radius: 0.5rem;
		padding: 0.5rem;
	}
</style>
