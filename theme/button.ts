import type { PrimeVuePTOptions } from "primevue/config";

const sizes = {
  md: {
    root: "px-3 py-1.5",
    label: "text-sm font-semibold",
  },
};

const variants = {
  primary: {
    root: {
      default:
        "border border-solid rounded-md text-gray-100 transition-colors duration-200",
      idle: "bg-[#111013] hover:bg-orange-600 border-[#111013] hover:border-orange-600",
      loading: "bg-gray-400 border-gray-400 text-white animate-pulse",
    },
  },
  outlined: {
    root: {
      default:
        "rounded-md transition-colors duration-200 border border-solid",
      idle: "bg-transparent border-gray-400 hover:bg-[#111013] hover:border-[#111013] text-gray-600 hover:text-gray-100",
      loading: "border-gray-300 text-gray-500 animate-pulse",
    },
  },
};

const button: PrimeVuePTOptions["button"] = {
  loadingIcon: "!hidden",
  root: ({ props }) => [
    {
      [sizes.md.root]: props.size !== "small" && props.size !== "large",
      [variants.primary.root.default]: props.severity === "primary",
      [variants.primary.root.idle]:
        props.severity === "primary" && !props.loading,
      [variants.primary.root.loading]:
        props.severity === "primary" && props.loading,
      [variants.outlined.root.default]: props.severity === "outlined",
      [variants.outlined.root.idle]:
        props.severity === "outlined" && !props.loading,
      [variants.outlined.root.loading]:
        props.severity === "outlined" && props.loading,
    },
  ],
  label: ({ props }) => [
    {
      [sizes.md.label]: props.size !== "small" && props.size !== "large",
    },
  ],
};

export default button;
