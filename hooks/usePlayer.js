import { useRouter } from "next/router";
import { useState } from "react";
import { useSocket } from "@/context/socket";
import { cloneDeep } from "lodash";

const usePlayer = (myId, roomId,peer) => {
  const socket = useSocket();
  const [players, setPlayers] = useState({});
  const router = useRouter()

  const playersCopy = cloneDeep(players);

  const playerHighlighted = playersCopy[myId];
  delete playersCopy[myId];

  const nonHighlightedPlayers = playersCopy;


  const leaveRoom = () => {
    socket?.emit("user-leave", myId, roomId);
    console.log(`leaving room`,roomId)
    peer?.disconnect();
    router.push("/")
  };
  
  const toggleAudio = () => {
    console.log("i toggled my audio");
    setPlayers((prev) => {
      const copy = cloneDeep(prev);
      copy[myId].muted = !copy[myId].muted;
      return { ...copy };
    });

    socket.emit("user-toggle-audio", myId, roomId);
  };

  const toggleVideo = () => {
    console.log("i toggled my video");
    setPlayers((prev) => {
      const copy = cloneDeep(prev);
      copy[myId].playing = !copy[myId].playing;
      return { ...copy };
    });


    socket.emit("user-toggle-video", myId, roomId);
  };

  return {
    players,
    setPlayers,
    playerHighlighted,
    nonHighlightedPlayers,
    toggleAudio,
    toggleVideo,
    leaveRoom
  };
};
export default usePlayer;
