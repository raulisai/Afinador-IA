// @ts-nocheck
/** @type {import('./$types').PageLoad} */
import { each } from "svelte/internal";
export function load() {

    //constantes
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
      Guitar: [4, 11, 7, 2, 9, 4],
      Bass: [7, 2, 9, 4, 11],
      violin: [7, 2, 9, 4],
      cello: [9, 4, 0, 7],
    };
    let numberOfFrets = 13;
    let accidentals = "sharps";
    let selectedInstrument = "Guitar";
    let numberOfStrings = instrumentTuningPresets[selectedInstrument].length;
  
    let noteFret = [];
    let note = " ";
  
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
  
    function generateNoteFret() {
      let array = [];
      let noteFret = [];
      for (let i = 0; i < numberOfStrings; i++) {
        for (let j = 0; j < numberOfFrets; j++) {
          let noteIndex = instrumentTuningPresets[selectedInstrument][i] + j;
          let noteName = generateNoteNames(noteIndex, accidentals);
          noteFret.push({ noteName, noteIndex });
        }
  
        array.push({
          string: i + 1,
          StringNote: noteFret[0].noteName,
          notesString: noteFret,
        });
  
        noteFret = [];
      }
  
      return array;
    }
  
    noteFret = generateNoteFret();

    console.log(noteFret);
    return {
      post: {
        fret: noteFret
      }
    };
  }