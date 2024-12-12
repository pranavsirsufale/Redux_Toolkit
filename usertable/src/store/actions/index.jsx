import { createAction } from "@reduxjs/toolkit";
const clearUser = createAction('clearUser');
const clearAdmin = createAction('clearAdmin');
export { clearAdmin, clearUser}