import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeInOut } from "../animations";
const InputField = ({
  placeHolder,
  icon,
  inputState,
  inputStateFunction,
  type,
  signUp,
}) => {
  return (
    <motion.div {...fadeInOut}>
      <input
        type={type}
        placeholder={placeHolder}
        className="w-full h-full bg-transparent text-lg font-semibold border-none outline-none px-3"
        value={inputState}
        onChange={(e) => inputStateFunction(e.target.value)}
      />
    </motion.div>
  );
};

export default InputField;
