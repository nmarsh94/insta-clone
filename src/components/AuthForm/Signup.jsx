import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { InputGroup, Input, InputRightElement, Button } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
  });
  const [showPassword, setPassword] = useState(false);

  return (
    <>
      <Input
        placeholder="Email"
        type="email"
        fontSize={14}
        value={inputs.email}
        size={"sm"}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
      />
      <Input
        placeholder="Username"
        type="text"
        fontSize={14}
        value={inputs.username}
        size={"sm"}
        onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
      />
      <Input
        placeholder="Full Name"
        type="text"
        fontSize={14}
        value={inputs.fullName}
        size={"sm"}
        onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
      />
      <InputGroup>
        <Input
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          fontSize={14}
          value={inputs.password}
          size={"sm"}
          onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
        />
        <InputRightElement h={"full"}>
          <Button
            variant={"ghost"}
            size={"sm"}
            onClick={() => setPassword(!showPassword)}
          >
            {showPassword ? <ViewIcon/> : <ViewOffIcon/>}
          </Button>
        </InputRightElement>
      </InputGroup>

      <Button w={"full"} colorSchema="blue" size="sm" fontSize={14}>
        Sign up
      </Button>
    </>
  );
};

export default Signup;
