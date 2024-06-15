import { useEffect, useState } from "react";
import useAllNotes from "../stores/allNotes";
import useCurrentNote from "../stores/currentNote";

export default function useNoteSelected() {
  const notes = useAllNotes((state) => state.notes);
  const setCurrentNote = useCurrentNote((state) => state.setNote);
  const currentNote = useCurrentNote((state) => state.note);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setCurrentNote(notes[index]);
  }, [currentNote, index]);

  const handleClick = (index) => {
    setIndex(index);
  };

  return {
    handleClick,
    notes,
    currentIndex : index,
  };
}
