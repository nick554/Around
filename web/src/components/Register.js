import React from 'react';
import $ from 'jquery';
import { FormItem, ServerRoot } from '../constants';
import { Form, Input, Button, message } from 'antd';
import { Link, Redirect } from 'react-router-dom';


class RegistrationForm extends React.Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
        gotSuccessRegister: false,
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                // console.log('Received values of form: ', values);
                $.ajax({
                    url: `${ServerRoot}/signup`,
                    method: 'POST',
                    data: JSON.stringify({
                        username: values.username,
                        password: values.password,
                    })
                }).then(
                    (response)=>{
                        message.success(response);
                        this.setState( { gotSuccessRegister: true });
                    },
                    (response)=>{message.error(response.responseText);}
                ).catch(
                    (error)=>{console.log(error);}
                    );
            }
        });
    }
    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }
    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    }
    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    }

    render() {
        if ( this.state.gotSuccessRegister ) {
            return <Redirect to = "/login"/>;
        }
        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };

        return (
            <Form onSubmit={this.handleSubmit} className="register-form">
                <FormItem
                    {...formItemLayout}
                    label="Username"
                >
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Password"
                >
                    {getFieldDecorator('password', {
                        rules: [{
                            required: true, message: 'Please input your password!',
                        }, {
                            validator: this.validateToNextPassword,
                        }],
                    })(
                        <Input type="password" />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Confirm Password"
                >
                    {getFieldDecorator('confirm', {
                        rules: [{
                            required: true, message: 'Please confirm your password!',
                        }, {
                            validator: this.compareToFirstPassword,
                        }],
                    })(
                        <Input type="password" onBlur={this.handleConfirmBlur} />
                    )}
                </FormItem>
                <FormItem {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit" className="register-bottom">Register</Button>
                    <p className="register-note">I already have an account,<br/>go back to <Link to="/login">login</Link></p>
                </FormItem>
            </Form>
        );
    }
}

export const Register = Form.create()(RegistrationForm);