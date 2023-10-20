import { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import Carousel from "../../../components/carousel/Carousel";

import useFetch from "../../../hook/useFetch";

const Trending = () => {
  const [endPoint, setEndPonit] = useState("day");
  const { data, loading } = useFetch(`/trending/movie/${endPoint}`);
  const onTabChange = (tab) => {
    setEndPonit(tab === "Day" ? "day" : "week");
  };
  return (
    <div className='carouselSection'>
      <ContentWrapper>
        <span className='carouselTitle'>Trending</span>
        <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} />
    </div>
  );
};
export default Trending;
