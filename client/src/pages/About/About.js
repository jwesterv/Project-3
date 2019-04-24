import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';
import Navbar from "../../components/NavBar/index";

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
});

function PaperSheet(props) {
    const { classes } = props;

    return (
        <div>
         <Navbar />
            <Paper className={classes.root} elevation={1}>
                <Typography variant="h5" component="h3">
                    About Us
          </Typography>
                <Typography component="p">
                    Connecting through your family through the world made easier
          </Typography>
                <Typography component="p">
                    Simplistic enough for the grandparents to use and functionality for everyone in the family to connect or reconnect.
          This project was started to bring a way for the family to connect with one another without the hassle
          or complications that other social media platforms have.
          </Typography>
                <Typography component="p">
                    Chat room for the cousins secret birthday celebration? Have everyone except him
          </Typography>

            <Typography component="p">
                Forgot the date of your aunt's birthday? Look at the shared calendar
          </Typography>
            </Paper>
        </div >
    );
}

PaperSheet.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);