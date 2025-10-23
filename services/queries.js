import { useQuery } from "@tanstack/react-query";
import api from "./config";
import QueryString from "qs";

const fetchProfile = async (accessToken) => {
  const response = await api.get("/user/profile", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};

const useProfile = (accessToken) => {
  return useQuery({
    queryKey: ["profile", accessToken],
    queryFn: () => fetchProfile(accessToken),
    enabled: !!accessToken,
  });
};

const fetchTours = async ({ originId, destinationId, startDate }) => {
  try {
    const response = await api.get("/tour", {
      params: {
        originId,
        destinationId,
        startDate,
      },
    });
    setTours(response.data);
  } catch (error) {
    console.error("Error fetching tour data:", error);
  }
};

const editProfile = async (
  mobile,
  email,
  firstName,
  lastName,
  gender,
  birthDate,
  nationalCode,
  payment
) => {
  try {
    const response = await api.put("user/profile", {
      mobile,
      email,
      firstName,
      lastName,
      gender,
      birthDate,
      nationalCode,
      payment,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "An error occurred while updating the profile.",
    };
  }
};

const useGetTours = (query) => {
  const url = "/tour?" + QueryString.stringify(query);

  const queryFn = () => api.get(url);
  const queryKey = ["tour", query];

  return useQuery({ queryKey, queryFn, enabled: false });
};

export { useProfile, fetchProfile, fetchTours, editProfile, useGetTours };
