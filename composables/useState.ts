import { useState } from "nuxt/app";

export const useUI = () =>
  useState("ui", () => ({
    isMenuOpen: false,
  }));
