import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import Card from "./components/Card/Card";
import axios from 'axios';
import Section from "./components/Section/Section";

function App() {
  const [album,setAlbum] = useState([]);
  const songsData = {
    id: "b2369edb-cc70-491f-bc75-43ce6a9d7949",
    title: "Begin the Beguine",
    artists: ["Gail Funk DVM", "Dora Little", "Owen Moore"],
    genre: {
      key: "blues",
      label: "Blues",
    },
    likes: 26995,
    image:
      "https://images.pexels.com/photos/1105189/pexels-photo-1105189.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    durationInMs: 52527,
  };
  useEffect(()=>{
    (async function(){
      await axios.get("https://qtify-backend-labs.crio.do/albums/top").then((data)=>{
        setAlbum(data.data);
      }).catch((err)=>{
        console.log(err);
      })
    })();
  },[]);
  return (
    <>
      <Navbar />
      <HeroSection />
      <Section data={album}/>
      {/* <Card data={songsData} type={"song"}/> */}
      {/* <Button>Give feedback</Button> */}
    </>
  );
}

export default App;
