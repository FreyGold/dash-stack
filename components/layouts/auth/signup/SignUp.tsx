"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { Form, Input, Button, Card, message, notification } from "antd";
import { useEmailAuth } from "@/services/hooks/useEmailAuth";
import Link from "next/link";

function SignUp() {
   const t = useTranslations("signUpPage");
   const { signUpWithEmail } = useEmailAuth();
   const router = useRouter();
   const locale = useLocale();
   const [loading, setLoading] = useState(false);
   const [form] = Form.useForm();
   const [signupSuccess, setSignupSuccess] = useState(false);
   const [api, contextHolder] = notification.useNotification();

   const handleSignup = async (values: { email: string; password: string }) => {
      setLoading(true);
      const { user, error } = await signUpWithEmail(
         values.email,
         values.password
      );
      setLoading(false);

      if (error) {
         api["error"]({
            message: "Account Creation",
            description: "There was an error creating the account",
         });
      } else {
         setSignupSuccess(true);
      }
   };
   useEffect(() => {
      if (signupSuccess) {
         api["info"]({
            message: "Account Creation",
            description:
               "You need to verify your email before signing in, you will be redirected in 7 seconds to the login page",
         });
         api["success"]({
            message: "Account Creation",
            description: "The Account has been created successfully",
            duration: 2,
            showProgress: true,
         });
         const timer = setTimeout(() => {
            router.push(`/${locale}/login`);
         }, 7000);
         return () => clearTimeout(timer);
      }
   }, [signupSuccess, api]);

   return (
      <>
         {contextHolder}
         <div className="flex max-w-2xl w-full lg:w-2xl items-center justify-center min-h-screen px-4">
            <Card className="w-full max-w-md rounded-2xl !py-10 !px-8 shadow-lg">
               <h1 className="text-2xl text-center font-bold mb-2">
                  {t("title")}
               </h1>
               <p className="mb-6 font-medium opacity-80 text-center">
                  {t("description")}
               </p>

               <Form
                  form={form}
                  layout="vertical"
                  onFinish={handleSignup}
                  className="space-y-4">
                  <Form.Item
                     label={<span className="font-medium">Email</span>}
                     name="email"
                     rules={[
                        { required: true, message: "Please enter your email" },
                        { type: "email", message: "Invalid email format" },
                     ]}>
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
                        {
                           required: true,
                           message: "Please enter your password",
                        },
                        {
                           min: 6,
                           message: "Password must be at least 6 characters",
                        },
                     ]}>
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
                        className="flex-1 rounded-lg">
                        {t("button")}
                     </Button>
                  </div>

                  <div className="text-xs text-center pt-2">
                     <span className="opacity-65">{t("paragraph.left")}</span>{" "}
                     <Link
                        href={`/${locale}/login`}
                        className="hover:underline">
                        {t("paragraph.right")}
                     </Link>
                  </div>
               </Form>
            </Card>
         </div>
      </>
   );
}

export default SignUp;
