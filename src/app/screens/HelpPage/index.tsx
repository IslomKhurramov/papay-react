import { Container } from "@mui/system";
import React from "react";
import "../../../css/help.css";
import { TabContext, TabList } from "@mui/lab";
import TabPanel from "@mui/lab/TabPanel";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Stack,
  Tab,
} from "@mui/material";

export function HelpPage() {
  const [value, setValue] = React.useState("1");
  const handleChange = (event: any, newValue: string) => {
    setValue(newValue);
  };
  const faq = [
    {
      question: "Tolov qanday amalga oshiriladi?",
      answer:
        "Tolovni oayme, click ilovalari orqali amalga oshirishingiz mumkin Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      question: "Buyurtmalar qancha vaqtda yetib keladi?",
      answer:
        "Tolovni oayme, click ilovalari orqali amalga oshirishingiz mumkin Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      question: "Saytdan foydalansam malumotlarim havfsizligiga kafolat bormi?",
      answer:
        "Tolovni oayme, click ilovalari orqali amalga oshirishingiz mumkin",
    },
    {
      question: "Saytda muammo kelsa kimga murojaat qilaman?",
      answer:
        "Tolovni oayme, click ilovalari orqali amalga oshirishingiz mumkin",
    },
    {
      question:
        "Men foydalanuvchi sifatida emas biznesmen sifatida foydalanmoqchiman, nma qilishim kerak?",
      answer:
        "Tolovni oayme, click ilovalari orqali amalga oshirishingiz mumkin Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com",
    },
    {
      question:
        "Men Koreaya davlatidaman O'zbekistondagi oilam pul junatmoqchiman Visa yoki Master carddan foydalana olamanmi?",
      answer:
        "Tolovni oayme, click ilovalari orqali amalga oshirishingiz mumkinLorem ipsum dolor sit amet, conset non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      question: "Buyurtmani tulov qilish un nima qilishim kerak?",
      answer:
        "Tolovni oayme, click ilovalari orqali amalga oshirishingiz Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodmumkin",
    },
    {
      question:
        "Men foydalanuvchi sifatida emas biznesmen sifatida foydalanmoqchiman, nma qilishim kerak?",
      answer:
        "Tolovni oayme, click ilovalari orqali amalga oshirishingiz mumkin Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com",
    },
    {
      question:
        "Men Koreaya davlatidaman O'zbekistondagi oilam pul junatmoqchiman Visa yoki Master carddan foydalana olamanmi?",
      answer:
        "Tolovni oayme, click ilovalari orqali amalga oshirishingiz mumkinLorem ipsum dolor sit amet, conset non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      question: "Buyurtmani tulov qilish un nima qilishim kerak?",
      answer:
        "Tolovni oayme, click ilovalari orqali amalga oshirishingiz Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodmumkin",
    },
  ];

  const rules = [
    "Saytdan tulaqonli foydalanish uchun ruyhatdan utishingiz shart",
    "Buyurtmalaringizga tulovni amalga oshirganingizdan sung bekor qila olmaysiz",
    "Jonli muloqot vaqtida bexayo so'zlarni ishlatish mumkin emas",
    "Shaxsiy reklamalarni adminning ruxsatisiz yozish va tarqatish mumkin emas",
    "Maqolalaringiz odob doitrasdan chiqib ketmasligi shart",
    "Barcha xarakatlaringiz adminlarimiz tomonidan kuzatiladi",
  ];
  return (
    <div className="help_page">
      <Container maxWidth="lg" sx={{ mt: "50px", mb: "50px" }}>
        <TabContext value={value}>
          <Box className="tablist_box">
            <TabList
              value={value}
              onChange={handleChange}
              aria-label="lab API tabs example"
              style={{
                marginBottom: "10px",
                borderColor: "blue",
                display: "flex",
                justifyContent: "space-between",
              }}>
              <Tab label="Qoidalar" value="1"></Tab>
              <Tab label="FAQ" value="2"></Tab>
              <Tab label="Adminga Xat" value="3"></Tab>
            </TabList>
          </Box>

          <Stack className="help_main_content">
            <TabPanel value={"1"}>
              <Stack className="theRules_box">
                <Box className="theRulesFrame">
                  {rules.map((ele, number) => {
                    return (
                      <div style={{ borderBottom: "1px solid #c4c4c4" }}>
                        <p
                          style={{
                            color: "#172b4d",
                            fontFamily: "Poppins",
                            fontSize: "16px",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight: "normal",
                            marginLeft: "26px",
                          }}>
                          {ele}
                        </p>
                      </div>
                    );
                  })}
                </Box>
              </Stack>
            </TabPanel>

            <TabPanel value={"2"}>
              <Stack className="accordion_menu">
                {faq.map((ele, number) => {
                  return (
                    <Accordion>
                      <AccordionSummary
                        className="question_box"
                        expandIcon={<ExpandMoreIcon />}
                        aria-aria-controls="panella-content"
                        id="panel1a-header">
                        <Box>
                          <Typography className="word_style">
                            {ele.question}
                          </Typography>
                        </Box>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Box>
                          <Typography className="word_style">
                            {ele.answer}
                          </Typography>
                        </Box>
                      </AccordionDetails>
                    </Accordion>
                  );
                })}
              </Stack>
            </TabPanel>

            <TabPanel value="3">
              <Stack className="xat_container">
                <Stack>
                  <Stack mt={"90px"} ml={"60px"}>
                    <Box
                      style={{
                        color: "#000",
                        fontFamily: "ABeeZee",
                        fontSize: "24px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "normal",
                      }}>
                      Adminga Xabar Qoldirish
                    </Box>
                    <Box
                      style={{
                        color: "var(--text-color, #4F547B)",
                        fontFamily: "Sedan",
                        fontSize: "15px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "26px",
                        marginTop: "20px",
                      }}>
                      Assalomu aleykum! Adminga xabar qoldirish uchun pastdagi
                      formalarni to'ldiring
                    </Box>
                  </Stack>

                  <Stack mt={"60px"} ml={"60px"}>
                    <Stack>
                      <Box className="input_header">Ism</Box>
                      <input className="input" type="text" />
                    </Stack>

                    <Stack>
                      <Box className="input_header">Elektron Manzil</Box>
                      <input className="input" type="text" />
                    </Stack>

                    <Stack>
                      <Box className="input_header">Xabar</Box>
                      <input className="input_xat" type="text" />
                    </Stack>
                  </Stack>
                </Stack>
                <Box
                  display={"flex"}
                  flexDirection={"row"}
                  justifyContent={"flex-end"}
                  mr={"124px"}>
                  <Button className="btn" variant="contained">
                    Jo'natish
                  </Button>
                </Box>
              </Stack>
            </TabPanel>
          </Stack>
        </TabContext>
      </Container>
    </div>
  );
}
