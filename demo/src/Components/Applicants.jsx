import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import './CSS/Applicants.css'

function Applicants() {
    const [data,setData]=useState([]);
    // const [done,setDone]=useState(false);

    useEffect(() => {
        const loadData = async() => {
            await axios.get('https://app201.net/php/select.php')
            .then((response) => {
                console.log(response.data);
                setData(response.data);
                // setDone(true);
            })
            .catch(e => console.log('fetching error :',e))
        }
        loadData();
    }, []);

    return (
        <>
            <div className='container big-table' lang='ar'>
                <Row className='border border-1'>
                    <Col className='border border-1'>الاسم</Col>
                    <Col className='border border-1'>العمر</Col>
                    <Col className='border border-1'>الجنسية</Col>
                    <Col className='border border-1'>العنوان</Col>
                    <Col className='border border-1'>روابط الأعمال</Col>
                    <Col className='border border-1'>ملاحظات</Col>
                </Row>
                {data.length >0 ? data.map((applicant) => {
                    return (
                        <Row className='border border-1'>
                            <Col className='border border-1'>{applicant.name}</Col>
                            <Col className='border border-1 tt'>{applicant.age}</Col>
                            <Col className='border border-1'>{applicant.nationality}</Col>
                            <Col className='border border-1 tt'>{applicant.address}</Col>
                            <Col className='border border-1 tt'>
                                <Row>{applicant.link1}</Row>
                                <Row>{applicant.link2}</Row>
                                <Row>{applicant.link3}</Row>
                            </Col>
                            <Col className='border border-1'>{applicant.notes}</Col>
                        </Row>
                    )
                }):''}
            </div>
            <div className='container small-table' lang='ar'>
                {data.length >0 ? data.map((applicant,index) => {
                    return (
                        <>
                        <p className='bg-success text-white text-center'>المتقدم رقم : <span className='tt'>{index+1}</span></p>
                        <Row className='border border-1'>
                            <Col className='border border-1'>الاسم</Col>
                            <Col className='border border-1'>{applicant.name}</Col>
                        </Row>
                        <Row>
                            <Col className='border border-1'>العمر</Col>
                            <Col className='border border-1 tt'>{applicant.age}</Col>
                        </Row>
                        <Row>
                            <Col className='border border-1'>الجنسية</Col>
                            <Col className='border border-1'>{applicant.nationality}</Col>
                        </Row>
                        <Row>
                            <Col className='border border-1'>العنوان</Col>
                            <Col className='border border-1 tt'>{applicant.address}</Col>
                        </Row>
                        <Row>
                            <Col className='border border-1'>روابط الأعمال</Col>
                            <Col className='border border-1 tt'>
                                <Row>{applicant.link1}</Row>
                                <Row>{applicant.link2}</Row>
                                <Row>{applicant.link3}</Row>
                            </Col>
                        </Row>
                        <Row className='border border-1'>
                            <Col className='border border-1'>ملاحظات</Col>
                            <Col className='border border-1'>{applicant.notes}</Col>
                        </Row>
                        <br />
                        <br />
                        </>
                    )
                }):''}
            </div>
        </>
    )
}

export default Applicants