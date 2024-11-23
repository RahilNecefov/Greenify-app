import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast";
import { User } from "lucide-react";
import Navigation from "@/components/Navigation";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const Profile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    setIsLoggedIn(true);
    toast({
      title: "Success",
      description: "You have successfully logged in!",
    });
  };

  if (isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-green-50 pb-20">
        <div className="p-4 max-w-lg mx-auto mt-8">
          <h1 className="text-2xl font-bold text-green-800 mb-4">Profile</h1>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-center mb-4">
              <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <User className="w-12 h-12 text-green-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">User Profile</h2>
              <p className="text-gray-600">example@email.com</p>
            </div>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => setIsLoggedIn(false)}
            >
              Sign Out
            </Button>
          </div>
        </div>
        <Navigation />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50 pb-20">
      <div className="p-4 max-w-lg mx-auto mt-8">
        <h1 className="text-2xl font-bold text-green-800 mb-4">Login</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="Enter your password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">Login</Button>
            </form>
          </Form>
        </div>
      </div>
      <Navigation />
    </div>
  );
};

export default Profile;