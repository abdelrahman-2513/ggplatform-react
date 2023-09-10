import { UserOutlined, LockOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Form, Input, Typography } from 'antd';
function Login() {

    function handleLogin(values) {
        console.log(values)
    }
    return (
        <div className='container'>

            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={handleLogin}
            >
                <Typography.Title className='login-title'>Log-in</Typography.Title>
                <Form.Item
                    name="cardNumber"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter valid Card number!',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Card Number" />
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
                    <a href='/signup'>Create New Account</a>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>

                </Form.Item>
            </Form>
        </div>
    )
}

export default Login;