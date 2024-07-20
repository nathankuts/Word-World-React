export const getComic = (comicId) => {
    // This is a mock API function. Replace with actual API call.
    return new Promise((resolve) => {
        setTimeout(() => {
            if (comicId === 1) {
                resolve({
                    status: 200,
                    data: {
                        title: 'Sample Comic Title',
                        imageSrc: 'path/to/comic/image.jpg'
                    }
                });
            } else {
                resolve({ status: 404 });
            }
        }, 1000);
    });
};
