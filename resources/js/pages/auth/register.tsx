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

export default function RegisterPage(){
    return <AuthLayout title="Login">
        <Card className="m-5 w-full max-w-sm">
            <CardHeader>
                <CardTitle>Creat new account</CardTitle>
                <CardDescription>Fill form below to register new account</CardDescription>
            </CardHeader>
            <CardContent>
                <form className="mt-3 flex flex-col gap-5">
                    <div>
                        <Label htmlFor="name" className="mb-2">Name</Label>
                        <Input
                            type="name"
                            id="name"
                            name="name"
                            placeholder="John"
                            autoComplete="name"
                            required
                        />
                    </div>
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
                        <Label htmlFor="password" className="mb-2">Password</Label>
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
                    <div>
                        <Label htmlFor="password-confirmation" className="mb-2">Confirm Password</Label>
                        <Input
                            type="password"
                            id="password-confirmation"
                            name="password-confirmation"
                            min={8}
                            placeholder="********"
                            autoComplete="off"
                            required
                        />
                    </div>

                    <div className="mt-5 flex flex-col gap-2">
                        <Button type="submit" className="w-full">Register</Button>
                        <p className="self-center">Already have an account?  <Link href={"/login"} className="hover:underline">Login now</Link></p>
                    </div>
                </form>
            </CardContent>
        </Card>
    </AuthLayout>
}