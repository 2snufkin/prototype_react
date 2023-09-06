/*
  File: context.js
  Description: This file defines the React Context API for managing global state in the application.

  Role:
  - Centralizes the state management and distribution of data across components.
  - Eliminates the need for prop drilling by providing a global state accessible to all components.

  What to Expect:
  - Initialization of the global state and its default values.
  - Creation of the context with createContext(init_state)
  - Definition of the main context provider.
  - Definition of actions and functions to modify the state.
  - Export of the context and its provider for use in other parts of the application.

  ** IMPORTENT   You need to wrap the <App> in the index.js with the provider
        <XProvider>
        <App>
        </XProvider>
*/
