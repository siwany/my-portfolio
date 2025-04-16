"use client";

import { Column, Flex, Text } from "@/once-ui/components";
import { useHeadings } from "./useHeadings";
import styles from "./Posts.module.scss";

const BlogTOC = () => {
  const headings = useHeadings();

  const scrollToHeading = (id: string, offset: number = 96) => {
    const el = document.getElementById(id);
    if (!el) return;
  
    const y = el.getBoundingClientRect().top + window.scrollY - offset;
  
    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  if (!headings.length) return null;

  return (
    <Column
      left="0"
      style={{
        top: "50%",
        transform: "translateY(-50%)",
        position: "fixed",
        whiteSpace: "nowrap",
      }}
      paddingLeft="l"
      gap="16"
      hide="m"
    >
      {headings.map(({ id, text }) => (
        <Flex
          key={id}
          style={{ cursor: "pointer" }}
          onClick={() => scrollToHeading(id, 80)}
          vertical="center"
          gap="8"
          className={styles.hover}
        >
          <Flex height="2" minWidth="16" background="neutral-strong" />
          <Text variant="label-default-s" onBackground="neutral-strong">
            {text}
          </Text>
        </Flex>
      ))}
    </Column>
  );
};

export default BlogTOC;
