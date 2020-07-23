import React,{Component} from 'react';
import Cards from "./components/Cards/Cards"
import Chart from "./components/Chart/Chart"
import CountryPicker from "./components/CountryPicker/CountryPicker"
import styles from "./App.module.css";
import { fetchData} from "./api"
import coronaImage from "./images/corona_image3.png"


class App extends Component{
  state={
    data:{},
    fetchedDailyData:{},
    country:''
  }
  async componentDidMount(){
    const fetchedData=await fetchData()
    //console.log(fetchedData)
    this.setState({data:fetchedData})
    
  }
  handleCountryChange = async (country) =>{
   // console.log(country)
    const cdata = await fetchData(country)
    //console.log(cdata)
   this.setState({data:cdata,country:country})
  }

  render()
  {
    const { data,country }=this.state
    return(
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="covid-19"/>
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country}/>
        
       
      </div>
    )
  }
}
export default App;
