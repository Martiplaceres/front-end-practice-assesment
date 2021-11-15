import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSpaceById } from "../../store/spaces/selectors";
import { selectUser, selectUserSpace } from "../../store/user/selectors";
import { fetchedSpaceById } from "../../store/spaces/actions";
import { getUserWithStoredToken } from "../../store/user/actions";
import { deleteStories } from "../../store/user/actions";
import { useState } from "react";
import Form from "../../components/Form";

export default function MySpace() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const space = useSelector(selectUserSpace);
  const [showForm, setShowForm] = useState(false);

  const showMyForm = () => {
    setShowForm(!showForm);
  };
  // const space = user.space;

  return (
    <>
      {!space ? (
        "Loading"
      ) : (
        <div
          style={{
            color: `${space.color}`,
          }}
        >
          <h1
            style={{
              color: `${space.color}`,
              backgroundColor: `${space.backgroundColor}`,
              textAlign: "center",
            }}
          >
            {space.title}
          </h1>

          <h2
            style={{
              textAlign: "center",
            }}
          >
            {space.description}
          </h2>
          <button
            onClick={showMyForm}
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Post a cool story bro!{" "}
          </button>
          {showForm && <Form />}
          {user.space.stories.map((story) => {
            return (
              <div key={story.id}>
                <p
                  style={{
                    textAlign: "center",
                    marginTop: 40,
                  }}
                >
                  -{story.name}:
                  <br />
                  {story.content}.
                </p>
                <img
                  style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: 500,
                    borderBlockStyle: "groove",
                  }}
                  src={story.imageUrl}
                  alt={story.name}
                />
                <button
                  onClick={() => dispatch(deleteStories(story.id))}
                  style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  Delete story
                </button>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
