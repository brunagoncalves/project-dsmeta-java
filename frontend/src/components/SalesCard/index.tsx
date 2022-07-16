import {useEffect, useState} from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {BASE_URL} from "../../utils/request";
import {Sale} from "../../models/sales";

import {NotificationButton} from "../NotificationButton";
import "./styles.css";

export function SalesCard() {
  const min = new Date(new Date().setDate(new Date().getDate() - 365));
  const max = new Date();

  const [minDate, setMinDate] = useState(new Date(min));
  const [maxDate, setMaxDate] = useState(new Date(max));

  const [sales, setSales] = useState<Sale[]>([]);

  useEffect(() => {

    const dmin = minDate.toISOString().slice(0, 10);
    const dmax = maxDate.toISOString().slice(0, 10);

    axios.get(`${BASE_URL}/sales?minDate=${dmin}&maxDate=${dmax}`).then(response => {
      setSales(response.data.content);
    })
  }, [minDate, maxDate])

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
          {sales.map(sale => {
            return (
              <tr key={sale.id}>
                <td className="show992">{sale.id}</td>
                <td className="show576">{new Date(sale.date).toLocaleDateString()}</td>
                <td>{sale.sellerName}</td>
                <td className="show992">{sale.visited}</td>
                <td className="show992">{sale.deals}</td>
                <td>R$ {sale.amount.toFixed(2)}</td>
                <td>
                  <div className="btn-container">
                    <NotificationButton saleId={sale.id}/>
                  </div>
                </td>
              </tr>
            )
          })}
          </tbody>
        </table>
      </div>
    </div>
  )
}