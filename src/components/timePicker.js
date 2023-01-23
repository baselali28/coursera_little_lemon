// import * as React from "react";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
// import AdapterDateFns from "@mui/lab/AdapterDateFns";
// import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import TimePicker from "@mui/lab/TimePicker";
// import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/lab";
// import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
// import MobileDatePicker from "@mui/lab/MobileDatePicker";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

export default function TimePickCust() {
  const theme = createTheme({
    typography: {
      fontSize: 12,
      fontFamily: "Segoe UI, Helvetica, Arial, sans-serif",
    },
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: "#f44336",
      },
    },
  });

  const [selectedDate, setSelectedDate] = useState(null);
  console.log({ selectedDate });
  const handleChange = (newValue) => {
    setSelectedDate(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Stack spacing={3} sx={{ width: "150px" }}>
            <DateTimePicker
              label="Date picker"
              value={selectedDate}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </Stack>
        </LocalizationProvider>
      </div>
    </ThemeProvider>
  );
}
