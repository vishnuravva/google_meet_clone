import { useSocket } from "@/context/socket";
import { useRouter } from "next/router";

const { useState, useEffect, useRef } = require("react");

const usePeer = () => {
  const socket = useSocket(); // this wourl give us socket connection
  const roomId = useRouter().query.roomId;
  const [peer, setPeer] = useState(null);
  const [myId, setMyId] = useState("");

  const isPeerSet = useRef(false);

  useEffect(() => {
    if (isPeerSet.current || !roomId || !socket) return;
    isPeerSet.current = true;

    (async function initPeer() {
      const myPeer = new (await import("peerjs")).default();
      setPeer(myPeer);

      myPeer.on("open", (id) => {
        console.log("ours peer id", id);
        setMyId(id);
        socket?.emit("join-room", roomId, id);
      });
    })();
  }, [roomId, socket]);
  return {
    peer,
    myId,
  };
};
export default usePeer;

// peerjs is like a intermediate server where it handles all WEBRTC communications/requests/call
