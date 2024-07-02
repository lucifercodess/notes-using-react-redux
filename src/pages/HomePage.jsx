import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import Navbar from "../components/HomePage/Navbar/Navbar";
import note from "../assets/note.png";

const HomePage = () => {
  return (
    <Box>
      <Heading size={"4xl"} textAlign={"start"}>
        Notes
      </Heading>
      <Image width={500} position={"absolute"} right={0} src={note} />
      <Text fontFamily= {'Times New Roman'}fontWeight={'bold'}mt={35} padding={10}marginLeft={4} maxW={"50%"} textAlign={"justify"}>
        Introducing NoteMaster, the ultimate notes app designed to streamline
        your note-taking experience. Whether you're a student, professional, or
        simply someone who loves to jot down ideas, NoteMaster offers an
        intuitive and powerful platform to capture, organize, and retrieve your
        thoughts effortlessly. Key Features: Simple and Elegant Interface: Enjoy
        a clean, user-friendly design that makes taking and managing notes a
        breeze. Rich Text Editing: Customize your notes with rich text
        formatting options including bold, italics, underline, bullet points,
        and numbered lists, ensuring your notes are not only informative but
        also visually appealing. Organizational Tools: Categorize your notes
        with tags, folders, and color-coded labels. The robust search function
        allows you to quickly find specific notes by keywords or tags.
      </Text>
    </Box>
  );
};

export default HomePage;
