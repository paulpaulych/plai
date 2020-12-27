import React from "react";
import {PlayerControls} from "./PlayerControls";
import {render} from "react-dom";

export function Player(props: PlayerProps) {

  return (
    <div className="Player">
       <h2>{JSON.stringify(props)}</h2>
       <PlayerControls onPlayPressed={play}/>
    </div>
  );
}

type PlayerProps = {
    gameName: string,
    stateListUrl: string
}

function play(){
    console.log("playing...")
}