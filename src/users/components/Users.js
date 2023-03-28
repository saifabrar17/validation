import React from "react";
import Input from "../../shared/components/Input";
import Button from "../../shared/components/Button";
import useFormHook from "../hooks/useFormHook";

const Users = () => {
  const {
    userData,
    userErrors,
    addUserData,
    handleSubmit,
    updateUserData,
    removeUserData,
  } = useFormHook();

  console.log("Data:", userData);
  console.log("Error", userErrors);
  return (
    <div>
      <div className="w-3/4 mx-auto shadow rounded p-10">
        <form onSubmit={handleSubmit}>
          {userData?.map((user, index) => (
            <div className="border rounded py-10 px-5 my-4" key={index}>
              <Input
                lableName="Name"
                type="text"
                name="name"
                value={user?.name}
                onChange={(event) => {
                  updateUserData(event.target.name, event.target.value, index);
                }}
                errorState={userErrors[index]?.name}
              />
              <Input
                lableName="Email"
                type="email"
                name="email"
                value={user?.email}
                onChange={(event) => {
                  updateUserData(event.target.name, event.target.value, index);
                }}
                errorState={userErrors[index]?.email}
              />
              <Input
                lableName="Password"
                type="password"
                name="password"
                value={user?.password}
                onChange={(event) => {
                  console.log(event.target);
                  updateUserData(event.target.name, event.target.value, index);
                }}
                errorState={userErrors[index]?.password}
              />
              <Button
                type="button"
                title="Delete"
                onClick={() => removeUserData(index)}
              />
            </div>
          ))}
          <Button
            type="button"
            className="mt-3"
            onClick={addUserData}
            title="Add Education"
          />
          <br></br>
          <div className="mt-5">
            <Button type="submit" title="Submit" onSubmit={handleSubmit} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Users;
