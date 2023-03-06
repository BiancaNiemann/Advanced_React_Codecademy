import React, {useContext} from "react";
import { MixtapeContext } from "./MixtapeContext";

export const Controls = () => {

    const {genre, setGenre, sortOrder, setSortOrder} = useContext(MixtapeContext)
    
  return (
    <div className="controls">
        <select value={genre} onChange={(e) => setGenre(e.target.value)}>
            <option value="all">All</option>
            <option value="hip hop">Hip Hop</option>
            <option value="rap">Rap</option>
            <option value="rock">Rock</option>
            <option value="pop">Pop</option>
        </select>
        <button onClick={(e) => {setSortOrder(prev => prev === "ascending" ? "descending" : "ascending")}}>{sortOrder}</button>
    </div>
  );
};
