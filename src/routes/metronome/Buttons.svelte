<script>
    import imgRobot from "$lib/images/robot-tuner.png";
    import imgnota from "$lib/images/nota.png";
    import imgMeronomo from "$lib/images/Metronomo.svg";
</script>

<div class="row justify-content-center">
    <div class="col-2">
        <button class="btn ">
            <div class="d-flex flex-column btnMetronomo">
                <span>Clases Metronomo</span>
                <img
                    src={imgMeronomo}
                    alt="Descripción de la imagen"
                    width="100"
                    height="80"
                    class="ms-3"
                />
            </div>
        </button>
    </div>
    <div class="col-2">
        <button class="btn">
            <div class="d-flex flex-column btnMetronomo">
                <span>Cambiar sonido</span>
                <img
                    src={imgnota}
                    alt="Descripción de la imagen"
                    width="100"
                    height="80"
                    class="img-fluid ms-2"
                />
            </div>
        </button>
    </div>
    <div class="col-2">
        <button class="btn">
            <div class="d-flex flex-column btnMetronomo">
                <span>Guia rapida</span>
                <img
                    src={imgRobot}
                    alt="Descripción de la imagen"
                    width="90"
                    height="80"
                    class="img-fluid ms-2"
                />
            </div>
        </button>
    </div>
</div>

<style>
    .btnMetronomo {
        background-color: #f5f5f5;
        border-radius: 10px;

        border: none;
    }
</style>
