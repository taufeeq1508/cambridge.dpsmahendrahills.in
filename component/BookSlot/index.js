import { useState } from 'react';
import { useEffect, useRef } from 'react';
import Mediacomstyle from '../Homecompo/MediaCompo.module.css'
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'
import { useFormik } from "formik";
import * as yup from 'yup';
import PhoneInput from "react-phone-input-2";


const gradesList = [
  { id: "", name: "Select" },
  { id: "EY-1", name: "EY-1" },
  { id: "EY-2", name: "EY-2" },
  { id: "EY-3", name: "EY-3" },
  { id: "Grade I", name: "Grade I" },
  { id: "Grade II", name: "Grade II" },
  { id: "Grade III", name: "Grade III" },
  { id: "Grade IV", name: "Grade IV" },
  { id: "Grade V", name: "Grade V" },
  /*{ id: "Grade VI", name: "Grade VI" },
  { id: "Grade VII", name: "Grade VII" },
  { id: "Grade VIII", name: "Grade VIII" },
  { id: "Grade IX", name: "Grade IX" },
  { id: "Grade X", name: "Grade X" },
   { id: "Grade XI - As Level", name: "Garde XI - AS Level" },
{ id: "Grade XII - A Level", name: "Grade XII - A Level" }, */
];
const curriculumList = [{ id: "", name: "Cambridge International" }];
/*const admissionType = [
  { id: "", name: "Select" },
  { id: "Hostel", name: "Hostel" },
  { id: "Day Scholar", name: "Day Scholar" },
];*/

const initialFormState = {
  parentName: "",
  childName: "",
  admissionType: "",
  curriculum: "Cambridge International",
  admissionGrade: "",
  curriculum:"",
  country: "",
  mobileNumber: "",
  email: "",
  postYourQuery: "",
  source: "Website (Organic)",
  schoolName: "DPS Nacharam",
  utmNetwork: "",
};

const Bookaslot = (props) => {
    useEffect(() => {
        import("../../public/assets/js/calendarview.js");
    }, []);

    const [ubopenday, setUbopenday] = useState('')
    const [ubphone, setUbPhone] = useState('')
    const [ubname, setUbname] = useState('')
    const [bookSlotFormState, setBookSlotFormState] = useState({ ...initialFormState });
    const ref = useRef(null);

    const [usource, setUsource] = useState('Book Slot')
    const [usuccess, setUsuccess] = useState('');

    useEffect(() => {
        toastr.options = {
            positionClass: 'toast-top-full-width',
            hideDuration: 300,
            timeOut: 6000
        }
    }, []);
    const submitAction = e => {
        e.preventDefault()
        toastr.options = {
            positionClass: 'toast-top-full-width',
            hideDuration: 300,
            timeOut: 6000
        }
        const data = [
            { "Attribute": "FirstName", "Value": bookSlotFormState.parentName  },
            { "Attribute": "mx_Child_Name", "Value": bookSlotFormState.childName },
            /*{
              "Attribute": "mx_Admission_Type",
              Value: bookSlotFormState.admissionType,
            },*/
            { "Attribute": "mx_Curriculum", Value: bookSlotFormState.curriculum },
            { "Attribute": "mx_Country", Value: bookSlotFormState.country },
            { "Attribute": "mx_Grade", "Value": bookSlotFormState.admissionGrade },
            /*{ "Attribute": "mx_Type", "Value": bookSlotFormState.admissionType },*/
           
            { "Attribute": "Phone", "Value": bookSlotFormState.mobileNumber },
            { "Attribute": "EmailAddress", "Value": bookSlotFormState.email },
            { "Attribute": "Notes", "Value": bookSlotFormState.postYourQuery },
            { "Attribute": "Source", "Value": bookSlotFormState.source },
            { "Attribute": "mx_School_Name", "Value": bookSlotFormState.schoolName },
            { "Attribute": "mx_UTM_Network", "Value": bookSlotFormState.utmNetwork },
        ];
        fetch(' https://api-in21.leadsquared.com/v2/LeadManagement.svc/Lead.Create?accessKey=u$rd49eb331ece0c79c22fed2552be222cd&secretKey=336ba572eb585209d713c4fb3adfd615afa7bf32', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),

        })
            .then((response) => response.json())
            .then((data) => {
                if (data.Status == 'Success') {
                    var msg = (data.Status);
                    toastr.clear()
                    setTimeout(() => toastr.success(`Your Booking Slot Save ${msg}. Contact you Soon.`), 300)
                    setBookSlotFormState({ ...initialFormState });
                }
                if (data.Status == 'Error') {
                    var msg = (data.ExceptionMessage);
                    toastr.clear()
                    setTimeout(() => toastr.error(msg), 300)
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    const bookSlotForm = useFormik({
        initialValues: initialFormState,
        onSubmit: (values) => {
            const data = [
                { "Attribute": "FirstName", "Value": values.parentName },
                { "Attribute": "mx_Child_Name", "Value": values.childName },
                { "Attribute": "mx_Grade", "Value": values.admissionGrade },
                /*{ "Attribute": "mx_Type", "Value": values.admissionType },*/
                { "Attribute": "mx_Curriculum", Value: bookSlotFormState.curriculum },
            
                { "Attribute": "Phone", "Value": values.mobileNumber },
                { "Attribute": "EmailAddress", "Value": values.email },
                { "Attribute": "Notes", "Value": values.postYourQuery },
                { "Attribute": "Source", "Value": values.source },
                { "Attribute": "mx_School_Name", "Value": values.schoolName },
                { "Attribute": "mx_UTM_Network", "Value": values.utmNetwork },
            ];
            fetch(' https://api-in21.leadsquared.com/v2/LeadManagement.svc/Lead.Create?accessKey=u$rd49eb331ece0c79c22fed2552be222cd&secretKey=336ba572eb585209d713c4fb3adfd615afa7bf32', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),

            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.Status == 'Success') {
                        var msg = (data.Status);
                        toastr.clear()
                        setTimeout(() => toastr.success(`Your Booking Slot Save ${msg}. Contact you Soon.`), 300)
                        setBookSlotFormState({ ...initialFormState });
                        bookSlotForm.resetForm();
                    }
                    if (data.Status == 'Error') {
                        var msg = (data.ExceptionMessage);
                        toastr.clear()
                        setTimeout(() => toastr.error(msg), 300)
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        },
        validationSchema: yup.object({
            parentName: yup.string().trim().required('*Parent Name is required.'),
            childName: yup.string().trim().required('*Child Name is required.'),
            admissionGrade: yup.string().trim().required('*Grade is required.'),
           /* admissionType: yup.string().trim().required('*Type is required.'),*/
            curriculum: yup.string().trim().required('*Curriculum is required.'),
            mobileNumber: yup.string().trim().matches(/^[0-9]{10,10}$/, '*Mobile number with 10 digit is valid.').required('*Mobile Number is required.'),
            email: yup
                .string()
                .email('*Email is not valid.')
                .required('*Email is required.'),
        }),
    });
    function onChangeInputHndlr(event) {
        const { name, value } = event.target;
        setBookSlotFormState(prevState => ({ ...prevState, [name]: value }))
    }
    function onChangePhoneInputHndlr(phoneNumber, otherDetails) {
      setBookSlotFormState((prevState) => ({
        ...prevState,
        mobileNumber: phoneNumber,
      }));
    }
    return (
        <>
         <section id="bookslot">
        <div className="container pt-5 pb-5 ">
                    
                    <form action="post align-items-left" className="needs-validation" noValidate onSubmit={bookSlotForm.handleSubmit}>
                       
            <div className="row px-3">
              
              <div className="col-xs-12 col-md-6 pe-md-5"></div>
             <div className="col-xs-12 col-md-6  form-card d-flex flex-column align-items-right justify-content-right">
               <div className="container mb-4" align="center">
           <div className="row position-relative">
             <div className="col-12">
               <h1 className="balasmiq headingfont mt-5">GET IN TOUCH</h1>
             </div>
            
           </div>
         </div>
               <div className="row px-3">
                 
                 <div className="col-sm-6 col-xs-12 col-md-6 pe-md-5">
                                        <label className="fw-bold form-label label" htmlFor="parentName">Parent Name *</label>
                                        <input type="text" id="parentName" name="parentName"
                                            className={`${Mediacomstyle.formcontrol} ${"form-control"}
                                            ${(bookSlotForm.touched.parentName && bookSlotForm.errors.parentName) ?
                                                    "is-invalid" : ""}
                                            `}
                                            placeholder="Please enter details"
                                            value={bookSlotForm.values.firstName}
                                            onChange={bookSlotForm.handleChange}
                                        />
                                        <div className="invalid-feedback">
                                            {(bookSlotForm.touched.parentName && bookSlotForm.errors.parentName) ? bookSlotForm.errors.parentName : ""}
                                        </div>
                                    </div>
                                    <div className="col-sm-6 mb-3">
                                        <label className="fw-bold form-label label" htmlFor="childName">Child Name *</label>
                                        <input type="text" id="childName" name="childName"
                                            className={`${Mediacomstyle.formcontrol} ${"form-control"} ${(bookSlotForm.touched.childName && bookSlotForm.errors.childName) ?
                                                "is-invalid" : ""}`}
                                            placeholder="Please enter details"
                                            value={bookSlotForm.values.childName}
                                            onChange={bookSlotForm.handleChange}
                                        />
                                        <div className="invalid-feedback">
                                            {(bookSlotForm.touched.childName && bookSlotForm.errors.childName) ? bookSlotForm.errors.childName : ""}
                                        </div>
                                    </div>
                                    <div className="col-sm-6 mb-3">
                                        <label className="fw-bold form-label label" htmlFor="grade">Admission for (Grade) *</label>
                                        <select id="admissionGrade" name="admissionGrade"
                                            className={`${Mediacomstyle.formselect} ${"form-select"}
                                            ${(bookSlotForm.touched.admissionGrade && bookSlotForm.errors.admissionGrade) ?
                                                    "is-invalid" : ""}
                                            `}
                                            value={bookSlotForm.values.admissionGrade}
                                            onChange={bookSlotForm.handleChange}

                                        >
                                            {gradesList.map((item) => (
                                                <option key={item.id} value={item.id}>{item.name}</option>
                                            ))}
                                        </select>
                                        <div className="invalid-feedback">
                                            {(bookSlotForm.touched.admissionGrade && bookSlotForm.errors.admissionGrade) ? bookSlotForm.errors.admissionGrade : ""}
                                        </div>
                                    </div>
                                    {/*<div className="col-sm-6">
                    <label className="fw-bold form-label label" htmlFor="grade">
                      Admission Type *
                    </label>
                    <select
                      id="admissionType"
                      name="admissionType"
                      className={`${Mediacomstyle.formselect} ${"form-select"}  ${(bookSlotForm.touched.admissionType && bookSlotForm.errors.admissionType) ?
                        "is-invalid" : ""}`}
                      value={bookSlotFormState.admissionType}
                      onChange={onChangeInputHndlr}
                    >
                      {admissionType.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.name}
                        </option>
                      ))}
                      </select>
                    <div className="invalid-feedback">
                                            {(bookSlotForm.touched.admissionType && bookSlotForm.errors.admissionType) ? bookSlotForm.errors.admissionType : ""}
                                        </div>
                  </div>*/}
{/*                   
                  <div className="col-sm-6">
                    <label className="fw-bold form-label label" htmlFor="curriculum">
                      Curriculum
                    </label>
                    <input
                      placeholder="CAMBRIDGE INTERNATIONAL"
                      type="text"
                      id="curriculum"
                      name="curriculum"
                      className={`${Mediacomstyle.formselect} ${"form-select"}
                      ${(bookSlotForm.touched.curriculum && bookSlotForm.errors.curriculum) ?
                              "is-invalid" : ""}
                      `}
                      value={bookSlotFormState.curriculum}
                      onChange={onChangeInputHndlr}
                     
                    />
                     {curriculumList.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.name}
                        </option>
                      ))}
                    <div className="invalid-feedback">
                                            {(bookSlotForm.touched.curriculum && bookSlotForm.errors.curriculum) ? bookSlotForm.errors.curriculum : ""}
                                        </div>
                  </div> */}
                  <div className="col-sm-6">
                    <label
                      className="fw-bold form-label"
                      htmlFor="mobileNumber"
                    >
                      Mobile Number *
                    </label>

                    <PhoneInput
                      country={"in"}
                      className={`  ${(bookSlotForm.touched.mobileNumber && bookSlotForm.errors.mobileNumber) ?
                        "is-invalid" : ""}`}
                      value={bookSlotFormState.mobileNumber}
                      onChange={onChangePhoneInputHndlr}
                      countryCodeEditable={false}
                      specialLabel={"testing"}
                    />
                    <div className="invalid-feedback">
                                                    {(bookSlotForm.touched.mobileNumber && bookSlotForm.errors.mobileNumber) ? bookSlotForm.errors.mobileNumber : ""}
                                                </div>
                  </div>
                                    {/* <div className="col-sm-6 mb-3">
                                        <label className="fw-bold form-label" htmlFor="mobileNumber">Mobile Number</label>
                                        <div className="col-sm-12 d-flex w-100">
                                            <input type="text" className={`${Mediacomstyle.formcontrol} ${"form-control phareacode"}`} placeholder="+91"
                                                value="+91" readOnly
                                            />
                                            <div className="d-flex flex-column w-100">
                                                <input id="mobileNumber" name="mobileNumber" type="text"
                                                    className={`${Mediacomstyle.formcontrol} ${"form-control"} ${(bookSlotForm.touched.mobileNumber && bookSlotForm.errors.mobileNumber) ?
                                                        "is-invalid" : ""}`}
                                                    placeholder="Please enter details"
                                                    value={bookSlotForm.values.mobileNumber}
                                                    onChange={bookSlotForm.handleChange}
                                                />
                                                <div className="invalid-feedback">
                                                    {(bookSlotForm.touched.mobileNumber && bookSlotForm.errors.mobileNumber) ? bookSlotForm.errors.mobileNumber : ""}
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                    <div className="col-sm-6 mb-3">
                                        <label className="fw-bold form-label label" htmlFor="email">Email *</label>
                                        <input type="text" id="email" name="email"
                                            className={`${Mediacomstyle.formcontrol} ${"form-control"}  ${(bookSlotForm.touched.email && bookSlotForm.errors.email) ?
                                                "is-invalid" : ""}`}
                                            placeholder="Please enter details"
                                           value={bookSlotForm.values.email}
                                            onChange={bookSlotForm.handleChange}
                                        />
                                        <div className="invalid-feedback">
                                            {(bookSlotForm.touched.email && bookSlotForm.errors.email) ? bookSlotForm.errors.email : ""}
                                        </div>
                                    </div>
                                    {/* <div className="col-sm-6 mb-3">
                                        <label className="fw-bold form-label label" htmlFor="grade">Admission for (Grade)</label>
                                        <select id="admissionGrade" name="admissionGrade"
                                            className={`${Mediacomstyle.formselect} ${"form-select"}
                                            ${(bookSlotForm.touched.admissionGrade && bookSlotForm.errors.admissionGrade) ?
                                                    "is-invalid" : ""}
                                            `}
                                            value={bookSlotForm.values.admissionGrade}
                                            onChange={bookSlotForm.handleChange}

                                        >
                                            {gradesList.map((item) => (
                                                <option key={item.id} value={item.id}>{item.name}</option>
                                            ))}
                                        </select>
                                        <div className="invalid-feedback">
                                            {(bookSlotForm.touched.admissionGrade && bookSlotForm.errors.admissionGrade) ? bookSlotForm.errors.admissionGrade : ""}
                                        </div>
                                    </div> */}
                                    <div className="col-sm-12">
                                        <label className="fw-bold form-label label" htmlFor="postYourQuery">Post your Query *</label>

                                        <textarea id="postYourQuery"
                                            className={`${Mediacomstyle.formControlArea} ${"form-control"}`}
                                            name="postYourQuery"
                                            value={bookSlotForm.values.postYourQuery}
                                            onChange={bookSlotForm.handleChange}
                                        >

                                        </textarea>
                                    </div>
                                    <div className="col-12 text-end">
                                        <input type="hidden" id="source"
                                            name="source"
                                            defaultValue={bookSlotFormState.source} />
                                        <input type="hidden" id="schoolName"
                                            name="schoolName"
                                            defaultValue={bookSlotFormState.schoolName} />
                                        <input type="hidden" id="utmNetwork"
                                            name="utmNetwork"
                                            defaultValue={bookSlotFormState.utmNetwork} />
                                        <button type='submit' className={`${Mediacomstyle.newsviewbtn} ${"btn btn-lg text-uppercase"}`}>Submit</button>
                                    </div>

                                </div>
                            </div>
                            {!props.hideCalendar &&
                                <div className="col-xs-12 text-end col-md-5  px-3">
                                    <img src="/assets/images/scholar.svg" alt="" className={`${"img-fluid"}`} />
                                </div>
                                 }
                        </div>
                    </form>
                </div>

            </section >


        </>

    );
}
export default Bookaslot;
