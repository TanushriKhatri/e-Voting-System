// services/epicProvider.js
const epicProvider = {
  lookupEPIC: async (epic) => {
    if (epic === "ABCDE12345") {
      return { epic, name: "Tanushri Khatri", pollingStation: "Booth 101, Delhi" };
    }
    return null; // EPIC not found
  },
};

export default epicProvider;
  