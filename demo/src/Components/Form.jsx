import React from 'react'
import { useState } from 'react'
import emailjs from 'emailjs-com'

function Form() {
    const [name,setName]= useState('')
    const [email,setEmail]= useState('')
    const [msg,setMsg]= useState('')

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_44i45m2', 'template_zu8sezq', e.target, '_ChPQ3YSwY1mr6KIH')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };

    return (
        <>
            <div className='container'>
                <form onSubmit={sendEmail}>
                    {/* Name input */}
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form4Example1">
                                الاسم*
                        </label>
                        <input name='name' type="text" id="form4Example1" className="form-control" onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    {/* Email input */}
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form4Example2">
                            البريد الإلكتروني*
                        </label>
                        <input name='email' type="email" id="form4Example2" className="form-control" onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    {/* Message input */}
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form4Example3">
                            الرسالة*
                        </label>
                        <textarea
                            name='message'
                            className="form-control"
                            id="form4Example3"
                            rows={4}
                            defaultValue={""}
                            onChange={(e)=>setMsg(e.target.value)}
                        />
                    </div>
                    {/* Submit button */}
                    <button type="submit" className="btn btn-primary btn-block mb-4">
                        إرسال
                    </button>
                </form>
            </div>
        </>
    )
}

export default Form