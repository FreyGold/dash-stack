"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { Form, Input, Button, Card, message } from "antd";
import { useEmailAuth } from "@/services/hooks/useEmailAuth";
import Link from "next/link";

function Login() {
  const t = useTranslations("loginPage");
  const { loginWithEmail } = useEmailAuth();
  const router = useRouter();
  const locale = useLocale();
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const handleLogin = async (values: { email: string; password: string }) => {
    setLoading(true);
    const { user, error } = await loginWithEmail(values.email, values.password);
    setLoading(false);

    if (error) {
      message.error(error.message || "Login failed");
    } else {
      message.success(`Welcome back, ${user?.email}`);
      setTimeout(() => {
        router.push(`/${locale}/dashboard`);
      }, 1000);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <Card className="w-full max-w-md rounded-2xl !py-10 !px-8 shadow-lg">
        <h1 className="text-2xl text-center font-bold mb-2">{t("title")}</h1>
        <p className="mb-6 font-medium opacity-80 text-center">
          {t("description")}
        </p>

        <Form
          form={form}
          layout="vertical"
          onFinish={handleLogin}
          className="space-y-4"
        >
          <Form.Item
            label={<span className="font-medium">Email</span>}
            name="email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Invalid email format" },
            ]}
          >
            <Input
              size="large"
              placeholder="Enter your email"
              className="rounded-lg"
            />
          </Form.Item>

          <Form.Item
            label={<span className="font-medium">Password</span>}
            name="password"
            rules={[
              { required: true, message: "Please enter your password" },
              { min: 6, message: "Password must be at least 6 characters" },
            ]}
          >
            <Input.Password
              size="large"
              placeholder="Enter your password"
              className="rounded-lg"
            />
          </Form.Item>

          <div className="flex gap-3 pt-2">
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              className="flex-1 rounded-lg"
            >
              Login
            </Button>
          </div>

          <div className="text-xs text-center pt-2">
            <span className="opacity-65">Don’t have an account?</span>{" "}
            <Link href={`/${locale}/signup`} className=" hover:underline">
              Create Account
            </Link>
          </div>
        </Form>
      </Card>
    </div>
  );
}

export default Login;
