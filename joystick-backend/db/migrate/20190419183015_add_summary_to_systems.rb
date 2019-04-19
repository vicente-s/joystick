class AddSummaryToSystems < ActiveRecord::Migration[5.2]
  def change
    add_column :systems, :summary, :string
  end
end
