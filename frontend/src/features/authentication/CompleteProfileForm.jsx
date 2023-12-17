import React, { useState } from "react";
import TextField from "../../ui/TextField";
import { RadioGroup, Radio } from "@nextui-org/react";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../services/authService";
import Loading from "../../ui/Loading";
import { toast } from "react-hot-toast";
import {useNavigate} from "react-router-dom";

function CompleteProfileForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  console.log(name, email, role);
  const { mutateAsync, isPending, data } = useMutation({
    mutationFn: completeProfile,
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {message , user} = await mutateAsync({ name, email, role });
      toast.success(message);
      
      if(user.status !== 2){
       navigate('/');
       toast.success('wait for prove your information')
       return
      }
      if(user.role === "OWNER") return navigate("/owner");
      if(user.role === "FREELANCER") return navigate("/freelancer");;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <div className="w-full max-w-lg">
      <form className="w-full space-y-8" onSubmit={handleSubmit}>
        <TextField
          label="نام و نام خانوادگی"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <TextField
          label="ایمیل"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <RadioGroup label="نوع فعالیت خود را انتخاب کنید :" color="secondary">
          <div className="w-full h-20 flex justify-start items-center gap-4">
            <Radio value="FREELANCER" onClick={() => setRole('FREELANCER')}>
              <span className="mx-2">فریلنسر</span>
            </Radio>
            <Radio value="OWNER" onClick={() => setRole('OWNER')}>
              <span className="mx-2">کارفرما</span>
            </Radio>
          </div>
        </RadioGroup>
        {isPending ? (
          <Loading />
        ) : (
          <button type="submit" className="btn btn__primary w-full ">
            تایید
          </button>
        )}
      </form>
    </div>
  );
}

export default CompleteProfileForm;
