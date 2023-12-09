import type { PrimeVuePTOptions } from "primevue/config";

const sizes = {
  sm: {
    root: "px-3 py-1.5",
    label: "text-sm font-semibold",
  },
  md: {
    root: "px-4 py-2",
  },
  lg: {
    root: "px-5 py-3",
  },
};

const variants = {
  primary: {
    root: {
      default:
        "border border-solid rounded-md text-white transition-colors duration-200",
      idle: "bg-secondary hover:bg-primary border-secondary hover:border-primary",
      loading: "bg-gray-400 border-gray-400 text-white animate-pulse",
    },
  },
  outlined: {
    root: {
      default: "rounded-md transition-colors duration-200 border border-solid",
      idle: "bg-transparent border-secondary hover:bg-secondary text-typo-dark hover:text-white",
      loading: "border-gray-300 text-gray-500 animate-pulse",
    },
  },
};

const button: PrimeVuePTOptions["button"] = {
  loadingIcon: "!hidden",
  root: ({ props }) => [
    {
      [sizes.sm.root]: props.size === "small",
      [sizes.md.root]: props.size !== "small" && props.size !== "large",
      [sizes.lg.root]: props.size === "large",
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
      [sizes.sm.label]: props.size !== "small" && props.size !== "large",
    },
  ],
};

export default button;
