import { useEffect, useState } from 'react'
import { fetchCountries, fetchCountryData } from '../redux/trackSlice'
import { useDispatch, useSelector } from 'react-redux';
import BarChart from './BarChart';


function Countries() {
  const dispatch = useDispatch();
  const countries = useSelector(state => state.track.countries);
  const { infected, recovered, deaths, active } = useSelector(state => state.track.countryData)
  const [selectedCountry, setSelectedCountry] = useState('USA');

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  useEffect(() => {
    if (selectedCountry) {
      dispatch(fetchCountryData(selectedCountry));
    }
  }, [selectedCountry, dispatch]);


  const handleCountryClick = (countryName) => {
    setSelectedCountry(countryName);
  };

  const formatNumber = (number) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 0
    }).format(number);
  };

  return (
    <div>
      <div className='flex-container'>
        <div className='box blue-bx' >
          <p className='box-title'>Infected</p>
          <p className='box-value'> {formatNumber(infected)}</p>
          <p className='box-title'>Last Updated at:</p>
          <p className='box-date'>Fri Sep 17 2021</p>
          <p className='box-date'>6:21:26 PM</p>
          <p className='box-comment'>Number of active cases of Covid-19</p>
          <p className='box-comment'>{selectedCountry}</p>

        </div>
        <div className='box green-bx'>
          <p className='box-title'>Recovered</p>
          <p className='box-value'>{formatNumber(recovered)}</p>
          <p className='box-title'>Last Updated at:</p>
          <p className='box-date'>Fri Sep 17 2021</p>
          <p className='box-date'>6:21:26 PM</p>
          <p className='box-comment'>Number of active cases of Covid-19</p>
          <p className='box-comment'>{selectedCountry}</p>
        </div>
        <div className='box pink-bx'>
          <p className='box-title'>Deaths</p>
          <p className='box-value'>{formatNumber(deaths)}</p>
          <p className='box-title'>Last Updated at:</p>
          <p className='box-date'>Fri Sep 17 2021</p>
          <p className='box-date'>6:21:26 PM</p>
          <p className='box-comment'>Number of active cases of Covid-19</p>
          <p className='box-comment'>{selectedCountry}</p>
        </div>
        <div className='box yellow-bx'>
          <p className='box-title'>Active</p>
          <p className='box-value'>{formatNumber(active)}</p>
          <p className='box-title'>Last Updated at:</p>
          <p className='box-date'>Fri Sep 17 2021</p>
          <p className='box-date'>6:21:26 PM</p>
          <p className='box-comment'>Number of active cases of Covid-19</p>
          <p className='box-comment'>{selectedCountry}</p>
        </div>
      </div>
      <select value={selectedCountry} onChange={(e) => handleCountryClick(e.target.value)} className='select-box'>
        {countries.map(country => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
      <div style={{ marginBottom: "1rem" }}>
        <p className="box-comment">Current state in {selectedCountry} </p>
        <BarChart />
      </div>
    </div>
  )
}

export default Countries