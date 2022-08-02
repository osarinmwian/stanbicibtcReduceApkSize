import { createText } from "@shopify/restyle";
import { ComponentProps, FC } from "react";

import { Theme, useTheme } from "@/shared/theme";

/**
 * Custom `Text` component with type checked layout stylings and props including typography.
 * All styles can be passed as props rather than using the StyleSheet API, and we can select a variant with predefined styles.
 *
 * Includes all the props that are available in the native `Text` component.
 * Fully themeable.
 * @see https://github.com/Shopify/restyle#text
 */
const RestyleText = createText<Theme>();

export type RestyleTextProps = ComponentProps<typeof RestyleText>;

export type TextProps = RestyleTextProps & {
  fontVariant?: keyof Theme["fontSizes"];
};

const Text: FC<TextProps> = (props) => {
  const { children, fontVariant = "p", variant = "body", ...rest } = props;

  const theme = useTheme();

  const fontSize = theme.fontSizes[fontVariant];

  return (
    // Restyle variant overrides the fontSize prop
    // eslint-disable-next-line react/jsx-sort-props
    <RestyleText fontSize={fontSize} variant={variant} {...rest}>
      {children}
    </RestyleText>
  );
};
export { Text };
