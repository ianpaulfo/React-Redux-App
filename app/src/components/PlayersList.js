import React from "react";
import { useSelector } from "react-redux";
import { Card, CardBody } from "reactstrap";

const PlayersList = props => {
  const name = useSelector(state => state.players);
  const error = useSelector(state => state.error);

  return (
    <>
      {error ? (
        <div className="error">{error}</div>
      ) : (
        name.map(players => (
          <Card>
            <CardBody>
              <div>
                {players.first_name}
                {" "}
                {players.last_name}
              </div>
              <div>
                {players.team.full_name}
                {"-"}
                {players.team.conference}
              </div>
              <div>
                {players.position}
              </div>
            </CardBody>
          </Card>
        ))
      )}
    </>
  );
};

export default PlayersList;