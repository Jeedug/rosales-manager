import { useRef } from "react";
import useNoteStore from "../stores/note";

export default function useUpdateNote(
  type,
  setWantsto,
  setIsHoveringEdit,
  rowIndex,
  colIndex
) {
  const initialPosition = useRef(null);
  const elementRef = useRef(null);
  const noteStore = useNoteStore((state) => state.setStatus);
  const noteStatus = useNoteStore((state) => state.status);

  const handleMouseDown = (event) => {
    noteStore(`${rowIndex}-${colIndex}`);
    initialPosition.current = event.clientX;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (event) => {
    const elementPosX = elementRef.current.getBoundingClientRect().x;
    const elementPosY = elementRef.current.getBoundingClientRect().y;

    if (type === "horizontal") {
      if (elementPosX > event.clientX + 10) {
        console.log(noteStatus);

        setWantsto("delete");
      } else {
        setWantsto("add");
      }
    } else if (type === "vertical") {
      if (elementPosY > event.clientY + 10) {
        setWantsto("delete");
      } else {
        setWantsto("add");
      }
    }
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
    setWantsto("");
    noteStore("idle");
    setIsHoveringEdit(false);
  };

  const handleMouseEnter = () => setIsHoveringEdit(true);
  const handleMouseLeave = () => {
    setIsHoveringEdit(false);
    noteStore("idle");
    setWantsto("");
  };

  return {
    elementRef,
    handleMouseDown,
    handleMouseUp,
    handleMouseEnter,
    handleMouseLeave,
  };
}
