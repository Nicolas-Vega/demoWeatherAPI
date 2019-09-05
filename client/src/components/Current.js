import React, { PureComponent } from 'react';
import { getCurrent } from '../utils/apiGet';
import CircularProgress from '@material-ui/core/CircularProgress';


class Current extends PureComponent {
    state = {
        data: {}
    }

    componentDidMount() {
        getCurrent().then(data => {
            this.setState({data})
        });
    }

    render() {
        const data = this.state.data;
        debugger;
        if (!(data && data.name)) return (<CircularProgress />)
        return (
            <>
                <p>Temp right now is: {data && data.main && Math.round(data.main.temp - 273)}</p>
            </>
        );
    }
};

export default Current;