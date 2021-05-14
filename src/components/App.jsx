import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function createCard(contacts) {
  return (
    <Card
      id={contacts.id}
      //you might be thinking that using key=contacts.id should be enough, but react is a system that uses the key to simply identify the various card elements; hence, the developer cannot really tap into it.
      key={contacts.id}
      name={contacts.name}
      src={contacts.imgURL}
      tel={contacts.phone}
      email={contacts.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCard)}
      {/* <Card
        name={contacts[0].name}
        src={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        src={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        src={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      /> */}
    </div>
  );
}

export default App;
