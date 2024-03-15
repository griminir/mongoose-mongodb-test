import mongoose from 'mongoose';

//define Schema aka basic blueprint
const movieSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  ratings: { type: Number, required: true, min: 1, max: 10 },
  money: {
    type: mongoose.Decimal128, // lets us use decimals
    required: true,
    validate: (v) => v >= 10, //
  },
  genre: { type: Array },
  isActive: { type: Boolean },
  comments: [
    { value: { type: String }, published: { type: Date, default: Date.now } },
  ],
});

// creating model
const movieModel = mongoose.model('Movie', movieSchema);

//database -> collection -> document -> fields: how mongobd works

const createDoc = async () => {
  try {
    // creating new document
    const m1 = new movieModel({
      name: 'Extraction 2',
      ratings: 4,
      money: 60000,
      genre: ['action', 'adventure'],
      isActive: true,
      comments: [{ value: 'That was an amazing movie.' }],
    });
    const result = await m1.save();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

const insertManyDoc = async () => {
  try {
    // creating new document
    const m1 = new movieModel({
      name: 'John wick chapter:4',
      ratings: 5,
      money: 60000,
      genre: ['action'],
      isActive: true,
      comments: [{ value: 'That was an amazing movie.' }],
    });
    const m2 = new movieModel({
      name: 'Extraction 76',
      ratings: 1,
      money: 60000,
      genre: ['action'],
      isActive: true,
      comments: [{ value: 'That was an amazing movie.' }],
    });
    const m3 = new movieModel({
      name: 'Extraction 212312',
      ratings: 10,
      money: 60000,
      genre: ['action', 'adventure'],
      isActive: true,
      comments: [{ value: 'That was an amazing movie.' }],
    });
    const m4 = new movieModel({
      name: 'Extraction 21',
      ratings: 3,
      money: 60000,
      genre: ['action', 'adventure'],
      isActive: true,
      comments: [{ value: 'That was an amazing movie.' }],
    });
    const m5 = new movieModel({
      name: 'Extraction 212312314124124124123',
      ratings: 7,
      money: 60000,
      genre: ['action', 'adventure'],
      isActive: true,
      comments: [{ value: 'That was an amazing movie.' }],
    });
    const m6 = new movieModel({
      name: 'Extraction 1',
      ratings: 10,
      money: 60000,
      genre: ['action', 'adventure'],
      isActive: true,
      comments: [{ value: 'That was an amazing movie.' }],
    });
    const result = await movieModel.insertMany([m1, m2, m3, m4, m5, m6]);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

//retive all data
const allDoc = async () => {
  try {
    const result = await movieModel.find(); // all data or findById(ID) gives us just a single document
    console.log(`found these: ${result}`);
    // result.forEach((movie) => {consle.log(movie.name)}) this will gives us all the movie names
  } catch (error) {
    console.log(error);
  }
};

//updating a document
const updateById = async (id) => {
  try {
    //updateOne(filter, whatToChange?)
    //updateMany(filter, whatToChange? ) remove the id param
    const result = await movieModel.updateOne(
      { _id: id },
      { name: 'The great Gatsby' }
    );
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

const deleteById = async (id) => {
  try {
    //findByIdAndDelete(id)
    //deleteOne(filter)
    //deleteMany(filter)
    const result = await movieModel.findByIdAndDelete(id);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export { createDoc };
export { insertManyDoc };
export { allDoc };
export { updateById };
export { deleteById };
export default movieModel;
