import React, { startTransition, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils/cn";
import { Button } from "@/components/ui/button";
import { LoginFormType } from "@/types/userType";
import { Loader2 } from "lucide-react";
import api from "../services";
import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { errorHandler } from "@/helpers/errorHandler";

const Signup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<LoginFormType>({
    email: "",
    password: "",
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
      const res = await api.user.login(formData);
      if (res.status === 200) {
        toast.success(res.data.message);
        navigate("/");
      }
    } catch (error) {
      toast.error(errorHandler(error));
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignInWithTransition = () => {
    startTransition(() => {
      onHandleSignin();
    });
  };

  return (
    <div
  className={cn(
    "nh-screen nw-screen nflex nitems-center njustify-center nbg-background",
    isLoading && "npointer-events-none"
  )}
>
<div className="nw-full nmax-w-[420px] nbg-secondary/60 nbackdrop-blur-sm nrounded-2xl nborder nborder-border nshadow-xl np-6">
    <h2 className="ntext-xl nsm:text-2xl nfont-semibold ntext-foreground ntext-center">
      Log In
    </h2>

    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSignInWithTransition();
      }}
      className="nmt-6 nspace-y-5"
    >
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

      <Button
        type="submit"
        disabled={isLoading}
        className="nw-full nflex nitems-center njustify-center !nbg-background !ntext-primary"
      >
        {isLoading && <Loader2 className="nmr-2 nh-4 nw-4 nanimate-spin" />}
        Log In
      </Button>

      <p className="ntext-muted-foreground ntext-center ntext-sm">
        Don&apos;t have an account?{" "}
        <NavLink
          to="/register"
          className="ntext-primary nhover:underline nml-1"
        >
          Sign Up
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
