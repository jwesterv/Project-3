import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ImageIcon from '@material-ui/icons/Image';
import Header from "../../components/Header/index";
import axios from "axios";
import Paper from '@material-ui/core/Paper';
import Styles from './style.css';
import sideDrawer from '../../components/Drawer/right';
import SearchIcon from '@material-ui/icons/Search';
import { fade } from '@material-ui/core/styles/colorManipulator';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';



const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: '600px',
        backgroundColor: theme.palette.background.paper,
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },

    avatar: {
        margin: 10,
    },

    bigAvatar: {
        margin: 10,
        width: 60,
        height: 60,
    },
    //style for search bar
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing.unit * 2,
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit * 3,
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },

});

class Family extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: null,
        };
    };

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,

        });
    };

    handleSearch = event => {
        event.preventDefault();
        axios.get('/profile')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        const { classes } = this.props;
        const { expanded } = this.state;

        return (

            <div>
                <Header />
                <sideDrawer />
                <div align="center" >
                    <Paper>

                        <div className={classes.search}>
                            <div className={classes.searchIcon} >
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                            />
                            <Button onClick={this.handleSearch} variant="outlined" color="primary" size="small" >Search Family Member</Button>
                        </div>
                        <CardContent className="wrapper" >
                            <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography className={classes.heading}>Name</Typography>
                                </ExpansionPanelSummary>

                                <ExpansionPanelDetails>
                                    <List component="nav" className={classes.root}>
                                        <ListItem>
                                            <Avatar>
                                                <ImageIcon />
                                            </Avatar>
                                            <ListItemText primary="Photos" secondary="Birthday" />
                                        </ListItem>
                                        <ListItem button>
                                            <ListItemText primary="Name:" className="alignRight" />
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

                                </ExpansionPanelDetails>
                            </ExpansionPanel>

                        </CardContent>


                    </Paper>

                </div>
            </div>

        );
    }
}

Family.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Family);
