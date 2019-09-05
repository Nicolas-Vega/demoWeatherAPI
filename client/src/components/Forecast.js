import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { getForecast } from '../utils/apiGet';
import CircularProgress from '@material-ui/core/CircularProgress';


class Location extends PureComponent {
    state = {
        data: {}
    }

    componentDidMount() {
        getForecast().then(data => {
            this.setState({data})
        });
    }

    render() {
        const data = this.state.data;
        debugger;
        if (!(data && data.city)) return (<CircularProgress />)
        return (
            <>
                <p>Today is: {data && data.city && data.city.name }</p>
            </>
        );
    }
};

Location.propTypes = {
    setSelected: PropTypes.func,
};

export default Location;