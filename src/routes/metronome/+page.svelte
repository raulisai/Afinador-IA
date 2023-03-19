<script>
  // @ts-nocheck
  import audio1 from "$lib/sound/tambor_1.mp3";
  import audio2 from "$lib/sound/tambor_2.mp3";
  import { onMount } from "svelte";
  import Buttons from "./Buttons.svelte";
  import imgRobot from "$lib/images/robot-tuner.png";
  import imbButtonStart from "$lib/images/button-play.webp";

  let tempo = "4/4";
  let posTiempo = 0;
  let bpm = 120;
  let isPlaying = false;
  let intervalId = null;
  let audioFile = audio1;
  let time = Array.from(Array(parseInt(tempo)), () => false);
  // Inicializamos la variable `color` con un valor predeterminado
  const togglePlay = () => {
    isPlaying = !isPlaying;
    if (isPlaying) {
      start();
    } else {
      stop();
    }
  };
  const start = () => {
    const intervalMs = 60000 / bpm;
    intervalId = setInterval(() => {
      time = time.map((_, i) => i % 2 === 0);
      posTiempo == time.length - 1 ? (posTiempo = 0) : posTiempo++;
      posTiempo == 0 ? (audioFile = audio1) : (audioFile = audio2);
      let audio = new Audio(audioFile);
      audio.play();
    }, intervalMs);
  };
  const stop = () => {
    clearInterval(intervalId);
    intervalId = null;
    posTiempo = 0;
    time = time.map(() => false);
  };

  const selectTempo = (e) => {
    tempo = e.target.value;
    time = Array.from(Array(parseInt(tempo)), () => false);
  };

  const changeBpm = (e) => {
    bpm = e.target.value;
    if (isPlaying) {
      stop();
      start();
    }
  };

  onMount(() => {
    // initialize component here
  });
</script>

<div class="container mt-5 text-center">
  <div class="row align-items-center mb-3">
    <Buttons />
    <div class="row align-items-center">
      <div class="col-8">
        <div class="row justify-content-center">
          <div class="col align-self-center">
          <span>{bpm} BPM</span>
          </div>
        </div>
        <div class="row mt-5">
          {#each time as isOn, i}
            <div class="col">
              <div
                class="rounded-circle p-0 circleMetronome"
                style="{i == posTiempo ? 'background-color:#a0ce8b': 'background-color:#7ED5FF'} "
                id="beat-{i}"
              />
            </div>
          {/each}
        </div>
      </div>
      <div class="col-4">
        <img src={imgRobot} alt="" />
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col">
      
      <button class="btn me-2" on:click={togglePlay}>
        <img src={imbButtonStart} class="imgStart" alt="">
        {isPlaying ? "Stop" : "Start"}
      </button>
      <select class="form-select me-2" value={tempo} on:change={selectTempo}>
        <option value="4/4">4/4</option>
        <option value="3/4">3/4</option>
        <option value="6/8">6/8</option>
      </select>
      <input
        class="form-range"
        type="range"
        min="30"
        max="300"
        step="1"
        value={bpm}
        on:change={changeBpm}
      />
      <span>{bpm} BPM</span>
    </div>
  </div>
</div>


<style>
  .circleMetronome {
    height: 100px;
    width: 50%;
    background-color: #a0ce8b;
    border-radius: 50%;
    border: 1px solid #7ED5FF;
  }

  .imgStart {
    width: 50px;
    height: 50px;
  }

  
</style>