import { makeStyles } from "@material-ui/core/styles";

// this make styles make a hook to be used later on in NewsCards.js
const styles = makeStyles({
  container: {
    padding: "0 5%",
    width: "100%",
    margin: "0",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignContent: "center",
    width: "100%",
    height: "45vh",
    padding: "10%",
    borderRadius: "10px",
    color: "white",
  },
  infoCard: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
});

export default styles;
