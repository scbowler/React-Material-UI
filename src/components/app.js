import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import './app.css';
import  { 
    RaisedButton,
    TextField,
    Slider,
    Checkbox,
    Paper,
    Divider
} from 'material-ui';

class App extends Component {

    submitForm(vals){
        console.log('Form values on submit:', vals);
    }

    renderTextField({input, label}){
        return <TextField {...input} floatingLabelText={label}/>
    }

    renderSlider({input: {onChange, value}, name, defaultValue, min, max}){
        if(!value){
            defaultValue = defaultValue || min;
            onChange(defaultValue);
        }

        return <Slider name={name} onChange={(props, val) => onChange(val, props)} defaultValue={defaultValue} min={min} max={max}/>
    }

    renderCheckbox({input: {name, onChange}, label}){
        return <Checkbox name={name} label={label} onCheck={onChange}/>
    }

    render(){
        const { handleSubmit } = this.props;
        return (
            <div className="app">
                <Paper className="addForm" zDepth={4}>
                    <div>
                        <h2>Material UI Test/Demo Form</h2>
                        <Divider />
                        <form>
                            <Field name="title" component={this.renderTextField} label="Enter An Item Title" /><br/>
                            <Field name="details" component={this.renderTextField} label="Enter Item Details" /><br/>
                            <Field name="slider" component={this.renderSlider} defaultValue={5} min={1} max={10} />
                            <Field name="check_1" component={this.renderCheckbox} label="Check 1" />
                            <Field name="check_2" component={this.renderCheckbox} label="Check 2" />
                            <Field name="check_3" component={this.renderCheckbox} label="Check 3" />
                            <RaisedButton onClick={handleSubmit( values => this.submitForm(values))} label="Submit Form" primary={true}/>
                        </form>
                        <h3>Open console to see results of form submission</h3>
                    </div>
                </Paper>
            </div>
        )
    }
}

App = reduxForm({
    form: 'testForm'
})(App);

export default App;
