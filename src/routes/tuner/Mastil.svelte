<script>
  // @ts-nocheck

  export let fret;

  let noteFret = fret;
  const singleFretMarkPositions = [3, 5, 7, 9, 15, 17, 19, 21];
  const doubleFretMarkPositions = [12, 24];
</script>

<!--  -->
<div class="row">
  
    {#each noteFret as fret}
      <div class="string grid col-12">
        {#each fret.notesString as note}

        {#if note.noteName === 'E'}
        <div class="fret">
          <div class="str mt-2">{note.noteName}</div>
        </div>
        {:else if note.noteName === 'A'}
        <div class="fret">
          <div class="str mt-2">{note.noteName}</div>
        </div>
        {:else}
        <div class="fret">
          <div class="str mt-2">{note.noteName}</div>
        </div>
        {/if}
        

         
        {/each}
      </div>
    {/each}

</div>

<style>

  .fret {
    min-width: 40px;
    width: 20%;
    height: 30px;
    border-left: 0.5rem solid rgba(97, 97, 97, 0.199);
    border-image: linear-gradient(to left, #bbb, #fff, #bbb) 1 100%;
    background-color: #f2d4ad;
    display: inline-block;
    text-align: center;
  }

  .string {
    width: 100%;
    display: flex;
  }


  .str {
    width: 120%;
    margin-left: -10px;
    color: rgb(129, 128, 128);
    height: 10px;
    background: linear-gradient(#eee, #999);
    box-shadow: 30px 3px 10px #806233;
  }

  .fret:first-child {
    background: #161717e5;
    color: #fff;
    min-width: 80px;
    max-width: 120px;
    border-right: 12px solid;
    flex-grow: 0;
    flex-shrink: 0;
    border-image: linear-gradient(to left, #bbb, #fff, #bbb) 1 100%;
  }
</style>
