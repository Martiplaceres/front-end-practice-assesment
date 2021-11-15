import { fetchAllSpaces } from "../../store/spaces/actions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectSpaces } from "../../store/spaces/selectors";
import { Link } from "react-router-dom";
import "../../App.css";

export default function HomePage() {
  const dispatch = useDispatch();
  const spaces = useSelector(selectSpaces);
  console.log("spaces:", spaces);

  useEffect(() => {
    dispatch(fetchAllSpaces());
  }, [dispatch]);

  return (
    <div
      className="homePage"
      style={{
        textAlign: "center",
      }}
    >
      {spaces.map((space) => {
        return (
          <div key={space.id}>
            <h3
              style={{
                color: `${space.color}`,
                backgroundColor: `${space.backgroundColor}`,
              }}
            >
              {" "}
              {space.title}:
            </h3>
            <p>{space.description}</p>
            <Link to={`spaces/${space.id}`}>Visit Space</Link>
          </div>
        );
      })}
    </div>
  );
}
