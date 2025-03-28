import React, { useEffect, useContext } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { motion, stagger, useAnimate, useInView } from "framer-motion";


export const TypewriterEffect = ({ words, className, cursorClassName }) => {

  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }));

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        { opacity: 1, width: "fit-content" },
        { duration: 0.3, delay: stagger(0.1), ease: "easeInOut" }
      );
    }
  }, [isInView]);

  return (
    <Typography
      component="div"
      sx={{
        textAlign: "center",
        fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem", lg: "3rem" },
        fontWeight: "bold",
        
      }}
    >
      <motion.div ref={scope} style={{ display: "inline" }}>
        {wordsArray.map((word, idx) => (
          <Box key={`word-${idx}`} component="span" sx={{ display: "inline-block" }}>
            {word.text.map((char, index) => (
              <motion.span
                key={`char-${index}`}
                style={{ opacity: 0, display: "none" }}
              >
                {char}
              </motion.span>
            ))}
          </Box>
        ))}
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        sx={{
          display: "inline-block",
          borderRadius: "2px",
          width: "4px",
          height: { xs: "1rem", md: "1.5rem", lg: "2rem" },
          backgroundColor: "#007bff",
        }}
      />
    </Typography>
  );
};

export const TypeWriterEffect = ({ words }) => {

  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }));

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "4px", my: 3 }}>
      <motion.div
        style={{ overflow: "hidden", paddingBottom: "8px" }}
        initial={{ width: "0%" }}
        whileInView={{ width: "fit-content" }}
        transition={{ duration: 2, ease: "linear", delay: 1 }}
      >
        <Typography
          sx={{
            fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem", lg: "3rem" },
            fontWeight: "bold",
            whiteSpace: "nowrap",
          }}
        >
          {wordsArray.map((word, idx) => (
            <Box key={`word-${idx}`} component="span">
              {word.text.map((char, index) => (
                <span key={`char-${index}`}>{char}</span>
              ))}
            </Box>
          ))}
        </Typography>
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        sx={{
          display: "inline-block",
          borderRadius: "2px",
          width: "4px",
          height: { xs: "1rem", md: "1.5rem", lg: "2rem" },
          backgroundColor: "#007bff",
        }}
      />
    </Box>
  );
};
