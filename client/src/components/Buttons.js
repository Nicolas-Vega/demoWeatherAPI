import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import TodayIcon from '@material-ui/icons/Today';
import MyLocationIcon from '@material-ui/icons/MyLocation';

class Buttons extends PureComponent {

    render() {
        const { setSelected } = this.props;

        return (
            <>
                <ListItem button key="Location" onClick={() => setSelected("Location")}>
                    <ListItemIcon> <MyLocationIcon /> </ListItemIcon>
                    <ListItemText primary="Location" />
                </ListItem>
                <ListItem button key="Current" onClick={() => setSelected("Current")}>
                    <ListItemIcon> <TodayIcon /> </ListItemIcon>
                    <ListItemText primary="Current" />
                </ListItem>
                <ListItem button key="Forecast" onClick={() => setSelected("Forecast")}>
                    <ListItemIcon> <AccessTimeIcon /> </ListItemIcon>
                    <ListItemText primary="Forecast" />
                </ListItem>
            </>
        );
    }
};

Buttons.propTypes = {
    setSelected: PropTypes.func,
};

export default Buttons;