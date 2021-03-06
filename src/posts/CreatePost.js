import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Form, Input, Button, Layout, PageHeader, message, Space } from "antd";
import { post } from "../actions";

const MainLayout = styled(Layout)`
  width: 100vw;
  height: 100vh;
  align-items: center;
`;

const Header = styled(PageHeader)`
  width: 1000px;
`;

const MyForm = styled(Form)`
  width: 1000px;
`;

function CreatePost({ onCancelClick, post }) {
  const onFormFinish = async (values) => {
    console.log("got some values", values);
    await post(values);
    message.success("Saved your post!");
    onCancelClick();
  };

  return (
    <MainLayout>
      <Header title="Create Post" />
      <MyForm onFinish={onFormFinish} layout="vertical">
        <Form.Item
          label="Title"
          name="title"
          rules={[
            {
              required: true,
              message: "Please input title for the post",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="content" label="Content">
          <Input.TextArea />
        </Form.Item>

        <Form.Item>
          <Space>
            <Button type="primary" htmlType="submit">
              Post
            </Button>
            <Button onClick={onCancelClick}>Cancel</Button>
          </Space>
        </Form.Item>
      </MyForm>
    </MainLayout>
  );
}

export default connect(null, { post })(CreatePost);
