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
    card: {
        minWidth: 100,
        maxWidth: 1200,
        height: 1200,
        padding: '0 30px',
        
    },

    avatar: {
        margin: 10,
    },
    bigAvatar: {
        margin: 10,
        width: 60,
        height: 60,
    },
    
});

class Family extends React.Component {
    state = {
        expanded: null,
    };

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };

    render() {
        const { classes } = this.props;
        const { expanded } = this.state;

        return (


            <Card className={classes.card}>
            
                <CardContent>
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

                        </ExpansionPanelDetails>
                    </ExpansionPanel>
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

                        </ExpansionPanelDetails>
                    </ExpansionPanel>
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

                        </ExpansionPanelDetails>
                    </ExpansionPanel>
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

                        </ExpansionPanelDetails>
                    </ExpansionPanel>
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

                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </CardContent>
              
            </Card>
          
            
        );
    }
}

Family.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Family);
