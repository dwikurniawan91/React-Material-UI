import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        fontWeight: "bold",
        backgroundColor: "red",
        margin: "30px",
        "&:hover": {
          backgroundColor: "green"
        }
      }
    }
  }
});
