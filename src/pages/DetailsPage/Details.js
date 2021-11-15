import { useParams } from "react-router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSpaceById } from "../../store/spaces/selectors";
import { fetchSpaceById } from "../../store/spaces/actions";
import "../../App.css";

export default function DetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const spaceWithStories = useSelector(selectSpaceById(id));

  const sortedStories = (allStories) => {
    return allStories.sort((a, b) => a.createdAt - b.createdAt);
  };

  useEffect(() => {
    dispatch(fetchSpaceById(id));
  }, []);
  console.log("my space with stories:", spaceWithStories);

  if (!spaceWithStories) return <h1>Details Page</h1>;
  return (
    <div
      className="detailsPage"
      style={{
        color: `${spaceWithStories.color}`,
        backgroundColor: `${spaceWithStories.backgroundColor}`,
      }}
    >
      <h2>Welcome to {spaceWithStories.title}!</h2>
      <h3>
        {sortedStories(spaceWithStories.stories).map((story) => {
          return (
            <div key={story.id}>
              <p>
                {story.name} : {story.content}
              </p>
              <img src={story.imageUrl} alt="image" />{" "}
            </div>
          );
        })}
      </h3>
    </div>
  );
}
