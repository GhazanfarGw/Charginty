
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setIsLoading(true);
    //     setIsSuccess(false);
    //     setError('');

    //     try {
    //         const response = await fetch('http://localhost:4000/api/quote-request', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(dataBase),
    //         });

    //         if (response.ok) {
    //             setIsSuccess(true);
    //             setDatabase({ 
    //                 firstName: "",
    //                 lastName: "",
    //                 jobTitle: "",
    //                 zipCode: "",
    //                 email: "",
    //                 number: "",
    //                 city: "",
    //                 country: "",
    //                 message: "" });
    //         } else {
    //             const errorText = await response.text();
    //             setError(`Failed to send your request: ${errorText}`);
    //         }
    //     } catch (error) {
    //         setError(`An error occurred: ${error.message}`);
    //     } finally {
    //         setIsLoading(false);
    //     }
    // };

import React, { useState } from 'react';
import Nav from './Navbar';

function QuoteRequestForm() {
    const [firstName, setFirstname] = useState ('');
    const [lastName, setLastName] = useState ('');
    const [jobTitle, setJobtitle] = useState ('');
    const [zipCode, setZipcode] = useState ('');
    const [email, setEmail] = useState ('');
    const [number, setNumber] = useState ('');
    const [city, setCity] = useState ('');
    const [country, setCountry] = useState ('');
    const [message, setMessage] = useState ('');
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleFirstnameChange = (event) => {
        setFirstname(event.target.value);
    }
    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    }
    const handleJobtitleChange = (event) => {
        setJobtitle(event.target.value);
    }
    const handleZipcodeChange = (event) => {
        setZipcode(event.target.value);
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }
    const handleNumderChange = (event) => {
        setNumber(event.target.value);
    }
    const handleCityChange = (event) => {
        setCity(event.target.value);
    }
    const handleCountryChange = (event) => {
        setCountry(event.target.value);
    }
    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        setIsSuccess(false);
        setError('');
    
        try {
            const response = await fetch('https://charginitydatabase.adaptable.app/api/quote-request', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    jobTitle,
                    zipCode,
                    email,
                    number,
                    city,
                    country,
                    message,
                }),
            });
    
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Failed to send your request: ${errorText}`);
            }
    
            setIsSuccess(true);
        } catch (error) {
            setError(`An error occurred: ${error.message}`);
        } finally {
            setIsLoading(false);
        }
    };
    
    

  return (
    <>
    <div className='overflow-x-hidden'>
        <Nav/>
        <div className='text-black md:py-20 py-16 md:px-10 px-5 max-w-screen-lg mx-auto'>
            <div className='mx-auto justify-center text-center xl:pt-28 md:pb-10 pb-5 md:pt-20 pt-10'>
                <h1 className='md:text-5xl text-3xl font-semibold'>
                    Enter your details below
                </h1>
                <p className="text-sm md:text-base max-w-2xl mx-auto justify-center pt-8">
                    Simply fill out the form below and an Chargintiy representative will get in touch with you shortly to discuss your charging needs.
                </p>
            </div>
            <form onSubmit={handleSubmit}>
                { !isSuccess && 
                <div className='mx-auto'>
                    <div className='md:grid md:grid-cols-1 gap-8'>
                        <div className='md:grid md:grid-cols-2 gap-8'>
                            <div>
                                <label htmlFor='firstName' className="text-sm md:text-base">Full name</label>
                                <input
                                    className='bg-[#E9E9EB] border border-opacity-30 py-2 mt-2 w-full px-4 mx-auto rounded-lg'
                                    type="text"
                                    value={firstName}
                                    onChange={handleFirstnameChange}
                                    required
                                />

                            </div>
                            <div className="md:mt-0 mt-2">
                                <label htmlFor='lastName' className="text-sm md:text-base">Last name</label>
                                <input
                                    className='bg-[#E9E9EB] border border-opacity-30 mt-2 py-2 w-full px-4 mx-auto rounded-lg'
                                    type="text"
                                    value={lastName}
                                    onChange={handleLastNameChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className='md:grid md:grid-cols-2 gap-8'>
                            <div className="md:mt-0 mt-2">
                                <label htmlFor='jobTitle' className="text-sm md:text-base">Job Title*</label>
                                <select
                                        className='bg-[#E9E9EB] border border-opacity-30 py-2 w-full px-4 mx-auto rounded-lg mt-2'
                                        placeholder='Job Title'
                                        type="text"
                                        value={jobTitle}
                                        onChange={handleJobtitleChange}
                                        required
                                >
                                        <option disabled>Select</option>
                                        <option value="CEO or Management Executive">CEO or Management Executive</option>
                                        <option value="Manager of Technical Specialists">Manager of Technical Specialists</option>
                                        <option value="Facility Manager">Facility Manager</option>
                                        <option value="Purchasing Manager">Purchasing Manager</option>
                                        <option value="Project Manager">Project Manager</option>
                                        <option value="Other Manager">Other Manager</option>
                                        <option value="Technical Specialist">Technical Specialist</option>
                                        <option value="Business Developer">Business Developer</option>
                                        <option value="Consultant or Advisor">Consultant or Advisor</option>
                                        <option value="Charginity partner">Charginity partner</option>
                                        <option value="Other">Other</option>
                                </select>
                            </div>
                            <div className="md:mt-0 mt-2">
                                <label className="text-sm md:text-base">Zip Code</label>
                                <input
                                    className='bg-[#E9E9EB] border border-opacity-30 py-2 w-full px-4 mx-auto rounded-lg mt-2'
                                    placeholder='Zip Code'
                                    type="text"
                                    value={zipCode}
                                    onChange={handleZipcodeChange}
                                    required
                                />
                            </div>
                            <div className="md:mt-0 mt-2">
                                <label className="text-sm md:text-base">Email Address</label>
                                <input
                                    className='bg-[#E9E9EB] border border-opacity-30 py-2 w-full px-4 mx-auto rounded-lg mt-2'
                                    placeholder='e.g. name@example.com'
                                    type="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    required
                                />
                            </div>
                            <div className="md:mt-0 mt-2">
                                <label className="text-sm md:text-base">Contact Number</label>
                                <input
                                    className='bg-[#E9E9EB] border border-opacity-30 py-2 w-full px-4 mx-auto rounded-lg mt-2'
                                    placeholder='e.g. 0031 XXXXXXXXXXXXX'
                                    type="number"
                                    value={number}
                                    onChange={handleNumderChange}
                                    required
                                />
                            </div>
                            <div className="md:mt-0 mt-2">
                                <label className="text-sm md:text-base">City</label>
                                <input
                                    className='bg-[#E9E9EB] border border-opacity-30 py-2 w-full px-4 mx-auto rounded-lg mt-2'
                                    placeholder='City'
                                    type="text"
                                    value={city}
                                    onChange={handleCityChange}
                                    required
                                />
                            </div>
                            <div className="md:mt-0 mt-2">
                                <label className="text-sm md:text-base">Country</label>
                                <select
                                    className='bg-[#E9E9EB] border border-opacity-30 py-2 w-full px-4 mx-auto rounded-lg mt-2'
                                    type="text"
                                    value={country}
                                    onChange={handleCountryChange}
                                    required
                                >
                                    <option value="">Select a country</option>
                                    <option value="Afghanistan">Afghanistan</option>
                                    <option value="Albania">Albania</option>
                                    <option value="Algeria">Algeria</option>
                                    <option value="Andorra">Andorra</option>
                                    <option value="Angola">Angola</option>
                                    <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                    <option value="Argentina">Argentina</option>
                                    <option value="Armenia">Armenia</option>
                                    <option value="Australia">Australia</option>
                                    <option value="Austria">Austria</option>
                                    <option value="Azerbaijan">Azerbaijan</option>
                                    <option value="Bahamas">Bahamas</option>
                                    <option value="Bahrain">Bahrain</option>
                                    <option value="Bangladesh">Bangladesh</option>
                                    <option value="Barbados">Barbados</option>
                                    <option value="Belarus">Belarus</option>
                                    <option value="Belgium">Belgium</option>
                                    <option value="Belize">Belize</option>
                                    <option value="Benin">Benin</option>
                                    <option value="Bhutan">Bhutan</option>
                                    <option value="Bolivia">Bolivia</option>
                                    <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                    <option value="Botswana">Botswana</option>
                                    <option value="Brazil">Brazil</option>
                                    <option value="Brunei">Brunei</option>
                                    <option value="Bulgaria">Bulgaria</option>
                                    <option value="Burkina Faso">Burkina Faso</option>
                                    <option value="Burundi">Burundi</option>
                                    <option value="Cabo Verde">Cabo Verde</option>
                                    <option value="Cambodia">Cambodia</option>
                                    <option value="Cameroon">Cameroon</option>
                                    <option value="Canada">Canada</option>
                                    <option value="Central African Republic">Central African Republic</option>
                                    <option value="Chad">Chad</option>
                                    <option value="Chile">Chile</option>
                                    <option value="China">China</option>
                                    <option value="Colombia">Colombia</option>
                                    <option value="Comoros">Comoros</option>
                                    <option value="Congo, Democratic Republic of the">Congo, Democratic Republic of the</option>
                                    <option value="Congo, Republic of the">Congo, Republic of the</option>
                                    <option value="Costa Rica">Costa Rica</option>
                                    <option value="Croatia">Croatia</option>
                                    <option value="Cuba">Cuba</option>
                                    <option value="Cyprus">Cyprus</option>
                                    <option value="Czech Republic">Czech Republic</option>
                                    <option value="Denmark">Denmark</option>
                                    <option value="Djibouti">Djibouti</option>
                                    <option value="Dominica">Dominica</option>
                                    <option value="Dominican Republic">Dominican Republic</option>
                                    <option value="East Timor">East Timor</option>
                                    <option value="Ecuador">Ecuador</option>
                                    <option value="Egypt">Egypt</option>
                                    <option value="El Salvador">El Salvador</option>
                                    <option value="Equatorial Guinea">Equatorial Guinea</option>
                                    <option value="Eritrea">Eritrea</option>
                                    <option value="Estonia">Estonia</option>
                                    <option value="Eswatini">Eswatini</option>
                                    <option value="Ethiopia">Ethiopia</option>
                                    <option value="Fiji">Fiji</option>
                                    <option value="Finland">Finland</option>
                                    <option value="France">France</option>
                                    <option value="Gabon">Gabon</option>
                                    <option value="Gambia">Gambia</option>
                                    <option value="Georgia">Georgia</option>
                                    <option value="Germany">Germany</option>
                                    <option value="Ghana">Ghana</option>
                                    <option value="Greece">Greece</option>
                                    <option value="Grenada">Grenada</option>
                                    <option value="Guatemala">Guatemala</option>
                                    <option value="Guinea">Guinea</option>
                                    <option value="Guinea-Bissau">Guinea-Bissau</option>
                                    <option value="Guyana">Guyana</option>
                                    <option value="Haiti">Haiti</option>
                                    <option value="Honduras">Honduras</option>
                                    <option value="Hungary">Hungary</option>
                                    <option value="Iceland">Iceland</option>
                                    <option value="India">India</option>
                                    <option value="Indonesia">Indonesia</option>
                                    <option value="Iran">Iran</option>
                                    <option value="Iraq">Iraq</option>
                                    <option value="Ireland">Ireland</option>
                                    <option value="Israel">Israel</option>
                                    <option value="Italy">Italy</option>
                                    <option value="Ivory Coast">Ivory Coast</option>
                                    <option value="Jamaica">Jamaica</option>
                                    <option value="Japan">Japan</option>
                                    <option value="Jordan">Jordan</option>
                                    <option value="Kazakhstan">Kazakhstan</option>
                                    <option value="Kenya">Kenya</option>
                                    <option value="Kiribati">Kiribati</option>
                                    <option value="Korea, North">Korea, North</option>
                                    <option value="Korea, South">Korea, South</option>
                                    <option value="Kosovo">Kosovo</option>
                                    <option value="Kuwait">Kuwait</option>
                                    <option value="Kyrgyzstan">Kyrgyzstan</option>
                                    <option value="Laos">Laos</option>
                                    <option value="Latvia">Latvia</option>
                                    <option value="Lebanon">Lebanon</option>
                                    <option value="Lesotho">Lesotho</option>
                                    <option value="Liberia">Liberia</option>
                                    <option value="Libya">Libya</option>
                                    <option value="Liechtenstein">Liechtenstein</option>
                                    <option value="Lithuania">Lithuania</option>
                                    <option value="Luxembourg">Luxembourg</option>
                                    <option value="Madagascar">Madagascar</option>
                                    <option value="Malawi">Malawi</option>
                                    <option value="Malaysia">Malaysia</option>
                                    <option value="Maldives">Maldives</option>
                                    <option value="Mali">Mali</option>
                                    <option value="Malta">Malta</option>
                                    <option value="Marshall Islands">Marshall Islands</option>
                                    <option value="Mauritania">Mauritania</option>
                                    <option value="Mauritius">Mauritius</option>
                                    <option value="Mexico">Mexico</option>
                                    <option value="Micronesia">Micronesia</option>
                                    <option value="Moldova">Moldova</option>
                                    <option value="Monaco">Monaco</option>
                                    <option value="Mongolia">Mongolia</option>
                                    <option value="Montenegro">Montenegro</option>
                                    <option value="Morocco">Morocco</option>
                                    <option value="Mozambique">Mozambique</option>
                                    <option value="Myanmar">Myanmar</option>
                                    <option value="Namibia">Namibia</option>
                                    <option value="Nauru">Nauru</option>
                                    <option value="Nepal">Nepal</option>
                                    <option value="Netherlands">Netherlands</option>
                                    <option value="New Zealand">New Zealand</option>
                                    <option value="Nicaragua">Nicaragua</option>
                                    <option value="Niger">Niger</option>
                                    <option value="Nigeria">Nigeria</option>
                                    <option value="North Macedonia">North Macedonia</option>
                                    <option value="Norway">Norway</option>
                                    <option value="Oman">Oman</option>
                                    <option value="Pakistan">Pakistan</option>
                                    <option value="Palau">Palau</option>
                                    <option value="Panama">Panama</option>
                                    <option value="Papua New Guinea">Papua New Guinea</option>
                                    <option value="Paraguay">Paraguay</option>
                                    <option value="Peru">Peru</option>
                                    <option value="Philippines">Philippines</option>
                                    <option value="Poland">Poland</option>
                                    <option value="Portugal">Portugal</option>
                                    <option value="Qatar">Qatar</option>
                                    <option value="Romania">Romania</option>
                                    <option value="Russia">Russia</option>
                                    <option value="Rwanda">Rwanda</option>
                                    <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                    <option value="Saint Lucia">Saint Lucia</option>
                                    <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                                    <option value="Samoa">Samoa</option>
                                    <option value="San Marino">San Marino</option>
                                    <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                    <option value="Saudi Arabia">Saudi Arabia</option>
                                    <option value="Senegal">Senegal</option>
                                    <option value="Serbia">Serbia</option>
                                    <option value="Seychelles">Seychelles</option>
                                    <option value="Sierra Leone">Sierra Leone</option>
                                    <option value="Singapore">Singapore</option>
                                    <option value="Slovakia">Slovakia</option>
                                    <option value="Slovenia">Slovenia</option>
                                    <option value="Solomon Islands">Solomon Islands</option>
                                    <option value="Somalia">Somalia</option>
                                    <option value="South Africa">South Africa</option>
                                    <option value="South Sudan">South Sudan</option>
                                    <option value="Spain">Spain</option>
                                    <option value="Sri Lanka">Sri Lanka</option>
                                    <option value="Sudan">Sudan</option>
                                    <option value="Suriname">Suriname</option>
                                    <option value="Sweden">Sweden</option>
                                    <option value="Switzerland">Switzerland</option>
                                    <option value="Syria">Syria</option>
                                    <option value="Taiwan">Taiwan</option>
                                    <option value="Tajikistan">Tajikistan</option>
                                    <option value="Tanzania">Tanzania</option>
                                    <option value="Thailand">Thailand</option>
                                    <option value="Togo">Togo</option>
                                    <option value="Tonga">Tonga</option>
                                    <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                    <option value="Tunisia">Tunisia</option>
                                    <option value="Turkey">Turkey</option>
                                    <option value="Turkmenistan">Turkmenistan</option>
                                    <option value="Tuvalu">Tuvalu</option>
                                    <option value="Uganda">Uganda</option>
                                    <option value="Ukraine">Ukraine</option>
                                    <option value="United Arab Emirates">United Arab Emirates</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                    <option value="United States">United States</option>
                                    <option value="Uruguay">Uruguay</option>
                                    <option value="Uzbekistan">Uzbekistan</option>
                                    <option value="Vanuatu">Vanuatu</option>
                                    <option value="Vatican City">Vatican City</option>
                                    <option value="Venezuela">Venezuela</option>
                                    <option value="Vietnam">Vietnam</option>
                                    <option value="Yemen">Yemen</option>
                                    <option value="Zambia">Zambia</option>
                                    <option value="Zimbabwe">Zimbabwe</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <textarea
                        className='bg-[#E9E9EB] border border-opacity-30 pb-52 py-5 w-full px-4 mx-auto rounded-lg mt-8 overflow-y-hidden'
                        placeholder='Message'
                        type="text"
                        value={message}
                        required
                        onChange={handleMessageChange}
                    />
                    <div className='items-center'>
                        <button value={handleSubmit} type="submit" disabled={isLoading} className='bg-[#08CEAB] px-10 tracking-wider py-2 md:mt-10 mt-5 text-black'>
                            {isLoading ? 'Loading...' : 'Submit'}
                        </button>
                    </div>
                </div>}
                {isSuccess && <p className='justify-center mx-auto text-center pt-10 font-semibold text-[#08CEAB]'>Email sent successfully!</p>}
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
        </div>
    </div>
    </>
  );  
}

export default QuoteRequestForm;
