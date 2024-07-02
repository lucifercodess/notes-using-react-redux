import { Box, Flex, Image, VStack } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import login3 from "../assets/login3.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/Users/user.actions";
const LoginPage = () => {
    const {auth,token,loading,error} = useSelector((state)=>state.userReducer);
    const [email, setemail] = useState("")
    const [password, setpassword] = useState('')
    const dispatch = useDispatch();

    const handleLogin = ()=>{
        dispatch(getUser({email,password}))
    }
  return (
    <Flex padding={4} width="50%">
      <Image width={"50"} src={login3}></Image>
      <VStack width={"60"}>
        <Flex
          minH={"70vh"}
          minW={"70vh"}
          align={"center"}
          justify={"center"}
          right={0}
          position={'absolute'}
          marginTop={10}
          marginRight={10}
          bg={useColorModeValue("gray.50", "gray.800")}
        >
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Stack align={"center"}>
              <Heading fontSize={"4xl"}>Sign in to your account</Heading>
              <Text fontSize={"lg"} color={"gray.600"}>
                to enjoy all of our cool{" "}
                <Text color={"blue.400"}>features</Text> ✌️
              </Text>
            </Stack>
            <Box
              rounded={"lg"}
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"lg"}
              p={8}
            >
              <Stack spacing={4}>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input value = {email} onChange={(e)=>{
                    setemail(e.target.value);
                  }}type="email" />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input value = {password} onChange={(e)=>{
                    setpassword(e.target.value);
                  }}type="password" />
                </FormControl>
                <Stack spacing={10}>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    align={"start"}
                    justify={"space-between"}
                  >
                    <Checkbox>Remember me</Checkbox>
                    <Text color={"blue.400"}>Forgot password?</Text>
                  </Stack>
                  <Button
                    onClick={handleLogin}
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                    Sign in
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </VStack>
    </Flex>
  );
};

export default LoginPage;
