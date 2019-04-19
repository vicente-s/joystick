class AddPlatformLogoIdToSystems < ActiveRecord::Migration[5.2]
  def change
    add_column :systems, :platform_logo_id, :integer
  end
end
