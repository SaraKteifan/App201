import React from 'react'

function Form() {
    return (
        <>
            <div className='container'>
                <form>
                    {/* Name input */}
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form4Example1">
                                الاسم*
                        </label>
                        <input type="text" id="form4Example1" className="form-control" />
                    </div>
                    {/* Email input */}
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form4Example2">
                            البريد الإلكتروني*
                        </label>
                        <input type="email" id="form4Example2" className="form-control" />
                    </div>
                    {/* Message input */}
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form4Example3">
                            الرسالة*
                        </label>
                        <textarea
                            className="form-control"
                            id="form4Example3"
                            rows={4}
                            defaultValue={""}
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
