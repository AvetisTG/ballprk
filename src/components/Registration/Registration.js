import React, { Component } from 'react';
import {
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';
import { Link } from "react-router-dom";
import moment from 'moment'

import './Registration.css'

export class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sport: '',
      position: '',
      highSchool: '',
      birthDateDay: '',
      birthDateMonth: '',
      birthDateYear: '',
      monthNumber: '01',
      gender: 'Custom',
      pronoun: '',
    };
  }

  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  changeMonth = (e) => {
    const index = e.target.selectedIndex
    const monthNumber = index < 10 ? '0' + index : '' + index
    this.setState({
      [e.target.name]: e.target.value,
      monthNumber: monthNumber
    });
  }

  genderSelect = (e) => {
    this.setState({
      gender: e.target.innerText
    })
  }

  onSubmit = (e) => {
    e.preventDefault();

    this.setState({
      sport: '',
      position: '',
      highSchool: '',
      birthDateDay: '',
      birthDateMonth: '',
      birthDateYear: '',
      gender: '',
      pronoun: ''
    })
  }

  render() {
    const {
      sport,
      position,
      highSchool,
      birthDateDay,
      birthDateMonth,
      birthDateYear,
      gender,
      pronoun
    } = this.state;

    const { monthNumber } = this.state
    const months = moment()._locale._months;
    const daysInMonth = moment(monthNumber, 'DD').daysInMonth()
    let daysToRender = [];
    for (let i = 1; i <= daysInMonth; i++) {
      daysToRender.push(i);
    }

    const Start = new Date('January 1, 1960 00:00:00');
    const End = moment().year(2018);
    let years = moment(End).diff(Start, 'years');
    let yearsToRender = [];
    for (let year = 0; year < years; year++) {
      yearsToRender.push(Start.getFullYear() + year);
    }


    return (
      <div className='registration-main'>
        <div className='registration-form-wrapper'>
          <h1 className='registration-form-header'>Let's get started</h1>
          <p className='registration-form-sub-header'>We saw you across the room and we don't usually do this but...</p>
          <Link to='/'><button className='registration-form-back-button'><i className="fa fa-angle-left"/>Prep School</button></Link>
          <div className='for-hl'>
            <div className="hl"/>
            <Form className='registration-form'>
              <FormGroup className=''>
                <Label for='sport' className='' sm={3}>Sport</Label>
                <Col>
                  <Input type='select' name='sport' id='sport' value={sport} onChange={e => this.change(e)}>
                    <option value=''>Baseball</option>
                    <option>Soccer</option>
                    <option>Football</option>
                    <option>Basketball</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup className=''>
                <Label for='position' className='' sm={3}>Position</Label>
                <Col>
                  <Input type='select' name='position' id='position' value={position} onChange={e => this.change(e)}>
                    <option value=''>Choose your position</option>
                    <option>Attack</option>
                    <option>Midfield</option>
                    <option>Defend</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup className=''>
                <Label for='highSchool' className='' sm={3}>High School</Label>
                <Col>
                  <Input type='select' name='highSchool' id='highSchool' value={highSchool} onChange={e => this.change(e)}>
                    <option value=''/>
                    <option>High school #1</option>
                    <option>High school #2</option>
                    <option>High school #3</option>
                    <option>High school #4</option>
                    <option>High school #5</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup className='registration-form-birth-date'>
                <Label for='birth-date' className=''>Birth Date</Label>
                <div className="registration-form-birth-date-select">
                  <Input type='select' name='birthDateDay' id='birth-date-day' value={birthDateDay} onChange={e => this.change(e)}>
                    <option value='' disabled>Day</option>
                    {daysToRender.map(day => (<option key={day}>{day}</option>))}
                  </Input>
                  <Input type='select' name='birthDateMonth' id='birth-date-month' value={birthDateMonth} onChange={e => this.changeMonth(e)} >
                    <option value='' disabled>Month</option>
                    {months.map((month, i) => (
                      <option key={i} >{month}</option>
                    ))}
                  </Input>
                  <Input type='select' name='birthDateYear' id='birth-date-year' value={birthDateYear} onChange={e => this.change(e)}>
                    <option value='' disabled>Year</option>
                    {yearsToRender.map(year => (<option key={year}>{year}</option>))}
                  </Input>
                </div>
              </FormGroup>

              <FormGroup className='registration-form-gender'>
                <Label for='gender' className=''>Gender</Label>
                <div className="registration-form-gender-button">
                  <Button className={gender === 'Female' ? 'registration-form-gender-button-active' : ''} onClick={(e) => this.genderSelect(e)}>Female</Button>
                  <Button className={gender === 'Male' ? 'registration-form-gender-button-active' : ''} onClick={(e) => this.genderSelect(e)}>Male</Button>
                  <Button className={gender === 'Custom' ? 'registration-form-gender-button-active' : ''} onClick={(e) => this.genderSelect(e)}>Custom</Button>
                </div>
              </FormGroup>
              <FormGroup className=''>
                <Col>
                  <Input type='select' name='pronoun' id='pronoun' value={pronoun} onChange={e => this.change(e)}>
                    <option value=''>What pronoun do you prefer?</option>
                    <option>Pronoun #1</option>
                    <option>Pronoun #2</option>
                    <option>Pronoun #3</option>
                    <option>Pronoun #4</option>
                    <option>Pronoun #5</option>
                  </Input>
                </Col>
              </FormGroup>
            </Form>
          </div>

          <div className='registration-footer'>
            <Link to='/explore'><p>Next</p></Link>
          </div>
        </div>
        <div className='registration-image' />
      </div>
    );
  }
}
