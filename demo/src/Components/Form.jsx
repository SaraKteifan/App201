import React from 'react';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import { Container } from 'react-bootstrap';

const regExp = RegExp(
    /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
)

function Form() {
    const [name,setName]= useState('')
    const [email,setEmail]= useState('')
    const [msg,setMsg]= useState('')
    const [error1, setError1]= useState('')
    const [error2, setError2]= useState('')


    const sendEmail = (e) => {
        e.preventDefault();
        if(name === '' || email === '' || msg === ''){
            setError1('جميع الحقول مطلوبة')
        }else if(!regExp.test(email)){
            setError1('')
            setError2('البريد الإلكتروني غير صحيح')
        }
        else{
            setError1('')
            setError2('')
            emailjs.sendForm('service_44i45m2', 'template_zu8sezq', e.target, '_ChPQ3YSwY1mr6KIH')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
            }
        };

    return (
        <>
            <Container className='pt-2 '>
            <form onSubmit={sendEmail} noValidate>
                    {/* Name input */}
                    <div className="form-control mb-4 border-0" style={{backgroundColor:' rgba(255,255,255, 0.0)'}}>
                        <label className="form-label" htmlFor="form4Example1" lang='ar'>
                            اسم المرسل*                        
                        </label>
                        <input 
                            maxLength={25}
                            lang='ar' 
                            style={{width:'90%'}} 
                            name='name' 
                            type="text" 
                            id="form4Example1" 
                            className="form-control" 
                            onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    {/* Email input */}
                    <div className="form-control mb-4 border-0" style={{backgroundColor:' rgba(255,255,255, 0.0)'}}>
                        <label className="form-label" htmlFor="form4Example2" lang='ar'>
                            البريد الإلكتروني*                        
                        </label>
                        <input maxLength={30} style={{width:'90%'}} name='email' type="email" id="form4Example2" className="form-control" onChange={(e)=>setEmail(e.target.value)} />
                        <span style={{color:'red'}} lang='ar'>{error2}</span>
                    </div>
                    {/* Message input */}
                    <div className="form-control mb-4 border-0" style={{backgroundColor:' rgba(255,255,255, 0.0)'}}>
                        <label lang='ar' className="form-label" htmlFor="form4Example3">
                            رسالتك*                        
                        </label>
                        <textarea
                            name='message'
                            className="form-control row"
                            id="form4Example3"
                            style={{width:'90%',marginRight:'0.2vw',maxHeight:'25vh'}}
                            rows={4}
                            maxLength={500}
                            cols={1}
                            defaultValue={""}
                            onChange={(e)=>setMsg(e.target.value)}
                            lang='ar'
                        />
                    </div>
                    <p style={{color:'red'}} lang='ar'>{error1}</p>
                    {/* Submit button */}
                    <button lang='ar' style={{position:'relative',right:'12vw'}} type="submit" className="btn btn-success btn-block mb-4">
                        إرسال
                    </button>
                </form>
            </Container>
        </>
    )
}

export default Form