import React from "react";

function AIConferences() {
  // Conference data
  const conferences = [
    {
      date: "Apr 8-12, 2024",
      name: "Symposium On Applied Computing (SAC)",
      location: "Avila, Spain",
    },
    {
      date: "Apr 11-12, 2024",
      name: "AI and Neural Networks (ICAINN)",
      location: "London, UK",
    },
    {
      date: "Apr 11-12, 2024",
      name: "AI and Robotics (ICAIR)",
      location: "Cape Town, South Africa",
    },
    {
      date: "Apr 11-12, 2024",
      name: "AI for Healthcare Applications (ICAIHA)",
      location: "Chengdu, China",
    },
  ];

  return (
    <div className="flex flex-col justify-center w-full m-2 mt-24">
      <div className="text-center mt-24">
        <h1 className="text-5xl font-bold">Upcoming AI Conferences & Expos</h1>
        <p className="text-2xl m-4 p-8">
          Explore a curated selection of international AI conferences, including
          online and virtual options, designed to help you stay at the forefront
          of AI developments. Engage with like-minded professionals, spark new
          collaborations, and draw inspiration from the most recent
          breakthroughs. Whether you're delving into a focused topic or
          exploring wide-ranging trends, our handpicked guide serves as your
          must-have pass to identifying the ideal conference that enriches your
          professional path.
        </p>
      </div>
      <div className="list m-4 p-8">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="text-left px-4 py-2 text-xl">Date</th>
              <th className="text-left px-4 py-2 text-xl">Name of Conference</th>
              <th className="text-right px-4 py-2 text-xl">Location</th>
            </tr>
          </thead>
          <tbody>
            {conferences.map((conference, index) => (
              <tr key={index}>
                <td className="text-left px-4 py-2 text-xl">{conference.date}</td>
                <td className="text-left  text-blue-300 px-4 py-2 text-xl">{conference.name}</td>
                <td className="text-right px-4 py-2 text-xl">{conference.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AIConferences;
