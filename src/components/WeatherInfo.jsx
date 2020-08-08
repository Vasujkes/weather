import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  head: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",

    "& th": {
      color: "white",
    },
  },
}));

const WeatherInfo = ({ data, isLoading, tableHead }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Table aria-label="simple table">
        <TableHead className={classes.head}>
          <TableRow>
            {Object.keys(tableHead).map((tableHeadName) => (
              <TableCell key={tableHeadName}>
                <Typography variant="h6">{tableHeadName}</Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody className={classes.body}>
          {!isLoading ? (
            data &&
            data.map((row) => (
              <TableRow key={row.time}>
                <TableCell component="th" scope="row">
                  <Typography variant="h6" gutterBottom>
                    {row.time}
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography vvariant="subtitle2" gutterBottom>
                    {row.temp}°C
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography vvariant="subtitle2" gutterBottom>
                    {row.humidity}%
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography vvariant="subtitle2" gutterBottom>
                    {row.pressure} hPa
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <img src={row.weather} alt="weather-icon" />
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              {Object.keys(tableHead).map((tableHeadName) => (
                <TableCell align="right" key={tableHeadName}>
                  <Skeleton />
                </TableCell>
              ))}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default WeatherInfo;
