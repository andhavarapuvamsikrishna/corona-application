import React from "react";
import styles from "./Cards.module.css";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import Countup from "react-countup";
import cx from "classnames"
const Cards = (props) => {
  if (!props.data.confirmed) {
    return "loading";
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center" >
        <Grid item component={Card} xs={12} md={3} className={cx(styles.Card,styles.infected)}>
          <CardContent>
            <Typography color="textSecondary">Infected</Typography>
            <Countup
              start={0}
              end={props.data.confirmed.value}
              duration={2}
              separator=","
            />
            <Typography color="textSecondary">
              {new Date(props.data.lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of active cases of covid-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.Card,styles.recovered)}>
          <CardContent>
            <Typography color="textSecondary">Recovered</Typography>
            <Countup
              start={0}
              end={props.data.recovered.value}
              duration={2}
              separator=","
            />
            <Typography color="textSecondary">
              {new Date(props.data.lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of recoveries from covid-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.Card,styles.deaths)}>
          <CardContent>
            <Typography color="textSecondary">Deaths</Typography>
            <Countup
              start={0}
              end={props.data.deaths.value}
              duration={2}
              separator=","
            />
           
            <Typography color="textSecondary">
              {new Date(props.data.lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of deaths caused by covid-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
export default Cards;
