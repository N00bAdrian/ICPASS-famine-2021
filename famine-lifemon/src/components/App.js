import * as React from 'react';

import '@fontsource/roboto/400.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Passport from './Passport';
import Layout from './Layout';
import Admin from './Admin';
import NewUser from './NewUser';

// Hook
function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = React.useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });
  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };
  return [storedValue, setValue];
}

export default function App() {
	let adminBlock;
	let passportBlock;

	const [id, setId] = useLocalStorage("id", null);

	if(!localStorage.getItem("id")) {
		adminBlock = <Admin />;
		passportBlock = <NewUser setId={setId} />;
	} else {
		adminBlock = <Passport id={id} />;
		passportBlock = <Passport id={id} />;
	}

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={passportBlock} />
					<Route path="admin" element={adminBlock} />

					<Route path="*" element={passportBlock} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}