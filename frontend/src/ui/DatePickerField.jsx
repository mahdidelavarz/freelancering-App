import React from "react";
import  DatePicker  from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
function DatePickerField({label, date, setDate}) {
  return (
    <div className="mt-8">
      <span className="mb-2 block text-slate-700">{label}</span>
      <DatePicker
        containerClassName="w-full"
        inputClass="textField__input"
        calendarPosition="bottom-center"
        value={date}
        onChange={(date) => setDate(date)}
        format="YYYY/MM/DD"
        calendar={persian}
        local={persian_fa}
      />
    </div>
  );
}

export default DatePickerField;
