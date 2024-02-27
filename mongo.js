const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://javipilgrim:${password}@cluster0.ndstpvu.mongodb.net/testNoteApp?retryWrites=true&w=majority`

mongoose.set('strictQuery',false)
mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)
/*
const newNote = new Note({
  content: 'Segunda nota de prueba Test',
  important: false,
})



newNote.save().then(result => {
  console.log('note saved!')
  mongoose.connection.close()
})

*/




Note.find({important: true}).then(result => {
  result.forEach(note => {
    console.log(note)
  })
  mongoose.connection.close()
})