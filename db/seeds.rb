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

p1 = Project.create(name: "Rivian Laguna", user_id: 1)
p2 = Project.create(name: "Huntington Hospital ", user_id: 1)
p3 = Project.create(name: "Republic Bank", user_id: 1)

p4 = Project.create(name: "Ford Manhattan", user_id: 9)
p5 = Project.create(name: "Chase Santa Monica", user_id: 9)

d1 = Division.create(number: 23, name: "HVAC")
d2 = Division.create(number: 6, name: "Drywall")
d3 = Division.create(number: 3, name: "Concrete")
d4 = Division.create(number: 5, name: "Steel")
d5 = Division.create(number: 8, name: "Openings")
d6 = Division.create(number: 9, name: "Finishes")
d7 = Division.create(number: 10, name: "Specialties")
d8 = Division.create(number: 11, name: "Equipment")
d9 = Division.create(number: 12, name: "Furnishings")
d10 = Division.create(number: 13, name: "Special Construction")
d11 = Division.create(number: 21, name: "Fire Supression")
d12 = Division.create(number: 22, name: "Plumbing")
d13 = Division.create(number: 23, name: "HVAC")
d14 = Division.create(number: 26, name: "Electrical")

m1 = Material.create(name: "Drywall", status: "Pending", project_id: p1.id,division_id: d2.id)
m2 = Material.create(name: "Screws", status: "Pending", project_id: p1.id, division_id: d2.id)
m3 = Material.create(name: "Concrete", status: "Pending", project_id: p1.id, division_id: d3.id)

m4 = Material.create(name: "Steely", status: "Pending", project_id: p2.id, division_id: d4.id)
m5 = Material.create(name: "Cables", status: "Pending", project_id: p2.id, division_id: d1.id)

m6 = Material.create(name: "Tape", status: "Pending", project_id: p3.id, division_id: d2.id)
m7 = Material.create(name: "C Channels", status: "Pending", project_id: p3.id, division_id: d4.id)

m8 = Material.create(name: "Wood Doors", status: "Pending", project_id: p4.id, division_id: d5.id)
m9 = Material.create(name: "Metal Ducts", status: "Pending", project_id: p4.id, division_id: d13.id)
m10 = Material.create(name: "Metal Doors", status: "Pending", project_id: p5.id, division_id: d5.id)
m11 = Material.create(name: "Pipe", status: "Pending", project_id: p5.id, division_id: d12.id)