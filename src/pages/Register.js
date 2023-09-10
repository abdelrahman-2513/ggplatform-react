import { UserOutlined, LockOutlined, PhoneOutlined, EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons';
import { Button, Form, Input, Typography } from 'antd';
function Register() {
    function handleSignup(values) {
        console.log(values)
    }
    return (
        <div className='container'>

            <Form
                name="normal_signup"
                className="signup-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={handleSignup}
            >
                <Typography.Title className='login-title'>Register</Typography.Title>

                <Form.Item
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter Your Name!',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="User Name" />
                </Form.Item>
                <Form.Item
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter valid Email!',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
                </Form.Item>
                <Form.Item
                    name="phoneNumber"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter Your Phone!',
                        },
                    ]}
                >
                    <Input prefix={<PhoneOutlined className="site-form-item-icon" />} placeholder="Phone Number" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input.Password
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                        iconRender={(visible) => (visible ? <EyeTwoTone style={{ color: '#33df77' }} /> : <EyeInvisibleOutlined style={{ color: '#33df77' }} />)}
                    />
                </Form.Item>
                <Form.Item>
                    <a href='/login'>Already have account</a>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Signup
                    </Button>

                </Form.Item>
            </Form>
        </div>
    )
}

export default Register;