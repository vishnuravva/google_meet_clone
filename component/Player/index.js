import ReactPlayer from "react-player";
import cx from "classnames";
import styles from "@/component/Player/index.module.css";
import {
  Mic,
  Video,
  PhoneOff,
  MicOff,
  VideoOff,
  Phone,
  UserSquare2,
} from "lucide-react";

const Player = (props) => {
  const { playerId, url, muted, playing, isActive, leaveRoom } = props;

  return (
    <div
      className={cx(styles.playerContainer, {
        [styles.notActive]: !isActive,
        [styles.isActive]: isActive,
        [styles.notPlaying]: !playing,
      })}
    >
      {playing ? (
        <ReactPlayer
          width="100%"
          height="100%"
          url={url}
          muted={muted}
          playing={playing}
        />
      ) : (
        <UserSquare2 className={styles.user} size={isActive ? 400 : 150} />
      )}
      {!isActive ? (
        muted ? (
          <MicOff className={styles.icon} size={20} />
        ) : (
          <Mic className={styles.icon} size={20} />
        )
      ) : undefined}
    </div>
  );
};

export default Player;
