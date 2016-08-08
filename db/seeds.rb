# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

### Human Genetics and family...
human_genetics = Program.create!(name: 'Human Genetics')

human_genetics.collections.create!( name: 'Disease')

knock_out = human_genetics.collections.create!( name: 'Knock Out')

knock_out.biomaterials.create!([
  { supplier: "LRM Cambridge", supplier_identifier: "C04SB6", sanger_tube_barcode: "RCPT_6785", uuid: "e1489c04-58c2-11e6-8b77-86f30ca893d3", biomaterial_type: "PBMC", metadata: "" },
  { supplier: "LRM Cambridge", supplier_identifier: "C04SFZ", sanger_tube_barcode: "RCPT_6786", uuid: "e1489e70-58c2-11e6-8b77-86f30ca893d3", biomaterial_type: "PBMC", metadata: "" },
  { supplier: "LRM Cambridge", supplier_identifier: "C04SC4", sanger_tube_barcode: "RCPT_6787", uuid: "e1489f74-58c2-11e6-8b77-86f30ca893d3", biomaterial_type: "PBMC", metadata: "" },
  { supplier: "LRM Cambridge", supplier_identifier: "C04SA8", sanger_tube_barcode: "RCPT_10754", uuid: "e148a0d2-58c2-11e6-8b77-86f30ca893d3", biomaterial_type: "PBMC", metadata: "" },
  { supplier: "NHS England", supplier_identifier: "NHS34526", sanger_tube_barcode: "RCPT_11056", uuid: "e148a1cc-58c2-11e6-8b77-86f30ca893d3", biomaterial_type: "PBMC", metadata: "" }
])

project = human_genetics.projects.create!(name: 'Causes, mechanisms & reversability')

project.aims.create!([
  { name: 'Aim 1: Causes & mechanism of rare' },
  { name: 'Aim 2: Causes & mechanisms of rare metabolic...' },
  { name: 'Aim 3: Assessing reversability' }
])

aim = project.aims.create!( name: 'Phentypic variability in rare disorders' )

proposal = aim.proposals.create!( name: 'Somatic variation propsal' )

### Cancer, Aging & Somatic Mutations and family...
cancer = Program.create!(name: 'Cancer, Aging & Somatic Mutations')

cancer.collections.create!([
  { name: 'Pancreatic' },
  { name: 'Colon' },
  { name: 'Oesophogeal' }
])

project = cancer.projects.create!( name: 'The Cancer Genome Project' )

project.aims.create!([
  { name: 'Pan-Cancer QPQ' },
  { name: 'COSMIC' }
])

aim = project.aims.create!( name: 'Systemic derevation' )

proposal = aim.proposals.create!( name: 'Organoids proposal' )

### The rest of the programs
Program.create([
  { name: "Pathogens" },
  { name: "Malaria" },
  { name: "Cellular Genetics" },
  { name: "Computational Genomics" }
])

## Sets
BiomaterialSet.create!([
  { name: "Normals", biomaterials: Biomaterial.create!([{ supplier: "CRUK", supplier_identifier: "ID44568181", sanger_tube_barcode: "RCPT_6321", uuid: "e148a6e0-58c2-11e6-8b77-86f30ca893d3", biomaterial_type: "PBMC", metadata: "" },
    { supplier: "CRUK", supplier_identifier: "ID44568121", sanger_tube_barcode: "RCPT_69876", uuid: "e148a834-58c2-11e6-8b77-86f30ca893d3", biomaterial_type: "PBMC", metadata: "" },
    { supplier: "CRUK", supplier_identifier: "ID44568901", sanger_tube_barcode: "RCPT_6744", uuid: "e148a924-58c2-11e6-8b77-86f30ca893d3", biomaterial_type: "PBMC", metadata: "" }]) },
  { name: "Diseased" },
  { name: "Cancer" },
  { name: "NHS" }
])

# Products
Product.create!([
  { name: "Human QC Quality Report" },
  { name: "Extraction" },
  { name: "Library" },
  { name: "GCLP Sequencing" },
  { name: "Index Sequence Capture (ISC)" },
  { name: "Whole Genome Sequencing (WGS)" },
  { name: "Core Exome" },
  { name: "Micro Array" },
  { name: "Fibroblast Line" },
  { name: "Induced Pluripolent Stem Cells (IPS)" }
]);