"use client";

import React from "react";
import { Heading, Flex, IconButton, useToast } from "@/once-ui/components";

import styles from "@/components/HeadingLink.module.scss";

interface HeadingLinkProps {
  id: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const scrollToHeading = (id: string, offset: number = 96) => {
  const el = document.getElementById(id);
  if (!el) return;

  const y = el.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
};

export const HeadingLink: React.FC<HeadingLinkProps> = ({ id, level, children, style }) => {

  const variantMap = {
    1: "display-strong-xs",
    2: "heading-strong-xl",
    3: "heading-strong-l",
    4: "heading-strong-m",
    5: "heading-strong-s",
    6: "heading-strong-xs",
  } as const;

  const variant = variantMap[level];
  const asTag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Flex
      style={style}
      onClick={() => scrollToHeading(id, 80)}
      className={styles.control}
      vertical="center"
      gap="4"
    >
      <Heading className={styles.text} id={id} variant={variant} as={asTag}>
        {children}
      </Heading>
      <IconButton
        className={styles.visibility}
        size="s"
        icon="hashtag"
        variant="ghost"
        tooltipPosition="right"
      />
    </Flex>
  );
};
