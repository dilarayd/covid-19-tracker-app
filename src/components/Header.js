import React from 'react'

function Header() {
  return (
    <div>
      <img src='https://ihsangazi.kastamonu.edu.tr/images/2018/haber/corona/Coronavirus.jpg' alt='corona-logo' style={{ width: 150, marginTop: 15, marginBottom: 0 }} />
      <p style={{ marginTop: 0, color: "#3C8AB8", fontWeight: 'bold', fontSize: "2rem" }}>Covid-19 Tracker</p>
      <p className='t-global'
      >Global and Country Wise Cases of Corona Virus</p>
      <p className='t-for'
      >(For a Particlar select a Country from below)</p>
    </div>
  )
}

export default Header