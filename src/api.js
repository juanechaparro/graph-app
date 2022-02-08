export const getData = () => {
    const data = [250, 320, 400, 200, 120, 60, 420, 95, 1200];
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 200);
    });
  };
  