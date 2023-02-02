import React, { useState } from "react";
import {
  InputContainer,
  InputStyle,
  ButtonContainer,
  HelperText,
} from "../style/InputStyle";
import iconArrow from "../assets/images/icon-arrow.svg";
import axios from "axios";
import { useData } from "../context/Context";

export const InputSearchAdress = () => {
  const [inputSearch, setInputSearch] = useState("");
  const [error, setError] = useState("");
  const setData = useData((state) => state.setData);

  const handleOnchange = (e) => {
    setInputSearch(e.target.value);
  };

  const handleSearch = () => {
    const regex = /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}/g;

    if (!regex.test(inputSearch)) {
      return setError("invalid IP Address");
    }
    setError("");
    axios
      .get(
        `https://api.ipgeolocation.io/ipgeo?apiKey=c2a8a89e64764fcea90cd0ea5d178392&ip=${inputSearch}`
      )
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  return (
    <React.Fragment>
      <InputContainer>
        <InputStyle
          type="text"
          placeholder="Search for any IP adress or domain"
          value={inputSearch}
          onChange={handleOnchange}
          required
        />
        <ButtonContainer type="submit" onClick={handleSearch}>
          <img src={iconArrow} alt="arrow icon" />
        </ButtonContainer>
      </InputContainer>
      {!!inputSearch && <HelperText>{error}</HelperText>}
    </React.Fragment>
  );
};
