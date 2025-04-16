import { useEffect, useState } from "react";

export function useHeadings(): { id: string; text: string }[] {
  const [headings, setHeadings] = useState<{ id: string; text: string }[]>([]);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("h2"));

    const data = elements.map((el) => ({
      id: el.id,
      text: el.textContent || "",
    }));

    setHeadings(data);
  }, []);

  return headings;
}
