<script>

export let noteName = "C#";
export let noteclean = noteName;//.toString().substr(0, note.length - 1)

</script>

<div class="note-fret single-fretmark">
    <div class={ noteclean === noteName ? "note-simb-active":"note-simb-hiden"}>
      {
        noteName 
      }
    </div>
</div>