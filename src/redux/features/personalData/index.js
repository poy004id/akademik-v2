import { createSlice } from "@reduxjs/toolkit";

export const personalDataSlice = createSlice({
  name: "personalData",
  initialState: {
    personNm: "",
    personExtId: "",
    gender: "",
    dob: "",
    phoneNumber: "",
    address: "",
    passPhoto: "",
    vaccineCertificate: "",
  },
  reducers: {
    setPersonNm: (state, action) => {
      state.personNm = action.payload;
    },
    setPersonExtId: (state, action) => {
      state.personExtId = action.payload;
    },
    setGender: (state, action) => {
      state.gender = action.payload;
    },
    setDob: (state, action) => {
      state.dob = action.payload;
    },
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setPassPhoto: (state, action) => {
      state.passPhoto = action.payload;
    },
    setVaccineCertificate: (state, action) => {
      state.vaccineCertificate = action.payload;
    },
  },
});

export const {
  setPersonNm,
  setPersonExtId,
  setGender,
  setDob,
  setPhoneNumber,
  setAddress,
  setPassPhoto,
  setVaccineCertificate,
} = personalDataSlice.actions;

export default personalDataSlice.reducer;
