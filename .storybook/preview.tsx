import React from "react";
import localFont from "next/font/local";
import type { Preview } from "@storybook/react";

import "@/app/globals.css";
import { useEffect } from "storybook/internal/preview-api";

const GeistSans = localFont({
  src: "../fonts/geist-sans/Geist-Variable.woff2",
  variable: "--font-geist-sans",
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
        document.body.classList.add(
          GeistSans.variable
        )
        document.body.style.fontFamily = "var(--font-geist-sans)"
      }, [])

      return <Story/>
    }
  ]
};

export default preview;
