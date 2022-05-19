export async function logincheck({ username, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "selim" && password === "password") {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
}
