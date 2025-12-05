import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Grid, List } from "lucide-react";

export function Header({ view, setView }) {
  const [dateFrom, setDateFrom] = useState(null);
  const [dateTo, setDateTo] = useState(null);

  return (
    <header className="py-6">

      {/* LOGO + BUTTON */}
      <div className="flex items-center justify-between mb-6">
        <img
          src="../public/images/logo.png"
          alt="Logo"
          className="w-20 h-20 object-contain"
        />

        <button className="px-3 py-1 bg-blue-500 text-white rounded-md text-sm">
          Start on 17.02.2016
        </button>
      </div>

      {/* STATS */}
      <div className="text-gray-700 mb-4">
        <span className="font-semibold">870</span> posts ·{" "}
        <span className="font-semibold">11,787</span> followers ·{" "}
        <span className="font-semibold">112</span> following
      </div>

      {/* DATE PICKERS + VIEW SWITCH */}
      <div className="flex items-center justify-between mt-4">

        {/* DATE PICKERS */}
        <div className="flex gap-2">

          {/* Date From */}
          <DatePicker
            selected={dateFrom}
            onChange={(date) => setDateFrom(date)}
            placeholderText="Date from"
            dateFormat="dd.MM.yyyy"
            className="border px-2 py-1 rounded outline-none"
          />

          {/* Date To */}
          <DatePicker
            selected={dateTo}
            onChange={(date) => setDateTo(date)}
            placeholderText="Date to"
            dateFormat="dd.MM.yyyy"
            className="border px-2 py-1 rounded outline-none"
          />
        </div>

        {/* LIST / GRID SWITCH */}
        <div className="flex items-center gap-2">

          {/* list */}
          <button
            onClick={() => setView("list")}
            className={`p-2 rounded border transition ${
              view === "list" ? "bg-gray-200" : "hover:bg-gray-100"
            }`}
          >
            <List size={18} />
          </button>

          {/* grid */}
          <button
            onClick={() => setView("grid")}
            className={`p-2 rounded border transition ${
              view === "grid" ? "bg-gray-200" : "hover:bg-gray-100"
            }`}
          >
            <Grid size={18} />
          </button>

        </div>
      </div>
    </header>
  );
}
