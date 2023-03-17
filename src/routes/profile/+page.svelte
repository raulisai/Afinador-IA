<script>
    // @ts-nocheck

    import { isLoggedIn, user } from "../../helpers/stores";

    console.log($isLoggedIn);
</script>

<h1>profile</h1>
{#if $isLoggedIn}
    <img src={$user.photoURL} alt={$user.displayName} />
    <h3>{$user.displayName}</h3>
    <p>{$user.email}</p>
{/if}
