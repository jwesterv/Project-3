
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
import SearchIcon from '@material-ui/icons/Search';
import { fade } from '@material-ui/core/styles/colorManipulator';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import MessageList from '../../components/Chat/Messagelist/MessageList';
// import Header from './Header/Header';
import MessageBox from '../../components/Chat/Messagebox/MessageBox';
import firebase from 'firebase';

//Payload Template
//=================================================
//import privateHelpers -- link below import to your component
import privateHelpers from '../../components/PrivateRoute/helpers/private.helper'

if (localStorage.getItem('token')) {
    //get token
    let token = privateHelpers.getToken();
    //split token
    let splitToken = privateHelpers.splitToken(token);
    //pull user data from token
    const userData = privateHelpers.getUserData(token);
    //view token and user obj
    console.log(token)
    console.log(userData)
    console.log(userData.username)

}
//==================================================



class Family extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            userData: {
                email: ""
            },
            list: [],
            members: [],
            user: []
        };


        // this.getMembers = this.getMembers.bind(this);
        // this.getUser = this.getUser.bind(this);
        var config = {
            apiKey: "AIzaSyCcq7i-yLkoaJ5kZoFJEzl6LTSkXfpKFWw",
            authDomain: "family-97404.firebaseapp.com",
            databaseURL: "https://family-97404.firebaseio.com",
            projectId: "family-97404",
            storageBucket: "family-97404.appspot.com",
            messagingSenderId: "991582671358"
          };
          firebase.initializeApp(config);
    }

    // state = {
    // persons: [
    //     {
    //         firstName: 'Mary',
    //         lastName: 'Smith',
    //         birthday: 'Jan 1, 2010',
    //         phone: '555-234-2345',
    //         accessCode: "456783",
    //         email: 'mary.smith@mary.smith.com',
    //         address: '4 Forest Drive',
    //         city: 'Laguna Beach',
    //         st: 'CA',
    //         zip: "92688"
    //     },
    //     {
    //         firstName: 'John',
    //         lastName: 'King',
    //         birthday: 'Jan 5, 1980',
    //         phone: '557-555-8888',
    //         accessCode: 45545,
    //         email: 'john.john@hello.com',
    //         address: '5 Lake drive',
    //         city: 'Laguna Niguel',
    //         st: 'CA',
    //         zip: 92677
    //     },
    //     {
    //         firstName: 'Bob',
    //         lastName: 'States',
    //         birthday: 'June 5, 1998',
    //         phone: '661-888-8888',
    //         accessCode: 455556,
    //         email: 'bob@bobsmith.com',
    //         address: '45 Baker Way',
    //         city: 'Irvine',
    //         st: 'CA',
    //         zip: 92612
    //     },
    //     {
    //         firstName: 'Lisa',
    //         lastName: 'Jones',
    //         birthday: 'February 23, 1999',
    //         phone: '555-555-5555',
    //         accessCode: 456325,
    //         email: 'lisa@jones.com',
    //         address: '455 Blue drive',
    //         city: 'Lake Forest',
    //         st: 'CA',
    //         zip: 92653
    //     },
    // ],

    // };


    getMembers() {
        //     axios.get("/api/getmembers").then(res => this.setState({ members: res.data }))
    }
    getUser() {
        // axios.get("/api/getuser?email=").then(res => this.setState({ user: res.data }))

        // axios.get('/user?ID=12345')
    }

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,

        });
    };
    componentWillMount() {
        this.getMembers()
    };



    componentDidMount() {


        axios.get(`/profile/accesscode:`)
            .then(res => {
                console.log(res);
                this.setState({ persons: res.data });
            });



    };


    render() {
        const { classes } = this.props;
        const { expanded } = this.state;
        let token = privateHelpers.getToken();
        //split token
        let splitToken = privateHelpers.splitToken(token);
        //pull user data from token
        const userData = privateHelpers.getUserData(token);
        //view token and user obj
        console.log(token)
        console.log(userData)

        // this.setState({ userData: token });
        return (

            <div>
                <Header />
                <div align="center" >
                    <Paper>
                        <div>Welcome {userData.username}</div>
                        <div>FamilyID: {userData.familyid}</div>


                        {/* {axios.get("/api/getmembers",  {params:{familyid:userData.familyid }})
                        }) */}







                    </Paper>

                    <div className="container">
                        {/* <Header title="Firebase Chat" /> */}
                        <div className="columns">
                            <div className="column is-3"></div>
                            <div className="column is-6">
                                <MessageList db={firebase} />
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column is-3"></div>
                            <div className="column is-6">
                                <MessageBox db={firebase} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}


Family.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default Family;