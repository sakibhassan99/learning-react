import { useState } from "react";
import { useFilter } from "../hooks/useFilter";
import ContextMenu from "./ContextMenu";

export default function ExpenseTable({
  expenses,
  setExpenses,
  setExpense,
  setEditingRowId,
}) {
  const [menuPosition, setMenuPosition] = useState({});
  const [rowId, setRowId] = useState("");
  const [sortCallback, setSortCallback] = useState(() => {});

  const [filteredData, setQuery] = useFilter(
    expenses,
    (expense) => expense.category
  );
  const total = filteredData.reduce(
    (acc, expense) => acc + parseInt(expense.amount),
    0
  );

  return (
    <>
      <ContextMenu
        expenses={expenses}
        setExpense={setExpense}
        setExpenses={setExpenses}
        menuPosition={menuPosition}
        setMenuPosition={setMenuPosition}
        rowId={rowId}
        setEditingRowId={setEditingRowId}
      />
      <table className="expense-table" onClick={() => setMenuPosition({})}>
        <thead>
          <tr>
            <th>Title</th>
            <th>
              <select onChange={(e) => setQuery(e.target.value.toLowerCase())}>
                <option value="">All</option>
                <option value="Grocery">Grocery</option>
                <option value="Clothes">Clothes</option>
                <option value="Bills">Bills</option>
                <option value="Education">Education</option>
                <option value="Medicine">Medicine</option>
              </select>
            </th>
            <th className="amount-column">
              <div>
                <span>Amount</span>
                <svg
                  onClick={() =>
                    setSortCallback(() => (a, b) => a.amount - b.amount)
                  }
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 384 512"
                  className="arrow up-arrow"
                >
                  <title>Ascending</title>
                  <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
                </svg>
                <svg
                  onClick={() =>
                    setSortCallback(() => (a, b) => b.amount - a.amount)
                  }
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 384 512"
                  className="arrow down-arrow"
                >
                  <title>Descending</title>
                  <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                </svg>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredData
            .sort(sortCallback)
            .map(({ id, title, category, amount }) => {
              return (
                <tr
                  key={id}
                  onContextMenu={(e) => {
                    e.preventDefault();
                    setMenuPosition({
                      top: e.clientY,
                      left: e.clientX,
                    });
                    setRowId(id);
                  }}
                >
                  <td>{title}</td>
                  <td>{category}</td>
                  <td>৳{amount}</td>
                </tr>
              );
            })}
          <tr>
            <th>Total</th>
            <th></th>
            <th>৳{total}</th>
          </tr>
        </tbody>
      </table>
    </>
  );
}
