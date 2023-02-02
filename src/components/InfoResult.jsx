import {
  InfoContainerStyle,
  InfoDetails,
  TitleContent,
  InfoContent,
  InfoContainer,
  LastDetail,
} from "../style/InfoStyle";
import { useData } from "../context/Context";
import { useRequestData } from "../hooks/useRequestData";

export const InfoResult = () => {
  const data = useData((state) => state.data);
  const setData = useData((state) => state.setData);

  useRequestData(
    "https://api.ipgeolocation.io/ipgeo?apiKey=c2a8a89e64764fcea90cd0ea5d178392&ip"
  );

  return (
    <InfoContainer>
      <InfoContainerStyle>
        <InfoDetails>
          <TitleContent>
            <h3>IP ADRESS</h3>
          </TitleContent>
          <InfoContent>{data?.ip}</InfoContent>
        </InfoDetails>
        <InfoDetails>
          <TitleContent>
            <h3>LOCATION</h3>
          </TitleContent>
          <InfoContent>{data?.state_prov}</InfoContent>
        </InfoDetails>
        <InfoDetails>
          <TitleContent>
            <h3>TIME ZONE</h3>
          </TitleContent>
          <InfoContent>{data?.time_zone?.offset}</InfoContent>
        </InfoDetails>
        <LastDetail>
          <TitleContent>
            <h3>ISP</h3>
          </TitleContent>
          <InfoContent>{data?.isp}</InfoContent>
        </LastDetail>
      </InfoContainerStyle>
    </InfoContainer>
  );
};
