# Install Sequelize and Database Drivers
For PostgreSQL:
npm install sequelize pg pg-hstore
# For MySQL:
npm install sequelize mysql2


# Setting Up Sequelize with CLI for PostgreSQL & MySQL
Sequelize provides a CLI to streamline database management. Follow these steps for a proper setup:
# 1. Install Sequelize and Required Packages
For PostgreSQL:
npm install sequelize pg pg-hstore sequelize-cli
For MySQL:
npm install sequelize mysql2 sequelize-cli
# 2. Initialize Sequelize in Your Project
Run the following command to set up Sequelize in your Node.js project:
npx sequelize-cli init

This will generate the following directory structure:
├── config        // Database configuration  
├── migrations    // Migration files  
├── models        // Model files  
├── seeders       // Seed data files  
└── index.js      // Main application file  


3. Configure Database Connection
Edit the config/config.json file and update it with your database credentials.
For PostgreSQL:
{
  "development": {
    "username": "your_username",
    "password": "your_password",
    "database": "your_database",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
 # 4. Create a Model
Generate a new model using the Sequelize CLI:
npx sequelize-cli model:generate --name User --attributes name:string,email:string
This command will create:
 *  models/user.js (Defines the model structure)
 * migrations/{timestamp}-create-user.js (Handles database migrations)
# 5. Run Migrations
Apply the model structure to the database:
npx sequelize-cli db:migrate

# Sequelize CLI Commands Cheat Sheet
📌 Sequelize CLI Commands Cheat Sheet

# Initialize Sequelize Project
npx sequelize-cli init

# Database Operations
npx sequelize-cli db:create           # Create database
npx sequelize-cli db:drop             # Drop database

# Model and Migration Commands
npx sequelize-cli model:generate --name ModelName --attributes col1:type,col2:type  # Generate a new model and migration
npx sequelize-cli db:migrate          # Run all migrations
npx sequelize-cli db:migrate:undo     # Undo last migration
npx sequelize-cli db:migrate:undo:all # Undo all migrations

# Seeder Commands (Insert Dummy Data)
npx sequelize-cli seed:generate --name seederName   # Generate a new seeder file
npx sequelize-cli db:seed:all                       # Run all seeders
npx sequelize-cli db:seed --seed filename.js        # Run a specific seeder
npx sequelize-cli db:seed:undo                      # Undo last seeder
npx sequelize-cli db:seed:undo:all                  # Undo all seeders

# Miscellaneous Commands
npx sequelize-cli --version   # Check Sequelize version
npx sequelize-cli help        # List all available commands

🛠 Quick Setup Steps
1️⃣ Initialize Sequelize: npx sequelize-cli init
2️⃣ Configure `config/config.json` for DB credentials
3️⃣ Create Models: npx sequelize-cli model:generate --name User --attributes name:string,email:string
4️⃣ Run Migrations: npx sequelize-cli db:migrate
5️⃣ Seed Data: npx sequelize-cli seed:generate --name demo-users → npx sequelize-cli db:seed:all


