# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Project.destroy_all
Division.destroy_all
Material.destroy_all

p1 = Project.create(name: "Rivian", user_id: 1)
p2 = Project.create(name: "Huntington Hospital ", user_id: 1)
p3 = Project.create(name: "Republic Bank", user_id: 1)

d1 = Division.create(number: 23, name: "Electrical")
d2 = Division.create(number: 6, name: "Drywall")
d3 = Division.create(number: 3, name: "Concrete")
d4 = Division.create(number: 5, name: "Steel")

m1 = Material.create(name: "Drywall", project_id: p1.id,division_id: d2.id)
m2 = Material.create(name: "Screws", project_id: p1.id, division_id: d2.id)
m3 = Material.create(name: "Concrete", project_id: p1.id, division_id: d3.id)

m4 = Material.create(name: "Steely", project_id: p2.id, division_id: d4.id)
m5 = Material.create(name: "Cables", project_id: p2.id, division_id: d1.id)

m6 = Material.create(name: "Tape", project_id: p3.id, division_id: d2.id)
m7 = Material.create(name: "C Channels", project_id: p3.id, division_id: d4.id)