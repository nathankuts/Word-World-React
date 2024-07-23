export const postPublishedChapter = async (title, content) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ status: 200, chapter: { id: Math.random().toString(36).substr(2, 9) } });
    }, 1000);
  });
};

export const postComic = async (title, comicImageSrc) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ status: 200, comic: { id: Math.random().toString(36).substr(2, 9) } });
    }, 1000);
  });
};
