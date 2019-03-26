class CreateReleases < ActiveRecord::Migration[5.2]
  def change
    create_table :releases do |t|
      t.integer :system_id
      t.integer :game_id

      t.timestamps
    end
  end
end
