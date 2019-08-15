class ChangeSystemsToPlatforms < ActiveRecord::Migration[5.2]
  def change
    rename_table :systems, :platforms
  end
end
