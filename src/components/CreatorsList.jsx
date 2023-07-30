import PropTypes from "prop-types";
import { listOfCreators } from "../lists/Creators";

export const CreatorsList = () => {
  return (
    <section className="text-gray-400 bg-gradient-to-r from-gray-900 via-purple-900 to-violet-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            Our Favorite Creators
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
          </p>
        </div>
        <div className="flex flex-wrap -m-2">
          {listOfCreators.map((creator, index) => {
            return (
              <div key={index} className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                  {" "}
                  <img
                    alt="team"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src={creator.links.imageUrl}
                  />{" "}
                  <div className="flex-grow">
                    {" "}
                    <a
                      className="text-white title-font font-medium cursor-pointer "
                      href="https://www.linkedin.com/in/kunal-kushwaha/?originalSubdomain=uk"
                    >
                      {" "}
                      {creator.name}
                    </a>{" "}
                    <p className="text-gray-600">Content Creator</p>{" "}
                  </div>{" "}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

CreatorsList.propTypes = {
  listOfCreators: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      links: PropTypes.shape({
        imageUrl: PropTypes.string.isRequired,
        website: PropTypes.string.isRequired,
        youtube: PropTypes.string.isRequired,
        twitter: PropTypes.string.isRequired,
        instagram: PropTypes.string.isRequired,
      }).isRequired,
    })
  ),
};
