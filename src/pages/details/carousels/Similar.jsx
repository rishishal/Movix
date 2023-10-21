import Carousel from "../../../components/carousel/Carousel";
import useFetch from "../../../hook/useFetch";

const Similar = ({ mediaType, id }) => {
  const { data, loading, error } = useFetch(`/${mediaType}/${id}/similar`);

  const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies";

  return (
    <>
      {data?.results?.length > 0 ? (
        <Carousel
          title='Similar'
          data={data?.results}
          loading={loading}
          endpoint={mediaType}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default Similar;
