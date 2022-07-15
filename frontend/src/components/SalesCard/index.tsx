import {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import {NotificationButton} from "../NotificationButton";

import "./styles.css";

export function SalesCard() {
  const min = new Date(new Date().setDate(new Date().getDate() - 365));
  const max = new Date();

  const [minDate, setMinDate] = useState(new Date(min));
  const [maxDate, setMaxDate] = useState(new Date(max));

  return (
    <div className="card">
      <h2>Vendas</h2>

      <div className="input-group">
        <DatePicker
          selected={minDate}
          onChange={(date: Date) => setMinDate(date)}
          className="form-control"
          dateFormat="dd/MM/yyyy"
        />
      </div>
      <div className="input-group">
        <DatePicker
          selected={maxDate}
          onChange={(date: Date) => setMaxDate(date)}
          className="form-control"
          dateFormat="dd/MM/yyyy"
        />
      </div>

      <div>
        <table className="content-table">
          <thead>
          <tr>
            <th className="show992">ID</th>
            <th className="show576">Data</th>
            <th>Vendedor</th>
            <th className="show992">Visitas</th>
            <th className="show992">Vendas</th>
            <th>Total</th>
            <th>Modificar</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td className="show992">#341</td>
            <td className="show576">28/06/2022</td>
            <td>Anakin</td>
            <td className="show992">15</td>
            <td className="show992">11</td>
            <td>R$ 5500,00</td>
            <td>
              <div className="btn-container">
                <NotificationButton/>
              </div>
            </td>
          </tr>
          <tr>
            <td className="show992">#341</td>
            <td className="show576">28/06/2022</td>
            <td>Anakin</td>
            <td className="show992">15</td>
            <td className="show992">11</td>
            <td>R$ 5500,00</td>
            <td>
              <div className="btn-container">
                <NotificationButton/>
              </div>
            </td>
          </tr>
          <tr>
            <td className="show992">#341</td>
            <td className="show576">28/06/2022</td>
            <td>Anakin</td>
            <td className="show992">15</td>
            <td className="show992">11</td>
            <td>R$ 5500,00</td>
            <td>
              <div className="btn-container">
                <NotificationButton/>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}