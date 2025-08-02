import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils/cn";
import { Button } from "@/components/ui/button";
import { SignupFormType } from "@/types/userType";
import { Loader2 } from "lucide-react";
import api from "../services";
import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { errorHandler } from "@/helpers/errorHandler";

const Signup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<SignupFormType>({
    name: "",
    email: "",
    password: "",
    phone: null,
  });

  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onHandleSignin = async () => {
    setIsLoading(true);
    try {
      const res = await api.user.singup(formData);
      if (res.status === 200) {
        toast.success(res.data.message);
        navigate("/login");
      }
    } catch (error) {
      toast.error(errorHandler(error));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={cn(
        "nh-screen nw-screen nflex nitems-center njustify-center nbg-background",
        isLoading && "npointer-events-none"
      )}
    >
<div className="nw-full nmax-w-[420px] nbg-secondary/60 nbackdrop-blur-sm nrounded-2xl nborder nborder-border nshadow-xl np-6">

      <h2 className="ntext-xl nsm:text-2xl nfont-bold ntext-center ntext-foreground">
  Sign Up
</h2>
<p className="ntext-muted-foreground ntext-sm ntext-center nmt-1">
  Create your account to get started
</p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onHandleSignin();
          }}
          className="nmt-6 nspace-y-5"
        >
          <LabelInputContainer>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Tyler"
              onChange={handleChange}
              required
            />
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="john@gmail.com"
              onChange={handleChange}
              required
            />
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              onChange={handleChange}
              required
            />
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              name="phone"
              type="text"
              placeholder="7300519543"
              onChange={handleChange}
            />
          </LabelInputContainer>

          <Button
            type="submit"
            disabled={isLoading}
            className="nw-full nflex nitems-center njustify-center !nbg-background !ntext-primary"
          >
            {isLoading && <Loader2 className="nmr-2 nh-4 nw-4 nanimate-spin" />}
            Sign Up →
          </Button>

          <p className="ntext-muted-foreground ntext-center ntext-sm">
            Already have an account?{" "}
            <NavLink
              to="/login"
              className="ntext-primary nhover:underline nml-1"
            >
              Log In
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("nflex nflex-col nspace-y-2", className)}>
      {children}
    </div>
  );
};
