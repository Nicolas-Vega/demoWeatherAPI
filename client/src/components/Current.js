import React, { useState, useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { getCurrent } from '../utils/apiGet';
import argCities from '../utils/argCities';

const urlIcon = (icon) => (`http://openweathermap.org/img/wn/${icon}@2x.png`);


export const Current = () => {
    const [data, setData] = useState({});
    const [city, setCity] = useState("");

    useEffect(() => {
        getCurrent().then(data => {
            setData(data);
        });
    }, []);

    const handleChangeCity = (event) => {
        setCity(event.target.value)
        getCurrent(event.target.value).then(data => {
            setData(data);
        })
    }

    return (
            <>
                <Typography variant="h2" gutterBottom>Current Time</Typography>
                <div>
                    <FormControl style={{ backgroundColor: "white", width: "200px"}}>
                        <InputLabel>City</InputLabel>
                        <Select
                            value={city}
                            onChange={handleChangeCity}
                            inputProps={{
                                name: 'city',
                                id: 'city-simple',
                            }}
                            >
                            {argCities.Argentina.map(x =>
                                <MenuItem value={x}>{x}</MenuItem>
                            )}
                        </Select>
                    </FormControl>
                </div>
                {(data && data.name) ?
                <div>
                    <div>{data && data.name}</div>
                <img
                    src={urlIcon(data && data.weather && data.weather[0] && data.weather[0].icon )}
                    alt={urlIcon(data && data.weather && data.weather[0] && data.weather[0].main )}
                />{data && data.weather && data.weather[0] && data.weather[0].main}
                <p>Temp: {data && data.main && Math.round(data.main.temp - 273)} C°</p>
                </div>
                : (<CircularProgress />)}

            </>
        ) ;
};