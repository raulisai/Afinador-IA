<script>
// @ts-nocheck
//constantes
  const singleFretMarkPositions = [3, 5, 7, 9, 15, 17, 19, 21];
  const doubleFretMarkPositions = [12, 24];
  const notesFlat = [
    "C",
    "Db",
    "D",
    "Eb",
    "E",
    "F",
    "Gb",
    "G",
    "Ab",
    "A",
    "Bb",
    "B",
  ];
  const notesSharp = [
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B",
  ];
  const instrumentTuningPresets = {
    "Guitar": [4, 11, 7, 2, 9, 4],
    "Bass (5 strings)": [7, 2, 9, 4, 11],
    "violin": [7, 2, 9, 4],
    "cello": [9, 4, 0, 7],
  };

  let numberOfFrets = 12;
  let accidentals = "sharps";
  let selectedInstrument = "Guitar";
  let numberOfStrings = instrumentTuningPresets[selectedInstrument].length;


  let noteFret = [];
  let note= " ";
  let noteclean= note;//.toString().substr(0, note.length - 1)

  function generateNoteNames(noteIndex, accidentals) {
    noteIndex = noteIndex % 12;
    let noteName;
    if (accidentals === "flats") {
      noteName = notesFlat[noteIndex];
    } else if (accidentals === "sharps") {
      noteName = notesSharp[noteIndex];
    }
    return noteName;
  }
  for (let i = 0; i < numberOfStrings; i++) {
    
  
    noteFret = [];

    for (let fret = 0; fret <= numberOfFrets; fret++) {
      let noteName = generateNoteNames(
        fret + instrumentTuningPresets[selectedInstrument][i],
        accidentals
      );
        noteFret.push({
            numberOfStrings: numberOfStrings,
            fret: fret,
            noteName: noteName,
            noteclean: noteclean//.toString().substr(0, noteName.length - 1)
        });
  }
}
        
</script>
<!--  -->
<div class="row">
    <div class="col-12">
        {#each noteFret as note}
        <div class="string">
{console.log(noteFret)}
        </div>
        {/each}
       
    </div>
</div>