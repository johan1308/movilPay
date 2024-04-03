import { Routes, Route } from "react-router-dom";

export const CompaniesRouters = () => {
  return (
    <>
      <Route index element={<h1>Add</h1>} />
      <Route path="add/" element={<h1>Add</h1>} />
      <Route path="create/" element={<h1>Create</h1>} />
      <Route path="all/" element={<h1>all</h1>} />
    </>
  );
};
