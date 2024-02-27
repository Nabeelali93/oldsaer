import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

// import "./cal.css";

function Calendar1() {
  // Array to store month string values
  const allMonthValues = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  // State for date selected by user
  const [selectedDate, setSelectedDate] = useState();

  const [show, setshow] = useState(false);


  // State for text above calander
  const [calendarText, setCalendarText] = useState(`No Date is selected`);

  // Function to update selected date and calander text
  const handleDateChange = (value) => {
    setSelectedDate(value);
    setCalendarText(`The selected Date is ${value.toDateString()}`);
  };

  // Function to handle selected Year change
  const handleYearChange = (value) => {
    const yearValue = value.getFullYear();
    setCalendarText(`${yearValue} Year  is selected`);
  };

  // Function to handle selected Month change
  const handleMonthChange = (value) => {
    const monthValue = allMonthValues[value.getMonth()];
    setCalendarText(`${monthValue} Month  is selected`);
  };

const CalenderClose =()=>{
    if(show==true){
        setshow(false)
    }else{
        setshow(true)
    }
}

  return (
    <div className="app flex justify-center">
      <h2 className="calander-details " onClick={()=>CalenderClose()}>select</h2>


      {
        show ? 
        <Calendar
        onClickMonth={handleMonthChange}
        onClickYear={handleYearChange}
        onChange={handleDateChange}
        value={selectedDate}
        className="mt-10"
        
      />

        :
        null
      }
    

 

    </div>
  );
}

// export default Calendar1;



// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// const Calendar1 = () => {
//   const [selectedDate, setSelectedDate] = useState(null);

//   const [Open, setOpen] = useState(false);


//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

//   return (
//     <div>
//       {/* <h1>Calendar Popup Example</h1>
//       <button onClick={() => setOpen(true)}>Open Calendar</button>
//       {selectedDate && <p>Selected Date: {selectedDate.toDateString()}</p>}
//       {Open && (
//         <DatePicker
//           selected={selectedDate}
//           onChange={handleDateChange}
//           onClickOutside={() => setOpen(false)}
//         />
//       )} */}


//       <DatePicker/>
//     </div>
//   );
// };

// import the datepickercomponent
// import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
// import * as React from 'react';
// import * as ReactDOM from 'react-dom';
//  class Calendar1 extends React.Component {
//     onFocus(args) {
//         this.dateObj.show();
//     }
//     render() {
//         return (
//         // Specifies the tag for render the DatePicker component
//         <DatePickerComponent focus={this.onFocus.bind(this)} placeholder="Choose a date" ref={scope => { this.dateObj = scope; }}/>);
//     }
// }


export default Calendar1;
