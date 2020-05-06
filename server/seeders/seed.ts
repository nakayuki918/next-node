import mongoose from 'mongoose'

import { Subscriber } from "../models/subscriber";

void mongoose.connect(
  "mongodb://localhost:27017/recipe_db",
  { useNewUrlParser: true }
)

void mongoose.connection;

Subscriber.deleteMany([]).exec().then(() => {
  console.log("Subscriber data is empty!")
})

const contacts = [
  {
    name: "Shannon Lorrie",
    email: "slorrie0@economist.com",
    zipCode: 9073
  },
  {
    name: "Luisa Asals",
    email: "lasals1@google.es",
    zipCode: 86214
  },
  {
    name: "Artemus Mawdsley",
    email: "amawdsley2@answers.com",
    zipCode: 98
  }
]

const commands = []

contacts.forEach((name, email) => {
  commands.push(Subscriber.create({
    name,
    email
  }))
})

Promise.all(commands).then(r => {
  console.log(JSON.stringify(r))

}).catch(error => {
  console.log(error)
})