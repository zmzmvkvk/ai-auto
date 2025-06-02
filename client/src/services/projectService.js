// client/src/services/projectService.js
import { app } from "../firebaseConfig";

const FUNCTION_REGION = "us-central1";
const PROJECT_ID = app.options.projectId || "sj-ai-auto";

const getBaseUrl = () => {
  if (import.meta.env.DEV) {
    return `http://localhost:5001/${PROJECT_ID}/${FUNCTION_REGION}`;
  } else {
    return `https://${FUNCTION_REGION}-${PROJECT_ID}.cloudfunctions.net`;
  }
};

export const fetchProjects = async () => {
  const url = `${getBaseUrl()}/getProjectsList`;
  console.log(`Calling HTTP Function: ${url}`);
  try {
    const response = await fetch(url, {
      method: "GET",
    });

    if (!response.ok) {
      let errorBody;
      try {
        errorBody = await response.json();
      } catch (e) {
        errorBody = { message: await response.text() };
      }
      console.error(
        "Server responded with an error:",
        response.status,
        errorBody
      );
      throw new Error(
        errorBody.message ||
          errorBody.error ||
          `Server error: ${response.status}`
      );
    }

    const result = await response.json();
    console.log("Projects fetched from HTTP Function:", result.data);
    return result.data;
  } catch (error) {
    console.error("Error calling getProjectsList HTTP Function:", error);
    throw error;
  }
};

export const createProject = async (projectData) => {
  const url = `${getBaseUrl()}/createProject`;
  console.log(
    `Calling HTTP Function: createProject with data:`,
    projectData,
    `to URL: ${url}`
  );
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: projectData }),
    });

    if (!response.ok) {
      let errorBody;
      try {
        errorBody = await response.json();
      } catch (e) {
        errorBody = { message: await response.text() };
      }
      console.error(
        "Server responded with an error during project creation:",
        response.status,
        errorBody
      );
      throw new Error(
        errorBody.message ||
          errorBody.error ||
          `Server error: ${response.status}`
      );
    }

    const result = await response.json();
    console.log("Project created via HTTP Function:", result.data);
    return result.data;
  } catch (error) {
    console.error("Error calling createProject HTTP Function:", error);
    throw error;
  }
};
