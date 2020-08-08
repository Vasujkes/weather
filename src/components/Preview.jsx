import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { icon } from "../helpers";
import { WeatherModal } from "./";

const useStyles = makeStyles({
  root: {
    minWidth: 220,
    borderRadius: 10,
    position: "relative",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  img: {
    position: "absolute",
    right: 20,
  },
});

export default function Preview({
  name,
  weather,
  temperature,
  select,
}) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    select(name);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <img
          src={icon(weather.id)}
          className={classes.img}
          alt={`weather-icon-${name}`}
        ></img>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {name}
        </Typography>
        <Typography variant="h3" component="h2">
          {Math.floor(temperature)}°C
        </Typography>
        <Typography variant="body2" component="p">
          {weather.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleOpen}>
          Learn More
        </Button>
      </CardActions>
      <WeatherModal open={open} handleClose={handleClose} name={name}/>
    </Card>
  );
}
