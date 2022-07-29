import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_dinqh0m',
        'template_6t2cg6w',
        form.current,
        'nV6Sx0FCl2gj7iaVp'
      )
      .then(
        (result) => {
          console.log(result.text)
          e.target.reset()
          alert('Jesse was contacted!')
        },
        (error) => {
          console.log(error.text)
          alert('Somethign went wrong! Sorry for the inconvenience')
        }
      )
  }
  return (
    <div className='form-container'>
      <div className='form'>
        <form className='contact-form' ref={form} onSubmit={sendEmail}>
          <h2>Contact</h2>
          <input
            className='inputContent'
            type='text'
            name='user_name'
            placeholder='Name'
          />
          <input
            className='inputContent'
            type='email'
            name='user_email'
            placeholder='email'
          />
          <textarea
            className='inputContent'
            name='message'
            placeholder='message'
          />
          <input className='submit' type='submit' value='Send Message' />
        </form>
      </div>
    </div>
  )
}
export default Contact
