import {
  Flex,
  Icon,
  Heading,
  useColorModeValue,
  ListItem,
  Box,
} from "@chakra-ui/react";

import "../dist/css/main.css";

import NavbarComponent from "../Components/NavbarComponent";
import CardComponent from "../Components/CardComponent";
import FooterComponent from "../Components/FooterComponent";

import telkom from "../assets/img/telkom.png";
import vue from "../assets/img/vue.png";
import Telu from "../assets/img/Telu.png";
import logoAca from "../assets/img/ACALogo.png";
import flask from "../assets/img/FlaskImg.png";
import mongoDb from "../assets/img/MongoDbImg.png";
import jquery from "../assets/img/JqueryImg.png";
import bootsrap from "../assets/img/BootsrapImg.png";
import html from "../assets/img/HtmlIgm.png";
import css from "../assets/img/CssImg.png";
import ai from "../assets/img/AiImg.png";
import ps from "../assets/img/PsImg.png";
import figma from "../assets/img/FigmaImg.png";
import ReactNativeLogo from "../assets/img/codeigniter.png";
import JsLogo from "../assets/img/JavaScriptLogo.png";
import humic from "../assets/img/humic.png";
import polaris from "../assets/img/polaris.png";
import logoLP3ES from "../assets/img/telkom.png";
import logoCNN from "../assets/img/CNNLogo.png";
import TailwindLogo from "../assets/img/tailwindLogo.png";
import PHPLogo from "../assets/img/PHPLogo.png";
import LaravelLogo from "../assets/img/LravelLogo.png";

import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { motion, AnimatePresence } from "framer-motion";

const ExperiencePage = () => {
  const toolsNourish = [flask, mongoDb, jquery, bootsrap, html, css];
  const toolsVbd = [ai, ps];
  const toolsQuarter = [ai, ps, figma];
  const toolsACA = [LaravelLogo, JsLogo, vue];
  const toolsLP3ES = [ReactNativeLogo, JsLogo, figma];
  const toolsCNN = [LaravelLogo, PHPLogo, bootsrap, TailwindLogo];
  return (
    <section className="experience-section" id="experience">
      {/* Navabar Start */}
      {/* <NavbarComponent /> */}
      {/* Navabar End */}
      <Box
        mt="10"
        py={{ base: "12", xl: "20" }}
        borderTop="2px"
        borderColor="gray.200"
      >
        <AnimatePresence>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box px={{ base: "5", xl: "20" }}>
              {/* Title Experience Start */}
              <Flex alignItems="center">
                <Icon
                  as={FontAwesomeIcon}
                  icon={faRocket}
                  boxSize={{ md: "27", base: "5", xl: "27" }}
                  mr="2"
                  color={useColorModeValue(
                    "fontColor.black",
                    "primary.whiteDoff"
                  )}
                />
                <Heading
                  color={useColorModeValue(
                    "fontColor.black",
                    "primary.whiteDoff"
                  )}
                  fontSize={{ md: "2xl", base: "lg", xl: "3xl" }}
                >
                  My Experience
                </Heading>
              </Flex>
              {/* Title Experience End */}

              {/* Subtitle Start*/}
              <Heading
                fontWeight="medium"
                fontSize={{ base: "md", xl: "xl" }}
                color={useColorModeValue(
                  "fontColor.black",
                  "primary.whiteDoff"
                )}
                ml={{ base: "6", xl: "9", md: "9" }}
                mt={{ base: "2", xl: "3" }}
                id="my-experience"
              >
                Programming
              </Heading>
              {/* Subtitle End*/}

              {/* Card Start */}
              <CardComponent
                uni="CNN Indonesia"
                fieldOfStudy="Frontend Developer Intern"
                year="October 2025 - April 2026"
                logo={logoCNN}
                desc="Description"
                activityPoint={[
                  <ListItem key={"CNN-1"}>
                    Developed website interfaces based on UI/UX designs using
                    Bootstrap and Tailwind CSS in Laravel projects.
                  </ListItem>,
                  <ListItem key={"CNN-2"}>
                    Performed debugging and improvements to ensure proper
                    functionality and visual consistency across the website.
                  </ListItem>,
                  <ListItem key={"CNN-3"}>
                    Collaborated closely with backend developers and UI/UX
                    designers to build and deliver complete web applications.
                  </ListItem>,
                ]}
                titleTools="Technology Used:"
                logoTools={toolsCNN}
              />
              {/* Card End */}
              {/* Card Start */}
              <CardComponent
                uni="Capstone Project"
                fieldOfStudy="Frontend Developer"
                year="Februari 2025 - June 2025"
                logo={Telu}
                desc="Description"
                activityPoint={[
                  <ListItem key={"nourish-1"}>
                    Developed a helpdesk ticketing web application interface
                    using React.js and JavaScript for the Informatics Faculty.
                  </ListItem>,
                  <ListItem key={"nourish2-"}>
                    Designed and implemented a modern, intuitive UI inspired by
                    Notion with drag-and-drop functionality for better user
                    experience.
                  </ListItem>,
                  <ListItem key={"nourish-3"}>
                    Enhanced ticket management workflow by creating interactive,
                    responsive, and user-friendly components for efficient issue
                    tracking.
                  </ListItem>,
                ]}
                titleTools="Technology Used:"
                logoTools={toolsNourish}
              />
              {/* Card End */}
              {/* Card Start */}
              <CardComponent
                uni="PT Polaris Uno Indonesia"
                fieldOfStudy="Software Engineer"
                year="July 2024 - July 2024"
                logo={polaris}
                desc="Description"
                activityPoint={[
                  <ListItem key={"LP3ES-1"}>
                    Perform analysis and testing of the company's website to
                    ensure the quality, performance, and security of the system.
                  </ListItem>,
                  <ListItem key={"LP3ES-2"}>
                    Create test reports and provide recommendations for
                    improvements based on bug and error findings.
                  </ListItem>,
                  <ListItem key={"LP3ES-3"}>
                    Support the developer team in maintaining the company's
                    software quality standards.
                  </ListItem>,
                ]}
              />
              {/* Card End */}
              {/* Card Start */}
              <CardComponent
                uni="Telkom Indonesia"
                fieldOfStudy="Software Engineer"
                year="July 2024 - July 2024"
                logo={logoLP3ES}
                desc="Description"
                activityPoint={[
                  <ListItem key={"LP3ES-1"}>
                    Creating UI/UX designs using Figma for an office item
                    lending system.
                  </ListItem>,
                  <ListItem key={"LP3ES-2"}>
                    Developing a CodeIgniter-based web application for SLA
                    (Service Level Agreement) data management.
                  </ListItem>,
                  <ListItem key={"LP3ES-3"}>
                    Acting as a Full Stack Developer, integrating frontend and
                    backend to ensure optimal system performance.
                  </ListItem>,
                ]}
                titleTools="Technology Used:"
                logoTools={toolsLP3ES}
              />
              {/* Card End */}

              {/* Card Start */}
              <CardComponent
                uni="HUMIC (Human Centric) Engineering Research Center"
                fieldOfStudy="Intern Frontend Developer"
                year="Februari 2024 - Juni 2024"
                logo={humic}
                desc="Description"
                activityPoint={[
                  <ListItem key={"ACA-1"}>
                    Developing a web interface for monitoring the elderly using
                    Laravel, JavaScript, and PHP.
                  </ListItem>,
                  <ListItem key={"ACA-2"}>
                    Creating an interactive and responsive interface so that the
                    elderly's health data can be displayed clearly.
                  </ListItem>,
                  <ListItem key={"ACA-3"}>
                    Focusing on frontend implementation with API integration
                    from the backend.
                  </ListItem>,
                ]}
                titleTools="Technology Used:"
                logoTools={toolsACA}
              />
              {/* Card End */}

              {/* Subtitle Start*/}
              <Heading
                fontWeight="medium"
                fontSize={{ base: "md", xl: "xl" }}
                color={useColorModeValue(
                  "fontColor.black",
                  "primary.whiteDoff"
                )}
                ml={{ base: "6", xl: "9", md: "9" }}
                // mx={{ base: "0", xl: "20", md: "15" }}
                mt={{ base: "8", xl: "8", md: "8" }}
              ></Heading>
              {/* Subtitle End*/}

              {/* Card Start */}
            </Box>
          </motion.div>
        </AnimatePresence>
        {/* Footer Start*/}
        {/* <FooterComponent /> */}
        {/* Footer End*/}
      </Box>
    </section>
  );
};

export default ExperiencePage;
