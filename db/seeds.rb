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

p1 = Project.create(name: "Logitech DTLA", user_id: 1, address: "1100 S Broadway PH, Los Angeles, CA 90015, United States", owner: "Logitech", completion_date: "2023-09-15")
p2 = Project.create(name: "HM Hospital Pasadena", user_id: 1, address: "270 S Lake Ave, Pasadena, CA 91101, United States", owner: "HMH", completion_date: "2023-12-15")
p3 = Project.create(name: "Republic Bank Culver", user_id: 1, address: "10808 Culver Blvd, Culver City, CA 90230, United States", owner: "Republic Bank", completion_date: "2023-10-21")

p4 = Project.create(name: "Ford Manhattan", user_id: 9, address: "1200 N Sepulveda Blvd, Manhattan Beach, CA 90266, United States", owner: "Ford", completion_date: "2023-11-05")
p5 = Project.create(name: "Chase Santa Monica", user_id: 9, address: "2525 Michigan Ave, Santa Monica, CA 90404, United States", owner: "Chase Bank", completion_date: "2023-07-13")

d1 = Division.create(number: 3, name: "Concrete")
d2 = Division.create(number: 5, name: "Steel")
d3 = Division.create(number: 6, name: "Drywall")
d4 = Division.create(number: 7, name: "Thermal Protection")
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

m1 = Material.create(name: "Drywall", status: "Pending", project_id: p1.id,division_id: d3.id)
m2 = Material.create(name: "Screws", status: "Pending", project_id: p1.id, division_id: d3.id)
m3 = Material.create(name: "Concrete", status: "Pending", project_id: p1.id, division_id: d1.id)
m8 = Material.create(name: "Wood Doors", status: "Pending", project_id: p1.id, division_id: d5.id)
m9 = Material.create(name: "Metal Ducts", status: "Pending", project_id: p1.id, division_id: d13.id)
m4 = Material.create(name: "Steel", status: "Complete", project_id: p1.id, division_id: d2.id)
m5 = Material.create(name: "Cables", status: "Complete", project_id: p1.id, division_id: d1.id)
m11 = Material.create(name: "Pipe", status: "Pending", project_id: p1.id, division_id: d12.id)

m4 = Material.create(name: "Steel", status: "Pending", project_id: p2.id, division_id: d2.id)
m5 = Material.create(name: "Cables", status: "Pending", project_id: p2.id, division_id: d1.id)

m6 = Material.create(name: "Tape", status: "Pending", project_id: p3.id, division_id: d2.id)
m7 = Material.create(name: "C Channels", status: "Pending", project_id: p3.id, division_id: d2.id)

m8 = Material.create(name: "Wood Doors", status: "Pending", project_id: p4.id, division_id: d5.id)
m9 = Material.create(name: "Metal Ducts", status: "Pending", project_id: p4.id, division_id: d13.id)
m10 = Material.create(name: "Metal Doors", status: "Pending", project_id: p5.id, division_id: d5.id)
m11 = Material.create(name: "Pipe", status: "Pending", project_id: p5.id, division_id: d12.id)