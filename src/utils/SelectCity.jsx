import React, {useState, useEffect} from 'react';
import { Inputs } from 'adminlte-2-react';
import axios from 'axios';
const { Select2 } = Inputs;

const SelectCity = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
    axios.get(`${process.env.REACT_APP_API_ENDPOINT}cities`)
        .then(res=>{
            setData(res.data)
        })
        .catch(err=>{
            console.log("Error")
            setData([])
        })
      },[])
      return(
        <Select2
            label="Localidad"
            labelPosition="above"
            options={data}
        />)
}

export default SelectCity;




