import React, {useContext} from "react";
import { Song } from "./Song";
import { MixtapeContext } from './MixtapeContext'


export const SongList = () => {
  // Your code here! ✨
  const {genre, sortOrder, songs} = useContext(MixtapeContext)
  
  if(sortOrder == "ascending"){
    songs.sort((a,b) => a.year - b.year )
    console.log("acc", songs)
  } else if (sortOrder == "descending"){
    songs.sort((a,b) => b.year - a.year )
    console.log("dec", songs)
  }


  let pickedSongs 
  if(genre === "all"){
    pickedSongs = songs.map(song => <Song {...song} key={song.name} />)
  } else {
    const filterSongs = songs.filter(song => song.genre === genre)
    pickedSongs = filterSongs.map(song => <Song {...song} key={song.name} />)
  }  
  
 
  return (
    <>
      {pickedSongs}
    </>
  );
};
