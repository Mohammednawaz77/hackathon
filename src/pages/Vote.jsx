import React, { useState } from "react";
import { voteItems } from "../data/dummyData";

function Vote() {
  const [votes, setVotes] = useState(voteItems);

  const handleVote = (id, option) => {
    const updatedVotes = votes.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          [option]: item[option] + 1,
        };
      }
      return item;
    });
    setVotes(updatedVotes);
  };

  return (
    <div>
      <h2>Community Voting</h2>
      {votes.map((item) => (
        <div key={item.id} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
          <p>{item.question}</p>
          <button onClick={() => handleVote(item.id, 'yes')}>👍 Yes ({item.yes})</button>
          <button onClick={() => handleVote(item.id, 'no')} style={{ marginLeft: "10px" }}>👎 No ({item.no})</button>
        </div>
      ))}
    </div>
  );
}

export default Vote;
