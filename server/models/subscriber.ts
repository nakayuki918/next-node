import mongoose, { Schema, model } from 'mongoose'
void mongoose.connect(
  "mongodb://localhost:27017/recipe_db",
  {useNewUrlParser: true}
)

const subscriberSchema = new Schema({
  name: String,
  email: String,
  zipCode: Number
})

export const Subscriber = model("Subscriber", subscriberSchema)
