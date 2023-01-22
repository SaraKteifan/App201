import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { FloatingLabel, Form, Row, Col, Button, Modal } from 'react-bootstrap';
import './CSS/JobForm.css';

function JobForm() {
    const [info,setInfo]=useState({ name: '', email: '', phone: '', address: '', notes: '', age: '', sex: '', nationality: '', socialStatus: '', designLevel: '', marketingLevel: '', link1: '', link2: 'empty', link3: 'empty', CV: ''});
    const [errors,setErrors]=useState({ name: ' ', email: ' ', phone: ' ', address: ' ', notes: ' ', age: ' ', sex: ' ', nationality: ' ', socialStatus: ' ', designLevel: ' ', marketingLevel: ' ', links: ' ', CV: ' '});
    const [successModal,setSuccessModal]=useState(false);
    const [failurModal,setFailurModal]=useState(false);
    const [successMessage,setSuccessMessage]=useState("");
    const [failurMessage,setFailurMessage]=useState("");
    const [emailExist,setEmailExist]=useState(false);

    const handleShowSuccess = (e) => {
        setSuccessMessage(e);
        setSuccessModal(true);
    }
    const handleCloseSuccess = () => {
        setSuccessMessage('');
        setSuccessModal(false);
    }
    const handleShowError = (e) => {
        setFailurMessage(e);
        setFailurModal(true);
    }
    const handleCloseFailure = () => {
        setFailurMessage('');
        setFailurModal(false);
    }

    const nameRegex= RegExp(/^[\u0621-\u064AA-Za-z]([-']?[\u0621-\u064AA-Za-z]+)*( [\u0621-\u064AA-Za-z]([-']?[\u0621-\u064AA-Za-z]+)*){3}/);
    const emailRegex= RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    const phoneRegex= RegExp(/^077[0-9]*$|^078[0-9]*$|^079[0-9]*$/);

    const formValid = () => {
        let valid=true;
        Object.values(errors).map(val => {
            if (val.length > 0) {
                valid=false;
                console.log('errors error',val);
            }
            return valid;
        })
        Object.values(info).map(val => {
            if (val === "") {
                valid=false;
                console.log('values error',val);
            }
            return valid;
        })
        return valid;
    }

    const formValidation = (e) => {
        e.preventDefault();
        let {name, value, files} = e.target;
        let isError = errors;
        // let isInfo = info;

        switch (name) {
            case "name":
                if (nameRegex.test(value) && value !== '') {
                    setInfo({...info,name: value})
                    isError.name='';
                    console.log('name regex succeded :',value);
                } else {
                    isError.name='يجب أن يتكون الاسم من أربعة مقاطع';
                    console.log('name regex failed :',value);
                }
                break;
                
            case "email":
                if (emailRegex.test(value) && value !== '') {
                    let email = value;
                    setInfo({...info,email: value});
                    isError.email='';
                    axios.get('https://app201.net/php/checkEmail.php?email=' + email).then(res => {
                      console.log('email checking process ... :',res.data)
                      if (Number(res.data) === 1) {
                        setEmailExist(true);
                        console.log('email exist succeded :',value);
                      } else {
                          console.log('email exist failed :',value);
                      }
                    })
                } else {
                    isError.email='صيغة البريد الإالكتروني الصحيحة(example@example.com)';
                    console.log('email regex failed :',value);
                }
                break;
                
            case "phone":
                if (phoneRegex.test(value) && value.length === 10) {
                    setInfo({...info,phone: value})
                    isError.phone= '';
                    console.log('phone regex succeded :',value);
                } else {
                    isError.phone= 'رقم الهاتف يبدأ ب 07 ويتكون من 10 خانات';
                    console.log('phone regex failed :',value);
                    
                }
                break;
                    
            case "address":
                if (value !== '') {
                    setInfo({...info,address: value})
                    isError.address='';
                    console.log('address regex succeded :',value);
                } else {
                    isError.address='مثال(العقبة-العالمية-ش.الشريف شاكر بن زيد)';
                    console.log('address regex failed :',value);
                    }
                    break;
            
            case "notes":
                if (value !== '' && value.length > 100) {
                    setInfo({...info,notes: value})
                    isError.notes= '';
                    console.log('notes regex succeded :',value);
                } else {
                    isError.notes= 'نريد أن نقرأ المزيد عنك, من فضلك املأ هذه الخانة بما لا يقل عن 20 كلمة';
                    console.log('notes regex failed :',value);
            }      
            break;
        
            case "age":
                if (value !== "" && value >= 17 && value < 99) {
                    setInfo({...info,age: value})
                    isError.age= '';
                    console.log('age regex succeded :',value);
                } else {
                    isError.age='العمر يجب أن يكون أكبر من 17 سنة ويتكون من خانتين'
                    console.log('age regex failed :',value);
                }
                break;
        
            case "nationality":
                if (value !== '') {
                    setInfo({...info,nationality: value})
                    isError.nationality='';
                    console.log('nationality regex succeded :',value);
                } else {
                    isError.nationality='حدد جنسيتك';
                    console.log('nationality regex failed :',value);
                }
                break;
        
            case "socialStatus":
                if (value !== '') {
                    setInfo({...info,socialStatus: value});
                    isError.socialStatus='';
                    console.log('socialStatus regex succeded :',value);
                } else {
                    isError.socialStatus='حدد حالتك الاجتماعية'
                    console.log('socialStatus regex failed :',value);
                }
                break;
        
            case "sex":
                if (value !== '') {
                    setInfo({...info,sex: value});
                    isError.sex='';
                    console.log('sex regex succeded :',value);
                } else {
                    isError.sex= 'حدد الجنس';
                    console.log('sex regex failed :',value);
                }
                break;
        
            case "studyLevel":
                if (value !== '') {
                    // setInfo({...info,studyLevel: value})
                    console.log('studyLevel regex succeded :',value);
                } else {
                    // isError.studyLevel='يرجى تزويدنا بعنوانك الحالي'
                    console.log('studyLevel regex failed :',value);
                }
                break;
        
            case "specialized":
                if (value !== '') {
                    // setInfo({...info,address: value})
                    console.log('address regex succeded :',value);
                } else {
                    // isError.address='يرجى تزويدنا بعنوانك الحالي'
                    console.log('address regex failed :',value);
                }
                break;
        
            case "arLevel":
                if (value !== '') {
                    setInfo({...info,address: value})
                    console.log('address regex succeded :',value);
                } else {
                    console.log('address regex failed :',value);
                }
                break;
        
            case "enLevel":
                if (value !== '') {
                    setInfo({...info,address: value})
                    console.log('address regex succeded :',value);
                } else {
                    console.log('address regex failed :',value);
                }
                break;
        
            case "designLevel":
                if (value !== '') {
                    setInfo({...info,designLevel: value})
                    isError.designLevel='';
                    console.log('designLevel regex succeded :',value);
                } else {
                    isError.designLevel='يرجى تحديد مستوى التصميم الجرافيكي';
                    console.log('designLevel regex failed :',value);
                }
                break;
        
            case "marketingLevel":
                if (value !== '') {
                    setInfo({...info,marketingLevel: value})
                    isError.marketingLevel='';
                    console.log('marketingLevel regex succeded :',value);
                } else {
                    isError.marketingLevel='يرجى تحديد مستوى التسويق الإلكتروني'
                    console.log('marketingLevel regex failed :',value);
                }
                break;
            case "CV":
                if (value !== '') {
                    setInfo({...info,CV: files[0]})
                    isError.CV='';
                    console.log('CV regex succeded :',files[0]);
                } else {
                    isError.CV='يرجى إرفاق السيرة الذاتية';
                    console.log('CV regex failed :',value);
                }
                break;
            case "link1":
                if (value !== '') {
                    setInfo({...info,link1: value})
                    isError.links='';
                    console.log('link1 regex succeded :',value);
                } else {
                    isError.links='يجب إضافة رابط واحد على الأقل'
                    console.log('links regex failed :',value);
                }
                break;
            case "link2":
                if (value !== '') {
                    setInfo({...info,link2: value})
                    console.log('link2 added :',value);
                } else {
                    setInfo({...info,link2: 'empty'})
                    console.log('link2 is empty');
                }
                break;
            case "link3":
                if (value !== '') {
                    setInfo({...info,link3: value})
                    console.log('link3 added :',value);
                } else {
                    setInfo({...info,link3: 'empty'})
                    console.log('link3 is empty');
                }
                break;
        
            default:
                break;
        }
        Object.values(info).forEach(val => {
            if (val === '') {
                // isError.general="جميع الحقول مطلوبة";
            }
            else{
                isError.general="";
                console.log('everything is good')
            }
        });
        setErrors({...errors,isError})
    }

    const onFileUpload = () => {
        // let files = info.CV;
        // let fileReader = new FileReader();
        // fileReader.readAsDataURL(files);
        // let w;
 
        // fileReader.onload = (event) => {
        //     w= event.target.result;
        // }
        // const formData = { file: w }
     
        // Create an object of formData
        const formData = new FormData();

        
        // Update the formData object
        formData.append(
            "myFile",
            info.CV,
            info.CV.name
        );
        // Details of the uploaded file
        console.log(info.CV);
        
        const config = {     
            headers: { 'content-type': 'multipart/form-data',}
        }
      // Request made to the backend api
      // Send formData object
      axios.post("https://app201.net/php/upload.php?data="+info.CV, formData, config)
      .then(response => {
          console.log("ok response is :",response.data);
      })
      .catch(error => {
          console.log("error response is :",error);
      });;
    };

    const submitForm = e => {
        e.preventDefault();
        if (formValid()) {
            onFileUpload();
            axios.post("https://app201.net/php/form.php?name="+info.name+"&email="+info.email+"&phone="+info.phone+"&address="+info.address+"&notes="+info.notes+"&age="+info.age+"&socialStatus="+info.socialStatus+"&sex="+info.sex+"&nationality="+info.nationality+"&designLevel="+info.designLevel+"&marketingLevel="+info.marketingLevel+"&link1="+info.link1+"&link2="+info.link2+"&link3="+info.link3+"&CV="+info.CV.name)
            .then((response) => {
                // alert('شكرا لك على تقديم الطلب, سوف يتم تحويلك للصفحة الرئيسية');
                handleShowSuccess('شكرا لك على تقديم الطلب, سوف يتم تحويلك للصفحة الرئيسية');
                console.log('database response is :',response.data);
                setTimeout(() => {
                    window.location.href='/';
                },4000)
            })
            .catch((error) => {
                handleShowError('حدث خطأ ما , الرجاء المحاولة في وقت لاحق')
                console.log('server response :',error);
            })
        } else {
            handleShowError('يرجى ملئ جميع البيانات بالشكل المطلوب')
        }
    }
    useEffect(() => {
        if (emailExist === true) {
            setErrors({...errors,email: 'البريد الالكتروني مستخدم بالفعل'})
            setEmailExist(false)
        }

    },[successMessage,failurMessage,emailExist,errors])

  return (
    <>
    <Form noValidate onSubmit={submitForm} encType="multipart/form-data">
    <div  className='container my-5 border border-0 border-success' lang='ar'>
        <Row lg={2} xs={1}>
            <Col xs={10}>
                <Row>
                    <FloatingLabel controlId="floatingName" label="الاسم الرباعي" className="mb-3">
                        <Form.Control required type="text" name='name' placeholder="الاسم الرباعي" onChange={(e) => formValidation(e)} isInvalid={errors.name.length > 1} isValid={!errors.name} lang='ar'/>
                        {errors.name?<p className="m-0 mb-1 text-danger" style={{fontSize: 'smaller'}}>{errors.name}</p>:''}
                    </FloatingLabel>
                </Row>
                <Row>
                    <FloatingLabel controlId="floatingEmail" label="البريد الإلكتروني" className="mb-3">
                        <Form.Control lang='en' style={{fontFamily: 'sans-serif'}} required name='email' type="email" placeholder="البريد الإلكتروني" onChange={(e) => formValidation(e)} isInvalid={errors.email.length > 1} isValid={errors.email === ''} />
                        {errors.email?<p className="m-0 mb-1 text-danger" style={{fontSize: 'smaller'}}>{errors.email}</p>:''}
                    </FloatingLabel>
                </Row>
                <Row>
                    <FloatingLabel controlId="floatingPhone" label="رقم الهاتف" className="mb-3" maxLength={15}>
                        <Form.Control lang='en' required name='phone' type="tel" placeholder="رقم الهاتف" onChange={(e) => formValidation(e)} isInvalid={errors.phone.length > 1} isValid={!errors.phone} />
                        {errors.phone?<p className="m-0 mb-1 text-danger" style={{fontSize: 'smaller'}}>{errors.phone}</p>:''}
                    </FloatingLabel>
                </Row>
                <Row>
                    <FloatingLabel controlId="floatingAddress" label="العنوان" className="mb-3" >
                        <Form.Control required name='address' type="text" placeholder="العنوان" onChange={(e) => formValidation(e)} isInvalid={errors.address.length > 1} isValid={!errors.address} />
                        {errors.address?<p className="m-0 mb-1 text-danger" style={{fontSize: 'smaller'}}>{errors.address}</p>:''}
                    </FloatingLabel>
                </Row>
                <Row lg={1} xs={0}>
                    {/* <fieldset className='border border-2 fieldset'>
                        <legend className='m-0'>
                        </legend>
                        <Form.Control required
                        as="textarea"
                        // placeholder="أي ملاحظة أو معلومة ترغب بإضافتها"
                        style={{ height: '140px' ,resize: 'none'}}
                        onChange={(e) => formValidation(e)} 
                        isInvalid={errors.notes.length > 1} 
                        isValid={!errors.notes} 
                        name='notes'
                        maxLength={300}
                        className='border border-0'
                        />
                        {errors.notes?<p className="m-0 mb-1 text-danger" style={{fontSize: 'smaller'}}>{errors.notes}</p>:''}
                    </fieldset> */}
                    
                    <p className='m-0'>حدثنا عن نفسك, نقاط قوتك, اهتماماتك وشغفك</p>
                    <FloatingLabel controlId="floatingNotes" label="" className='mb-3'>
                        <Form.Control required
                        as="textarea"
                        placeholder=""
                        style={{ height: '140px' ,resize: 'none'}}
                        onChange={(e) => formValidation(e)} 
                        isInvalid={errors.notes.length > 1} 
                        isValid={!errors.notes} 
                        name='notes'
                        />
                        {errors.notes?<p className="m-0 mb-1 text-danger" style={{fontSize: 'smaller'}}>{errors.notes}</p>:''}
                    </FloatingLabel>
                </Row>
            </Col>

            <Col className='d-grid justify-content-around'>
                <Row lg={4} xs={2} md={2}>
                    <Col xs={4} lg={3}>
                        <FloatingLabel controlId="floatingSex" label="الجنس" className="mb-3">
                            <Form.Select aria-label="الجنس" name='sex' onChange={(e) => formValidation(e)} isInvalid={errors.sex.length > 1} isValid={!errors.sex} >
                            <option value="">غير محدد</option>
                            <option value="male">ذكر</option>
                            <option value="female">أنثى</option>
                            </Form.Select>
                        {errors.sex?<p className="m-0 mb-1 text-danger" style={{fontSize: 'smaller'}}>{errors.sex}</p>:''}
                        </FloatingLabel>
                    </Col>
                    <Col xs={6} lg={4}>
                        <FloatingLabel controlId="floatingSocialStatus" label="الحالة الاجتماعية" className="mb-3">
                            <Form.Select aria-label="الحالة الاجتماعية" name='socialStatus' onChange={(e) => formValidation(e)} isInvalid={errors.socialStatus.length > 1} isValid={!errors.socialStatus} >
                            <option value="">غير محدد</option>
                            <option value="single">أعزب</option>
                            <option value="married">متزوج</option>
                            </Form.Select>
                        {errors.socialStatus?<p className="m-0 mb-1 text-danger" style={{fontSize: 'smaller'}}>{errors.socialStatus}</p>:''}
                        </FloatingLabel>
                    </Col>
                    <Col xs={5} lg={2}>
                        <FloatingLabel controlId="floatingAge" label="العمر" className="mb-3">
                            <Form.Control required name='age' type="number" placeholder="العمر" onChange={(e) => formValidation(e)} isInvalid={errors.age.length > 1} isValid={!errors.age} />
                        {errors.age?<p className="m-0 mb-1 text-danger" style={{fontSize: 'smaller'}}>{errors.age}</p>:''}
                        </FloatingLabel>
                    </Col>
                    <Col xs={5} lg={3}>
                        <FloatingLabel controlId="floatingNationality" label="الجنسية" className="mb-3">
                            <Form.Control required name='nationality' type="text" placeholder="الجنسية" onChange={(e) => formValidation(e)} isInvalid={errors.nationality.length > 1} isValid={!errors.nationality} />
                        {errors.nationality?<p className="m-0 mb-1 text-danger" style={{fontSize: 'smaller'}}>{errors.nationality}</p>:''}
                        </FloatingLabel>
                    </Col>
                </Row>

                {/* <Row lg={2} xs={2}>
                    <Col xs={10}>
                    <FloatingLabel controlId="floatingStudyLevel" label="المستوى التعليمي" className="mb-3" >
                    <Form.Select aria-label="المستوى التعليمي">
                    <option value="">غير محدد</option>
                            <option value="secondary">ثانوية</option>
                            <option value="bechaloria">بكالوريس</option>
                            <option value="master">ماجستير</option>
                            </Form.Select>
                        </FloatingLabel>
                        </Col>
                        <Col xs={10}>
                        <FloatingLabel controlId="floatingSpecial" label="التخصص" className="mb-3">
                            <Form.Control required name='' type="text" placeholder="التخصص" />
                            </FloatingLabel>
                    </Col>
                    </Row>
                    
                <Row lg={2} xs={1}>
                    <Col xs={10}>
                        <FloatingLabel controlId="floatingAR" label="المستوى في اللغة العربية" className="mb-3" >
                        <Form.Select aria-label="المستوى في اللغة العربية">
                        <option value="">غير محدد</option>
                            <option value="accebtable">مقبول</option>
                            <option value="good">جيد</option>
                            <option value="veryGood">جيد جداً</option>
                            <option value="Exellent">ممتاز</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                    <Col xs={10}>
                    <FloatingLabel controlId="floatingEN" label="المستوى في اللغة الإنجليزية" className="mb-3" >
                            <Form.Select aria-label="المستوى في اللغة الإنجليزية">
                            <option value="">غير محدد</option>
                            <option value="accebtable">مقبول</option>
                            <option value="good">جيد</option>
                            <option value="veryGood">جيد جداً</option>
                            <option value="Exellent">ممتاز</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                </Row> */}

                <Row  lg={2} xs={1}>
                    <Col xs={10}>
                        <FloatingLabel controlId="floatingDesignLevel" label="المستوى في التصميم الجرافيكي" className="mb-3" >
                            <Form.Select aria-label="المستوى في التصميم الجرافيكي" name='designLevel' onChange={(e) => formValidation(e)} isInvalid={errors.designLevel.length > 1} isValid={!errors.designLevel} >
                            <option value="">غير محدد</option>
                            <option value="secondary">مبتدىْ</option>
                            <option value="bechaloria">متوسط</option>
                            <option value="master">محترف</option>
                            <option value="master">خبير</option>
                            </Form.Select>
                        {errors.designLevel?<p className="m-0 mb-1 text-danger" style={{fontSize: 'smaller'}}>{errors.designLevel}</p>:''}
                        </FloatingLabel>
                    </Col>
                    <Col xs={10}>
                        <FloatingLabel controlId="floatingMarketingLevel" label="المستوى في التسويق الإلكتروني" className="mb-3" >
                            <Form.Select aria-label="المستوى في التسويق الإلكتروني" name='marketingLevel' onChange={(e) => formValidation(e)} isInvalid={errors.marketingLevel.length > 1} isValid={!errors.marketingLevel} >
                            <option value="">غير محدد</option>
                            <option value="secondary">مبتدىْ</option>
                            <option value="bechaloria">متوسط</option>
                            <option value="master">محترف</option>
                            <option value="master">خبير</option>
                            </Form.Select>
                        {errors.marketingLevel?<p className="m-0 mb-1 text-danger" style={{fontSize: 'smaller'}}>{errors.marketingLevel}</p>:''}
                        </FloatingLabel>
                    </Col>
                </Row>

                <Row  lg={2} xs={1}>
                    <Col xs={10}>
                        <h6>يرجى إضافة روابط لأعمال قمت بها سابقاً</h6>
                        <p className='m-0 mt-1'>رابط 1 <span className='text-danger'>(مطلوب)</span></p>
                        <Form.Control name='link1' type='url' required placeholder="https://..." onChange={(e) => formValidation(e)} isInvalid={errors.links.length > 1} isValid={!errors.links}  />
                        {errors.links?<p className="m-0 mb-1 text-danger" style={{fontSize: 'smaller'}}>{errors.links}</p>:''}
                        <p className='m-0 mt-1'>رابط 2 (إختياري)</p>
                        <Form.Control name='link2' type="url" placeholder="https://..." onChange={(e) => formValidation(e)}/>
                        <p className='m-0 mt-1'>رابط 3 (إختياري)</p>
                        <Form.Control name='link3' type="url" placeholder="https://..." onChange={(e) => formValidation(e)}/>
                    </Col>
                    <Col xs={10}>
                        <h6 className='mt-1'>يرجى إرفاق السيرة الذاتية :</h6>
                        <FloatingLabel controlId="floatingCV" label="" className="mb-3">
                            <Form.Control name='CV' type="file" onChange={(e) => formValidation(e)} isInvalid={errors.CV.length > 1} isValid={!errors.CV}  required accept="application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"/>
                            {errors.CV?<p className="m-0 mb-1 text-danger" style={{fontSize: 'smaller'}}>{errors.CV}</p>:''}
                        </FloatingLabel>
                        <Row className='justify-content-end'>
                            <Button type='submit' variant='success' style={{alignSelf: 'end'}} className='w-50'>تقديم الطلب</Button>
                            {errors.general?<h6 className="text-danger w-75 p-0" lang='en' style={{textAlign: 'left'}}>{errors.general}</h6>:''}
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    </div>
    </Form>

    {/* Success Modal Start */}
    <Modal show={successModal} onHide={handleCloseSuccess} centered lang='ar'>
        <Modal.Header>
            <Modal.Title>عملية ناجحة !</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="container d-grid justify-item-center" style={{justifyItems: 'center'}}>
            <img src="Images/ok.webp" alt="Booking Done" width={200}/>
            <p className='text-center'>{successMessage}</p>
            </div>
        </Modal.Body>
        <Modal.Footer style={{justifyContent : 'center'}}>
            <a className="btn btn-success" href='/'>
            اذهب الأن
            </a>
        </Modal.Footer>
    </Modal>
    {/* Success Modal End */}

    {/* Error Modal Start */}
    <Modal show={failurModal} onHide={handleCloseFailure} centered lang='ar'>
        <Modal.Header>
            <Modal.Title>خطأ !</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="container d-grid justify-item-center" style={{justifyItems: 'center'}}>
            <img src="Images/wrong.webp" alt="Booking Done" width={200}/>
            <p className='text-center text-danger mt-2'>{failurMessage}</p>
            </div>
        </Modal.Body>
        <Modal.Footer style={{justifyContent : 'center'}}>
            <a className='btn btn-dark' onClick={handleCloseFailure} style={{fontSize: 'larger'}}>
            أغلق
            </a>
        </Modal.Footer>
    </Modal>
    {/* Error Modal End */}
    </>
  )
}

export default JobForm