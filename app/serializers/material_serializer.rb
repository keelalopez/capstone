class MaterialSerializer < ActiveModel::Serializer
  attributes :id, :name, :division, :installation_date, :subcontractor, :notes, :submittal_status
end
