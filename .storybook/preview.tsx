import React from "react";
import localFont from "next/font/local";
import type { Preview } from "@storybook/react";

import "@/app/globals.css";
import { useEffect } from "storybook/internal/preview-api";

const Inter = localFont({
  src: "../fonts/inter/InterVariable.woff2",
  variable: "--font-inter",
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => {
      useEffect(() => {
        // Provide a css variable to children element of the body wich value is the police ref
        document.body.classList.add(Inter.variable)
        // Apply police to the body with the css variable provided by class 
        document.body.style.fontFamily = "var(--font-inter)"
      }, [])

      return <Story/>
    }
  ]
};

export default preview;
