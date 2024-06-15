import React, { useState } from 'react';
import Select from 'react-select';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';


const countryOptions = [
  { value: 'dz', label: 'Algeria', icon: 'dz' },
];



function Page4() {
  const [selectedCountry, setSelectedCountry] = useState(countryOptions[0]);
  const [phone, setPhone] = useState('');


  return (
    <div className='page4'>

      <PhoneInput
        country={selectedCountry.value}
        value={phone}
        onChange={setPhone}
        inputProps={{
          name: 'phone',
          required: true,
          autoFocus: true,
        }}
      />

      <div className='divider' style={{ marginTop: "20px" }}>
        <button type="submit" className="submit-button">OK</button>
        <p className="hint">press Enter ↵</p>
      </div>
    </div>
  )
}

export default Page4