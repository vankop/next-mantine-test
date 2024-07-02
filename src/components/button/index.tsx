"use client";

import {
    Button,
    ButtonVariant,
    ButtonCssVariables,
    MantineSize,
} from "@mantine/core";

import classNames from "./index.module.css";

export default Button.extend({
    classNames,
    defaultProps: {
        size: "md",
        variant: "default",
    },
    vars: (theme, { variant, size }) => {
        const variants: Record<
            ButtonVariant | string,
            Partial<Record<ButtonCssVariables["root"], string>>
            > = {
            default: {
                "--button-bg": "var(--basic-background-strong)",
                "--button-hover": "var(--basic-background-strong)",
                "--button-color": "var(--basic-text-light)",
                "--button-hover-color": "var(--basic-text-light)",
            },
            filled: {
                "--button-bg": "var(--feedback-background-good)",
                "--button-hover": "var(--feedback-background-good)",
            },
            outline: {
                "--button-bg": "var(--opacity-background-light-64)",
                "--button-hover": "var(--opacity-background-light-64)",
                "--button-bd": "1px solid var(--basic-border-default)",
            },
            light: {},
            subtle: {
                "--button-color": "var(--feedback-text-good)",
                "--button-hover-color": "var(--feedback-text-good)",
            },
            white: {
                "--button-color": "var(--basic-text-weak)",
                "--button-hover-color": "var(--basic-text-weak)",
            },
        };

        const sizes: Partial<
            Record<
                MantineSize | string,
                Partial<Record<ButtonCssVariables["root"] | string, string>>
                >
            > = {
            xs: {
                "--button-fz": "12px",
                "--button-radius": "8px",
                "--button-height-xs": "24px",
                "--button-padding-x-xs": "8px",
            },
            md: {
                "--button-fz": "14px",
                "--button-radius": "12px",
                "--button-height-md": "42px ",
                "--button-padding-x-md": "16px",
            },
        };

        return {
            root: {
                "--button-bg": "transparent",
                "--button-hover": "transparent",
                "--button-color": "var(--basic-text-strong)",
                "--button-hover-color": "var(--basic-text-strong)",
                "--button-bd": "none",
                ...(variant && variants[variant]),
                ...(size && sizes[size]),
            },
        };
    },
});
