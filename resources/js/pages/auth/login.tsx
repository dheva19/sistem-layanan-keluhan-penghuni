import AuthLayout from "../layout/auth-layout";

import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from "@inertiajs/react";

export default function LoginPage(){
    return <AuthLayout title="Login">
        <Card className="m-5 w-full max-w-sm">
            <CardHeader>
                <CardTitle>Login to your account</CardTitle>
                <CardDescription>Enter your email below to login to your account</CardDescription>
            </CardHeader>
            <CardContent>
                <form className="mt-3 flex flex-col gap-5">
                    <div>
                        <Label htmlFor="email" className="mb-2">Email</Label>
                        <Input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="example@mail.com"
                            autoComplete="email"
                            required
                        />
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <Label htmlFor="password">Password</Label>
                            <Link className="hover:underline self-end">Forgot your password?</Link>
                        </div>
                        <Input
                            type="password"
                            id="password"
                            name="password"
                            min={8}
                            placeholder="********"
                            autoComplete="off"
                            required
                        />
                    </div>

                    <div className="mt-5 flex flex-col gap-2">
                        <Button type="submit" className="w-full">Login</Button>
                        <p className="self-center">Don't have an account?  <Link href="/register" className="hover:underline">Register now</Link></p>
                    </div>
                </form>
            </CardContent>
        </Card>
    </AuthLayout>
}