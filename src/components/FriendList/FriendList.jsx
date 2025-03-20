import FriendListItem from "../FriendListItem/FriendListItem";
import s from "./FriendList.module.css";

export default function FriendList({ friends }) {
  return (
    <ul className={s.list}>
      {friends.map((friend) => (
        <li key={friend.id} className={s.item}>
          <FriendListItem
            name={friend.name}
            isOnline={friend.isOnline}
            avatar={friend.avatar}
          />
        </li>
      ))}
    </ul>
  );
}
