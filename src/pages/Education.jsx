import {
  Image,
  Stack,
  CardBody,
  Card,
  Heading,
  Text,
  CardFooter,
  Box,
  Icon,
  Flex,
  ListItem,
  useColorModeValue,
} from "@chakra-ui/react";

import CardEducation from "../Components/CardComponent";

import Telu from "../assets/img/Telu.png";
import logoLearningX from "../assets/img/Logo LearningX.png";
import LogoSMA from "../assets/img/sma.png";
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EducationPage = () => {
  return (
    <section className="education-section" id="education">
      <Box
        px={{ base: "5", xl: "20" }}
        py={{ base: "12", xl: "20" }}
        borderTop="2px"
        borderColor="gray.200"
      >
        {/* Title Education Start */}
        <Flex
          //   mt='10'
          // mx={{ md: "19", base: "1", xl: "20" }}
          alignItems="center"
        >
          <Icon
            as={FontAwesomeIcon}
            icon={faUserGraduate}
            boxSize={{ md: "27", base: "5", xl: "27" }}
            mr="2"
            color={useColorModeValue("fontColor.black", "primary.whiteDoff")}
          />
          <Heading
            color={useColorModeValue("fontColor.black", "primary.whiteDoff")}
            fontSize={{ md: "2xl", base: "lg", xl: "3xl" }}
          >
            Education
          </Heading>
        </Flex>
        {/* Title Education End */}

        {/* Card Education Start */}
        <CardEducation
          uni="Universitas Telkom"
          fieldOfStudy="Bachelor's degree, Software Engineering"
          year="2021 - 2025"
          logo={Telu}
          desc="Activity"
          activityPoint={[
            <ListItem key={1}>
              Developed a real-world web application for social assistance
              (bansos) distribution, focusing on usability and data management
            </ListItem>,
            <ListItem key={1}>
              Built a capstone project: helpdesk ticketing system using React.js
              with a Notion-like drag-and-drop interface
            </ListItem>,
            <ListItem key={2}>
              {" "}
              Collaborated with teams to deliver scalable and user-friendly
              software solutions for real users
            </ListItem>,
            <ListItem key={3}>
              Served as Treasurer of Software Engineering Student Association,
              managing budgeting, financial reports, and organizational funds
            </ListItem>,
          ]}
        />
        {/* Card Education End */}
      </Box>
    </section>
  );
};

export default EducationPage;
