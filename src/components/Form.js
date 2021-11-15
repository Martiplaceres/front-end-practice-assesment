import { useState } from "react";
import { useDispatch } from "react-redux";
import { createNewStory } from "../store/stories/actions";

export default function Form() {
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(createNewStory(name, content, imgUrl));
  }

  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  return (
    <div>
      <h3>Hello from my form component!</h3>
      <div
        style={{
          alignContent: "center",
        }}
      >
        <form onSubmit={handleSubmit}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Story Name"
          ></input>
          <br />

          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            type="text"
            placeholder="Content"
          ></input>
          <br />

          <input
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
            type="text"
            placeholder="Your image"
          ></input>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
