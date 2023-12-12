export default defineAppConfig({
  ui: {
    primary: "salmon",
    button: {
      base: "transition-colors duration-200",
      variant: {
        solid:
          "text-white bg-secondary hover:bg-secondary-900 active:bg-secondary",
        outline:
          "ring-secondary-950 text-secondary hover:bg-secondary-950 hover:text-white hover:ring-transparent",
        soft: "bg-secondary-50 hover:bg-secondary-100 text-secondary-600 disabled:bg-secondary-50",
        pagination:
          "bg-gradient-to-br from-dreamy-green-200 to-dreamy-green-300 text-black",
        whiteGhost:
          "text-black bg-white/90 hover:bg-white active:bg-white/80",
      },
    },
    dropdown: {
      item: { padding: "py-2 px-2" },
    },
    input: {
      variant: {
        soft: "bg-secondary-50 focus:ring-secondary-800",
      },
    },
    pagination: {
      default: { size: "lg" },
    },
  },
});
