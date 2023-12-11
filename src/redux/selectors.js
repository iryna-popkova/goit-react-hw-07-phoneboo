export const selectContacts = state => state.contacts.contacts;
export const selectFiletrs = state => state.filters.value;

export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
