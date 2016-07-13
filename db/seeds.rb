# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Quote.create([
  { text: 'Plan to throw one (implementation) away; you will, anyhow.', author: 'Fred Brookes'},
  { text: 'Program testing can be used to show the presence of bugs, but never to show their absence! ', author: 'Edsger Dijkstra'},
  { text: 'Optimism is an occupational hazard of programming: feedback is the treament.', author: 'Kent Beck'},
  { text: 'When to use iterative development? You should use iterative development only on projects that you want to succeed.', author: 'Martin Fowler'},
  { text: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.
', author: 'Brian W. Kernighan'}
])