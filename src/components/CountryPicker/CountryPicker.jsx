import React,{ useState,useEffect} from "react"
//import {NativeSelect,FormControl } from '@material-ui/core'
import styles from "./CountryPicker.module.css"
import { fetchCountries } from "../../api"
const CountryPicker=({ handleCountryChange }) => {
    const [fetchedCountries,setFetchedCountries] = useState([])
    useEffect(() =>{
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries())
        }
        fetchAPI();
    },[])
    //console.log(fetchCountries)
    return(
       
      <select className={styles.mySelect} defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
        <option className={styles.mySelected} value="">Select country</option>
        {fetchedCountries.map((country, i) => <option className={styles.mySelected} key={i} value={country}>{country}</option>)}
      </select>
    
    )
}


export default CountryPicker