import clsx from "clsx";
import s from "./FriendListItem.module.css";

export default function FriendListItem({ name, isOnline, avatar }) {
  return (
    <div className={s.item}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={s.name}>{name}</p>
      <p className={clsx(s.status, isOnline ? s.online : s.offline)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
