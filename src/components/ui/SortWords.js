import React from "react";

export const SortWords = ({ words = {} }) => {
  const orderName = words.sort((a, b) => {
    const titleA = a.title.toLocaleLowerCase();
    const titleB = b.title.toLocaleLowerCase();

    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }
    return 0;
  });

  return { orderName };
};
