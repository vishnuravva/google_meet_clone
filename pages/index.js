import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
import styles from "@/styles/home.module.css";
import { useState } from "react";

export default function Home() {
  const router = useRouter();

  const [roomId, setRoomId] = useState("");

  const createAndJoin = () => {
    const roomId = uuidv4();
    router.push(`/${roomId}`);
  };

  const joinRoom = () => {
    if (roomId) {
      router.push(`/${roomId}`);
      return;
    } else {
      alert("Enter a valid room id");
      return;
    }
  };

  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.h1}>Google meet CLone</h1>
      <div className={styles.enterRoom}>
        <input
          placeholder="Enter room id"
          className={styles.input}
          type="text"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
        />
        <button onClick={joinRoom} className={styles.button}>
          Join Room
        </button>
      </div>
      <span className={styles.separatorText}>
        ---------------------OR--------------------------
      </span>
      <button onClick={createAndJoin}>Create a new room</button>
    </div>
  );
}
