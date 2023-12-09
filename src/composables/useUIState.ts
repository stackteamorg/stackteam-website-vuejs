import { useState } from "nuxt/app";

const useUIState = () =>
  useState("ui", () => ({
    isMenuOpen: false,
  }));

export default useUIState;
