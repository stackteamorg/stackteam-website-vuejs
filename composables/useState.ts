import { useState } from "nuxt/app";

export const useUIState = () =>
  useState("ui", () => ({
    isMenuOpen: false,
  }));
