import axios from "axios";
import {BASE_URL} from "../../utils/request";

import icon from "../../assets/icon-notification.svg";

import "./styles.css";

type Props = {
  saleId: number;
}

function handleClickSendSms(id: number) {
  axios(`${BASE_URL}/sales/${id}/notification`).then(response => {
    console.log("Sucesso!")
  })
}

export function NotificationButton({saleId}: Props) {
  return (
    <div className="content-button" onClick={() => handleClickSendSms(saleId)}>
      <img src={icon} alt="Icon Notification"/>
    </div>
  )
}