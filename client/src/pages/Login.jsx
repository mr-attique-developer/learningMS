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
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "@/context/auth";
const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [disabled, setDisabled] = useState(false);
    const [activeTab, setActiveTab] = useState("login");
    const {toast} = useToast()
    const navigate = useNavigate()
    const {user,setUser} = useContext(AuthContext)
    console.log(user)





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
    const handleSubmit = async()=>{
    
try {
  if(activeTab === "login"){
    const response = await axios.post("http://localhost:5000/api/v1/auth/login",{email,password} )
    console.log(response.data)

    localStorage.setItem("token", response.data.token)
    localStorage.setItem("user", JSON.stringify(response.data.user))
    // setUser(response.data.user)
    navigate("/")
    toast({title: response.data.message, status: "success"})

  }else{
    const response = await axios.post("http://localhost:5000/api/v1/auth/register",{email,password,username, role:"user"} )
    console.log(response.data)
    // setUser(response.data.user)
    localStorage.setItem("user", JSON.stringify(response.data.user))
    setActiveTab("login")
    toast({title: response.data.message, status: "success"})
  }

} catch (error) {
  console.log(error.response.data.message)
  toast({variant: "destructive",title: error.response.data.message, status: "error"})
  console.log(error)
}
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
