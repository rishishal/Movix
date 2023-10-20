import "./Details.scss";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import useFetch from "../../hook/useFetch";
import { useParams } from "react-router-dom";
import Cast from "./cast/Cast";
import VideosSection from "./videosSection/VideosSection";
import Recommendation from "./carousels/Recommendation";
import Similar from "./carousels/Similar";

const Details = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );

  return (
    <div>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} loading={creditsLoading} />
      <VideosSection data={data} loading={loading} />
      <Similar mediaType={mediaType} id={id} />
      <Recommendation mediaType={mediaType} id={id} />
    </div>
  );
};
export default Details;