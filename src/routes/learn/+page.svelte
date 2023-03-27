<script>

    import Activiies from './Activities.svelte'
    import imglearn from "$lib/images/learn.svg";
    import mas from "$lib/images/mas.svg";
    import practicar from "$lib/images/practicar.svg";
    import ligas from "$lib/images/liga.svg";
    import imgPoints from "$lib/images/points.svg";
    import imgcountries from "$lib/images/eeuubool.png";
    import imgnota from "$lib/images/nota.png";
    import imgRobot from "$lib/images/robot-tuner.png";
    import imgcofre from "$lib/images/cofre.svg";
    import imgmusicalcomposotion from "$lib/images/musical-composition.png";
</script>

<div class="row learn_container ">
    <div class="col-2 submenuitems">
        <nav class="nav flex-column">
            <div
                class="btn-menuclass d-flex align-items-center ms-5 mb-3 active-link"
            >
                <img src={imglearn} alt="" srcset="" />
                <a class="nav-link " aria-current="page" href="#">Aprender</a>
            </div>

            <div class="btn-menuclass d-flex align-items-center ms-5 mb-3">
                <img src={practicar} alt="" srcset="" />
                <a class="nav-link" href="#">Practicar</a>
            </div>

            <div class="btn-menuclass d-flex align-items-center ms-5 mb-3">
                <img src={ligas} alt="" srcset="" />
                <a class="nav-link" href="#">Ligas</a>
            </div>

            <div class="btn-menuclass d-flex align-items-center ms-5 mb-3">
                <img src={mas} alt="" srcset="" />
                <a class="nav-link disabled">Mas</a>
            </div>
        </nav>
    </div>
    <div class="col-6 justify-content-center">
    <Activiies/>
    </div>
    <div class="col-4 ">
    
        <div class="row ">
            <div class="col-4">
                <img src={imgcountries} alt="" srcset="" />
                <span class="">Spanish</span>
            </div>
            <div class="col-4 mt-2">
                <img src={imgnota} class="imgnota" alt="" srcset="" />
                <span>5</span>
            </div>
            <div class="col-4 mt-4">
                <img src={imgPoints} alt="" srcset="" />
                <span>90</span>
            </div>
        </div>
        <div class="row mt-4 mb-5 card-anuncio align-items-center">
            <div class="col-8">
                <h5>Progreso de EXP</h5>
            </div>
            <div class="col-4">
                <a href="#" class="linkMetas">CAMBIAR META</a>
            </div>
            <div class="col-2">
                <img src={imgcofre} class="imgcofre" alt="" />
            </div>
            <div class="col-6">
                <span class="">Meta diaria</span>

                <div class="progress">
                    <div
                        class="progress-bar progress-bar-striped progress-bar-animated"
                        role="progressbar"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style="width: 75%"
                    />
                </div>
            </div>
            <div class="col-2 ">
                <span>75/100EXP</span>
            </div>
        </div>
        <div class="row mt-5  border border-white-50 border-2 card-anuncio">
            <div class="col-6 mt-5">
                <div class="card-body">
                    <h5 class="card-title lattermainAnnuncio">Prueba gratis</h5>
                    <p class="card-text latterTxtAnnuncio">
                        Registrate para poder registrar tus avancez y poder
                        compartir con tus redes sociales tus composiciones.
                    </p>
                </div>
            </div>
            <div class="col-4">
                <img src={imgRobot} class="imgRobot" alt="" />
            </div>
            <a href="#" class="mt-5 btn btn-primary btn-register"
                >Crear una cuenta
            </a>
        </div>
        <div class="row mt-4 card-anuncio">
            <div class="">
                <div class="card-body">
                    <h5 class="card-title lattermainAnnuncio">
                        Crea tu musica
                    </h5>
                    <div class="d-inline ">
                        <p class="card-text latterTxtAnnuncio">
                            En el modo composicion podras experimentar el poder
                            componer de forma eficiente.
                        </p>
                        <img
                            src={imgmusicalcomposotion}
                            class="imgComposition"
                            alt=""
                        />
                    </div>

                    <a href="#" class="btn btn-warning">Crear musica</a>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .learn_container {
        height: 100vh;
        width: 100%;
        margin-top: 10vh;
        font-family: sans-serif, "Roboto", "Helvetica", "Arial";
    }
    .submenuitems {
        border-right: solid 1px #cccac7;
    }
    .btn-menuclass {
        font-family: sans-serif, "Roboto", "Helvetica", "Arial";
        font-size: 1.3rem;
        text-decoration: none;
        padding: 5px 30px;
    }
    .active-link {
        background-color: #199fdd2d;
        border-radius: 10px;
        padding: 5px 30px;
    }
    .btn-menuclass:hover {
        background-color: #f7f4f0;
        color: white;
        border-radius: 10px;
    }

    .btn-menuclass a {
        color: rgb(82, 73, 73);
        font-family: sans-serif, "Roboto", "Helvetica", "Arial";
        font-size: 1.3rem;
        text-decoration: none;
    }
  
    /* seccion de anuncions barra derechas */

    .imgnota {
        width: 50px;
    }

    .card-anuncio {
        width: 33rem;
        padding: 20px;
        border-radius: 3%;
        border: 2px solid #dee2e6;
    }
    .imgRobot {
        width: 250px;
        margin-left: 20px;
    }
    .imgComposition {
        width: 250px;
    }
    .btn-register {
        width: 100%;
        background-color: #1889d4;
        border: none;
        border-radius: 10px;
        color: white;
        font-family: sans-serif, "Roboto", "Helvetica", "Arial";
        font-size: 1.4rem;
        padding: 10px;
    }
    .btn-register:hover {
        background-color: #4ccc25fb;
        color: rgb(29, 26, 26);
    }
    .linkMetas {
        font-family: sans-serif, "Roboto", "Helvetica", "Arial";
        font-size: 1rem;
        font-weight: 600;
        text-decoration: none;
        color: #1889d4;
    }
    .lattermainAnnuncio {
        font-family: sans-serif, "Roboto", "Helvetica", "Arial";
        font-size: 1.5rem;
        font-weight: 600;
        text-decoration: none;
        color: #4b4b4b;
    }
    .latterTxtAnnuncio {
        font-family: sans-serif, "Roboto", "Helvetica", "Arial";
        font-size: 1.2rem;
        text-decoration: none;
        color: #4b4b4b59;
        margin-top: 10%;
    }
</style>
