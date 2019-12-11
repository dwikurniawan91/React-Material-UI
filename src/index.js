import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import Button from "@material-ui/core/Button";
import theme from "./theme";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <Button variant="outlined">Button styled with MUI theme only</Button>
      </MuiThemeProvider>
    </div>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
