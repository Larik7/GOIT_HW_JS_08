import throttle from "lodash.throttle";

const LOCALSTORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('form');

const save = (LOCALSTORAGE_KEY, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(LOCALSTORAGE_KEY, serializedState);
  } catch (error) {
    console.error("Set state error: ", error.message);
  }
};

const load = LOCALSTORAGE_KEY => {
  try {
    const serializedState = localStorage.getItem(LOCALSTORAGE_KEY);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error("Get state error: ", error.message);
  }
};

export default {
  save,
  load,
};