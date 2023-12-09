export default defineAppConfig({
  ui: {
    primary: "salmon",
    button: {
      base: "transition-colors duration-200",
      variant: {
        solid:
          "text-white bg-secondary hover:bg-secondary-900 active:bg-secondary",
        outline: "ring-secondary-950 text-secondary hover:bg-secondary-100",
        soft: "bg-secondary-50 hover:bg-secondary-100 text-secondary-600 disabled:bg-secondary-50",
      },
    },
    dropdown: {
      item: { padding: "py-2.5 px-4" },
    },
    input: {
      variant: {
        soft: "bg-secondary-50 focus:ring-secondary-800",
      },
    },
  },
});
