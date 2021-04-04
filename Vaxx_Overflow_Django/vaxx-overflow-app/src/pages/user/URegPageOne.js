import React, {useState} from 'react'
import {useHistory} from 'react-router-dom' // redirect to home page

// static
import axiosInstance from '../../axios'

// styling
import PrimaryButton from '../../components/Button/PrimaryButton';
import InputField from '../../components/InputField/InputField';


const URegPageOne =(props)=> {
  
  const [values,setValues] = useState({ "firstName": "", "lastName": "", "email": "", "password": ""})

  const onClickHandler =() => {
    props.history.push("/uregpagetwo/")
    localStorage.setItem("email", "email")
    
  }

  const onChangeHandler = () => {

  }

  console.log(InputField)
  return (
    <div className="centered-div">
      <header className="frame-1">
        <h1 id="vaxx">Vaxx</h1>
        <h1 id="overflow">OVERFLOW</h1>
        <h3 id="heading-paragraph">Enter the information below to sign in.</h3>
      </header>
      <form className="initial-form">
        <InputField placeholder="" label="First Name" value={values.firstName} changeAction={(e) => console.log(e.target.value)}/>
        <InputField placeholder="" label="Last Name" />
        <InputField placeholder="" label="Email" />
        <InputField placeholder="" label="Password" />
      </form>
      <div id="main-primary-button">
        <PrimaryButton  id="primary-button" text="NEXT SECTION" clickAction={ onClickHandler }/>
      </div>
    </div>
  );
};

export default URegPageOne;