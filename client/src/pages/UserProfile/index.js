import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import ImageIcon from '@material-ui/icons/Image';
import Header from '../../components/Header/index';
const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        paddingRight: theme.spacing.unit *4,
        paddingLeft: theme.spacing.unit *4,

    },
});

function UserProfile(props) {
    const { classes } = props;

    return (
        <div>
            <Header />
            <Paper className={classes.root} elevation={1}>
                <Typography className={classes.heading}>Name</Typography>
                <List component="nav" className={classes.root}>
                    <ListItem>
                        <Avatar>
                            <ImageIcon />
                        </Avatar>
                        <ListItemText primary="Photos" secondary="Birthday" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Name:" />
                    </ListItem>
                    <Divider />

                    <ListItem button>
                        <ListItemText primary="# Confirms:" />
                    </ListItem>
                    <Divider light />
                    <ListItem button>
                        <ListItemText primary="Street Address:" />
                    </ListItem>
                    <Divider light />
                    <ListItem button>
                        <ListItemText primary="City, Zip, State:" />
                    </ListItem>
                    <Divider light />
                    <ListItem button>
                        <ListItemText primary="Phone:" />
                    </ListItem>
                    <Divider light />
                    <ListItem button>
                        <ListItemText primary="Email:" />
                    </ListItem>
                    <Divider light />
                    <ListItem button>
                        <ListItemText primary="Wish List:" />
                    </ListItem>
                </List>

            </Paper>
        </div>
    );
}

UserProfile.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserProfile);

