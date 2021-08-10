import React from 'react';


function InputStyles(){
    return(
        <div className="container">
            <div className="row">
                    <div className="form-group col-lg-6 mb-30">
                        <label className="label-class text-left mb-15" htmlFor="inputEmail">
                            Email
                        </label>
                        <input className="form-control form-class" type="email" id="email" placeholder="Email" />
                    </div>
                    <div className="form-group col-lg-6 mb-30">
                        <label className="label-class text-left mb-15" htmlFor="inputPhone">
                            Phone Number
                        </label>
                        <input className="form-control form-class" type="tel" id="phone" placeholder="Phone number" pattern="[0-9]{3}-[0-9]{2}[0-9]{3}" />
                    </div>
                    <div className="form-group col-lg-6 mb-30">
                        <label className="label-class text-left mb-15" htmlFor="inputText">
                            Any Text
                        </label>
                        <input className="form-control form-class" type="text" id="text" placeholder="Type Something" />
                    </div>
                    <div className="form-group col-lg-6 mb-30">
                        <label className="label-class text-left mb-15" htmlFor="inputPassword">
                            Password
                        </label>
                        <input className="form-control form-class" type="password" id="password" placeholder="Enter Password" />
                    </div>
            </div>
        </div>
    )
}
export default InputStyles;