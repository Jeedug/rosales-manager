import { useState } from "react";




export default function useSearchNote(notes) {
    const [searchTerm, setSearchTerm] = useState("");  

    const handleSearch = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const filteredNotes = notes.filter((note) => 
      note.name.toLowerCase().includes(searchTerm.toLowerCase())
    );


    return {
        handleSearch,
        filteredNotes,
        searchTerm
    }

}