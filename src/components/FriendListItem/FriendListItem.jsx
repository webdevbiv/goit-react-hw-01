import clsx from "clsx";
import s from "./FriendListItem.module.css";

export default function FriendListItem({ name, isOnline, avatar }) {
  return (
    <div className={s.item}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={s.name}>{name}</p>
      {isOnline ? (
        <p className={clsx(s.status, s.online)}>Online</p>
      ) : (
        <p className={clsx(s.status, s.offline)}>Offline</p>
      )}
    </div>
  );
}
