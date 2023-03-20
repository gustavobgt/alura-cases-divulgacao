import NextLink from "next/link";

export default function Link({ children, href, ...rest }) {
  return (
    <NextLink legacyBehavior href={href} passHref>
      <a {...rest}>{children}</a>
    </NextLink>
  );
}
