import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Nav from '../header&footer&loader/Navbar';

function Quote () {
  const [firstName, setFirstname] = useState('');
  const [lastName, setLastname] = useState ('');
  const [company, setCompany] = useState ('');
  const [jobTitle, setJobtitle] = useState ('');
  const [zipCode, setZipcode] = useState ('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState ('');
  const [city, setCity] = useState ('');
  const [subject, setSubject] = useState ('');
  const [message, setMessage] = useState ('');

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const templateParams = {
        firstName: firstName,
        lastName: lastName,
        company: company,
        jobTitle: jobTitle,
        zipCode: zipCode,
        email: email,
        number: number,
        city: city,
        subject: subject,
        message: message,
    };
    emailjs.send(
      'service_t0mmzxm',
      'template_vyr4tbf',
      templateParams,
      'a5SikSpJjSDiomd52'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSuccess(true);
        setLoading(false);
      })
      .catch((error) => {
        console.error('FAILED...', error);
        setLoading(false);
      });
  };

  return (
    <>
    <div className='overflow-x-hidden'>
        <Nav/>
        <div className='text-white md:py-20 py-16 md:px-10 px-5 max-w-screen-lg mx-auto'>
            <div className='py-10 mx-auto justify-center text-center'>
                <h1 className='md:text-5xl text-3xl font-semibold'>
                    Your details
                </h1>
                <p className='md:pt-3'>
                    Enter your details below
                </p>
                <p>
                    Simply fill out the form below and an Chargintiy representative will get in touch with you shortly to discuss your charging needs.
                </p>
            </div>
            <form onSubmit={handleSubmit}>
                { !success && 
                <div className='mx-auto'>
                    <div className='md:grid md:grid-cols-2 gap-8'>
                        <input
                            className='bg-[#0D0D0D] border border-[#0ec9ac] border-opacity-30 py-2 w-full px-4 mx-auto'
                            placeholder='Full Name'
                            type="name"
                            id="name"
                            value={firstName}
                            required
                            onChange={(event) => setFirstname(event.target.value)}
                        />
                        <input
                            className='bg-[#0D0D0D] border border-[#0ec9ac] border-opacity-30 py-2 w-full px-4 mx-auto'
                            placeholder='Last Name'
                            type="name"
                            id="name"
                            value={lastName}
                            required
                            onChange={(event) => setLastname(event.target.value)}
                        />
                        <input
                            className='bg-[#0D0D0D] border border-[#0ec9ac] border-opacity-30 py-2 w-full px-4 mx-auto mt-8 md:mt-0'
                            placeholder='Company Name'
                            type="company"
                            id="company"
                            value={company}
                            required
                            onChange={(event) => setCompany(event.target.value)}
                        />
                        <input
                            className='bg-[#0D0D0D] border border-[#0ec9ac] border-opacity-30 py-2 w-full px-4 mx-auto mt-8 md:mt-0'
                            placeholder='Job Title'
                            type="jobTitle"
                            id="company"
                            value={jobTitle}
                            required
                            onChange={(event) => setJobtitle(event.target.value)}
                        />
                        <input
                            className='bg-[#0D0D0D] border border-[#0ec9ac] border-opacity-30 py-2 w-full px-4 mx-auto mt-8 md:mt-0'
                            placeholder='Email Address'
                            type="email"
                            id="email"
                            value={email}
                            required
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        <input
                            className='bg-[#0D0D0D] border border-[#0ec9ac] border-opacity-30 py-2 w-full px-4 mx-auto mt-8 md:mt-0'
                            placeholder='Phone Number'
                            type="number"
                            id="number"
                            value={number}
                            required
                            onChange={(event) => setNumber(event.target.value)}
                        />
                    </div>
                    <input
                        className='bg-[#0D0D0D] border border-[#0ec9ac] border-opacity-30 py-2 w-full px-4 mx-auto mt-8'
                        placeholder='Subject'
                        type="subject"
                        id="subject"
                        value={subject}
                        required
                        onChange={(event) => setSubject(event.target.value)}
                    />
                    <textarea
                        className='bg-[#0D0D0D] border border-[#0ec9ac] border-opacity-30 pb-52 py-5 w-full px-4 mx-auto mt-8 overflow-y-hidden'
                        placeholder='Message'
                        type="message"
                        id="message"
                        value={message}
                        required
                        onChange={(event) => setMessage(event.target.value)}
                    />
                    <div className='items-center'>
                        <button className='bg-[#0ec9ac] px-10 tracking-wider py-2 md:mt-10 mt-5 text-white' type="submit">
                            {loading ? 'Loading...' : 'Submit'}
                        </button>
                    </div>
                </div>}
                {success && <p className='justify-center mx-auto text-center pt-10 font-semibold text-[#0ec9ac]'>Email sent successfully!</p>}
            </form>
        </div>
    </div>
    </>
  );  
}

export default Quote;