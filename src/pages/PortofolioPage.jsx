import NavbarComponent from "../Components/NavbarComponent";
import {
  Box,
  Heading,
  useColorModeValue,
  Flex,
  Icon,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";

import ProgramingPortoCard from "../Components/ProgramingPortoCard";
import { faArrowRight, faBrain } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import FooterComponent from "../Components/FooterComponent";

import nourishPage from "../assets/img/NourishWeb.png";
import spartaPage from "../assets/img/SpartaWeb.png";
import fanbookPage from "../assets/img/FanBookWeb.png";
import movieRatePage from "../assets/img/MovieRateWeb.png";
import potfolioPage from "../assets/img/porto-website.png";
import ACAMobilePage from "../assets/img/ACAMobilePage.jpeg";
import WellnestPage from '../assets/img/WellnestWeb.png';
import Lp3esMobileApp from '../assets/img/Lp3esMobileApp.png';
import TBIFPage from '../assets/img/TBIFWeb.png';
import PapperlesPage from '../assets/img/papperlesApproval.png';
import flask from "../assets/img/FlaskImg.png";
import mongoDb from "../assets/img/MongoDbImg.png";
import jquery from "../assets/img/JqueryImg.png";
import bootsrap from "../assets/img/BootsrapImg.png";
import html from "../assets/img/HtmlIgm.png";
import css from "../assets/img/CssImg.png";
import chakraUi from "../assets/img/chakraui.png";
import react from "../assets/img/React.png";
import javaScript from "../assets/img/javascriptImg.jpg";
import GdCardComponent from "../Components/GdCardComponent";
import gambar1 from "../assets/img/Mockup STTD.png";
import gambar2 from "../assets/img/Mockup Semua Orang Pernah Saki Hati.png";
import gambar3 from "../assets/img/Mockup Box.png";
import gambar4 from "../assets/img/Mockup Poster to late.png";

import logoTs from '../assets/img/Typescript_logo.png';
import logoLP3ES from '../assets/img/lp3es_logo.png';
import logoCNN from '../assets/img/CNNLogo.png';
import TailwindLogo from '../assets/img/tailwindLogo.png';
import PHPLogo from '../assets/img/PHPLogo.png';
import LaravelLogo from '../assets/img/LravelLogo.png';


import { motion, AnimatePresence } from "framer-motion";

const PortofolioPage = () => {
  const withJquery = [flask, mongoDb, jquery, bootsrap, html, css];
  const withoutJquery = [flask, mongoDb, bootsrap, html, css];
  const reactChakra = [react, chakraUi];
  const reactJavaScript = [react, javaScript];
  const lp3esStack = [react, logoTs];
  const WellnestTechStack = [LaravelLogo, PHPLogo, bootsrap];
  const TBIFTechStack = [LaravelLogo, PHPLogo, TailwindLogo];
  return (
    <section className="portfolio" id="portfolio">
      <Box py={{ base: '12', xl: '20' }} borderTop="2px" borderColor="gray.200">
        {/* Navabar Start */}
        {/* <NavbarComponent /> */}
        {/* Navabar End */}
        <AnimatePresence>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box px={{ base: '5', xl: '20' }}>
              {/* Title Experience Start */}
              <Flex alignItems="center">
                <Icon
                  as={FontAwesomeIcon}
                  icon={faBrain}
                  boxSize={{ md: '27', base: '5', xl: '27' }}
                  mr="2"
                  color={useColorModeValue(
                    'fontColor.black',
                    'primary.whiteDoff',
                  )}
                />
                <Heading
                  color={useColorModeValue(
                    'fontColor.black',
                    'primary.whiteDoff',
                  )}
                  fontSize={{ md: '2xl', base: 'lg', xl: '3xl' }}
                >
                  My Portfolio
                </Heading>
              </Flex>
              {/* Title Experience End */}

              {/* Subtitle Start*/}
              <Heading
                fontWeight="medium"
                fontSize={{ base: 'md', xl: 'xl' }}
                color={useColorModeValue(
                  'fontColor.black',
                  'primary.whiteDoff',
                )}
                ml={{ base: '6', xl: '9', md: '9' }}
                mt={{ base: '5', xl: '5' }}
              >
                programming
              </Heading>
              {/* Subtitle End*/}

              {/* programming Porto Card Start */}
              <SimpleGrid
                minChildWidth="270px"
                spacing="5"
                mt={{ base: '2', xl: '5' }}
                // mx={{ base: "0", xl: "20" }}
              >
                <ProgramingPortoCard
                  img={TBIFPage}
                  title={'TBIF Website'}
                  desc={
                    'Landing Page The Big Idea Forum(TBIF) by CNN Indonesia'
                  }
                  linkGithub={'/'}
                  linkPreview={'https://maganghub-tbif.cnn.co.id/'}
                  techUsed={TBIFTechStack}
                />
                <ProgramingPortoCard
                  img={PapperlesPage}
                  title={'Papperless Approval (Internal System)'}
                  desc={'Website for papperles approval internal system'}
                  linkGithub={''}
                  linkPreview={''}
                  techUsed={WellnestTechStack}
                />
                <ProgramingPortoCard
                  img={WellnestPage}
                  title={'Wellnest Website'}
                  desc={
                    'Landing Page Registration Wellnest Festival by CNN Indonesia'
                  }
                  linkGithub={'/'}
                  linkPreview={'https://wellnest-festival.cnn.co.id/'}
                  techUsed={WellnestTechStack}
                />
                <ProgramingPortoCard
                  img={Lp3esMobileApp}
                  title={'LP3ES-Prisma'}
                  desc={'LP3ES-Prisma Mobile App Book Shooping'}
                  linkGithub={'/'}
                  linkPreview={
                    'https://play.google.com/store/apps/details?id=com.lp3es&hl=id'
                  }
                  techUsed={lp3esStack}
                />
                <ProgramingPortoCard
                  img={ACAMobilePage}
                  title={'ACA Mobile App'}
                  desc={'HRIS Mobile App for PT. Abhimata Citra Abadi'}
                  linkGithub={'/'}
                  linkPreview={'/'}
                  techUsed={reactJavaScript}
                />
                {/* <ProgramingPortoCard
                  img={potfolioPage}
                  title={'Portfolio Webiste'}
                  desc={'Profolio website for my self'}
                  linkGithub={'/'}
                  linkPreview={'/'}
                  techUsed={reactChakra}
                /> */}
                {/* <ProgramingPortoCard
                  img={nourishPage}
                  title={'Nourish Connection '}
                  desc={'Forum website for UMKM '}
                  linkGithub={
                    'https://github.com/Arkhabp/nourish-connection.git'
                  }
                  linkPreview={'https://nourish-connection.glitch.me/'}
                  techUsed={withJquery}
                />
                <ProgramingPortoCard
                  img={spartaPage}
                  title={'Word List Website'}
                  desc={'Website to practice vocabulary'}
                  linkGithub={'https://github.com/Arkhabp/word_list.git'}
                  linkPreview={'https://word-list-arkhab.glitch.me/'}
                  techUsed={withJquery}
                />
                <ProgramingPortoCard
                  img={fanbookPage}
                  title={'New Jeans Fanbook'}
                  desc={'Website for new jeans fans'}
                  linkGithub={'https://github.com/Arkhabp/fanboock.project.git'}
                  linkPreview={'https://new-jeans-fanbook.glitch.me/'}
                  techUsed={withoutJquery}
                />
                <ProgramingPortoCard
                  img={movieRatePage}
                  title={'Movie Rating Website'}
                  desc={'Website for reating moives using IMDb API'}
                  linkGithub={'https://github.com/Arkhabp/movie.git'}
                  linkPreview={'https://arkhab-movie.glitch.me/'}
                  techUsed={withoutJquery}
                /> */}
              </SimpleGrid>
              {/* programming Porto Card End */}

              {/* Subtitle Start*/}
              <Heading
                fontWeight="medium"
                fontSize={{ base: 'md', xl: 'xl' }}
                color={useColorModeValue(
                  'fontColor.black',
                  'primary.whiteDoff',
                )}
                ml={{ base: '6', xl: '9', md: '9' }}
                mt={{ base: '8', xl: '8', md: '8' }}
              >
                Graphic Design
              </Heading>
              {/* Subtitle End*/}

              <SimpleGrid
                spacing="5"
                // mx={{ base: "0", xl: "20" }}
                mt={{ base: '2', xl: '5' }}
              >
                <GdCardComponent
                  img={gambar1}
                  title={'STT Dumai Poster'}
                  desc={
                    'This poster was created to participate in poster designCompetition “Special Lustrum IV STT Dumai 2023”organized by Sekolah Tinggi Teknologi Dumai.'
                  }
                />

                <GdCardComponent
                  rowReverse={'row-revers'}
                  img={gambar2}
                  title={'Semua Orang Pernah Sakit Hati Poster'}
                  desc={
                    'Poster inspired by the song “Semua orang pernah sakit hati” from Lomba Sihir.'
                  }
                  link={
                    'https://www.instagram.com/p/ClkrfR3BSWL/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=='
                  }
                />

                <GdCardComponent
                  img={gambar3}
                  title={'The Cube Poster'}
                  desc={
                    'The cube is a poster made for the needs of @artkhabp instagram feeds. using the gradient map technique'
                  }
                  link={
                    'https://www.instagram.com/p/CqhysYDBKHV/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=='
                  }
                />

                <GdCardComponent
                  rowReverse={'row-revers'}
                  img={gambar4}
                  title={'Too Late To Know You Poster'}
                  desc={
                    'made this poster by utilizing several drawing tools such as turtles, leaves, and several assets to beautify this poster, in this poster I used the gradientmap technique on several assets'
                  }
                  link={
                    'https://www.instagram.com/p/CkShrWjhQp3/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=='
                  }
                />
              </SimpleGrid>
            </Box>

            {/* Button More Start*/}
            <Flex
              justifyContent="center"
              alignItems="center"
              py={{ base: '13', xl: '25' }}
            >
              <motion.a
                href={
                  'https://drive.google.com/file/d/1l5X31ZOIm8Uq3VVz365-qMJuf4VEVKLL/view?usp=sharing'
                }
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button
                  variant="ghost"
                  size={'md'}
                  color={useColorModeValue(
                    'fontColor.black',
                    'primary.whiteDoff',
                  )}
                  fontWeight="normal"
                  rightIcon={<FontAwesomeIcon icon={faArrowRight} />}
                >
                  More Design Portofilo
                </Button>
              </motion.a>
            </Flex>
            {/* Button More End*/}
          </motion.div>
        </AnimatePresence>
        {/* Footer Start*/}
        {/* <FooterComponent /> */}
        {/* Footer End*/}
      </Box>
    </section>
  );
};

export default PortofolioPage;
