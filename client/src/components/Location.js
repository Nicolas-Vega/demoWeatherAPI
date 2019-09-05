import React, { PureComponent } from 'react';
import { getLocation } from '../utils/apiGet';
import CircularProgress from '@material-ui/core/CircularProgress';


class Location extends PureComponent {
    state = {
        data: {}
    }

    componentDidMount() {
        getLocation().then(data => {
            this.setState({data})
        });
    }

    render() {
        const location = this.state.data;
        if (!(location && location.ip)) return (<CircularProgress />)
        return (
            <>
                <p>Your current ip is: {location && location.ip}</p>
                <p>You are in: {location && location.location && location.location.city},
                {location && location.location && location.location.region},
                {location && location.location && location.location.country}</p>
            </>
        );
    }
};

export default Location;