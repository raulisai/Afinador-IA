<script>
    // @ts-nocheck

    import { isLoggedIn, user } from "../../helpers/stores";
    let popularSongs = [
      {
        name: "Canción popular 1",
        artist: "Artista 1",
        image: "https://via.placeholder.com/600x400"
      },
      {
        name: "Canción popular 2",
        artist: "Artista 2",
        image: "https://via.placeholder.com/600x400"
        },
        {
        name: "Canción popular 1",
        artist: "Artista 1",
        image: "https://via.placeholder.com/600x400"
      },
      {
        name: "Canción popular 2",
        artist: "Artista 2",
        image: "https://via.placeholder.com/600x400"
        },
        {
        name: "Canción popular 1",
        artist: "Artista 1",
        image: "https://via.placeholder.com/600x400"
      },
      {
        name: "Canción popular 2",
        artist: "Artista 2",
        image: "https://via.placeholder.com/600x400"
        }
    ];
    let emergingArtists = ["Artista emergente 1", "Artista emergente 2", "Artista emergente 3"];

    let latestReleases = [
      {
        album: "Último lanzamiento 1",
        artist: "Artista 3",
        image: "https://via.placeholder.com/600x400"
      },
      {
        album: "Último lanzamiento 2",
        artist: "Artista 4",
        image: "https://via.placeholder.com/600x400"
      },
      {
        album: "Último lanzamiento 1",
        artist: "Artista 3",
        image: "https://via.placeholder.com/600x400"
      },
      {
        album: "Último lanzamiento 2",
        artist: "Artista 4",
        image: "https://via.placeholder.com/600x400"
      },
      {
        album: "Último lanzamiento 1",
        artist: "Artista 3",
        image: "https://via.placeholder.com/600x400"
      },
      {
        album: "Último lanzamiento 2",
        artist: "Artista 4",
        image: "https://via.placeholder.com/600x400"
      }
    ];

</script>

    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <h1>Bienvenido a la red social de música</h1>
          <p class="lead">Únete a nuestra comunidad y descubre nueva música.</p>
        </div>
      </div>
  
      <div class="row">
        <div class="col-lg-8">
          <h2>Explora las canciones más populares</h2>
          <div class="row">
            {#each popularSongs as song}
              <div class="col-md-6 col-lg-4">
                <div class="card">
                  <img src={song.image} class="card-img-top" alt={song.name}>
                  <div class="card-body">
                    <h5 class="card-title">{song.name}</h5>
                    <p class="card-text">{song.artist}</p>
                    <a href="#" class="btn btn-primary">Escuchar</a>
                  </div>
                </div>
              </div>
            {/each}
          </div>
        </div>
  
        <div class="col-lg-4">
          <h2>Descubre artistas emergentes</h2>
          <div class="list-group">
            {#each emergingArtists as artist}
              <a href="#" class="list-group-item list-group-item-action">{artist}</a>
            {/each}
          </div>
        </div>
      </div>
  
      <div class="row">
        <div class="col-lg-8">
          <h2>Últimas novedades</h2>
          <div class="row">
            {#each latestReleases as release}
              <div class="col-md-6">
                <div class="card">
                  <img src={release.image} class="card-img-top" alt={release.album}>
                  <div class="card-body">
                    <h5 class="card-title">{release.album}</h5>
                    <p class="card-text">{release.artist}</p>
                    <a href="/" class="btn btn-primary">Escuchar</a>
                  </div>
                </div>
              </div>
            {/each}
          </div>
        </div>
  
        <div class="col-lg-4">
          <h2>Contacto</h2>
          <form>
            <div class="form-group">
              <label for="nombre">Nombre:</label>
              <input type="text" class="form-control" id="nombre" name="nombre" required>
            </div>
            <div class="form-group">
              <label for="email">Email:</label>
              <input type="email" class="form-control" id="email" name="email" required>
            </div>
            <div class="form-group">
              <label for="mensaje">Mensaje:</label>
              <textarea class="form-control" id="mensaje" name="mensaje" rows="5" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Enviar</button>
          </form>
        </div>
      </div>
    </div>


<style>
  h1 {
    margin-top: 50px;
    margin-bottom: 30px;
    text-align: center;
  }

  .card {
    margin-bottom: 20px;
  }
</style>