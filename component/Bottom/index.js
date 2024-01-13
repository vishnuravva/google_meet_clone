import { Mic, Video, PhoneOff, MicOff, VideoOff, Phone } from "lucide-react";
import styles from "@/component/Bottom/index.module.css";
import cx from "classnames";

const Bottom = (props) => {
  const { muted, playing, toggleAudio, toggleVideo, leaveRoom } = props;
  return (
    <div className={styles.bottomMenu}>
      {muted ? (
        <MicOff
          onClick={toggleAudio}
          className={cx(styles.icon, styles.active)}
          size={55}
        />
      ) : (
        <Mic className={styles.icon} onClick={toggleAudio} size={55} />
      )}
      {playing ? (
        <Video className={styles.icon} onClick={toggleVideo} size={55} />
      ) : (
        <VideoOff
          onClick={toggleVideo}
          className={cx(styles.icon, styles.active)}
          size={55}
        />
      )}
      <PhoneOff size={55} className={cx(styles.icon)} onClick={leaveRoom} />
    </div>
  );
};

export default Bottom;
