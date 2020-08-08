import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MuiAlert from "@material-ui/lab/Alert";

import { fetchWeather, fetchCurrent } from "../actions/index";
import { Preview } from "../components";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(6),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "150px",
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function App({ data, fetchWeather, fetchCurrent, isLoading, errorMessage }) {
  const classes = useStyles();

  useEffect(() => {
    fetchWeather();
  }, [fetchWeather]);

  useEffect(() => {}, [isLoading]);

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Grid container spacing={3}>
        {!errorMessage ? (
          data &&
          data.map((city) => (
            <Grid item xs={12} sm={6} md={4} key={city.id}>
              <Preview
                name={city.name}
                weather={city.weather[0]}
                temperature={city.main.temp}
                coord={city.coord}
                select={fetchCurrent}
                isLoading={isLoading}
              />
            </Grid>
          ))
        ) : (
          <Alert severity="error">{errorMessage}</Alert>
        )}
      </Grid>
    </Container>
  );
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather, fetchCurrent }, dispatch);
}

export default connect(({ weather }) => weather, mapDispatchToProps)(App);
