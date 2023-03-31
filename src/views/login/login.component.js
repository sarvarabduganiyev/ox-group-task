import { hoc } from "../../utils/hoc";
import { useLoginProps } from "./login.props";
import React from "react";
import {
  Row,
  Col,
  Card,
  Form,
  Button,
  Input,
  Typography,
  Descriptions,
} from "antd";

import {
  LockOutlined,
  MailOutlined,
  AppstoreAddOutlined,
} from "@ant-design/icons";

import { PROJECT_NAME } from "../../configs/app-global";

const { Title } = Typography;
export const Login = hoc(
  useLoginProps,
  ({ loading, credentials, copyCredentials, submitLogin, form }) => {
    return (
      <div className="login-wrapprer">
        <Row justify="center">
          <Col>
            <Card>
              <div>
                <div>
                  <Title className="project-name">{PROJECT_NAME}</Title>
                </div>
                <Row justify="center">
                  <Col>
                    <Form
                      name="login-form"
                      layout="vertical"
                      form={form}
                      onFinish={submitLogin}
                      style={{ width: "420px" }}
                    >
                      <Form.Item
                        name="username"
                        label="Username"
                        rules={[
                          {
                            required: true,
                            message: "Please input your username!",
                          },
                        ]}
                      >
                        <Input
                          prefix={<MailOutlined />}
                          placeholder="Username"
                        />
                      </Form.Item>

                      <Form.Item
                        name="password"
                        label="Password"
                        rules={[
                          {
                            required: true,
                            message: "Please input your password!",
                          },
                        ]}
                      >
                        <Input.Password
                          prefix={<LockOutlined />}
                          placeholder="Password"
                        />
                      </Form.Item>
                      <Form.Item
                        name="subdomain"
                        label="Subdomain"
                        rules={[
                          {
                            required: true,
                            message: "Please input your subdomain!",
                          },
                        ]}
                      >
                        <Input
                          prefix={<AppstoreAddOutlined />}
                          placeholder="Subdomain"
                        />
                      </Form.Item>

                      <Form.Item>
                        <Button
                          block
                          type="primary"
                          htmlType="submit"
                          loading={loading}
                        >
                          Login
                        </Button>
                      </Form.Item>
                      <Descriptions bordered size="small">
                        {credentials.map((item, idx) => (
                          <React.Fragment key={idx}>
                            <Descriptions.Item span={3} label={"Username"}>
                              {item.username}
                            </Descriptions.Item>
                            <Descriptions.Item span={4} label={"Password"}>
                              {item.password}
                            </Descriptions.Item>
                            <Descriptions.Item span={4} label={"Subdomain"}>
                              {item.subdomain}
                            </Descriptions.Item>
                            <Descriptions.Item span={3}>
                              <Button
                                onClick={(event) =>
                                  copyCredentials(event, item)
                                }
                                block
                                className="copy-btn"
                                ghost
                                type="primary"
                              >
                                Copy
                              </Button>
                            </Descriptions.Item>
                          </React.Fragment>
                        ))}
                      </Descriptions>
                    </Form>
                  </Col>
                </Row>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
);
