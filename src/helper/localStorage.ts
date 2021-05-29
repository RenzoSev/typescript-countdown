export const setStorage = (name: string, value: string) => {
  localStorage.setItem(name, value);
};

export const getStorage = (name: string) => localStorage.getItem(name);
