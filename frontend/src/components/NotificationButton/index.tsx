import icon from "../../assets/icon-notification.svg";
import "./styles.css";

export function NotificationButton() {
  return (
    <div className="content-button">
      <img src={icon} alt="Icon Notification"/>
    </div>
  )
}