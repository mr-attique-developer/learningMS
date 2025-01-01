import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [disabled, setDisabled] = useState(false);
    const [activeTab, setActiveTab] = useState("login");


    useEffect(() => {
      if ( password.trim() === "" ||  email.trim() === "") {
          setDisabled(true);
      } else {
          setDisabled(false);
      }
  }, [password, email]);

  useEffect(() => {
    setUsername("");
    setPassword("");
    setEmail("");
}, [activeTab]);
    const handleSubmit = ()=>{


      console.log(username, password, email);
        setEmail("");
        setUsername("");
        setPassword("");
    }
  return (
    <div className="w-screen h-screen flex items-center justify-center">    
    <Tabs defaultValue="login" className="w-[400px]" onValueChange={setActiveTab}>
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login">Login</TabsTrigger>
        <TabsTrigger value="signup">Sign Up</TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <Card>
          <CardHeader>
            <CardTitle >Sign In to your ccount</CardTitle>
            <CardDescription>Enter your email and password to continue</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" required placeholder="Enter Your Email" value={email} onChange={(e)=> setEmail(e.target.value)} />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input id="password" placeholder="Enter Your Password" value={password} onChange={(e)=> setPassword(e.target.value)} />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" onClick={handleSubmit} disabled={disabled}>Sign In</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="signup">
        <Card>
          <CardHeader>
            <CardTitle>Create a new account</CardTitle>
            <CardDescription>Enter your details to get started</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" placeholder="Enter Your Username" value={username} onChange={(e)=> setUsername(e.target.value)} />
            </div>
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Enter Your Email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input id="password" placeholder="Enter Your Password" value={password} onChange={(e)=> setPassword(e.target.value)} />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" onClick={handleSubmit} disabled={disabled}>Submit</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
    </div>
  );
};

export default Login;
