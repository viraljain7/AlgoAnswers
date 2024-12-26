const env = {
  appwrite: {
    endpoint: String(process.env.NEXT_PUBLIC_APPWRITE_HOST_URL),
    projectID: String(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID),
    APIKey: String(process.env.APPWRITE_API_KEY),
  },
};

export default env;
