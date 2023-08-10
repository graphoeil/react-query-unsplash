// Imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './darkTheme.css';

// Context
import { AppProvider } from "./context.jsx";

// React-Query
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

// ReactDOM
ReactDOM.createRoot(document.getElementById('root')).render(
	<AppProvider>
		<QueryClientProvider client={ queryClient }>
			<App/>
			<ReactQueryDevtools initialIsOpen={ true }/>
		</QueryClientProvider>
	</AppProvider>
);