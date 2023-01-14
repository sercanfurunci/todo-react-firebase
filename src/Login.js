import React from "react";
import "./login.css"
import { Button, Checkbox, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";

export default function Login() {
    const navigate = useNavigate();

    const navigateHome = () => {
        navigate("/");
    };

    return (
        <div className="login">
            <Form
                className="form"
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                autoComplete="off"
            >
                <Form.Item
                    label="Kullanıcı adı"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: "Kullanıcı adı",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Şifre"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Şifre",
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Checkbox>Beni hatırla</Checkbox>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button style={{backgroundColor:"blue"}} type="primary" htmlType="submit">
                        Giriş yap
                    </Button>
                </Form.Item>
                <HomeOutlined
                    style={{ color: "red", fontSize: "150%" }}
                    onClick={navigateHome}
                />
            </Form>
        </div>
    );
}