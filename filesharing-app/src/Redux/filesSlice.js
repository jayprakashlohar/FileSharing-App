import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const filesSlice = createSlice({
  name: "files",
  initialState: {
    loading: false,
    allFiles: [],
    singleFile: {},
    fileID: null,
    error: null,
  },
  reducers: {
    setLoading(state, action) {
      return {
        ...state,
        loading: true,
      };
    },
    getAllFilesSuccess(state, action) {
      return {
        ...state,
        allFiles: action.payload,
        loading: false,
      };
    },
    getSingleFileSuccess(state, action) {
      return {
        ...state,
        singleFile: action.payload,
        loading: false,
      };
    },
    uploadToServerSuccess(state, action) {
      return {
        ...state,
        fileID: action.payload,
        loading: false,
      };
    },
    setError(state, action) {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    },
  },
});

const {
  setLoading,
  setError,
  getAllFilesSuccess,
  getSingleFileSuccess,
  uploadToServerSuccess,
} = filesSlice.actions;

// upload file
export const uploadToServer =
  (name, fileType, password, isProtected, pic) => async (dispatch) => {
    dispatch(setLoading());

    try {
      const res = await axios.post(
        "http://localhost:8080/api/upload",
        {
          name: name,
          fileType: fileType,
          password: password,
          isProtected: isProtected,
          pic: pic,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("loginToken"),
          },
        }
      );

      dispatch(uploadToServerSuccess(res.data.file._id));
    } catch (err) {
      console.log(err);
      dispatch(setError(err));
    }
  };

// get all files
export const getAllFiles = () => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await axios.get("http://localhost:8080/api/get", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("loginToken"),
      },
    });

    dispatch(getAllFilesSuccess(res.data));
  } catch (err) {
    console.log(err);
    dispatch(setError(err));
  }
};

// get a single file
export const getSingleFile = (id) => async (dispatch) => {
  console.log("singileId", id);
  dispatch(setLoading());
  try {
    const res = await axios.get(`http://localhost:8080/api/get/${id}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("loginToken"),
      },
    });

    dispatch(getSingleFileSuccess(res.data));
  } catch (err) {
    console.log(err);
    dispatch(setError(err));
  }
};

export default filesSlice.reducer;
