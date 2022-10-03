import React, {useState, useEffect} from 'react';
import { Inputs } from 'adminlte-2-react';
import axios from 'axios';
const { Select2 } = Inputs;

const SelectDNI = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
    axios.get(`${process.env.REACT_APP_API_ENDPOINT}dni`)
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
            label="Tipo de DNI"
            labelPosition="above"
            options={data}
        />)
}

export default SelectDNI;




